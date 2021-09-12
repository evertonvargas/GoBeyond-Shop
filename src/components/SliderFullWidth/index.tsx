import { useState } from "react";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import styles from "./styles.module.scss";

export function SliderFullWidth() {
  const [slide, setSlide] = useState(1);

  const images = [
    "images/card.png",
    "images/sale.png",
    "images/offers.png",
    "images/million.png",
  ];

  function handlePrevSlide() {
    setSlide(slide - 1 < 0 ? images.length - 1 : slide - 1);
  }

  function handleNextSlide() {
    setSlide(slide + 1 >= images.length ? 0 : slide + 1);
  }

  return (
    <section className={styles.slide}>
      <button className={styles.prev} onClick={handlePrevSlide}>
        <MdKeyboardArrowLeft size={50} />
      </button>
      <img src={images[slide]} alt="" />
      <div>
        <span className={slide===0 ? styles.active : null} onClick={()=> setSlide(0)}></span>
        <span className={slide===1 ? styles.active : null} onClick={()=> setSlide(1)}></span>
        <span className={slide===2 ? styles.active : null} onClick={()=> setSlide(2)}></span>
        <span className={slide===3 ? styles.active : null} onClick={()=> setSlide(3)}></span>
      </div>
      <button className={styles.next} onClick={handleNextSlide}>
        <MdKeyboardArrowRight size={50} />
      </button>
    </section>
  );
}
