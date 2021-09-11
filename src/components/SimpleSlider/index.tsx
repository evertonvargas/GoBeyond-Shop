import { useState } from "react";

import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md"

import styles from "./styles.module.scss"

export function SimpleSlider() {
  const [page, setPage] = useState(1);

  const images = [
    "images/card.png",
    "images/sale.png",
    "images/offers.png",
    "images/million.png",
  ]

  function handlePrev(){
    setPage((page - 1) < 0 ? images.length - 1 : page - 1)
  }

  function handleNext(){
    setPage((page + 1) >= images.length ? 0 : page + 1)
  }

  return (
    <section className={styles.slide}>
      <button className={styles.prev} onClick={handlePrev}><MdKeyboardArrowLeft size={50}/></button>
      <img src={images[page]} alt="" />
      <div>
        <span className={page===0 ? styles.active : null} onClick={()=> setPage(0)}></span>
        <span className={page===1 ? styles.active : null} onClick={()=> setPage(1)}></span>
        <span className={page===2 ? styles.active : null} onClick={()=> setPage(2)}></span>
        <span className={page===3 ? styles.active : null} onClick={()=> setPage(3)}></span>
      </div>
      <button className={styles.next} onClick={handleNext}><MdKeyboardArrowRight size={50}/></button>
    </section>   
  );
}
