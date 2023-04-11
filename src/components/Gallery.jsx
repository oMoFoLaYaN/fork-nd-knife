import React from 'react'
import { layout } from "../style";

const Gallery = () => {
  return (
    <section id="gallery" className=" bg-fola-50 dark:bg-fola-950 ">
      <div className={layout.container}>
        <div className="section-title pb-10">
          <h2 className={layout.sectionTitle}>Gallery</h2>
          <p className={layout.sectionSubtitle}>Picture-perfect moments from our amazing restaurant</p>
        </div>
        <div className={`${layout.row}`}>

        </div>
      </div>
    </section>
  )
}

export default Gallery