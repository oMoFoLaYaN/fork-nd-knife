import Button from "./Button"

const Newsletter = () => {
  return (
    <section className="">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-md sm:text-center">
      <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-fola-950 sm:text-4xl dark:text-fola-50 capitalize">
      Stay in the Loop Today!
      </h2>
      <p className="mx-auto mb-8 max-w-2xl font-light text-fola-990/70 md:mb-12 sm:text-xl dark:text-fola-100/70">
      Don't Miss a Beat - Join Our Inner Circle for Roadmap Updates, Exciting Announcements, and Exclusive Discounts!
      </p>
      <form action="#">
        <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
          <div className="relative w-full">

            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-fola-500 dark:text-fola-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input
              className="block p-3 pl-10 w-full text-sm text-fola-990 bg-fola-50 rounded-lg border border-fola-800 sm:rounded-none sm:rounded-l-lg focus:ring-fola-500 placeholder-fola-900/70 dark:bg-fola-950/50 dark:border-fola-300/50 dark:placeholder-fola-100/70 dark:text-fola-50 dark:focus:ring-fola-500 dark:focus:border-fola-500"
              placeholder="Enter your email"
              type="email"
              id="email"
              required=""
            />
          </div>
          <div className="text-center">
            <Button className={`dark:bg-fola-600 dark:hover:bg-fola-700 bg-fola-500 hover:bg-fola-600 py-[13px] px-5 sm:rounded-none sm:rounded-r-lg `}>
            Subscribe
          </Button>
          </div>
        </div>
        <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
        Your Privacy is Our Priority.{" "}
          <a
            href="#"
            className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
          >
            Read our Privacy Policy
          </a>
          .
        </div>
      </form>
    </div>
  </div>
</section>

  )
}

export default Newsletter
