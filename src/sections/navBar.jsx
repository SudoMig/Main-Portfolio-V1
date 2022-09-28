import '../index.css';
import { Link } from 'react-scroll';
import { useEffect, useState, useRef } from 'react';
import { debounce } from '../utilities/helpers';

function NavBar(props) {
  const NavItems = [
    { name: 'About', to: 'AboutUs' },
    { name: 'Process', to: 'ProcessOverview' },
    { name: 'Services', to: 'Services' },
    { name: 'Hire Me', to: 'Contact' },
  ];

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 300) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);


   
  return (
    <>
      <div>
        <div className='hidden lg:block'>

          
            <nav className='z-50 fixed w-full border-b border-white transition-all duration-500 ease-in' style={{top: visible ? '0' : '-110px'}}>
            <div className='container flex flex-wrap justify-between items-center mx-auto p-10 font-semibold md:text-base text-sm text-white'>
              {/* Logo */}
              <a href='/' className=''>
                Logo
              </a>
              <div className='space-x-6 md:space-x-14 lg:space-x-32'>
                {NavItems.map((item) => {
                  return (
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={1000}
                      className='Desktop-hvr-underline-from-left cursor-pointer'
                      key={item.name}
                      
                    >
                      {item.name}
                    </Link>
                  );
                })}

                
              </div>
            </div>
          </nav>

        </div>
      </div>
    </>
  );
}

export default NavBar;
