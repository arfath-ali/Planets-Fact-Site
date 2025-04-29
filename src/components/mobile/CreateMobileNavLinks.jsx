import { Link } from 'react-router-dom';
import arrowImg from '../../assets/images/icon-chevron.svg';

const CreateMobileNavLinks = ({ planetName, planetColor }) => {
  return (
    <Link
      to={`/planets-fact-site/dist/${planetName.toLowerCase()}/overview`}
      className="flex items-center justify-between">
      <div className="flex items-center gap-[1.5625rem]">
        <div
          className="h-5 w-5 rounded-full"
          style={{ backgroundColor: planetColor }}></div>
        <p>{planetName}</p>
      </div>
      <img src={arrowImg} />
    </Link>
  );
};

export default CreateMobileNavLinks;
