import { Link } from 'react-scroll';

const ProjectsItems = (props) => {
  return (
    <div className='flex h-3/5 w-full px-10 pt-24'>
      <div className='rounded-lg w-full'>
        <div className='w-full transition-all duration-700 ease-in-out'>
          <div data-aos='fade-right' data-aos-duration='700'>
            <img
              className='hover:shadow-lg hover:shadow-blue-500/30 hover:scale-125 rounded-lg border-t border-gray-800 transition-all duration-500 ease-in-out '
              src={props.src}
              alt=''
            />
          </div>
          <div
            data-aos='fade-right'
            data-aos-duration='700'
            data-aos-delay='450'
            className='py-14 px-4'
          >
            <div className='text-LightGreen text-xl font-semibold mb-2 '>
              {props.title}
            </div>
            <div className='text-white '>{props.content}</div>
            <button className='bg-opacity-0 border-2 border-DarkerGreen text-LightGreen h-10 w-28 mt-4 font-semibold cursor-default hvr-bounce-to-right !cursor-pointer'>
              <Link to='Contact' smooth={true} duration={1000}>
                View More 
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsItems;
