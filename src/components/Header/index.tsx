import styles from "./styles.module.scss"

import { IoMdArrowDropdown } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { MdAddShoppingCart } from 'react-icons/md';


export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/gobeyond_logo.png" alt="Go Beyond Shop" />
        <nav>
          <a href="">Home</a>
          <a href="">Categoria 1 <IoMdArrowDropdown /></a>
          <a href="">Categoria 2 <IoMdArrowDropdown /></a>
          <a href="">Contato </a>
        </nav>
        <form action="">
          <input type="text" placeholder="O que você está procurando ?"/>
          <button><BsSearch /></button>
        </form>
        <div>
          <a href=""><FaRegUser /> Minha Conta</a>
          <a href=""><MdAddShoppingCart /></a>
        </div>
      </div>
    </header>
  )
}