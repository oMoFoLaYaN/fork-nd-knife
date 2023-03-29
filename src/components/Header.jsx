import React from "react";
import { navLinks } from "../constants";
import { layout } from "../style";
import Theme from "./Theme";
import Button from "./Button";

const Header = () => {
  return (
    <header id="header" className="transition-all duration-500 px-0 py-2 border-b border-solid border-b-neutral-800 top-10 bg-zinc-800 bg-opacity-60 fixed z-50 inset-x-0 flex items-center">
      <div className={` ${layout.container} flex items-center lg:justify-between`}>
        <h1 className="text-3xl leading-none font-light tracking-normal uppercase m-0 p-0 font-sans mr-auto lg:mr-0">
          <a href="index.html" className="text-white font-display">Fork nd Knife</a>
        </h1>
        <nav id="navbar" className="relative hidden lg:flex flex-wrap items-center justify-between px-0 py-2 lg:order-0">
          {navLinks.map((nav) => (
          <ul key={nav.id} className="flex items-center m-0 p-0">
            <li className="relative">
              <a className="flex items-center justify-between whitespace-nowrap duration-300 text-sm pl-[30px] pr-0 py-2.5 text-white hover:text-amber-200" href={`#${nav.id}`}>
               {nav.title}
              </a>
            </li>
            
          </ul>
          ))}
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        <div className=" hidden lg:flex">
        <Button name="buy"/>
        </div>
        <Theme/>
      </div>
    </header>
  );
};

export default Header;


