import React from 'react'
import { aboutData } from '../constants'
import {about} from '../assets'
import { layout } from '../style'

const About = () => {
  return (
    <section id="about" className="about lg:bg-fixed">
  <div className={layout.container}>
    <div className={layout.row}>
      <div className="lg:grow-0 lg:shrink-0 lg:basis-auto lg:px-8 lg:w-1/2 order-1 lg:order-2">
        <img className='max-w-full relative border-4 border-solid hover:scale-105 duration-500 border-neutral-100/20' src={about} alt="" />
      </div>

      {aboutData.map((about) => (
      <div key={about.title} className="lg:grow-0 lg:shrink-0 lg:basis-auto lg:w-1/2 pt-6 lg:pt-0 order-2 lg:order-1 text-fola-990 dark:text-fola-0 content">
        <h3 className='font-semibold text-[26px] pb-1 tracking-tighter'>
          {about.title}
        </h3>
        <p className="italic py-2">
          {about.description}
        </p>
        <ul className='p-0 list-none'>
        {about.checks.map((check) => (
          <li key={check.name} className="pb-2.5">
            <i className="bi bi-check-circle text-xl text-fola-600 pr-2" /> 
            {check.name}
          </li>
        ))}
        </ul>
        <p className='pt-4'>
          {about.last}
        </p>
      </div>
      ))}

    </div>
  </div>
</section>

  )
}

export default About