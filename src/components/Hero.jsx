import React from 'react'
import { layout } from '../style'
import { hero } from '../assets'
import { heroButton } from '../constants'
import Button from './Button'

const Hero = () => {
  return (
    <section id="hero" style={{backgroundImage: `url(${hero})`}} className={`w-full h-screen bg-right bg-cover relative p-0 before:content-[' '] before:bg-black before:bg-opacity-40 before:absolute before:inset-0 flex items-center`}>
  <div
    className={`${layout.container} pt-[110px] md:pt-[98px] relative text-center lg:text-left`}
  >
    <div className={layout.row}>
      <div className="grow-0 shrink-0 basis-auto w-2/3">
        <h1 className="text-5xl font-bold leading-[56px] font-body text-white m-0">
          Welcome to <span className='text-amber-400'>Fork nd Knife</span>
        </h1>
        <h2 className='mt-2 text-xl text-neutral-200'>You can only use fork and knife, Even for water!</h2>
        {heroButton.map((heroBtn) => (
               <div  key={heroBtn.id} className="mt-8">
            <Button
            id={heroBtn.id}
            name={heroBtn.name}
            />
             </div>   
         ))}
         </div>
      <div
        className="col-lg-4 flex items-center justify-center relative">
        <a
          href="https://www.youtube.com/watch?v=u6BOC7CDUTQ"
          className="glightbox play-btn"
        />
      </div>
    </div>
  </div>
</section>

  )
}

export default Hero