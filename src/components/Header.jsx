import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { layout } from "../style";
import Theme from "./Theme";
import Button from "./Button";

const Header = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' } // adjust rootMargin to fine-tune the intersection detection
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  const handleScrollTo = (selector) => {
    const element = document.querySelector(selector);
    const offset = 70;
    const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate - offset, behavior: 'smooth' });
  };

  const [header, setHeader] = useState("top-10");
  const [toggle, setToggle] = useState(false);
  const [color, setColor] = useState("bg-fola-0 dark:bg-fola-990 dark:bg-opacity-60 bg-opacity-60");
  const close = "bi bi-x-lg ";
  const menu = `bi bi-list `;

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return [setHeader("top-10"), setColor("bg-fola-0 dark:bg-fola-990 dark:bg-opacity-60 bg-opacity-60")];
    } else if (window.scrollY > 70) {
      return [
        setHeader("top-0"),
        setColor("bg-fola-0 dark:bg-fola-990 dark:bg-opacity-100 bg-opacity-100"),
      ];
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header id="header" className={`transition-all duration-500 px-0 py-2 border-b border-solid border-b-neutral-800 ${header} ${color} fixed z-50 inset-x-0 flex items-center`}>
      <div className={` ${layout.container} flex items-center lg:justify-between`}>
        <h1 className="text-2xl sm:text-3xl leading-none font-light tracking-normal uppercase m-0 p-0 font-sans mr-auto lg:mr-0">
          <a href="index.html" className="dark:text-white text-fola-990 font-display">Fork nd Knife</a>
        </h1>
        <nav id="navbar" className="relative hidden lg:flex flex-wrap items-center justify-between px-0 py-2 lg:order-0">
          {navLinks.map((nav) => (
            <ul key={nav.id} className="flex items-center m-0 p-0">
              <li className="relative">
                <a className={`flex items-center justify-between whitespace-nowrap duration-300 text-sm pl-[30px] pr-0 py-2.5  
                 dark:hover:text-fola-200 hover:text-fola-800 ${activeSection === nav.id ? 'text-fola-400 dark:text-fola-300 underline decoration-2 decoration-fola-600 underline-offset-2' : 'text-fola-990 dark:text-fola-50'} relative`}
                  onClick={() => handleScrollTo(`#${nav.id}`)}>
                  {nav.title}
                </a>
              </li>

            </ul>
          ))}
          <div className="ml-5 xl:ml-40">
            <Button className={`bg-transparent border-2 border-fola-500 hover:bg-fola-700/40`}>
              Book
            </Button>
          </div>

        </nav>
        <Theme
          className="text-fola-990 dark:text-fola-100 -mr-7 sm:mr-7"
        />
        <i
          className={`lg:hidden w-7 h-7 text-xl text-fola-990 dark:text-fola-100 cursor-pointer ml-10 object-contain ${toggle ? close : menu
            }`}
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${!toggle ? "hidden" : "flex"
            } p-6 bg-neutral-950 inset-0 w-full h-full fixed`}
        >
          <div className='p-10 mt-10 bg-fola-0 dark:bg-fola-950 w-full rounded-lg'>
            <i
              className={`lg:hidden w-7 h-7 text-xl text-fola-990 dark:text-fola-50 cursor-pointer absolute right-10 ${toggle ? close : menu
                }`}
              onClick={() => setToggle(!toggle)}
            />
            {navLinks.map((nav, index) => (
              <ul key={index} className="list-none flex justify-start items-start flex-1 flex-col my-6">
                <li className={`font-poppins font-medium capitalize cursor-pointer text-base`}
                >
                  <a className={`${activeSection === nav.id ? 'text-fola-400 dark:text-fola-300 underline decoration-2 decoration-fola-600 underline-offset-2' : 'text-fola-990 dark:text-fola-50'} relative`} onClick={() => {
                    setToggle(!toggle);
                    handleScrollTo(`#${nav.id}`);
                  }}>{nav.title}</a>
                </li>

              </ul>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


