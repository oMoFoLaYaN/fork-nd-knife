import { gallery } from '../constants'
import { layout } from '../style'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Mousewheel, Keyboard } from "swiper";

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
    <div className={layout.container}>
      <div className="pb-10">
        <h2 className={layout.sectionTitle}>Gallery</h2>
        <p className={layout.sectionSubtitle}>what's the buzz 'bout us this week?</p>
      </div>
  </div>

  <>
  <div className="swiper gallery-cards">
    <div className="swiper-wrapper">
    <Swiper
            style={{
              "--swiper-pagination-bullet-horizontal-gap": "6px",
              "--swiper-pagination-bottom": "-0px",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: {
                width: 1000,
                slidesPerView: 2,
              },
              1280: {
                width: 1240,
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            keyboard={{
              enabled: true,
            }}
            spaceBetween={30}
            loop={true}
            modules={[Pagination, Mousewheel, Autoplay, Keyboard]}
            className="swiper-wrapper"
          >
      {gallery.map((gallery, index) => (
        <SwiperSlide key={index} className="swiper-slide">
     <div className="swiper-slide">
        <article className="gallery__card">
          <img
            src={gallery.img}
            alt={gallery.img}
            className="gallery__img"
          />
        </article>
      </div>
      </SwiperSlide>
      ))}
      </Swiper>
    </div>
  </div>

  <div className="gallery__overflow">
    <div className="swiper gallery-thumbs">
      <div className="swiper-wrapper">
      <Swiper
            style={{
              "--swiper-pagination-bullet-horizontal-gap": "6px",
              "--swiper-pagination-bottom": "-0px",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: {
                width: 1000,
                slidesPerView: 2,
              },
              1280: {
                width: 1240,
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            keyboard={{
              enabled: true,
            }}
            spaceBetween={30}
            loop={true}
            modules={[Pagination, Mousewheel, Autoplay, Keyboard]}
            className="swiper-wrapper"
          >
      {gallery.map((gallery, index) => (
        <SwiperSlide key={index} className="swiper-slide">
        <div className="swiper-slide">
          <div className="gallery__thumbnail">
            <img
              src={gallery.img}
              alt={gallery.img}
              className="gallery__thumbnail-img"
            />
          </div>
        </div>
        </SwiperSlide>
         ))}
         </Swiper>
      </div>
      

      <div className="swiper-pagination" />
    </div>

  </div>
</>

</section>

  )
}

export default Gallery