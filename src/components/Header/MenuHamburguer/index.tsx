import { useMenu } from "../../../hooks/useMenu";

import styles from "./styles.module.scss"

export function MenuHamburguer() {
  const { menu, handleMenu } = useMenu();

  return (
    <>
      <div className={menu ? styles.menuOn : styles.menuSection}></div>
      <div
        onClick={handleMenu}
        className={menu ? styles.menu : styles.menuToggle}
      >
        <div className={styles.one}></div>
        <div className={styles.two}></div>
        <div className={styles.three}></div>
      </div>
    </>
  );
}
