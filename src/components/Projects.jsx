import React, { Component} from 'react';
import Container from '../sections/Container';
import ProjectsItems from './Props/ProjectsItems';
import ProjectData from './Data/ProjectData'
// import { CarouselData } from './Data/CarouselData';
// import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
// import Swipe from 'react-easy-swipe';


function Projects() {


return (
  <>
  <div className='bg-black pb-48'>
    <Container>
      <div className='pt-24 text-lg text-white font-base'>Design Templates &</div>
    <div className='text-blue-600 text-3xl font-semibold' >Recent Projects</div>
     <div className='flex flex-col md:flex-row md:justify-evenly items-center space-x-6'>
     { ProjectData.map((items, index) => (
        <ProjectsItems
        key={index}
        index={index}
        src={items.src}
        title={items.title}
        content={items.content} />
      ))}
     </div>
      
    </Container>
  </div>
  </>
)

}


export default Projects;











































// OLD CAROUSEL

//   class Carousel extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         currentSlide: 0,
//       };
//     }

//     nextSlide = () => {
//       let newSlide =
//         this.state.currentSlide === CarouselData.length - 1
//           ? 0
//           : this.state.currentSlide + 1;
//       this.setState({ currentSlide: newSlide });
//     };

//     prevSlide = () => {
//       let newSlide =
//         this.state.currentSlide === 0
//           ? CarouselData.length - 1
//           : this.state.currentSlide - 1;
//       this.setState({ currentSlide: newSlide });
//     };

//     setCurrentSlide = (index) => {
//       this.setState({ currentSlide: index });
//     };

//     render() {
//       return (
//         <div className='bg-black border-2 pb-48'>
//           <Container>
//             <div>
//               <div className='text-white pt-36 pl-16 mb-24'>
//                 <div className='text-xl'>
//                   My Work
//                   <div className='font-semibold text-PrimaryBlue text-3xl'>
//                     Recent Website Templates
//                   </div>
//                 </div>
//               </div>
//               <div className='mt-8 flex justify-center'>
//                 <div className=''></div>
//                 <div className='max-w-lg h-72 flex overflow-hidden relative'>
//                   <Swipe
//                     onSwipeLeft={this.nextSlide}
//                     onSwipeRight={this.prevSlide}
//                   >
//                     {CarouselData.map((slide, index) => {
//                       return (
//                         <img
//                           src={slide.image}
//                           alt='This is a carousel slide'
//                           key={index}
//                           className={
//                             index === this.state.currentSlide
//                               ? 'block w-full h-auto object-cover'
//                               : 'hidden'
//                           }
//                         />
//                       );
//                     })}
//                     <AiOutlineLeft
//                       onClick={this.prevSlide}
//                       className='absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer'
//                     />

//                     <AiOutlineRight
//                       onClick={this.nextSlide}
//                       className='absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer'
//                     />
//                   </Swipe>
//                   <div className='absolute w-full flex justify-center bottom-0'>
//                     {CarouselData.map((element, index) => {
//                       return (
//                         <div
//                           className={
//                             index === this.state.currentSlide
//                               ? 'h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer'
//                               : 'h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer'
//                           }
//                           key={index}
//                           onClick={() => {
//                             this.setCurrentSlide(index);
//                           }}
//                         ></div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Container>
//         </div>
//       );
//     }
//   }


// export default Carousel;
