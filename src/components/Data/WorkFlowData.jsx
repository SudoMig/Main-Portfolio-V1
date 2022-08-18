import Design from '../../Images/Design.png'
import WorkFlowClient from '../../Images/WorkFlowClient.png'
import WorkFlowWireFrame from '../../Images/WorkFlowWireFrame.png'
import WorkFlowDevelopment from '../../Images/WorkFlowDevelopment.png'
import WorkFlowHandOff from '../../Images/WorkFlowHandOff.png'
import {BsCodeSlash, BsArrowsFullscreen} from 'react-icons/bs'
import {RiOpenArmLine, RiPenNibLine} from 'react-icons/ri'
import {MdOutlineDocumentScanner} from 'react-icons/md'
import {AiOutlineFilePdf} from 'react-icons/ai'
import {GrDocumentPdf} from 'react-icons/gr'



const WorkflowData = [
  {
    id: 0,
    num: '01',
    src: WorkFlowClient,
    icon: <RiOpenArmLine className='w-10 h-10'/> ,
    title: 'Client Approach',
    description: ' Pren kalilig inte os bitest. Dåteras pongen mit, bol. Hang kisk antekinat. Antesk infraplan sasamma dipinar. Biodårar besöse.Astronera vavöheten dun.',
  },
  {
    id: 1,
    num: '02',
    src: WorkFlowWireFrame,
    icon: <BsArrowsFullscreen className='w-10 h-10'/> ,
    title: 'WireFrame',
    description: ' Pren kalilig inte os bitest. Dåteras pongen mit, bol. Hang kisk antekinat. Antesk infraplan sasamma dipinar. Biodårar besöse.Astronera vavöheten dun.',
  },
  {
    id: 2,
    num: '03',
    src: Design,
    icon: <RiPenNibLine className='w-10 h-10'/> ,
    title: 'Design',
    description: ' Pren kalilig inte os bitest. Dåteras pongen mit, bol. Hang kisk antekinat. Antesk infraplan sasamma dipinar. Biodårar besöse.Astronera vavöheten dun.',
  },
  {
    id: 3,
    num: '04',
    src: WorkFlowDevelopment,
    icon: <BsCodeSlash className='w-10 h-10'/> ,
    title: 'Developemnt',
    description: ' Pren kalilig inte os bitest. Dåteras pongen mit, bol. Hang kisk antekinat. Antesk infraplan sasamma dipinar. Biodårar besöse.Astronera vavöheten dun.',
  },
  {
    id: 4,
    num: '05',
    src: WorkFlowHandOff,
    icon: <AiOutlineFilePdf className='w-10 h-10'/> ,
    title: 'Project HandOff',
    description: ' Pren kalilig inte os bitest. Dåteras pongen mit, bol. Hang kisk antekinat. Antesk infraplan sasamma dipinar. Biodårar besöse.Astronera vavöheten dun.',
  },
  
];

export default WorkflowData;
