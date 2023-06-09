import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Mousewheel, Keyboard } from "swiper";

import Section from "./Section";
import  sanityClient  from "../client";
import { urlFor } from '../client';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(null);
  
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "testimonials"]`
      )
      .then((data) => setTestimonials(data))
      .catch(console.error);

  }, []);
  
  console.log('data', testimonials)
  return (
    <Section id="testimonials" className="" 
    title="Testimonials" 
    subtitle="what's the buzz 'bout us this week?">

        <div
          className="testimonials-slider overflow-hidden">
          <div className="swiper-wrapper"
            >
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
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                1024: {
                  spaceBetween: 20,
                  slidesPerView: 2,
                },
                1280: {
                  spaceBetween: 20,
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
              {testimonials && testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <p className="italic text-fola-950 dark:text-fola-50 relative z-[1] mr-3 ml-1 my-0 pt-5 pb-[60px] px-5 bg-fola-100 dark:bg-fola-950 rounded-xl clay">
                        <i className="bi bi-quote text-fola-700 inline-block left-[-5px] relative text-[26px]" />
                        {testimonial.feedback}
                        <i className="bi bi-quote text-fola-700 text-[26px] inline-block right-[-5px] relative top-2.5 rotate-180" />
                      </p>
                      <img
                        src={urlFor(testimonial.img)}
                        className="w-[90px] h-[90px] rounded-full border-8 dark:border-fola-400/20 border-fola-900/20 border-solid relative z-20 ml-10 mr-0 -mt-10 mb-0"
                        alt={testimonial.name}
                      />
                      <h3 className="text-lg font-semibold text-fola-990 dark:text-fola-0 ml-[45px] mr-0 mt-2.5 mb-[5px]">{testimonial.name}</h3>
                      <h4 className="text-sm text-fola-990/60 dark:text-fola-0/60 ml-[45px] mr-0 my-0">{testimonial.who}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
    </Section>

  )
}

export default Testimonials