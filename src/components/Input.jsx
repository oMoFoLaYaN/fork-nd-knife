import React, { useState } from 'react';

function Input(props) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className="relative z-0 w-full mb-6 md:mb-0 group">
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        className="block  rounded-lg py-2.5 px-2 w-full text-sm text-fola-990 bg-transparent border-2 border-fola-950/20 appearance-none dark:text-white dark:border-fola-100/20 dark:focus:border-fola-500 focus:outline-none focus:ring-2 ring-fola-200/60 dark:ring-fola-100/50 focus:border-fola-500 peer"
        placeholder=" "
        required={props.required}
        value={value}
        onChange={handleChange}
      />
              <label
                htmlFor={props.id}
                className="peer-focus:font-medium absolute text-sm text-fola-900 dark:text-fola-100 duration-300 transform -translate-y-6 scale-75 top-3 peer-focus:px-2 px-2 left-3 bg-fola-50 dark:bg-fola-950 peer-focus:bg-fola-50 dark:peer-focus:bg-fola-950 z-50 origin-[0] peer-focus:left-2 peer-focus:text-fola-600 peer-focus:dark:text-fola-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                {props.label} 
              </label>
    </div>
  );
}

export default Input;
