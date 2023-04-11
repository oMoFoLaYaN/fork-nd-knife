import React from 'react'
import { layout } from '../style'
import { hero } from '../assets'

const Hero = () => {
  return (
    <section id="home" style={{ backgroundImage: `url(${hero})` }} className={`w-full h-screen bg-right bg-cover relative p-0 before:content-[' '] before:bg-black before:bg-opacity-40 before:absolute before:inset-0 flex items-center`}>
      <div
        className={`${layout.container} pt-[110px] md:pt-[98px] relative text-center lg:text-left`}>
        <div className={`${layout.row}`}>
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-fola-950 hover:text-fola-100 dark:text-fola-50 rounded-full bg-fola-0 dark:bg-fola-990 dark:bg-opacity-60 bg-opacity-60 hover:bg-fola-200/30 dark:hover:bg-fola-800/40" role="alert">
              <span class="text-xs bg-fola-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="sm:text-sm text-[0.75rem] font-medium">Specials avaliable!</span>
              <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </a>
            <h1 class="mb-4 sm:text-4xl text-xl xs:text-3xl font-extrabold tracking-tight leading-none capitalize md:text-5xl lg:text-6xl text-white">Looking to invest in a world of flavor?</h1>
            <p class="mb-8 sm:text-lg text-sm font-normal text-fola-50 lg:text-xl sm:px-16 xl:px-48">Fork nd Knife has got you covered! Come explore the potential of taste and see what mouth-watering opportunities we have in store for you.</p>
            <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a href="#" class="inline-flex justify-center items-center py-3 px-4 sm:py-3 sm:px-5 text-sm sm:text-base font-medium text-center text-white rounded-lg bg-fola-700 hover:bg-fola-800 focus:ring-4 focus:ring-fola-300 dark:focus:ring-fola-900">
                Book Table <i class="bi bi-arrow-down ml-2"></i> </a>
              <a href="#" class="inline-flex justify-center items-center py-2 px-4 sm:py-3 sm:px-5 text-sm sm:text-base font-medium text-center rounded-lg border border-fola-300 hover:bg-fola-100 focus:ring-4 focus:ring-fola-100 text-fola-50 hover:text-fola-800">
                <svg
                  className='w-6 mr-2 fill-fola-600'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 380.721 380.721"
                  xmlSpace="preserve"
                >
                  <path d="M344.308 327.389l.116-.047s-82.888-84.119-91.021-92.252c-5.042-1.487-34.53-14.454-35.041-38.83 12.583-14.418 30.882-28.268 57.907-28.541a.856.856 0 01.256-.035c12.223.331 24.562-3.724 34.38-12.304.685-.604 2.3-2.248 2.3-2.248l67.517-85.089-8.11-8.139-82.597 87.448-9.748-9.777 85.014-85.008-7.146-7.105-85.514 85.531-8.087-8.093 85.525-85.531-7.865-7.849-85.525 85.52-9.586-9.568 88.279-82.818-7.413-7.413-81.354 63.38s-2.95 2.486-3.973 3.521c-11.166 11.16-15.965 26.305-14.361 40.892-1.127 18.503-7.11 32.242-14.871 42.687C61.724 17.344 4.531 33.215 4.531 33.215L0 37.81s101.983 102.262 164.997 165.398c-22.11 22.134-128.7 128.724-128.7 128.724l.011.023c-.093.092-.209.127-.319.243-7.616 7.622-7.587 19.961.012 27.571 7.604 7.61 19.979 7.61 27.565.023.122-.116.157-.244.227-.314l.023.023S170.54 252.808 192.522 230.836c11.525 11.538 19.217 19.241 20.728 20.751 9.341 9.389 103.383 103.43 103.383 103.43h.116c0 .116.104.221.209.268 7.599 7.656 20.077 7.656 27.664 0 7.703-7.588 7.703-20.02 0-27.664-.093-.117-.198-.163-.314-.232z" />
                </svg>
                Check Menu
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}

export default Hero