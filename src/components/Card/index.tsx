import { FaStar } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

import styles from "./styles.module.scss";

interface CardProps{
  img: any;
  title: string;
  price: number;
  priceOld: number;
}

export function Card({ img, title, price, priceOld} : CardProps) {
  return (
    <section className={styles.card}>
      <div>
        <span><p>OFF</p></span>
        <img src={img} alt={title} />
      </div>
      <h3>{title}</h3>
      <div>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p>
        de
        <span>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(priceOld)}
        </span>
      </p>
      <h2>
        por
        <span>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </span>
      </h2>
      <p>ou em 9x de R$ 28,87</p>
      <button type="button">
        <MdAddShoppingCart size={32} color="#FFF" />
        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </section>
  );
}
