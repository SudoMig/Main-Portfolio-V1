import { useEffect, useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react'
import { Link } from 'react-scroll'
import '../index.css';

const SideNav = () => {
  const bodyContent = document.getElementsByClassName('bodyContent');
  const NavBarOpen = 'z-10 absolute right-0 bg-black w-1/2 h-full transition-all translate-x-0 duration-700 ease-in-out '
  const NavBarClose = 'z-10 absolute right-[-12rem] w-1/2 h-full translate-x-20 transition-all duration-700 ease-in-out'
  const NavItems = [
    { name: 'About', to: 'AboutUs' },
    { name: 'Services', to: 'ProcessOverview' },
    { name: 'Process', to: 'Services'},
    { name: 'Hire Me', to: 'Contact'  },
  ];
  
  const [isOpen, setIsOpen] = useState(false);
  const NavBarState = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      bodyContent[0].style.filter = 'blur(5px)';
    } else {
      document.body.style.overflow = 'auto';
      bodyContent[0].style.filter = 'blur(0px)';
    }
  }, [isOpen]);

  return (
    <div>
      <div>
        <div>
          <button className='z-50 absolute right-10 top-10 text-white '>
            <Hamburger toggled={isOpen} toggle={NavBarState}  className='w-10 h-10' />
          </button>
        </div>
        <div
          className={
            isOpen
              ? NavBarOpen
              : NavBarClose
          }
        >
          <div className='flex flex-col items-center text-center h-screen text-white'>
            <div className='flex flex-col py-24'>
              {NavItems.map((item) => {
                return (
                  <Link 
                    to={item.to} 
                    smooth={true} 
                    duration={1000} 
                    className='pt-6 pb-2 font-semibold text-xl hvr-underline-from-left' 
                    key={item.name} 
                    onClick={NavBarState} 
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
