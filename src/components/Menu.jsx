import React, { useState, useEffect } from 'react'
import { filters } from '../constants'
import { layout } from '../style'
import Button from './Button'
import Section from './Section'

import  sanityClient  from "../client";
import { urlFor } from '../client';


const Menu = () => {
  const [filter, setFilter] = useState('all');
  const [active, setActive] = useState(0);


  useEffect(() => {
    setActive(0); // set the active button to the first one
  }, []);

  const filterClick = (category) => {
    setFilter(category === filter ? 'all' : category);
  };

  const [menus, setMenus] = useState(null);
  
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "menus"]`
      )
      .then((data) => setMenus(data))
      .catch(console.error);

  }, []);

  return (
    <>

      <Section id="menu" className="" title='menu' subtitle='check out our forky'>
          <div className={layout.row}>
            <div className="lg:w-full lg:basis-auto mx-auto flex flex-row justify-center">

              <ul id="menu-flters" className='text-right xs:text-center mx-0 my-0 p-0'>
                {filters.map((filter, index) => (
                  <Button key={index} onClick={(event) => { 
                    filterClick(filter.name); 
                    event.preventDefault(); 
                    setActive(index); }} 
                    className={`text-fola-800 ${active === index ? 'bg-fola-400 text-fola-900 dark:text-fola-990' : 'bg-transparent'} ${filter.name === 'all' ? 'bg-fola-500' : ''} px-2 py-1 mx-1 xs:w-[4.5rem] sm:w-[5rem] sm:mx-3 w-[3.2rem] text-[10px] xs:text-sm capitalize border-2 -left-4 sm:left-0 bottom-4 relative rounded-md border-fola-500 hover:bg-fola-700/40`}>
                    {filter.name}
                  </Button>
                ))}
              </ul>

            </div>
          </div>
          <div className={layout.row}>
            {menus && menus.filter((menu) => filter === 'all' || menu.category === filter)
            .map((menu) => (
              <div key={menu.name}
                className="w-full lg:w-5/12 my-8 lg:mx-8 px-5 py-3 h-fit bg-fola-100 dark:bg-fola-950 rounded-xl clay">
                <div className='flex flex-row justify-between'>
                  <img src={urlFor(menu.img)} 
                  className="menu-img w-24 h-24 relative -top-10 right-0 xs:-right-4 shadow-2xl rounded-full shadow-fola-950 dark:shadow-fola-900" 
                  alt={menu.name} />
                  <i className='bi bi-heart-fill px-1 py-3 text-xl cursor-pointer text-red-600 dark:text-red-400'></i>
                </div>
                <div className="menu-content flex flex-row relative -top-5 justify-between">
                  <a href="#" className='font-bold capitalize xs:text-xl text-base font-display relative text-fola-950 dark:text-fola-100'>{menu.name}</a>
                  <span className='font-semibold text-fola-900 dark:text-fola-200 text-sm xs:text-base'>${menu.price}</span>
                </div>
                <p className="menu-ingredients xs:text-xs text-[0.6rem] relative w-[70%] sm:w-full text-fola-800 dark:text-fola-300 -top-5 capitalize">{menu.ingredients}</p>
                <div className='flex flex-row justify-between'>
                  <div className='flex flex-row relative -bottom-4'>
                    <i className='bi bi-star cursor-pointer sm:text-md text-sm text-fola-700 dark:text-fola-500' />
                    <p className='relative ml-1 lg:ml-3 sm:text-md text-sm text-fola-900 dark:text-fola-300'>{menu.rating}</p>
                  </div>

                  <Button className={`dark:bg-fola-600  dark:hover:bg-fola-700 bg-fola-500 hover:bg-fola-600 px-5 py-1 text-fola-900 font-semibold rounded-b-3xl relative -bottom-7 rounded-t-sm border-t-fola-950 dark:border-t-fola-150`}>
                    Eat
                  </Button>
                </div>

              </div>
            ))}
          </div>
      </Section>
    </>

  )
}

export default Menu