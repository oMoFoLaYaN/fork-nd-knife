import React from 'react';

const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={`text-fola-990 dark:text-fola-50 focus:ring-4 focus:outline-none focus:ring-fola-300 font-medium text-sm sm:w-auto text-center dark:focus:ring-fola-800 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
