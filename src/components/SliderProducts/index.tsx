//Faltou implementa a lógica dos slides

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { Card } from "../Card";
import { products } from "../../../products";

import styles from "./styles.module.scss";

export function SliderProducts() {
  
  return (
    <section className={styles.slideProducts}>
      <h2>Mais Vendidos</h2>
      <div className={styles.slide}>
        <button>
          <MdKeyboardArrowLeft size={50} />
        </button>
        {products.map((product) => (
          <Card key={product.id} img={product.image} title={product.title} priceOld={product.priceOld} price={product.price} />
        ))}
        <button>
          <MdKeyboardArrowRight size={50} />
        </button>
      </div>
    </section>
  );
}
