import React from 'react'
import { layout } from '../style'

const Reservation = () => {
  return (
  <section id="book-a-table" className="book-a-table">
  <div className={layout.container}>
    <div className="pb-10">
      <h2 className={layout.sectionTitle}>Reservation</h2>
      <p className={layout.sectionSubtitle}>Book a Table</p>
    </div>
    <form
      action=""
      method="post"
      role="form"
      className="w-full form"
    >
      <div className={layout.row}>
        <div className="md:w-1/2 lg:w-1/3 pb-2">
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Your Name"
            data-rule="minlen:4"
            data-msg="Please enter at least 4 chars"
          />
        </div>
        <div className="md:w-1/2 lg:w-1/3 pb-2 mt-4 lg:mt-0">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Your Email"
            data-rule="email"
            data-msg="Please enter a valid email"
          />
        </div>
        <div className="md:w-1/2 lg:w-1/3 pb-2 mt-4 lg:mt-0">
          <input
            type="text"
            className="form-control"
            name="phone"
            id="phone"
            placeholder="Your Phone"
            data-rule="minlen:4"
            data-msg="Please enter at least 4 chars"
          />
        </div>
        <div className="md:w-1/2 lg:w-1/3 pb-2 mt-4">
          <input
            type="text"
            name="date"
            className="form-control"
            id="date"
            placeholder="Date"
            data-rule="minlen:4"
            data-msg="Please enter at least 4 chars"
          />
        </div>
        <div className="md:w-1/2 lg:w-1/3 pb-2 mt-4">
          <input
            type="text"
            className="form-control"
            name="time"
            id="time"
            placeholder="Time"
            data-rule="minlen:4"
            data-msg="Please enter at least 4 chars"
          />
        </div>
        <div className="md:w-1/2 lg:w-1/3 pb-2 mt-4">
          <input
            type="number"
            className="form-control"
            name="people"
            id="people"
            placeholder="# of people"
            data-rule="minlen:1"
            data-msg="Please enter at least 1 chars"
          />
        </div>
      </div>
      <div className="pb-2 mt-4">
        <textarea
          className="form-control"
          name="message"
          rows={5}
          placeholder="Message"
          defaultValue={""}
        />
      </div>

      <div className="text-center">
        <button type="submit">Book a Table</button>
      </div>
    </form>
  </div>
</section>

  )
}

export default Reservation