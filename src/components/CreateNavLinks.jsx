import { NavLink, useLocation } from 'react-router-dom';

const CreateNavLinks = ({ PlanetName, PlanetColor }) => {
  const location = useLocation();

  const isActive = location.pathname.includes(`${PlanetName.toLowerCase()}`);

  return (
    <NavLink
      to={`/planets-fact-site/${PlanetName.toLowerCase()}/overview`}
      style={
        isActive
          ? {
              borderBottom: `4px solid ${PlanetColor}`,
            }
          : {}
      }>
      {PlanetName}
    </NavLink>
  );
};

export default CreateNavLinks;
