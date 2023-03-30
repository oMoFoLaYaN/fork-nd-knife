import React from "react";

const Button = (props) => {
  return (
    <a
      href={`#${props.id}`}
      className="inline-block text-white uppercase text-sm font-medium tracking-normal duration-300 mx-3 px-6 py-2 rounded-md border-2 border-solid border-fola-400 hover:text-white"
    >
      {props.name}
    </a>
  );
};

export default Button;
