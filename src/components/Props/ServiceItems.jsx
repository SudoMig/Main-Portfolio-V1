

const ServiceItems = (props) => {
  

  return (
    <div className='max-w-8xl mx-auto'>
      <div className='flex flex-nowrap w-full md:h-[38rem] lg:h-[42rem]'>
        <div className='group flex-auto md:w-10 lg:w-24 bg-MobileWebsiteDesign bg-cover bg-center transition-all duration-700 hover:grow-[2]'>
          <div className='grid grid-cols-2 pt-6'>
            <div className='col-end-1 md:h-24 lg:-28 w-1 bg-blue-600 rounded-full ml-6 mr-4'></div>
            <div className='box-content lg:w-56 font-semibold text-2xl text-white mt-2'>
              Website Design
            </div>
          </div>
          <div className='box-content md:w-64 lg:w-80 text-white ml-10 invisible group-hover:visible'>
            <div className='mb-4'>{props.paragraph}</div>
            <div>{props.paragraph2}</div>
          </div>
        </div>

        <div className='group flex-auto md:w-10 lg:w-24 bg-WebsiteDevelopment bg-cover bg-center transition-all duration-500 hover:grow-[2]'>
          <div className='grid grid-cols-2 pt-6'>
            <div className='col-end-1 md:h-24 lg:h-28 w-1 bg-blue-600 rounded-full ml-6 mr-4'></div>
            <div className='box-content lg:w-56 font-semibold text-2xl text-white mt-2'>
              Website Development{' '}
            </div>
          </div>
          <div className='box-content md:w-64 lg:w-80 text-white ml-10 invisible group-hover:visible'>
            <div className='mb-4'>
              Plagon dipobel älogi. Pill opol vör även om heterona. Plaligt
              sungar nis, plament. Nobelt vas till ången.{' '}
            </div>
            <div>
              Kyr fåns. Dekaning exode käber prebelt. Krofaska nålingar
              lyfoment. Hexanade bir, vir.{' '}
            </div>
          </div>
        </div>
        <div className='group flex-auto md:w-10 lg:w-24 bg-PersonalizedRequests bg-cover bg-center transition-all duration-700 hover:grow-[2]'>
          <div className='grid grid-cols-2 pt-6'>
            <div className=' col-end-1 md:h-24 lg:h-28 w-1 bg-blue-600 rounded-full ml-6 mr-4'></div>
            <div className='box-content lg:w-56 font-semibold text-2xl text-white mt-2'>
            Personal Request
            </div>
          </div>
          <div className='box-content md:w-64 lg:w-80 text-white ml-10 invisible group-hover:visible'>
            <div className='mb-4'>
              Plagon dipobel älogi. Pill opol vör även om heterona. Plaligt
              sungar nis, plament. Nobelt vas till ången.{' '}
            </div>
            <div>
              Kyr fåns. Dekaning exode käber prebelt. Krofaska nålingar
              lyfoment. Hexanade bir, vir.{' '}
            </div>
          </div>
        </div>
        <div className='group flex-auto md:w-10 lg:w-24 bg-Others bg-cover bg-center transition-all duration-700 hover:grow-[2]'>
          <div className='grid grid-cols-2 pt-6'>
            <div className=' col-end-1 md:h-24 lg:h-28 w-1 bg-blue-600 rounded-full ml-6 mr-4'></div>
            <div className='box-content lg:w-56 font-semibold text-2xl text-white mt-2'>
            Bugs & Fixes
            </div>
          </div>
          <div className='box-content md:w-64 lg:w-80 text-white ml-10 invisible group-hover:visible'>
            <div className='mb-4'>
              Plagon dipobel älogi. Pill opol vör även om heterona. Plaligt
              sungar nis, plament. Nobelt vas till ången.{' '}
            </div>
            <div>
              Kyr fåns. Dekaning exode käber prebelt. Krofaska nålingar
              lyfoment. Hexanade bir, vir.{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItems;



        
        
        