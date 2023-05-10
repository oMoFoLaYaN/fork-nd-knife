import React, { useRef } from 'react';
import Button from './Button'
import Input from './Input'
import Textarea from './Textarea'
import Section from './Section';

const Reservation = () => {
  return (
    <Section id="bookTable" className="bg-fola-50 dark:bg-fola-950 " title='reservation' subtitle='Secure your spot with a click'>
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
            <Button className={`dark:bg-fola-600 dark:hover:bg-fola-700 px-5 py-2.5 bg-fola-500 hover:bg-fola-600 rounded-lg`}>
              Submit
            </Button>
          </div>
        </form>

    </Section>

  )
}

export default Reservation