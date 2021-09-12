import { Card } from "../Card";

import styles from "./styles.module.scss";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { products } from "../../../products";

export function SliderProducts() {
  
  return (
    <section className={styles.slideProducts}>
      <h2>Mais Vendidos</h2>
      <div className={styles.slide}>
        <button className={styles.prevSlide} >
          <MdKeyboardArrowLeft size={50} />
        </button>
        {products.map((product) => (
          <Card key={product.id} img={product.image} title={product.title} priceOld={product.priceOld} price={product.price} />
        ))}
        <button className={styles.nextSlide}>
          <MdKeyboardArrowRight size={50} />
        </button>
      </div>
    </section>
  );
}
