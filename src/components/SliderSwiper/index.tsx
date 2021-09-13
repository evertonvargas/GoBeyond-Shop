import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper";

import { Card } from "../Card";
import { products } from "../../../products";

export function SliderSwiper() {
  return (
      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={4}
        breakpoints={{
          1300: {
            slidesPerView: 4
          },
          900: {
            slidesPerView: 3
          },
          500:{
            slidesPerView: 2
          },
          10: {
            slidesPerView: 1
          },
        }}
        navigation
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
  );
}
