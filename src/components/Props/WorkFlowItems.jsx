import '../Styles/WorkFlow.css';

const WorkFlowItems = (props) => {

  let BackgroundImage = '';

  if (props.id === 0) {
    BackgroundImage = 'bg-WorkFlowClient bg-cover bg-center saturate-150';
  } else if (props.id === 1) {
    BackgroundImage = 'bg-WorkFlowWireFrame bg-cover bg-center saturate-200';
  } else if (props.id === 2) {
    BackgroundImage = 'bg-Design bg-cover bg-center saturate-200';
  } else if (props.id === 3) {
    BackgroundImage = 'bg-WorkFlowDevelopment bg-cover bg-center saturate-200';
  } else {
    BackgroundImage = 'bg-WorkFlowHandOff bg-cover bg-center saturate-200';
  }

  return (
    <div className='flex flex-col md:flex-row pb-8'>
      <p className='pr-4 pb-2 md:pb-0 text-xl text-gray-200 font-bold'>
        {props.num}
      </p>
      <div className='js-show-on-scroll flex md:h-40 p-2'>
        <div className='flex'>
          <div className='flex'>
            <div
              id={'workFlowIcon-' + props.index}
              className={`flex justify-center items-center h-32 md:h-full text-white rounded-md ${BackgroundImage}`}
            >
              {props.icon}
            </div>
          </div>
          <div className='flex items-center w-64 md:w-[35rem] pl-4'>
            <div className='flex flex-col'>
              <p className='text-LightGreen text-xl font-semibold pb-2'>
                {props.title}
              </p>
              <p className='box-content w-82 text-base text-white'>
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlowItems;
