import { useState, useEffect } from "react";
import { contacts } from "../constants";
import { layout } from "../style";

const Topbar = () => {
  const [topbar, setTopbar] = useState("fixed");
  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return [setTopbar("fixed")];
    } else if (window.scrollY > 70) {
      return [
        setTopbar("scroll")
      ];
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div id="topbar" className={`${topbar} items-center flex z-50 top-0 inset-x-0 h-10 text-sm transition-all duration-500`}>
  <div className={`${layout.container} flex justify-center md:justify-start`} >
    {contacts.filter((top) => top.id === "phone" || top.id === "open").map((top, index) => (
    <div key={top.id} className="flex items-center mx-2">
      <i className={`${top.icon} flex items-center mx-2 text-fola-400`}/>
        <span className="text-white">{top.name}</span>
    </div>
  ))}
  </div>
</div>

  )
  }

export default Topbar