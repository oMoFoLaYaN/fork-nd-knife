import { layout } from "../style"
import { contacts } from "../constants"
import Input from './Input'
import Textarea from './Textarea'
import Button from './Button'

const Contact = () => {
  return (
    <section id="contact" className="contact bg-fola-50 dark:bg-fola-950">
      <div className={layout.container}>
        <div className="pb-10">
          <h2 className={layout.sectionTitle}>contact</h2>
          <p className={layout.sectionSubtitle}>Get in touch with us!</p>
        </div>
      </div>
      <div >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.5179237457787!2d4.520582915216858!3d7.518345294577285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103830df3737c8a9%3A0x62755a792d6a365b!2sObafemi%20Awolowo%20University!5e0!3m2!1sen!2sng!4v1681177321285!5m2!1sen!2sng"
          style={{ border: 0, width: "100%", height: 350 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

      </div>
      <div className={layout.container}>
        <div className={`grid grid-cols-1 lg:grid-cols-3 md:gap-6 mt-12`}>
          <div className="w-full col-span-1">
            <div className="w-full">
              {contacts.map((contact, index) => (
                <div key={index} className={index === 0 ? "mt-0" : "mt-10"}>
                  <i className={`${contact.icon} text-2xl text-fola-950 dark:text-fola-50 float-left w-11 h-11 flex justify-center items-center transition-all duration-300 ease-in-out`} />
                  <h4 className="text-lg text-fola-950 dark:text-fola-50 font-medium mb-[5px] pl-[60px] pr-0 py-0 capitalize">{`${contact.id}:`}</h4>
                  <p className="text-sm text-[#bab3a6] mb-0 pl-[60px] pr-0 py-0">{contact.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full mt-12 lg:mt-0 col-span-2">
            <form
              action=""
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                <Input
                  type="text"
                  name="conName"
                  id="conName"
                  required
                  label="Name"
                />
                <Input
                  type="email"
                  name="conEmail"
                  id="conEmail"
                  required
                  label="Email"
                />
              </div>
              <div className="mt-0 md:mt-6">
                <Input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  label="Subject"
                />
                <Textarea
                  type="text"
                  name="conMessage"
                  id="conMessage"
                  required
                  defaultValue=''
                  label="Message"
                />
              </div>

              <div className="text-center">
                <Button className={`dark:bg-fola-600 dark:hover:bg-fola-700 bg-fola-500 hover:bg-fola-600 `}>
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Contact