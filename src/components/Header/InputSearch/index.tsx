import { BsSearch } from "react-icons/bs";

import styles from "./styles.module.scss"

export function InputSearch() {
  return (
    <form action="" className={styles.content}>
      <input type="text" placeholder="O que você está procurando ?" />
      <button>
        <BsSearch />
      </button>
    </form>
  );
}
