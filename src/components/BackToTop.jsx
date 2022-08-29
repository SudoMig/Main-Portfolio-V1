import React, {useState, useEffect} from 'react'
import {FaAngleDoubleUp} from 'react-icons/fa'

const BackToTop = () => {
  
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);
      
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
  
    return (
      <>
    
          {showButton && (
          <button onClick={scrollToTop} className="z-50 fixed md:right-12 md:bottom-12 border-2 border-blue-600 bg-transparent w-10 h-16 text-xl text-slate-100 font-semibold flex justify-center items-center text-center rounded-full hover:bg-blue-600 transition duration-300 ease-out">
            <FaAngleDoubleUp/>
          </button>
        )}
      </>
    );
  };

  export default BackToTop;