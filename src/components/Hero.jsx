import React from 'react'
import { layout } from '../style'
import { hero, heroed } from '../assets'
import Button from './Button'

const Hero = () => {
  return (
    <section id="hero" style={{backgroundImage: `url(${hero})`}} className={`w-full h-screen bg-right bg-cover relative p-0 before:content-[' '] before:bg-black before:bg-opacity-40 before:absolute before:inset-0 flex items-center`}>
  <div
    className={`${layout.container} pt-[110px] md:pt-[98px] relative text-center lg:text-left`}>
    <div className={`${layout.row}`}>
      <div className="grow-0 shrink-0 basis-auto md:w-2/3 w-full">
        <h1 className="md:text-5xl font-bold md:leading-[56px] font-body text-white m-0 text-[28px] leading-9 lg:mt-32">
          Welcome to <span className='text-fola-400'>Fork nd Knife</span>
        </h1>
        <h2 className='mt-2 md:text-xl text-neutral-200 text-lg leading-6'>You can only use fork and knife, Even for water!</h2>
       
      <div className="m-8 inline-block md:space-x-4 space-y-3">
      <Button className={`dark:bg-fola-600 border-2 border-fola-500 dark:hover:bg-fola-700 bg-fola-500 hover:bg-fola-600 `}>
       Menu
      </Button>
      <Button className={`bg-transparent border-2 border-fola-500 hover:bg-fola-700/40`}>
       Book Table
       </Button>
            </div>   
      </div>

      <div
        className="grow-0 shrink-0 basis-auto md:w-1/3 w-full flex items-center justify-center ">
        <img className='w-64 my-10 lg:w-80' src={heroed} alt="" />  
      </div>
    </div>
  </div>
</section>

  )
}

export default Hero