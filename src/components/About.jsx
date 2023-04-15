import React from 'react'
import { checks } from '../constants'
import { about } from '../assets'
import { layout } from '../style'

const About = () => {
  return (
    <section id="about" className="about lg:bg-fixed">
      <div className={layout.container} data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="10"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <div className={layout.row}>
          <div className="lg:grow-0 lg:shrink-0 lg:basis-auto lg:px-8 lg:w-1/2 order-1 lg:order-2" data-aos="zoom-in-right">
            <img className='max-w-full relative border-4 border-solid hover:scale-105 duration-500 border-neutral-100/20' src={about} alt="" />
          </div>


          <div className="lg:grow-0 lg:shrink-0 lg:basis-auto lg:w-1/2 pt-6 lg:pt-0 order-2 lg:order-1 text-fola-990 dark:text-fola-0 content" data-aos="zoom-in-left">
            <h3 className='font-semibold text-[26px] pb-1 tracking-tighter'>
              Fork nd Knife, where we offer a unique dining experience that is sure to satisfy your taste buds.
            </h3>
            <p className="italic py-2">
              Our restaurant is the perfect spot for anyone who is looking for exceptional food, friendly service, and a warm, inviting atmosphere.
            </p>
            <ul className='p-0 list-none'>
              {checks.map((check) => (
                <li key={check.name} className="pb-2.5">
                  <i className="bi bi-check-circle text-xl text-fola-600 pr-2" />
                  {check.name}
                </li>
              ))}
            </ul>
            <p className='pt-4'>
              So come and join us at Fork nd Knife, where we are committed to providing exceptional food, service, and ambiance that will keep you coming back for more.
            </p>
          </div>


        </div>
      </div>
    </section>

  )
}

export default About