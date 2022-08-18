const WorkFlowItems = (props) => {
  const callback = function (entries) {
    entries.forEach((entry) => {
      console.log(entry);

      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-side');
      } else {
        entry.target.classList.remove('animate-fade-side');
      }
    });
  };

  const observer = new IntersectionObserver(callback);

  const targets = document.querySelectorAll('.js-show-on-scroll');
  targets.forEach(function (target) {
    target.classList.add('opacity-0');
    observer.observe(target);
  });

  let BackgroundImage = '';

  if (props.id === 0) {
    BackgroundImage = 'bg-WorkFlowClient bg-cover bg-center w-4/6 md:h-40 md:w-3/12 saturate-150';
  } else if (props.id === 1) {
    BackgroundImage = 'bg-WorkFlowWireFrame bg-cover bg-center w-4/6 md:h-40 md:w-3/12 saturate-200';
  } else if (props.id === 2) {
    BackgroundImage = 'bg-Design bg-cover bg-center w-4/6 md:h-40 md:w-3/12 saturate-200';
  } else if (props.id === 3) {
    BackgroundImage = 'bg-WorkFlowDevelopment bg-cover bg-center w-4/6 md:h-40 md:w-3/12 saturate-200';
  } else {
    BackgroundImage = 'bg-WorkFlowHandOff bg-cover bg-center w-4/6 md:h-40 md:w-3/12 saturate-200';
  }


  return (
    <div className='flex flex-col md:flex-row justify-center md:pb-4'>
      <p className='pr-4 pb-2 md:pb-0 text-xl text-gray-200 font-bold'>
        {props.num}
      </p>
      <div className='flex border border-gray-800 bg-black text-white js-show-on-scroll'>
        <div className={BackgroundImage}>
          <div className='flex justify-center items-center h-full'>{props.icon}</div>
        </div>
        <div className='flex flex-col justify-center px-4'>
          <p className='font-bold text-PrimaryBlue text-2xl py-1 '>
            {props.title}
          </p>
          <p className='text-sm md:text-base py-2 md:py-1'>
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkFlowItems;
