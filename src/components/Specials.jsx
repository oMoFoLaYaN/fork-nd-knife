import React, { useState } from 'react'
import { dishes } from '../constants'
import { layout } from "../style";
const Specials = () => {
const [activeTab, setActiveTab] = useState(0);

const handleTabClick = (tabIndex) => {
  setActiveTab(tabIndex);
};

  return (
    <section id="specials" className="specials bg-fola-50 dark:bg-fola-950  overflow-hidden">
  <div className={layout.container}>
    <div className="section-title pb-10">
    <h2 className={layout.sectionTitle}>specials</h2>
      <p className={layout.sectionSubtitle}>explore our signature dishes today.</p>
    </div>
    
    <div className="flex flex-wrap mt-0 lg:mx-6">
      <div className="w-full lg:w-fit lg:mr-6">
        <ul className="flex flex-col">
        {dishes.map((dish, index) => (
          <li key={index} className={`duration-300 text-left font-semibold text-base ${activeTab === index ? "bg-fola-500 text-fola-990" : "text-fola-990 dark:text-fola-50 hover:text-fola-700 hover:dark:text-fola-300 "} p-3 pl-5 lg:pr-5 rounded-none lg:border-r-2 lg:border-r-fola-400 border-solid`} onClick={() => handleTabClick(index)}>
            <button className="" href="#">
              {dish.name}
            </button>
          </li>
          ))}
        </ul>
      </div>
      <div className="lg:w-9/12 mt-6 lg:mt-0">
        <div className="my-5">
            {dishes.map((dish, index) => (
          <div key={index} className={`${activeTab === index ? "block" : "hidden"}`} id="">
            <div className={layout.row}>
              <div className="lg:w-8/12 lg:basis-auto details order-2 lg:order-1 lg:-mt-10">
                <h3 className='text-xl font-semibold text-fola-990 dark:text-fola-0 my-5'>{`The ${dish.origin.region}'s treat of ${dish.name} `}</h3>
                <p className="italic text-neutral-600 dark:text-neutral-400 mb-3">{dish.description}</p>
                <p className='text-fola-990 dark:text-fola-0'>{dish.preparation}</p>
              </div>
              <div className="lg:w-1/3 lg:basis-auto text-center order-1 lg:order-2">
                <img src={dish.img} alt=" " className="h-auto max-w-full lg:mx-5 lg:-mt-6 shadow-2xl rounded-full shadow-fola-950 dark:shadow-fola-900"/>
              </div>
            </div>
          </div>
             ))}
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Specials


