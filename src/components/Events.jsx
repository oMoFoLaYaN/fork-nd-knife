import { eventData } from '../constants'

const Events = () => {
  return (
    <section id="events" className="events">
{eventData.map((event, index) => (
  <div key={index} className="container">
    <div className="section-title">
      <h2>{event.title}</h2>
      <p>{event.subtitle}</p>
    </div>
    {event.events.map((event, index) => (
    <div key={index} className="events-slider swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="row event-item">
            <div className="col-lg-6">
              <img src={event.img} className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3>{event.title}</h3>
              <div className="price">
                <p>
                  <span>{`${event.price}`}</span>
                </p>
              </div>
              {event.details.map((detail, index) => (
              <div key={index}>
              <p className="fst-italic">{detail.description}</p>
              <ul>
                <li>
                  <i className="bi bi-check-circled" />{detail.list.li}</li>
              </ul>
              <p>{detail.conclusion} </p>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination" />
    </div>
    ))}
  </div>
))}
</section>

  )
}

export default Events