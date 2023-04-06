import React from 'react';

const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={`text-white focus:ring-4 focus:outline-none focus:ring-fola-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:focus:ring-fola-800 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
