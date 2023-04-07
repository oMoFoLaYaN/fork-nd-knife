import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="contact">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Contact</h2>
      <p>Contact Us</p>
    </div>
  </div>
  <div data-aos="fade-up">
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.6911373577276!2d3.2456860771756397!3d6.676066925126511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1680832644264!5m2!1sen!2sng"
  width={600}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

  </div>
  <div className="container" data-aos="fade-up">
    <div className="row mt-5">
      <div className="col-lg-4">
        <div className="info">
          <div className="address">
            <i className="bi bi-geo-alt" />
            <h4>Location:</h4>
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>
          <div className="open-hours">
            <i className="bi bi-clock" />
            <h4>Open Hours:</h4>
            <p>
              Monday-Saturday:
              <br />
              11:00 AM - 2300 PM
            </p>
          </div>
          <div className="email">
            <i className="bi bi-envelope" />
            <h4>Email:</h4>
            <p>info@example.com</p>
          </div>
          <div className="phone">
            <i className="bi bi-phone" />
            <h4>Call:</h4>
            <p>+1 5589 55488 55s</p>
          </div>
        </div>
      </div>
      <div className="col-lg-8 mt-5 mt-lg-0">
        <form
          action="forms/contact.php"
          method="post"
          role="form"
          className="php-email-form"
        >
          <div className="row">
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required=""
              />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required=""
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              required=""
            />
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows={8}
              placeholder="Message"
              required=""
              defaultValue={""}
            />
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact