import { useState } from 'react';
import IconSource from '../assets/images/icon-source.svg';
import PlanetMercuryImg from '../assets/images/planet-mercury.svg';
import MercuryStructureImg from '../assets/images/planet-mercury-internal.svg';
import MercurySurfaceImg from '../assets/images/geology-mercury.png';
import MobileTabs from '../components/MobileTabs.jsx';
import Tabs from '../components/Tabs.jsx';
import PlanetsStats from '../components/PlanetStats.jsx';

const Mercury = () => {
  const [activeTab, setActiveTab] = useState('OVERVIEW');

  const changeTab = (ButtonLabel) => {
    setActiveTab(ButtonLabel);
  };

  return (
    <>
      <div className="flex justify-between px-6 md:hidden">
        <MobileTabs
          activeTabHighlight={'#419EBB'}
          setActiveTab={changeTab}
          activeTab={activeTab}
        />
      </div>

      <div className="bg-dark-gray h-px w-full md:hidden"></div>

      {activeTab === 'OVERVIEW' && (
        <div className="px-6 pt-16 pb-7">
          <div>
            <img
              src={PlanetMercuryImg}
              className="mx-auto h-[10.8125rem] w-[10.8125rem]"
            />
          </div>

          <div className="mt-[4.1875rem] flex flex-col items-center gap-2.5">
            <h1 className="font-antonio font-weight-medium leading-xl text-[2.5rem] tracking-tight">
              MERCURY
            </h1>
            <p className="leading-md mt-[0.375rem] cursor-text text-center text-[0.9187rem]">
              Mercury is the smallest planet in the Solar System and the closest
              to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
              shortest of all the Sun's planets. Mercury is one of four
              terrestrial planets in the Solar System, and is a rocky body like
              Earth.
            </p>

            <div className="text-light-gray leading-md flex items-center">
              <p className="text-[0.875rem]">Source :</p>
              <a
                href="https://en.wikipedia.org/wiki/Mercury_(planet)"
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
              src={MercuryStructureImg}
              className="mx-auto h-[10.8125rem] w-[10.8125rem]"
            />
          </div>

          <div className="mt-[4.1875rem] flex flex-col items-center gap-2.5">
            <h1 className="font-antonio font-weight-medium leading-xl text-[2.5rem] tracking-tight">
              MERCURY
            </h1>
            <p className="leading-md mt-[0.375rem] cursor-text text-center text-[0.9187rem]">
              Mercury appears to have a solid silicate crust and mantle
              overlying a solid, iron sulfide outer core layer, a deeper liquid
              core layer, and a solid inner core. The planet's density is the
              second highest in the Solar System at 5.427 g/cm³, only slightly
              less than Earth's density.
            </p>

            <div className="text-light-gray leading-md flex items-center">
              <p className="text-[0.875rem]">Source :</p>
              <a
                href="https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
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
                src={PlanetMercuryImg}
                className="h-[10.8125rem] w-[10.8125rem]"
              />
              <img
                src={MercurySurfaceImg}
                className="absolute top-[68%] left-[32%] h-[4.8125rem] w-[3.9375rem]"
              />
            </div>
          </div>

          <div className="mt-[4.1875rem] flex flex-col items-center gap-2.5">
            <h1 className="font-antonio font-weight-medium leading-xl text-[2.5rem] tracking-tight">
              MERCURY
            </h1>
            <p className="leading-md mt-[0.375rem] cursor-text text-center text-[0.9187rem]">
              Mercury's surface is similar in appearance to that of the Moon,
              showing extensive mare-like plains and heavy cratering, indicating
              that it has been geologically inactive for billions of years. It
              is more heterogeneous than either Mars's or the Moon’s.
            </p>

            <div className="text-light-gray leading-md flex items-center">
              <p className="text-[0.875rem]">Source :</p>
              <a
                href="https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"
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
          RotationTimeValue={'58.6 Days'}
          RevolutionTimeValue={'87.97 Days'}
          RadiusValue={'2,439.7 KM'}
          Temp={'430°c'}
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

export default Mercury;
