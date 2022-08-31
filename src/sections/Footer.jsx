import { Link } from 'react-scroll';
import Container from '../sections/Container';
import { RiDribbbleFill } from 'react-icons/ri';
import { VscGithub } from 'react-icons/vsc';
import { SiLinkedin, SiFreelancer } from 'react-icons/si';
import '../index.css';

const navigation = {
  main: [
    { name: 'About', to: '#' },
    { name: 'Process', to: '#' },
    { name: 'Services', to: '#' },
    { name: 'Projects', to: '#' },
    { name: 'Contact', to: '#' },
    { name: 'Partners', to: '#' },
  ],
  social: [
    {
      name: 'Dribbble',
      href: '#',
      icon: (props) => (
        <RiDribbbleFill className='w-10 h-7 hover:fill-[#EA4C89] hover:-translate-y-3 transition ease-out duration-300' />
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props) => (
        <SiLinkedin className='w-10 h-7 hover:fill-[#0A66C2] hover:-translate-y-3 transition ease-out duration-300' />
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <VscGithub className='w-10 h-7 hover:fill-[#6e5494] hover:-translate-y-3 transition ease-out duration-300' />
      ),
    },
    {
      name: 'Freelancer',
      href: '#',
      icon: (props) => (
        <SiFreelancer className='w-10 h-7 hover:fill-[#29B2FE] hover:-translate-y-3 transition ease-out duration-300' />
      ),
    },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-black footerBG relative border-2 border-gray-900 py-16'>
      <Container>
        <nav
          className='flex justify-center items-center '
          aria-label='Footer'
        >
          {navigation.main.map((item) => (
            <div key={item.name} className='px-5 py-2'>
              <Link
                href={item.href}
                className='text-base text-blue-100 hover:text-blue-600 transition-all duration-300 ease-in-out cursor-pointer'
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div>
          <div className='flex justify-center items-center mt-8'>
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-gray-400 hover:text-gray-500 px-1'
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
            <p className='mt-8 text-center text-base text-blue-100'>
              Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

//   <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
//   <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
//     {navigation.main.map((item) => (
//       <div key={item.name} className="px-5 py-2">
//         <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
//           {item.name}
//         </a>
//       </div>
//     ))}
//   </nav>
//   <div className="mt-8 flex justify-center space-x-6">
//     {navigation.social.map((item) => (
//       <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
//         <span className="sr-only">{item.name}</span>
//         <item.icon className="h-6 w-6" aria-hidden="true" />
//       </a>
//     ))}
//   </div>
//   <p className="mt-8 text-center text-base text-gray-400">Copyright &copy; {new Date().getFullYear()}, Miguel Louis,  All rights reserved.</p>
// </div>
