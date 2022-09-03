import { Link } from 'react-scroll';
import Container from '../sections/Container';
import { RiDribbbleFill } from 'react-icons/ri';
import { VscGithubInverted } from 'react-icons/vsc';
import { SiLinkedin, SiFreelancer } from 'react-icons/si';
import '../index.css';

const navigation = {
  main: [
    { name: 'About', to: 'AboutUs' },
    { name: 'Process', to: 'ProcessOverview' },
    { name: 'Services', to: 'Services' },
    { name: 'Projects', to: 'Projects' },
    { name: 'Contact', to: 'Contact' },
  ],
  social: [
    {
      name: 'Dribbble',
      href: 'https://dribbble.com/miguel33',
      icon: (props) => (
        <RiDribbbleFill className='w-8 md:w-10 h-8 hover:fill-[#EA4C89] hover:-translate-y-3 transition ease-out duration-300' />
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/miguel-louis-139949238/',
      icon: (props) => (
        <SiLinkedin className='w-8 md:w-10 h-8 hover:fill-[#0A66C2] hover:-translate-y-3 transition ease-out duration-300' />
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/SudoMig',
      icon: (props) => (
        <VscGithubInverted className='w-8 md:w-10 h-8 hover:fill-[#6e5494] hover:-translate-y-3 transition ease-out duration-300' />
      ),
    },
    {
      name: 'Freelancer',
      href: 'https://www.freelancer.com/u/mu97',
      icon: (props) => (
        <SiFreelancer className='w-8 md:w-10 h-8 hover:fill-[#29B2FE] hover:-translate-y-3 transition ease-out duration-300' />
      ),
    },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-black footerBG relative py-16 border-t border-gray-800 md:border-none'>
      <Container>
        <nav className='flex justify-center items-center ' aria-label='Footer'>
          {navigation.main.map((item) => (
            <div key={item.name} className='px-2 md:px-5 py-2'>
              <Link
                smooth={true}
                duration={1000}
                to={item.to}
                className='text-base text-gray-400 hover:text-blue-500 font-semibold transition-all duration-300 ease-in-out cursor-pointer'
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div>
          <div className='flex justify-center items-center mt-6 gap-x-8'>
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noreferrer'
                className='text-gray-400'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon className='h-6 w-6' aria-hidden='true' />
              </a>
            ))}
          </div>

          {/* <div className='flex flex-col justify-center items-center'>
            <span className='flex justify-center items-center text-blue-100 mt-6'></span>
            <img className='object-scale-down w-20' src={require('../Images/HappyMemojiIcon.png')} alt="" />
          </div> */}
          <div>
            <span className='flex justify-center items-center text-gray-400 font-semibold mt-8'>
              Designed & Developed by Miguel Louis
            </span>
          </div>
          {/* <div>
            <p className='text-center font-semibold text-gray-400 mt-8'>
              &copy; {new Date().getFullYear()} Miguel Louis. All rights reserved.
            </p>
          </div> */}
        </div>
      </Container>
    </footer>
  );
}
