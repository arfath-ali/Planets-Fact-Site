import { useState } from 'react';
import IconSource from '../assets/images/icon-source.svg';
import PlanetNeptuneImg from '../assets/images/planet-neptune.svg';
import NeptuneStructureImg from '../assets/images/planet-neptune-internal.svg';
import NeptuneSurfaceImg from '../assets/images/geology-neptune.png';
import MobileTabs from '../components/MobileTabs.jsx';
import Tabs from '../components/Tabs.jsx';
import PlanetsStats from '../components/PlanetStats.jsx';

const Neptune = () => {
  const [activeTab, setActiveTab] = useState('OVERVIEW');

  const changeTab = (ButtonLabel) => {
    setActiveTab(ButtonLabel);
  };

  return (
    <>
      <div className="flex justify-between px-6 md:hidden">
        <MobileTabs
          activeTabHighlight={'#2d68f0'}
          setActiveTab={changeTab}
          activeTab={activeTab}
        />
      </div>

      <div className="bg-dark-gray h-px w-full md:hidden"></div>

      {activeTab === 'OVERVIEW' && (
        <div className="px-6 pt-16 pb-7">
          <div>
            <img
              src={PlanetNeptuneImg}
              className="mx-auto h-[10.8125rem] w-[10.8125rem]"
            />
          </div>

          <div className="mt-[4.1875rem] flex flex-col items-center gap-2.5">
            <h1 className="font-antonio font-weight-medium leading-xl text-[2.5rem] tracking-tight">
              NEPTUNE
            </h1>
            <p className="leading-md mt-[0.375rem] cursor-text text-center text-[0.9187rem]">
              Neptune is the eighth and farthest-known Solar planet from the
              Sun. In the Solar System, it is the fourth-largest planet by
              diameter, the third-most-massive planet, and the densest giant
              planet. It is 17 times the mass of Earth, more massive than its
              near-twin Uranus.
            </p>

            <div className="text-light-gray leading-md flex items-center">
              <p className="text-[0.875rem]">Source :</p>
              <a
                href="https://en.wikipedia.org/wiki/Neptune"
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
              src={NeptuneStructureImg}
              className="mx-auto h-[10.8125rem] w-[10.8125rem]"
            />
          </div>

          <div className="mt-[4.1875rem] flex flex-col items-center gap-2.5">
            <h1 className="font-antonio font-weight-medium leading-xl text-[2.5rem] tracking-tight">
              NEPTUNE
            </h1>
            <p className="leading-md mt-[0.375rem] cursor-text text-center text-[0.9187rem]">
              Neptune's internal structure resembles that of Uranus. Its
              atmosphere forms about 5% to 10% of its mass and extends perhaps
              10% to 20% of the way towards the core. Increasing concentrations
              of methane, ammonia, and water are found in the lower regions.
            </p>

            <div className="text-light-gray leading-md flex items-center">
              <p className="text-[0.875rem]">Source :</p>
              <a
                href="https://en.wikipedia.org/wiki/Neptune#Internal_structure"
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
                src={PlanetNeptuneImg}
                className="h-[10.8125rem] w-[10.8125rem]"
              />
              <img
                src={NeptuneSurfaceImg}
                className="absolute top-[68%] left-[32%] h-[4.8125rem] w-[3.9375rem]"
              />
            </div>
          </div>

          <div className="mt-[4.1875rem] flex flex-col items-center gap-2.5">
            <h1 className="font-antonio font-weight-medium leading-xl text-[2.5rem] tracking-tight">
              NEPTUNE
            </h1>
            <p className="leading-md mt-[0.375rem] cursor-text text-center text-[0.9187rem]">
              Neptune's atmosphere is 80% hydrogen and 19% helium. A trace
              amount of methane is also present. Prominent absorption bands of
              methane exist at wavelengths above 600 nm, in the red and infrared
              portion of the spectrum.
            </p>

            <div className="text-light-gray leading-md flex items-center">
              <p className="text-[0.875rem]">Source :</p>
              <a
                href="https://en.wikipedia.org/wiki/Neptune#Atmosphere"
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
          RotationTimeValue={'16.08 Hours'}
          RevolutionTimeValue={'164.79 Years'}
          RadiusValue={'24,622 KM'}
          Temp={'-201°c'}
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

export default Neptune;
