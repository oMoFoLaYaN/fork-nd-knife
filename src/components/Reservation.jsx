import React from 'react'
import { layout } from '../style'
import Button from './Button'
import Input from './Input'
import Textarea from './Textarea'

const Reservation = () => {
  return (
    <section id="book-a-table" className="book-a-table bg-fola-50 dark:bg-fola-950 ">
      <div className={layout.container}>
        <div className="pb-10">
          <h2 className={layout.sectionTitle}>Reservation</h2>
          <p className={layout.sectionSubtitle}>Secure your spot with a click</p>
        </div>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            <Input
              type="text"
              name="name"
              id="name"
              required
              label="Name"
            />
            <Input
              type="email"
              name="email"
              id="email"
              required
              label="Email"
            />
            <Input
              type="text"
              name="phone"
              id="phone"
              required
              label="Phone"
            />
            <Input
              type="date"
              name="date"
              id="date"
              required
              label="Date"
            />
            <Input
              type="time"
              name="time"
              id="time"
              required
              label="Time"
            />
            <Input
              type="number"
              name="people"
              id="people"
              required
              label="# of People"
            />

          </div>
          <Textarea
              type="text"
              name="message"
              id="message"
              required
              defaultValue=''
              label="Message"
            />
          <div className="text-center">
          <Button className={`dark:bg-fola-600 dark:hover:bg-fola-700 bg-fola-500 hover:bg-fola-600 `}>
            Submit
          </Button>
          </div>
        </form>
          

      </div>
    </section>

  )
}

export default Reservation