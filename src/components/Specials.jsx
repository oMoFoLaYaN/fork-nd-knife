import React from 'react'
import { specialsData } from '../constants'
import { layout } from "../style";
const Specials = () => {
  return (
    <section id="specials" className="specials overflow-hidden">
  {specialsData.map((special) => (
  <div key={special.title} className={layout.container}>
    <div className="section-title pb-10">
    <h2 className={layout.sectionTitle}>{special.title}</h2>
      <p className={layout.sectionSubtitle}>{special.subtitle}</p>
    </div>
    
    <div className={layout.row}>
      <div className="lg:w1/4 lg:basis-auto">
        <ul className="flex flex-wrap flex-col">
        {special.dishes.map((dish) => (
          <li key={dish.name} className="">
            <a className="duration-300 text-white font-semibold text-base px-4 py-3 rounded-none border-r-2 border-r-fola-400 border-0 border-solid hover:text-fola-400hover:border-fola-400" href="">
              {dish.name}
            </a>
          </li>
          ))}
        </ul>
      </div>
      <div className="lg:w-9/12 mt-6 lg:mt-0">
        <div className="tab-content">
          <div className="tab-pane active show" id="tab-1">
            {special.dishes.map((dish) => (
            <div key={dish.name} className="row">
            
              <div className="col-lg-8 details order-2 order-lg-1">
                <h3>{`The ${dish.origin.region}'s treat of ${dish.name} `}</h3>
                <p className="italic">{dish.description}</p>
                <p>{dish.preparation}</p>
              </div>
              <div className="col-lg-4 text-center order-1 order-lg-2">
                <img src={dish.img} alt=" " className="h-auto max-w-full shadow-2xl rounded-full shadow-fola-950 dark:shadow-fola-900"/>
              </div>
           
            </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  ))}
</section>

  )
}

export default Specials


