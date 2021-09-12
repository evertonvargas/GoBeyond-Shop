import { IoMdArrowDropdown } from "react-icons/io";
import { useMenu } from "../../../hooks/useMenu";

import styles from "./styles.module.scss";

export function Menu() {
  const { menu } = useMenu();

  return (
    <div className={menu ? styles.MenuHamburguer : styles.Container }>
      <nav className={menu ? styles.MenuHamburguer : null}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">
              Categoria 1 <IoMdArrowDropdown />
            </a>
          </li>
          <li>
            <a href="">
              Categoria 2 <IoMdArrowDropdown />
            </a>
          </li>
          <li>
            <a href="">Contato </a>
          </li>
        </ul>
      </nav>       
    </div>
  );
}
