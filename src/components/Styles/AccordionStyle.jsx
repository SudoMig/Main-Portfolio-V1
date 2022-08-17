import './Accordion.css';
import '../../index.css'


// Process Overview Desktop

export const Activate = '';
export const Inactive = '';
export const PanelOpen = 'box-content w-96 transition-opacity opacity-100 duration-1000 ease-out text-white font-medium';
export const PanelClose = 'transition-opacity opacity-0 box-content w-0 h-4';
export const ActiveImg = 'w-72'
export const InactiveImg = 'hidden'



// Process Overview Mobile

export const activate = 'text-left';
export const inactive = 'text-left';
export const panelOpen = 'box-content w-96 mb-2';
export const panelClose = 'opacity-0 box-content w-0 h-4';
export const activeImg = 'w-full transition-all duration-1000 ease-out'
export const inactiveImg = 'opacity-0 h-0 transition pointer-events-none'


// Services

export const on = ''
export const off = 'pb-20 md:pb-24'
export const openPanel = 'transition-all duration-700'
export const closePanel = 'hidden'