import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useMenu } from "../../../hooks/useMenu";

import styles from "./styles.module.scss";

export function Menu() {
  const { menu } = useMenu();
  const [dropdownCategory1, setDropdownCategory1] = useState(false);
  const [dropdownCategory2, setDropdownCategory2] = useState(false);

  return (
    <div className={menu ? styles.MenuHamburguer : styles.Container}>
      <nav className={menu ? styles.MenuHamburguer : null}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li
            className={styles.drop}
            onMouseOver={() => setDropdownCategory1(true)}
            onClick={() => setDropdownCategory1(!dropdownCategory1)}
          >
            Categoria 1 <IoMdArrowDropdown />
            {dropdownCategory1 && (
              <div onMouseLeave={() => setDropdownCategory1(false)}>
                <a href="">Sapatos Pretos</a>
                <a href="">Blusas</a>
                <a href="">Roupas</a>
              </div>
            )}
          </li>
          <li
            className={styles.drop}
            onMouseOver={() => setDropdownCategory2(true)}
            onClick={() => setDropdownCategory2(!dropdownCategory2)}
          >
            Categoria 2 <IoMdArrowDropdown />
            {dropdownCategory2 && (
              <div onMouseLeave={() => setDropdownCategory2(false)}>
                <a href="">Esporte</a>
                <a href="">Casacos</a>
                <a href="">Vestidos</a>
              </div>
            )}
          </li>
          <li>
            <a href="">Contato </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
