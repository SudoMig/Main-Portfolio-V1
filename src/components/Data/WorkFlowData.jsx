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
      ' The project is assigned. A process overview and forms are sent to collect data and brief the client.',
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
      'Website design is created. The animations and functionality are noted or prototyped.',
  },
  {
    id: 3,
    num: '04',
    icon: <BsCodeSlash className='w-10 h-10' />,
    title: 'Development',
    description:
      'Design is converted to clean and organised code. Clients have a testing phase to ensure website satisfaction.',
  },
  {
    id: 4,
    num: '05',
    icon: <SiFiles className='w-10 h-10' />,
    title: 'Project HandOff',
    description:
      'All corresponding documentation are included in the Project handoff.',
  },
];

export default WorkflowData;
