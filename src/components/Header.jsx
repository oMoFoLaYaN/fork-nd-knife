import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { layout } from "../style";
import Theme from "./Theme";
import Button from "./Button";

const Header = () => {
  const [header, setHeader] = useState("top-10");
  const [active, setActive] = useState("Home");
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
        <h1 className="text-3xl leading-none font-light tracking-normal uppercase m-0 p-0 font-sans mr-auto lg:mr-0">
          <a href="index.html" className="dark:text-white text-fola-990 font-display">Fork nd Knife</a>
        </h1>
        <nav id="navbar" className="relative hidden lg:flex flex-wrap items-center justify-between px-0 py-2 lg:order-0">
          {navLinks.map((nav) => (
            <ul key={nav.id} className="flex items-center m-0 p-0">
              <li className="relative">
                <a className="flex items-center justify-between whitespace-nowrap duration-300 text-sm pl-[30px] pr-0 py-2.5 text-fola-990 dark:text-white dark:hover:text-fola-200 hover:text-fola-800" href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>

            </ul>
          ))}
          <Button className={`bg-transparent border-2 border-fola-500 hover:bg-fola-700/40`}>
            Book
          </Button>


        </nav>
        <Theme
              color="text-fola-900 dark:text-fola-100"
            />
            <i
              className={`lg:hidden w-7 h-7 text-xl dark:text-fola-100 cursor-pointer ml-10 object-contain ${toggle ? close : menu
                }`}
              onClick={() => setToggle(!toggle)}
            />
                       <div
              className={`${!toggle ? "hidden" : "flex"
                } p-6 bg-neutral-950/90 inset-0 w-full h-full fixed`}
            >
              <div className='p-10 mt-10 bg-fola-0 dark:bg-fola-950 w-full rounded-lg'>
              <i
              className={`lg:hidden w-7 h-7 text-xl text-fola-900 cursor-pointer ml-10 object-contain ${toggle ? close : menu
                }`}
              onClick={() => setToggle(!toggle)}
            />
              <ul className="list-none flex justify-start items-start flex-1 flex-col my-8 mx-8">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium capitalize cursor-pointer text-base ${active === nav.title
                        ? `text-fola-700 dark:text-fola-100 font-semibold underline decoration-fola-700  
                    decoration-double decoration-1 underline-offset-8 duration-700 dark:decoration-fola-100`
                        : `text-fola-700 dark:text-fola-100`
                      } ${index === navLinks.length - 1 ? "mb-0" : "mb-8"}`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            </div>
      </div>
    </header>
  );
};

export default Header;


