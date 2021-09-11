import { Card } from "../Card";
import { useState } from "react";

import styles from "./styles.module.scss";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { products } from "../../../products";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width
  };
}

export function SliderProducts() {
  const [slide, setSlide] = useState(0);

  function handlePrevSlide() {}

  function handleNextSlide() {}

  return (
    <section className={styles.slideProducts}>
      <h2>Mais Vendidos</h2>
      <div className={styles.slide}>
        <button className={styles.prevSlide} onClick={handlePrevSlide}>
          <MdKeyboardArrowLeft size={50} />
        </button>

        {products.map((product) => (
          <Card key={product.id} img={product.image} title={product.title} priceOld={product.priceOld} price={product.price} />
        ))}
        <button className={styles.nextSlide} onClick={handleNextSlide}>
          <MdKeyboardArrowRight size={50} />
        </button>
      </div>
    </section>
  );
}
