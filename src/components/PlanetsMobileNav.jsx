import CreateMobileNavLinks from './CreateMobileNavLinks.jsx';

const PlanetsMobileNav = ({ hideMenu }) => {
  const Planets = [
    {
      name: 'Mercury',
      color: '#DEF4FC',
    },
    {
      name: 'Venus',
      color: '#F7CC7F',
    },
    {
      name: 'Earth',
      color: '#545BFE',
    },
    {
      name: 'Mars',
      color: '#FF6A45',
    },
    {
      name: 'Jupiter',
      color: '#ECAD7A',
    },
    {
      name: 'Saturn',
      color: '#FCCB6B',
    },
    {
      name: 'Uranus',
      color: '#65F0D5',
    },
    {
      name: 'Neptune',
      color: '#497EFA',
    },
  ];
  return (
    <nav className="leading-md tracking-medium flex flex-col gap-5 px-6 pt-11 pb-[4.1875rem] text-[0.9375rem] font-bold uppercase">
      {Planets.map((planet, index) => {
        return (
          <div key={planet.name} className="flex flex-col gap-5">
            <div
              className="flex items-center justify-between"
              onClick={hideMenu}
              key={`${planet.name}-wrapper`}>
              <CreateMobileNavLinks
                planetName={planet.name}
                planetColor={planet.color}
              />
            </div>

            {index !== Planets.length - 1 && (
              <div
                key={`${planet.name}-divider`}
                className="h-px bg-white opacity-10"></div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default PlanetsMobileNav;
