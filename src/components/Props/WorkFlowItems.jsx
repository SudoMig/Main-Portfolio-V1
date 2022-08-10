const WorkFlowItems = (props) => {
  const callback = function (entries) {
    entries.forEach((entry) => {
      console.log(entry);

      if (entry.isIntersecting) {
        entry.target.classList.add('motion-safe:animate-fade-side');
      } else {
        entry.target.classList.remove('motion-safe:animate-fade-side');
      }
    });
  };

  const observer = new IntersectionObserver(callback);

  const targets = document.querySelectorAll('.js-show-on-scroll');
  targets.forEach(function (target) {
    target.classList.add('opacity-0');
    observer.observe(target);
  });

  return (
    <div className='flex flex-col md:flex-row justify-center md:pb-4'>
      <p className='pr-4 pb-2 md:pb-0 text-xl text-gray-200 font-bold'>{props.num}</p>
      <div className='flex border border-gray-800 bg-black text-white js-show-on-scroll'>
        <img className='w-28 md:w-1/4' src={props.src} alt='' />
        <div className='flex flex-col justify-center px-4'>
          <p className='font-bold text-PrimaryBlue text-xl py-1 '>{props.title}</p>
          <p className='text-sm py-1'>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

/*
    <div className='flex justify-center w-full md:w-full lg:w-3/6 mx-auto my-8 lg:my-12 '>
      <div className='mr-2 lg:mr-4 text-white text-sm sm:text-lg'>
        {props.num}
      </div>
      <div className='flex border border-gray-800 bg-black w-full h-[8.9rem] md:h-40 lg:h-48 js-show-on-scroll'>
        <div>
          <img className='w-[28rem] h-[8.7812rem] md:w-[10rem] md:h-full lg:w-[11.9rem] lg:h-[11.9rem]' src={props.src} alt='' />
        </div> 
        <div className='text-white'>
          <div className='font-bold text-PrimaryBlue text-lg sm:text-xl pl-2 pt-1 md:pl-4 md:pt-4 lg:pl-8  lg:pt-6'>
            {props.title}
          </div>
          <p className='box-content w-[18.5rem] md:w-[34rem] lg:w-[42rem] text-sm sm:text-lg ml-2 mt-2 md:ml-4 md:mt-2 lg:h-12 lg:mt-4 lg:ml-8'>
            {props.description}
          </p>
        </div>
      </div>
    </div>
*/

export default WorkFlowItems;
