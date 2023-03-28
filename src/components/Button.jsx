import React from "react";

const Button = (props) => {
  return (
    <a
      href={`#${props.id}`}
      className="text-white uppercase text-sm font-medium tracking-normal duration-300 ml-4 mr-0 my-0 px-6 py-2 rounded-xl border-2 border-solid border-amber-400 hover:text-white scrollto"
    >
      {props.name}
    </a>
  );
};

export default Button;
