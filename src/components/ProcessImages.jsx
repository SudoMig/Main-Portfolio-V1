import { useState, useEffect } from 'react';
import LaptopPoint from '../Images/LaptopPoint.png';
import Design from '../Images/Design.png';
import Devleopment from '../Images/Development.png';

const ProcessImages = ({ image }) => {
  const [source, setSource] = useState(LaptopPoint);

  useEffect(() => {
    switch (image) {
      case 0:
        setSource(LaptopPoint);
        return;
      case 1:
        setSource(Design);
        return;
      case 2:
        setSource(Devleopment);
        return;
      default:
        return;
    }
  }, [image]);

  return (
    <div>
      <img src={source} alt='' />
    </div>
  );
};

export default ProcessImages;
