import { parties } from "../constants";
import { layout } from "../style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Mousewheel, Keyboard } from "swiper";

import "swiper/css/bundle";

const Events = () => {
  return (
    <section id="events" className="events">
      <div className={`${layout.container} relative`}>
        <div className="pb-10">
          <h2 className={layout.sectionTitle}>specials</h2>
          <p className={layout.sectionSubtitle}>
            Host Your Next Event with Us
          </p>
        </div>

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
            {parties.map((party, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className={`${layout.row} event-item`}>
                  <div className="lg:w-5/12 lg:mr-5 lg:basis-auto">
                    <img
                      src={party.img}
                      className="rounded-md"
                      alt={party.title}
                    />
                  </div>
                  <div className="lg:w-5/12 lg:ml-5 lg:basis-auto pt-6 lg:pt-0 text-fola-950 dark:text-fola-50">
                    <h3 className="font-semibold text-[26px] text-fola-500">
                      {party.title}
                    </h3>
                    <div className="text-[26px] font-bold mb-4">
                      <p>
                        <span className="border-b-2 border-b-fola-500 border-solid">{`$${party.price}`}</span>
                      </p>
                    </div>
                    {party.details.map((detail, index) => (
                      <div key={index}>
                        <p className="italic">{detail.description}</p>
                        <ul className=" p-0">
                          {detail.list.map((list, index) => (
                            <li key={index} className="pb-2.5">
                              <i className="bi bi-check-circle text-xl text-fola-500 pr-1" />
                              {list.li}
                            </li>
                          ))}
                        </ul>
                        <p>{detail.conclusion} </p>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Events;
