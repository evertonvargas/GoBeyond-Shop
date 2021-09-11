import { FaStar } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

import styles from "./styles.module.scss";

export function Card() {
  return (
    <section className={styles.card}>
      <div>
        <span><p>OFF</p></span>
        <img src="images/shoes.png" alt="Sapato Floater Preto" />
      </div>
      <h3>Sapato Floater Preto</h3>
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
          }).format(299)}
        </span>
      </p>
      <h2>
        por
        <span>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(259)}
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
