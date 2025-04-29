import { useState } from 'react';
import PlanetsMobileNav from './mobile/PlanetsMobileNav.jsx';
import PlanetsNav from './PlanetsNav.jsx';
import PlanetsRoutes from './PlanetsRoutes.jsx';
import MenuIcon from '../assets/images/icon-hamburger.svg';
import Earth from '../pages/earth.jsx';

const PlanetsFactDashboard = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  const handleMenuClick = () => {
    setToogleMenu((prev) => !prev);
  };

  return (
    <>
      <header className="px-6 py-4 md:px-[3.25rem] md:pt-8 md:pb-[1.6875rem] lg:pr-10 lg:pl-8">
        <div className="flex items-center justify-between md:hidden">
          <h1 className="font-antonio font-weight-medium leading-md text-[1.75rem] tracking-tight">
            THE PLANETS
          </h1>
          <img
            src={MenuIcon}
            onClick={handleMenuClick}
            className="cursor-pointer"
          />
        </div>

        <div className="hidden flex-col items-center gap-10 md:flex lg:flex-row lg:justify-between lg:gap-0">
          <h1 className="font-antonio font-weight-medium leading-md text-[1.75rem] tracking-tight">
            THE PLANETS
          </h1>
          <PlanetsNav />
        </div>
      </header>

      <main>
        <div className="bg-dark-gray h-px w-full"></div>
        {toogleMenu && <PlanetsMobileNav hideMenu={handleMenuClick} />}
        <Earth />
        {!toogleMenu && <PlanetsRoutes />}
      </main>

      <footer></footer>
    </>
  );
};

export default PlanetsFactDashboard;
