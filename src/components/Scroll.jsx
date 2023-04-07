import React, { useState, useEffect } from 'react';
import Button from './Button'

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`fixed bottom-4 right-4 z-10 ${isVisible ? 'block' : 'hidden'}`}>
      <Button
        onClick={scrollToTop}
        className="rounded-full text-fola-700 dark:text-fola-500 bg-transparent border-2 border-fola-500 hover:bg-fola-700/40 focus:outline-none focus:ring-2 focus:ring-fola-500 focus:ring-opacity-50"
      >
        <i class="bi bi-arrow-up"></i>
      </Button>
    </div>
  );
};

export default Scroll;
