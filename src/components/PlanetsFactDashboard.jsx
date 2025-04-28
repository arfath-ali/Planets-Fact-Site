import { useState } from 'react';
import PlanetsMobileNav from './mobile/PlanetsMobileNav.jsx';
import PlanetsNav from './PlanetsNav.jsx';
import PlanetsRoutes from './PlanetsRoutes.jsx';
import MenuIcon from '../assets/images/icon-hamburger.svg';

const PlanetsFactDashboard = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  const handleMenuClick = () => {
    setToogleMenu((prev) => !prev);
  };

  return (
    <>
      <header className="px-6 py-4 md:pt-8 md:pb-[1.6875rem] md:px-[3.25rem] lg:pl-8 lg:pr-10">
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

        <div className="hidden flex-col items-center gap-10 md:flex lg:flex-row lg:gap-0 lg:justify-between">
          <h1 className="font-antonio font-weight-medium leading-md text-[1.75rem] tracking-tight">
            THE PLANETS
          </h1>
          <PlanetsNav />
        </div>
      </header>

      <main>
        <div className="bg-dark-gray h-px w-full"></div>
        {toogleMenu && <PlanetsMobileNav hideMenu={handleMenuClick} />}
        {!toogleMenu && <PlanetsRoutes />}
      </main>

      <footer></footer>
    </>
  );
};

export default PlanetsFactDashboard;
