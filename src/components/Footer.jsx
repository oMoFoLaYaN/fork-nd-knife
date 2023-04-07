import { footerLinks } from "../constants";
import { contacts } from "../constants";
import { layout } from "../style";

const Footer = () => {
  return (
    <footer id="footer" className="bg-fola-50 dark:bg-fola-950">
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
        

          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
        <div className="footer-info">
            <h3>Fork nd Knife</h3>
            {contacts.map((contact, index) => (
              <p key={index}>
              {contact.name}
              <br />

            </p>
            ))}
            <div className="social-links mt-3">
              <a href="#" className="twitter">
                <i className="bi bi-twitter" />
              </a>
            </div>
          </div>
        {footerLinks.map((footerlink, index) => ( 
        <div key={index} className=" footer-links">
          <h4>{footerlink.title}</h4>
          <ul>
          {footerlink.links.map((link, index) => (
            <li key={index}>
              <i className="bx bx-chevron-right" /> <a href={link.link}>{link.name}</a>
            </li>
            ))}
          </ul>
        </div>
        ))}
        </div>

      </div>
    </div>
  </div>



  <div className={layout.container}>
    <div className="copyright">
      © Copyright{" "}
      <strong>
        <span>Restaurantly</span>
      </strong>
      . All Rights Reserved
    </div>
    <div className="credits">Designed by <a href="https://twitter.com/adeayodev" target="_blank">Adeayodev</a>
    </div>
  </div>

</footer>

  )
}

export default Footer