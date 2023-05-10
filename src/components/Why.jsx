import React from 'react'
import { reasons } from '../constants'
import { layout } from "../style";
import Section from './Section';

const Why = () => {
  return (
    <Section id="why-us" className="bg-fola-50 dark:bg-fola-950" title="why us" subtitle="reason to count on us">
        <div className={`${layout.row}`}>
          <div className="flex flex-col lg:flex-row">
            {reasons.map((reason) => (
              <div key={reason.why} className="box bg-fola-100 dark:bg-fola-990 clay ease-in-out w-full transition-all duration-500 delay-300 px-[30px] py-[50px] my-3 lg:mx-3 rounded-md hover:pt-[30px] hover:pb-[70px] hover:px-[30px]">
                <i className={`${reason.icon} text-fola-600 block text-[28px] font-bold`} />
                <h4 className='text-2xl font-semibold text-fola-900 dark:text-fola-200 mx-0 my-5 p-0'>{reason.why}</h4>
                <p className='text-fola-990 dark:text-fola-0 text-base m-0 p-0'>{reason.reason}</p>
              </div>
            ))}
          </div>
        </div>
    </Section>

  )
}

export default Why
