import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Card } from "../Card";
import { products } from "../../../products";

import styles from "./styles.module.scss"

export function SliderSwiper() {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={3}
        breakpoints={{
          1300: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          500:{
            slidesPerView: 2,
            spaceBetween: 5,
          },
          10: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Card
              key={product.id}
              img={product.image}
              title={product.title}
              priceOld={product.priceOld}
              price={product.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
