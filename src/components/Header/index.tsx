import { FaRegUser } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

import { useCart } from "../../hooks/useCart"
import { MenuHamburguer } from "./MenuHamburguer";
import { InputSearch } from "./InputSearch";
import { Menu } from "./Menu";

import styles from "./styles.module.scss";

export function Header() {
  const {cart} = useCart();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <MenuHamburguer />
        <img src="/images/gobeyond_logo.png" alt="Go Beyond Shop" />
        <Menu/>
        <InputSearch />
        <div>
          <a href="">
            <FaRegUser /> Minha Conta
          </a>
          <a href="">
            <MdAddShoppingCart />
            <span>{cart}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
