import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

import { formatPrice } from "../../util/format";
import { useCart } from "../../hooks/useCart"

import styles from "./styles.module.scss";

interface CardProps {
  img: any;
  title: string;
  price: number;
  priceOld: number;
}

export function Card({img, title, price, priceOld }: CardProps) {
  const [cartItem, setCartItem] = useState(0);
  const {addCart} = useCart();

  function handleAddCart(){
    setCartItem(cartItem + 1);
    addCart();
  }

  return (
    <section className={styles.card}>
      <div>
        <span>
          <p>OFF</p>
        </span>
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
        <span>{formatPrice(priceOld)}</span>
      </p>
      <h2>
        por
        <span>{formatPrice(price)}</span>
      </h2>
      <p>
        ou em 9x de<span>{formatPrice(price / 9)}</span>
      </p>
      <button type="button" onClick={handleAddCart}>
        <div>
          <MdAddShoppingCart size={22} color="#FFF" /> {cartItem}
        </div>
        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </section>
  );
}
