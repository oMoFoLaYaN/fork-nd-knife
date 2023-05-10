import React from 'react';
import { layout } from "../style";

const Section = ({ id, children, title, subtitle, className, ...rest }) => {
  return (
    <section id={id}  className={`${className}`} {...rest}>
        <div className={layout.container}
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
  
          data-aos-once="true"
        >
          <div className="pb-10">
            <h2 className={layout.sectionTitle}>{title}</h2>
            <p className={layout.sectionSubtitle}>{subtitle}</p>
          </div>
          {children}
        </div>
      </section>
  );
};

export default Section;
