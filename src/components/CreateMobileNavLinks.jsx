import { Link } from 'react-router-dom';
import arrowImg from '../assets/images/icon-chevron.svg';

const CreateMobileNavLinks = ({ planetName, planetColor}) => {
  return (
    <>
      <div className="flex items-center gap-[1.5625rem]">
        <div
          className="h-5 w-5 rounded-full"
          style={{ backgroundColor: planetColor }}></div>
        <Link to={`/${planetName.toLowerCase()}`}>{planetName}</Link>
      </div>
      <img src={arrowImg} />
    </>
  );
};

export default CreateMobileNavLinks;
