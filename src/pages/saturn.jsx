import { useState } from 'react';
import IconSource from '../assets/images/icon-source.svg';
import PlanetSaturnImg from '../assets/images/planet-saturn.svg';
import SaturnStructureImg from '../assets/images/planet-saturn-internal.svg';
import SaturnSurfaceImg from '../assets/images/geology-saturn.png';
import MobileTabs from '../components/MobileTabs.jsx';
import Tabs from '../components/Tabs.jsx';
import PlanetsStats from '../components/PlanetStats.jsx';

const Saturn = () => {
  const [activeTab, setActiveTab] = useState('OVERVIEW');

  const changeTab = (ButtonLabel) => {
    setActiveTab(ButtonLabel);
  };

  return (
    <>
      <div className="flex justify-between px-6 md:hidden">
        <MobileTabs
          activeTabHighlight={'#CD5120'}
          setActiveTab={changeTab}
          activeTab={activeTab}
        />
      </div>

      <div className="bg-dark-gray h-px w-full md:hidden"></div>

      {activeTab === 'OVERVIEW' && (
        <div className="px-6 pt-16 pb-7">
          <div>
            <img
              src={PlanetSaturnImg}
              className="mx-auto h-[10.8125rem] w-[10.8125rem]"
            />
          </div>

          <div className="mt-[4.1875rem] flex flex-col items-center gap-2.5">
            <h1 className="font-antonio font-weight-medium leading-xl text-[2.5rem] tracking-tight">
              SATURN
            </h1>
            <p className="leading-md mt-[0.375rem] cursor-text text-center text-[0.9187rem]">
              Saturn is the sixth planet from the Sun and the second-largest in
              the Solar System, after Jupiter. It is a gas giant with an average
              radius of about nine and a half times that of Earth. It only has
              one-eighth the average density of Earth.
            </p>

            <div className="text-light-gray leading-md flex items-center">
              <p className="text-[0.875rem]">Source :</p>
              <a
                href="https://en.wikipedia.org/wiki/Saturn"
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
              src={SaturnStructureImg}
              className="mx-auto h-[10.8125rem] w-[10.8125rem]"
            />
          </div>

          <div className="mt-[4.1875rem] flex flex-col items-center gap-2.5">
            <h1 className="font-antonio font-weight-medium leading-xl text-[2.5rem] tracking-tight">
              SATURN
            </h1>
            <p className="leading-md mt-[0.375rem] cursor-text text-center text-[0.9187rem]">
              Despite consisting mostly of hydrogen and helium, most of Saturn's
              mass is not in the gas phase, because hydrogen becomes a non-ideal
              liquid when the density is above 0.01 g/cm3, which is reached at a
              radius containing 99.9% of Saturn's mass.
            </p>

            <div className="text-light-gray leading-md flex items-center">
              <p className="text-[0.875rem]">Source :</p>
              <a
                href="https://en.wikipedia.org/wiki/Saturn#Internal_structure"
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
                src={PlanetSaturnImg}
                className="h-[10.8125rem] w-[10.8125rem]"
              />
              <img
                src={SaturnSurfaceImg}
                className="absolute top-[68%] left-[32%] h-[4.8125rem] w-[3.9375rem]"
              />
            </div>
          </div>

          <div className="mt-[4.1875rem] flex flex-col items-center gap-2.5">
            <h1 className="font-antonio font-weight-medium leading-xl text-[2.5rem] tracking-tight">
              SATURN
            </h1>
            <p className="leading-md mt-[0.375rem] cursor-text text-center text-[0.9187rem]">
              The outer atmosphere of Saturn contains 96.3% molecular hydrogen
              and 3.25% helium by volume. The planet's most famous feature is
              its prominent ring system, which is composed mostly of ice
              particles with a smaller amount of rocky debris and dust.
            </p>

            <div className="text-light-gray leading-md flex items-center">
              <p className="text-[0.875rem]">Source :</p>
              <a
                href="https://en.wikipedia.org/wiki/Saturn#Atmosphere"
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
          RotationTimeValue={'10.8 Hours'}
          RevolutionTimeValue={'29.46 Years'}
          RadiusValue={'58,232 KM'}
          Temp={'-138°c'}
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

export default Saturn;
