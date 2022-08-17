import { useState, useEffect } from 'react';
import Design from "../../Images/DesignProcess.png";
import Devleopment from "../../Images/DevelopmentProcess.png";
import ClientProcess from "../../Images/ClientProcess.png";

const ProcessImages = ({ image }) => {
  const [source, setSource] = useState(ClientProcess);

  useEffect(() => {
    switch (image) {
      case 0:
        setSource(ClientProcess);
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
