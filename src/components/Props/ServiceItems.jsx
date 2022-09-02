const ServiceItems = (props) => {
  return (
    <div className='max-w-8xl mx-auto'>
      <div className='flex flex-nowrap w-full md:h-[38rem] lg:h-[42rem]'>
        <div className='group flex-auto md:w-10 lg:w-24 bg-MobileWebsiteDesign bg-cover bg-center transition-all duration-700 hover:grow-[2] z-0'>
          <div className='lg:hover:backdrop-blur-sm lg:h-full'>
            <div className='grid grid-cols-2 pt-6'>
              <div className='col-end-1 md:h-24 lg:-28 w-1 bg-blue-600 rounded-full ml-6 mr-4'></div>
              <div className='box-content lg:w-56 font-semibold text-2xl text-white mt-2'>
                Website Design
              </div>
            </div>
            <div className='box-content md:w-64 lg:w-[29rem] text-blue-50 ml-10 opacity-0 group-hover:opacity-100 transition-opacity-100 duration-200 ease-out '>
              <div className='mb-4'>
                The website design is the first thing any user sees. It can,
                serve as a deterrent or an incentive to browse your website. It
                has the possibility of serving several purposes, tailored to the
                client's needs and requirements. Ultimately, it is meant to
                improve the user experience and target a particular audience. A
                quality design goes a long way toward establishing trust and
                professionalism for your company.
              </div>
              <div>
                Every respectable site needs a well designed website. Whether
                you solely need a design template or a website Development, the option is
                yours to choose from.
              </div>
            </div>
          </div>
        </div>

        <div className='group flex-auto md:w-10 lg:w-24 bg-WebsiteDevelopment bg-cover bg-center transition-all duration-700 hover:grow-[2] z-10'>
          <div className='lg:hover:backdrop-blur-sm lg:h-full'>
            <div className='grid grid-cols-2 pt-6'>
              <div className='col-end-1 md:h-24 lg:-28 w-1 bg-blue-600 rounded-full ml-6 mr-4'></div>
              <div className='box-content lg:w-56 font-semibold text-2xl text-white mt-2'>
                Website Development
              </div>
            </div>
            <div className='box-content md:w-64 lg:w-[29rem] text-blue-50 ml-10 opacity-0 group-hover:opacity-100 transition-opacity-100 duration-300 ease-out'>
              <div className='mb-4'>
                I generally develop websites utilising the popular JavaScript
                Framework ReactJS. When developing websites, I ensure to keep
                clean and organised code to reduce bugs and minimise future
                complications. Animations are growing in popularity. This may
                come at the cost of the website's speed. In this instance,
                it&apos;s vital to undertake the respective approach, including
                unidirectional and functional component approach to ensure speed
                optimization in ReactJS.
              </div>
              <div>
                Whether you already have a design available or need one, I will
                gladly develop a quality and affordable website in the
                apropriate frameworks and language .
              </div>
            </div>
          </div>
        </div>

        <div className='group flex-auto md:w-10 lg:w-24 bg-PersonalizedRequests bg-cover bg-center transition-all duration-700 hover:grow-[2] z-20'>
          <div className='lg:hover:backdrop-blur-sm lg:h-full'>
            <div className='grid grid-cols-2 pt-6'>
              <div className='col-end-1 md:h-24 lg:-28 w-1 bg-blue-600 rounded-full ml-6 mr-4'></div>
              <div className='box-content lg:w-56 font-semibold text-2xl text-white mt-2'>
                Personal Request
              </div>
            </div>
            <div className='box-content md:w-64 lg:w-[29rem] text-blue-50 ml-10 opacity-0 group-hover:opacity-100 transition-opacity-100 duration-300 ease-out '>
              <div className='mb-4'>
                I understand that clients may have unique needs and requirements
                that aren&apos;t generally offered. I am happy to accept unique
                website and design related requests that are within my skill
                set.
              </div>
              <div>
                Please do not hesitate to contact me via the contact section
                below for any questions or requests.
              </div>
            </div>
          </div>
        </div>

        <div className='group flex-auto md:w-10 lg:w-24 bg-Others bg-cover bg-center transition-all duration-700 hover:grow-[2] z-30'>
          <div className='lg:hover:backdrop-blur-sm lg:h-full'>
            <div className='grid grid-cols-2 pt-6'>
              <div className='col-end-1 md:h-24 lg:-28 w-1 bg-blue-600 rounded-full ml-6 mr-4'></div>
              <div className='box-content lg:w-56 font-semibold text-2xl text-white mt-2'>
                Bugs & Fixes
              </div>
            </div>
            <div className='box-content md:w-64 lg:w-[29rem] text-blue-50 ml-10 opacity-0 group-hover:opacity-100 transition-opacity-100 duration-300 ease-out '>
              <div className='mb-4'>
                Have bugs been bugging your website for a while? Let me know via
                the contact section below with a brief and detailed description.
              </div>
              <div>
                If it&apos;s within my area of expertise, I will gladly take a
                look and fix it for the experience.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItems;
