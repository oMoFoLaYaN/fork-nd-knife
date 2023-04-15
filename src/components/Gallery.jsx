import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { gallery } from "../constants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Thumbs } from "swiper";

import { layout } from "../style";

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section id="gallery" className=" bg-fola-50 dark:bg-fola-950 ">
      <div className={layout.container}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="10"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-sine"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center">
        <div className="section-title pb-10">
          <h2 className={layout.sectionTitle}>Gallery</h2>
          <p className={layout.sectionSubtitle}>Picture-perfect moments from our restaurant</p>
        </div>
        <div className={`${layout.row}`}>
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs]}
            className="mySwiper2 w-full h-full mb-4"
            data-aos="zoom-in-right"
            data-aos-offset="200"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            {gallery.map((img, index) => (
              <SwiperSlide key={index} className="bg-cover center">
                <img src={img.img} className="rounded-xl w-full" />
              </SwiperSlide>
            ))}


          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="mySwiper"
            data-aos="zoom-in-left"
            data-aos-offset="200"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-sine"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            {gallery.map((img, index) => (
              <SwiperSlide key={index} className={`bg-cover center opacity-60`}>
                <img src={img.img} className="rounded-xl" />
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Gallery