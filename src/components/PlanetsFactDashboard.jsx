import { useState } from 'react';
import PlanetsMobileNav from './PlanetsMobileNav.jsx';
import PlanetsRoutes from './PlanetsRoutes.jsx';
import MenuIcon from '../assets/images/icon-hamburger.svg';

const PlanetsFactDashboard = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  const handleMenuClick = () => {
    setToogleMenu((prev) => !prev);
  };

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4">
        <h1 className="font-antonio font-weight-medium leading-md text-[1.75rem] tracking-tight">
          THE PLANETS
        </h1>
        <img
          src={MenuIcon}
          onClick={handleMenuClick}
          className="cursor-pointer md:hidden"
        />
      </header>

      <main>
        <div className="bg-dark-gray h-px w-full"></div>
        {toogleMenu && <PlanetsMobileNav hideMenu={handleMenuClick}/>}
        {!toogleMenu && <PlanetsRoutes />}
      </main>

      <footer></footer>
    </>
  );
};

export default PlanetsFactDashboard;
