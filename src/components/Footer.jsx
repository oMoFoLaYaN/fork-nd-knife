import { footerLinks } from "../constants";
import { contacts } from "../constants";
import { layout } from "../style";

const Footer = () => {
  const socials = [
    {
      icon: "twitter",
      link: "https://www.facebook.com/",
    },
    {
      icon: "instagram",
      link: "https://www.twitter.com/",
    },
    {
      icon: "facebook",
      link: "https://www.instagram.com/",
    },
    {
      icon: "linkedin",
      link: "https://www.linkedin.com/",
    },
  ];

  return (
    <footer id="footer" className="bg-fola-50 dark:bg-fola-950 text-sm pt-0 pb-[30px] px-0">
      <div className="footer-top pt-[60px] pb-[30px] px-0 border-t-[#37332a] border-b-[#28251f] border-t border-solid border-b">
        <div className={layout.container}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            <div className="footer-info mb-[30px] text-fola-990 dark:text-fola-50">
              <h3 className="text-2xl leading-none font-light uppercase mt-0 mb-5 mx-0 px-0 py-0.5">Fork nd Knife</h3>
              {contacts.map((contact, index) => (
                <p key={index} className="text-sm leading-6 mb-0">
                  {contact.name}
                  <br />

                </p>
              ))}
              <div className="mt-8">
                {socials.map((social, index) => (
                  <a key={index} href={social.link} className="text-lg inline-block leading-none text-center w-9 h-9 duration-300 mr-1 px-0 py-2 hover:text-fola-900 dark:hover:text-fola-200 hover:no-underline">
                    <i className={`bi bi-${social.icon}`} />
                  </a>
                ))}
              </div>
            </div>
            {footerLinks.map((footerlink, index) => (
              <div key={index} className=" footer-links text-fola-500">
                <h4>{footerlink.title}</h4>
                <ul className="m-0 p-0">
                  {footerlink.links.map((link, index) => (
                    <li key={index} className="flex items-center px-0 pt-2.5">
                      <i className="bi bi-chevron-double-right dark:text-fola-500 text-fola-600 mr-2" /> <a href={link.link} className="text-fola-990 dark:text-fola-50 transition-[0.3s] inline-block leading-none hover:text-fola-800 dark:hover:text-fola-200">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>



      <div className={layout.container}>
        <div className="text-center pt-[30px] dark:text-white text-fola-990">
          © Copyright{" "}
          <strong>
            <span>Fork nd Knife</span>
          </strong>
        </div>
        <div className="text-center text-[13px] dark:text-white text-fola-990 pt-2.5">Designed by <a href="https://twitter.com/adeayodev" target="_blank" className="text-fola-600">Adeayodev</a>
        </div>
      </div>

    </footer>

  )
}

export default Footer