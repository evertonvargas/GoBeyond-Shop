import { FaRegUser } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { InputSearch } from "./InputSearch";
import { Menu } from "./Menu";

import styles from "./styles.module.scss";
import { MenuHamburguer } from "./MenuHamburguer";

export function Header() {

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
          </a>
        </div>
      </div>
    </header>
  );
}
