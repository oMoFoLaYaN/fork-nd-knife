import React from 'react'
import { menuData } from '../constants'
import { layout } from '../style'

const Menu = () => {
  return (
    <>
  <section id="menu" className="menu section-bg">
  {menuData.map((menu) => (
    <div key={menu.title} className={layout.container}>
      <div className="pb-10">
        <h2 className={layout.sectionTitle}>{menu.title}</h2>
        <p className={layout.sectionSubtitle}>{menu.subtitle}</p>
      </div>
      <div className={layout.row}>
        <div className="lg:w-full lg:basis-auto mx-auto flex flex-row justify-center">
        {menu.filters.map((filter) => (
          <ul key={filter.id} id="menu-flters" className='text-center mx-0 my-0 p-0'>
            <li data-filter={filter.id} className="filter-active capitalize cursor-pointer inline-block text-base font-medium leading-none transition-all ease-in-out delay-300 mb-2.5 pt-2 pb-2.5 px-3"><a>{filter.name}</a></li> 
          </ul>
        ))}
        </div>
      </div>
      <div className={layout.row}>
        {menu.menus.map((menu) => (
        <div key={menu.name} className="w-full lg:w-5/12 my-8 lg:mx-8 px-10 py-3 h-44 bg-fola-100 dark:bg-fola-950 rounded-xl">
          <div className='flex flex-row justify-between'>
          <img src={menu.img} className="menu-img w-24 relative -top-10 -right-4 shadow-2xl rounded-full shadow-fola-950 dark:shadow-fola-900 " alt={menu.name}/>
          <i className='bi bi-heart-fill p-3 text-xl text-fola-600 dark:text-fola-500'></i>
          </div>
          <div className="menu-content flex flex-row relative -top-5 justify-between">
            <a href="#" className='font-bold capitalize text-lg font-display relative text-fola-950 dark:text-fola-100'>{menu.name}</a>
            <span className='font-semibold text-fola-900 dark:text-fola-200'>${menu.price}</span>
          </div>
          <p className="menu-ingredients text-xs relative text-fola-800 dark:text-fola-300 -top-5">{menu.ingredients}</p>
          <div className='flex flex-row justify-between'>
          <div className='flex flex-row relative -top-4'>
          <i className='bi bi-star text-md text-fola-700 dark:text-fola-500'/>
          <p className='relative ml-1 lg:ml-3 text-base text-fola-900 dark:text-fola-300'>{menu.rating}</p>
          </div>
          <a href="#" className='px-4 py-1 bg-fola-400 text-fola-900 font-semibold rounded-b-3xl relative top-2'>Eat This</a>
          </div>
          
        </div>
      ))}
      </div>
    </div>
  ))}
  </section>
</>

  )
}

export default Menu