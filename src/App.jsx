import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Topbar, Header, Hero, About, Why, Menu, Specials, Events, Reservation, Testimonials, Gallery, Chefs, Contact, Newsletter, Footer, Scroll } from "./components";

const App = () => {
  const [loading, setLoading] = useState(true);
  
  

 useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);


  AOS.init();
  return (
    <>
      {loading ? (
        <div id="preloader" className="fixed bg-fola-990 flex items-center justify-center z-[9999] inset-0">
<svg className="animate-spin ease-in-out w-16 fill-fola-400" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 380.721 380.721"
	 xml:space="preserve">

<g>
	<path d="M344.308,327.389l0.116-0.047c0,0-82.888-84.119-91.021-92.252c-5.042-1.487-34.53-14.454-35.041-38.83
		c12.583-14.418,30.882-28.268,57.907-28.541c0.046-0.023,0.186-0.035,0.256-0.035c12.223,0.331,24.562-3.724,34.38-12.304
		c0.685-0.604,2.3-2.248,2.3-2.248l67.517-85.089l-8.11-8.139l-82.597,87.448l-9.748-9.777l85.014-85.008l-7.146-7.105
		l-85.514,85.531l-8.087-8.093l85.525-85.531l-7.865-7.849l-85.525,85.52l-9.586-9.568l88.279-82.818l-7.413-7.413l-81.354,63.38
		c0,0-2.95,2.486-3.973,3.521c-11.166,11.16-15.965,26.305-14.361,40.892c-1.127,18.503-7.11,32.242-14.871,42.687
		C61.724,17.344,4.531,33.215,4.531,33.215L0,37.81c0,0,101.983,102.262,164.997,165.398c-22.11,22.134-128.7,128.724-128.7,128.724
		l0.011,0.023c-0.093,0.092-0.209,0.127-0.319,0.243c-7.616,7.622-7.587,19.961,0.012,27.571c7.604,7.61,19.979,7.61,27.565,0.023
		c0.122-0.116,0.157-0.244,0.227-0.314l0.023,0.023c0,0,106.724-106.693,128.706-128.665c11.525,11.538,19.217,19.241,20.728,20.751
		c9.341,9.389,103.383,103.43,103.383,103.43h0.116c0,0.116,0.104,0.221,0.209,0.268c7.599,7.656,20.077,7.656,27.664,0
		c7.703-7.588,7.703-20.02,0-27.664C344.529,327.504,344.424,327.458,344.308,327.389z"/>
</g>
</svg>
          
        </div>
      ) : (
        <>
          <Topbar/>
          <Header/>
          <Hero/>
          <About/>
          <Why/>
          <Menu/>
          <Specials/>
          <Events/>
          <Reservation/>
          <Testimonials/>
          <Gallery/>
          <Chefs/>
          <Contact/>
          <Newsletter/>
          <Footer/>
          <Scroll/>
        </>
      )}
    </>
  );
};

export default App;
