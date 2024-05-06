import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "../app/index.css";

import gallery1 from "../public/image/Gallery/high-angle-shot-beautiful-mountainous-landscape-with-hills-cloudy-sky.jpg";
import gallery2 from "../public/image/Gallery/breathtaking-view-lake-high-carpathian-mountains.jpg";
import gallery3 from "../public/image/Gallery/aleksandr-paramonov-l8LzIWmfZdY-unsplash.jpg";
import { ButtonsSlider } from "./ButtonSlider";

export default function SliderGallery() {
  return (
    <div className="hidden md:block">
      <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        // loopAdditionalSlides={1}
        speed={1500}
        loop={true}
        spaceBetween={24}
        modules={[Navigation, EffectCoverflow]}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1.32,
          slideShadows: true,
        }}
        breakpoints={{
          768: {
            coverflowEffect: {
              rotate: 0,
              stretch: 60,
              depth: 0,
              modifier: 1.32,
              scale: 0.55,
            },
          },

          1280: {
            coverflowEffect: {
              rotate: 0,
              stretch: 120,
              depth: 0,
              modifier: 1.32,
              scale: 0.55,
            },
          },
        }}
      >
        <SwiperSlide>
          <Image src={gallery1} alt="Mountains"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={gallery2} alt="Mountain lake"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={gallery3} alt="Mountain forest"></Image>
        </SwiperSlide>
        <ButtonsSlider />
      </Swiper>
    </div>
  );
}
