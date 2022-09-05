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
      ' The project is discussed and assigned. A workflow overview and questionnaire are sent to collect the data necessary and brief the client.',
  },
  {
    id: 1,
    num: '02',
    icon: <BsArrowsFullscreen className='w-10 h-10' />,
    title: 'WireFrame',
    description:
      ' A wire-frame design is drafted to give the client an idea of the website layout.',
  },
  {
    id: 2,
    num: '03',
    icon: <RiPenNibLine className='w-10 h-10' />,
    title: 'Design',
    description:
      'The website content and colours are added to the design. Thereafter, the animations and website functionality will be noted or prototyped . ',
  },
  {
    id: 3,
    num: '04',
    icon: <BsCodeSlash className='w-10 h-10' />,
    title: 'Development',
    description:
      ' The design is converted to clean and organised code. The client has a testing phase to ensure the website is to their satisfaction.      ',
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
