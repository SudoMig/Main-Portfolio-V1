import { BsCodeSlash, BsArrowsFullscreen } from 'react-icons/bs';
import { RiOpenArmLine, RiPenNibLine } from 'react-icons/ri';
import { MdOutlineDocumentScanner } from 'react-icons/md';
import { SiFiles } from 'react-icons/si';

const WorkflowData = [
  {
    id: 0,
    num: '01',
    icon: <RiOpenArmLine className='w-10 h-10' />,
    title: 'Inital Client',
    description:
      ' The terms and assignment of the project will be agreed upon. Subsequently, the contract and invoice will be sent. A workflow overview and questionaires will be sent to collect the information necessary and brief the client on upcoming steps.',
  },
  {
    id: 1,
    num: '02',
    icon: <BsArrowsFullscreen className='w-10 h-10' />,
    title: 'WireFrame',
    description:
      ' A wire-frame design will be drafted to give the client an idea of the website layout.',
  },
  {
    id: 2,
    num: '03',
    icon: <RiPenNibLine className='w-10 h-10' />,
    title: 'Design',
    description:
      ' Following the wireframe layout, the website content and colours will be added to the design. Thereafter, the animations and website functionality will be noted or prototyped .',
  },
  {
    id: 3,
    num: '04',
    icon: <BsCodeSlash className='w-10 h-10' />,
    title: 'Developemnt',
    description:
      ' The design will be converted to clean and organised code. Website animation and functionality will be added. The client will have a testing phase to ensure the website is behaving according to their satisfaction.',
  },
  {
    id: 4,
    num: '05',
    icon: <SiFiles className='w-10 h-10' />,
    title: 'Project HandOff',
    description:
      ' A project handoff will be provided with all corresponding documentation and any additional requests made by the client.',
  },
];

export default WorkflowData;
