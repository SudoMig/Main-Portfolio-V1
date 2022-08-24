import { useEffect } from 'react';
import Container from '../sections/Container';
import WorkFlowItems from './Props/WorkFlowItems';
import WorkflowData from './Data/WorkFlowData';

const Workflow = () => {
  const callback = function (entries) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('expand');
        entry.target.firstChild.firstChild.className = 'transition-all duration-700 ease-in-out w-32'
      } else {
        entry.target.classList.remove('expand');
        entry.target.firstChild.firstChild.className = 'transition-all duration-700 ease-in-out  w-0'
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback);

    const targets = document.querySelectorAll('.js-show-on-scroll');
    targets.forEach(function (target) {
      // target.classList.add('opacity-0');
      observer.observe(target);
    });
  }, [callback]);

  return (
    <div className=''>
      <div className='radiantWorkFlow w-full'>
        <Container>
          <div>
            <div className='flex justify-left text-white pt-24 pl-4 mb-20 sm:pt-48 sm:pl-16 sm:mb-24'>
              <div className='text-lg sm:text-xl'>
                WorkFlow
                <div className='grid grid-rows-2'>
                  <div className='box-content w-80 text-left font-semibold text-2xl sm:text-3xl pl-10 sm:pl-12'>
                    Overview
                  </div>
                  <div className='bg-PrimaryBlue h-1 w-48 ml-10 ml-12'></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container narrow>
          <div className='flex flex-col md:gap-y-6'>
            {WorkflowData.map((item, index) => (
              <WorkFlowItems
                key={index}
                index={index}
                id={item.id}
                num={item.num}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Workflow;

// hover:flex-auto

// let el = document.getElementById('test-' + index)

// el.className += ' w-32 bg-red-500 h-full transition duration-700 ease-out'
// console.log("TRUE --> " , index)
