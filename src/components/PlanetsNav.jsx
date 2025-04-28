import CreateNavLinks from './CreateNavLinks';

const PlanetsNav = () => {
  const PlanetsData = [
    {
      name: 'Mercury',
      color: '#419EBB',
    },
    {
      name: 'Venus',
      color: '#EDA249',
    },
    {
      name: 'Earth',
      color: '#6f2ed6',
    },
    {
      name: 'Mars',
      color: '#D14C32',
    },
    {
      name: 'Jupiter',
      color: '#D83A34',
    },
    {
      name: 'Saturn',
      color: '#CD5120',
    },
    {
      name: 'Uranus',
      color: '#1ec2a4',
    },
    {
      name: 'Neptune',
      color: '#2d68f0',
    },
  ];
  return (
    <nav className="leading-md flex gap-8 text-[0.75rem] font-bold tracking-wide uppercase">
      {PlanetsData.map((planet, index) => {
        return (
          <CreateNavLinks
            key={index}
            PlanetName={planet.name}
            PlanetColor={planet.color}
          />
        );
      })}
    </nav>
  );
};

export default PlanetsNav;
