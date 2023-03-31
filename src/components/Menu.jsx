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
        <div className="lg:w-full lg:basis-auto flex justify-center">
        {menu.filters.map((filter) => (
          <ul key={filter.id} id="menu-flters" className='text-center mx-0 my-0 p-0 rounded-[50px]'>
            <li data-filter={filter.id} className="filter-active capitalize cursor-pointer inline-block text-base font-medium leading-none transition-all ease-in-out delay-300 mb-2.5 pt-2 pb-2.5 px-3"><a>{filter.name}</a></li> 
          </ul>
        ))}
        </div>
      </div>
      <div className="row menu-container">
        {menu.menus.map((menu) => (
        <div key={menu.name} className="col-lg-6 menu-item filter-starters">
          <img
            src={menu.img}
            className="menu-img w-24"
            alt=""
          />
          <div className="menu-content">
            <a href="#">{menu.name}</a>
            <span>${menu.price}</span>
          </div>
          <div className="menu-ingredients">
            {menu.ingredients}
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