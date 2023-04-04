import { layout } from '../style'

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section-bg">
    <div className={layout.container}>
      <div className="pb-10">
        <h2 className={layout.sectionTitle}>Testimonials</h2>
        <p className={layout.sectionSubtitle}>check out our forky</p>
      </div>
    <div
      className="testimonials-slider swiper"
      data-aos="fade-up"
      data-aos-delay={100}
    >
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="testimonial-item">
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left" />
              Proin iaculis purus consequat sem cure digni ssim donec porttitora
              entum suscipit rhoncus. Accusantium quam, ultricies eget id,
              aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right" />
            </p>
            <img
              src="assets/img/testimonials/testimonials-1.jpg"
              className="testimonial-img"
              alt=""
            />
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
          </div>
        </div>

      </div>
      <div className="swiper-pagination" />
    </div>
  </div>
</section>

  )
}

export default Testimonials