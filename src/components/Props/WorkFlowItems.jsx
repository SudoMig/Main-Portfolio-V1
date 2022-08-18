import WorkflowData from '../Data/WorkFlowData';

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

  let BackgroundImage = '';

  if (props.id === 0) {
    BackgroundImage = 'bg-Design w-28 h-40 bg-center md:w-1/3';
  } else if (props.id === 1) {
    BackgroundImage = 'bg-WorkFlowClient w-28 md:w-1/6';
  } else if (props.id === 2) {
    BackgroundImage = 'bg-WorkFlowWireFrame w-28 md:w-1/6';
  } else if (props.id === 3) {
    BackgroundImage = 'bg-WorkFlowDevelopment w-28 md:w-1/6';
  } else {
    BackgroundImage = 'bg-WorkFlowHandOff w-28 md:w-1/6';
  }

  // WorkflowData.map((image) => {
  //   return (
  //     BackgroundImage = <img className='w-28 md:w-1/6' src={props.src} alt='' key={image.src}/>,
  //     console.log(BackgroundImage)
  //   )
  // })

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
          <p className='font-bold text-PrimaryBlue text-xl py-1 '>
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
