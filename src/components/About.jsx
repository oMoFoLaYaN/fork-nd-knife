import React from 'react'
import { aboutData } from '../constants'
import {about} from '../assets'
import { layout } from '../style'

const About = () => {
  return (
    <section id="about" className="about">
  <div className={layout.container}>
    <div className={layout.row}>
      <div
        className="grow-0 shrink-0 basis-auto w-6/12 order-1 lg:order-2"
      >
        <div className="about-img relative duration-300">
          <div className="absolute w-[60px] h-[60px] z-[1] content-[''] transition-[0.5s] border-l-[5px] border-l-[#cda45e] border-t-[5px] border-t-[#cda45e] border-solid left-5 top-5 hover:scale-[1.03] hover:left-2.5 hover:top-2.5"></div>
          <img className='max-w-full relative border-4 border-solid' src={about} alt="" />
          <div className=" absolute w-[60px] h-[60px] z-[2] content-[''] transition-[0.5s] border-r-[5px] border-r-[#cda45e] border-b-[5px] border-b-[#cda45e] border-solid right-5 bottom-5 hover:scale-[1.03] hover:right-2.5 hover:bottom-2.5"></div>
        </div>
      </div>
      {aboutData.map((about) => (
      <div key={about.title} className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
        <h3>
          {about.title}
        </h3>
        <p className="fst-italic">
          {about.description}
        </p>
        <ul>
        {about.checks.map((check) => (
          <li key={check.name} >
            <i className="bi bi-check-circle" /> 
            {check.name}
          </li>
        ))}
        </ul>
        <p>
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