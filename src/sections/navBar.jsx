import SideNav from './SideNav';
import '../index.css';
import {Link } from 'react-scroll'



function navBar(props) {
  return (
    <>
      <div>
        <div className='hidden lg:block'>
          <nav className='z-50 absolute w-full border-b border-white '>
            <div className='container flex flex-wrap justify-between items-center mx-auto p-10 font-semibold md:text-base text-sm text-white'>
              {/* Logo */}
              <a href='/' className=''>
                Logo
              </a>
              <div className='space-x-6 md:space-x-14 lg:space-x-32'>
                {/* About */}
               
                <Link to='AboutUs' smooth={true} duration={1000} className='Desktop-hvr-underline-from-left cursor-pointer'>
                  About
                </Link>
              
                {/* Process */}
                <Link to='ProcessOverview' smooth={true} duration={1000} className='Desktop-hvr-underline-from-left cursor-pointer'>
                  Process
                </Link>
                {/* Services */}
                <Link to='Services' smooth={true} duration={1000} className='Desktop-hvr-underline-from-left cursor-pointer'>
                  Services
                </Link>
                 {/* Projects */}
                 <Link to='Projects' smooth={true} duration={1000} className='Desktop-hvr-underline-from-left cursor-pointer'>
                  Projects
                </Link>
                {/* Hire Me */}
                <Link to='Contact' smooth={true} duration={1000} className='Desktop-hvr-underline-from-left cursor-pointer'>
                  Hire Me
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default navBar;
