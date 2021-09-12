import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

import styles from "./styles.module.scss";

export function Header() {
  const [menu, setMenu] = useState(false);

  function handleTeste() {
    setMenu(!menu);
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={menu ? styles.menuOn : styles.menuSection}></div>
        <div
          onClick={handleTeste}
          className={menu ? styles.menu : styles.menuToggle}
        >
          <div className={styles.one}></div>
          <div className={styles.two}></div>
          <div className={styles.three}></div>
        </div>
        <img src="/images/gobeyond_logo.png" alt="Go Beyond Shop" />
        <nav className={menu ? styles.navOn : null}>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">
                Categoria 1 <IoMdArrowDropdown />
              </a>
            </li >
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
        <form action="">
          <input type="text" placeholder="O que você está procurando ?" />
          <button>
            <BsSearch />
          </button>
        </form>
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
