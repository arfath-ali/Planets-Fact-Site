import { useState } from 'react';
import IconSource from '../assets/images/icon-source.svg';
import PlanetJupiterImg from '../assets/images/planet-jupiter.svg';
import JupiterStructureImg from '../assets/images/planet-jupiter-internal.svg';
import JupiterSurfaceImg from '../assets/images/geology-jupiter.png';
import MobileTabs from '../components/MobileTabs.jsx';
import Tabs from '../components/Tabs.jsx';
import PlanetsStats from '../components/PlanetStats.jsx';

const Jupiter = () => {
  const [activeTab, setActiveTab] = useState('OVERVIEW');

  const changeTab = (ButtonLabel) => {
    setActiveTab(ButtonLabel);
  };

  return (
    <>
      <div className="flex justify-between px-6 md:hidden">
        <MobileTabs
          activeTabHighlight={'#D83A34'}
          setActiveTab={changeTab}
          activeTab={activeTab}
        />
      </div>

      <div className="bg-dark-gray h-px w-full md:hidden"></div>

      {activeTab === 'OVERVIEW' && (
        <div className="px-6 pt-16 pb-7">
          <div>
            <img
              src={PlanetJupiterImg}
              className="mx-auto h-[10.8125rem] w-[10.8125rem]"
            />
          </div>

          <div className="mt-[4.1875rem] flex flex-col items-center gap-2.5">
            <h1 className="font-antonio font-weight-medium leading-xl text-[2.5rem] tracking-tight">
              JUPITER
            </h1>
            <p className="leading-md mt-[0.375rem] cursor-text text-center text-[0.9187rem]">
              Jupiter is the fifth planet from the Sun and the largest in the
              Solar System. It is a gas giant with a mass two and a half times
              that of all the other planets in the Solar System combined, but
              less than one-thousandth the mass of the Sun.
            </p>

            <div className="text-light-gray leading-md flex items-center">
              <p className="text-[0.875rem]">Source :</p>
              <a
                href="https://en.wikipedia.org/wiki/Jupiter"
                target="_blank"
                className="tracking-base mr-2 ml-1 text-[0.6875rem] font-bold underline hover:cursor-pointer">
                Wikipedia
              </a>
              <img src={IconSource} alt="Icon Source" />
            </div>

            <div className="hidden flex-col md:flex">
              <Tabs />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'STRUCTURE' && (
        <div className="px-6 pt-16 pb-7">
          <div>
            <img
              src={JupiterStructureImg}
              className="mx-auto h-[10.8125rem] w-[10.8125rem]"
            />
          </div>

          <div className="mt-[4.1875rem] flex flex-col items-center gap-2.5">
            <h1 className="font-antonio font-weight-medium leading-xl text-[2.5rem] tracking-tight">
              JUPITER
            </h1>
            <p className="leading-md mt-[0.375rem] cursor-text text-center text-[0.9187rem]">
              When the Juno arrived in 2016, it found that Jupiter has a very
              diffuse core that mixes into its mantle. A possible cause is an
              impact from a planet of about ten Earth masses a few million years
              after Jupiter's formation, which would have disrupted an
              originally solid Jovian core.
            </p>

            <div className="text-light-gray leading-md flex items-center">
              <p className="text-[0.875rem]">Source :</p>
              <a
                href="https://en.wikipedia.org/wiki/Jupiter#Internal_structure"
                target="_blank"
                className="tracking-base mr-2 ml-1 text-[0.6875rem] font-bold underline hover:cursor-pointer">
                Wikipedia
              </a>
              <img src={IconSource} alt="Icon Source" />
            </div>

            <div className="hidden flex-col md:flex">
              <Tabs />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'SURFACE' && (
        <div className="px-6 pt-16 pb-7">
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={PlanetJupiterImg} //63 x 77
                className="h-[10.8125rem] w-[10.8125rem]"
              />
              <img
                src={JupiterSurfaceImg}
                className="absolute top-[68%] left-[32%] h-[4.8125rem] w-[3.9375rem]"
              />
            </div>
          </div>

          <div className="mt-[4.1875rem] flex flex-col items-center gap-2.5">
            <h1 className="font-antonio font-weight-medium leading-xl text-[2.5rem] tracking-tight">
              JUPITER
            </h1>
            <p className="leading-md mt-[0.375rem] cursor-text text-center text-[0.9187rem]">
              The best known feature of Jupiter is the Great Red Spot, a
              persistent anticyclonic storm located 22° south of the equator. It
              is known to have existed since at least 1831, and possibly since
              1665.
            </p>

            <div className="text-light-gray leading-md flex items-center">
              <p className="text-[0.875rem]">Source :</p>
              <a
                href="https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices"
                target="_blank"
                className="tracking-base mr-2 ml-1 text-[0.6875rem] font-bold underline hover:cursor-pointer">
                Wikipedia
              </a>
              <img src={IconSource} alt="Icon Source" />
            </div>

            <div className="hidden flex-col md:flex">
              <Tabs />
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2 px-6 pb-[2.9375rem]">
        <PlanetsStats
          RotationTimeValue={'9.93 Hours'}
          RevolutionTimeValue={'11.86 Years'}
          RadiusValue={'69,911 KM'}
          Temp={'-108°c'}
          styles={
            'flex justify-between items-center px-6 py-4 border border-dark-gray'
          }
          labelStyles={
            'font-bold leading-md tracking-base opacity-50 text-[0.6875rem] uppercase'
          }
          valueStyles={
            'font-antonio font-weight-medium text-[1.25rem] tracking-smaller leading-md'
          }
        />
      </div>
    </>
  );
};

export default Jupiter;
