import { useState } from 'react';
import IconSource from '../assets/images/icon-source.svg';
import PlanetUranusImg from '../assets/images/planet-uranus.svg';
import UranusStructureImg from '../assets/images/planet-uranus-internal.svg';
import UranusSurfaceImg from '../assets/images/geology-uranus.png';
import MobileTabs from '../components/MobileTabs.jsx';
import Tabs from '../components/Tabs.jsx';
import PlanetsStats from '../components/PlanetStats.jsx';

const Uranus = () => {
  const [activeTab, setActiveTab] = useState('OVERVIEW');

  const changeTab = (ButtonLabel) => {
    setActiveTab(ButtonLabel);
  };

  return (
    <>
      <div className="flex justify-between px-6 md:hidden">
        <MobileTabs
          activeTabHighlight={'#1ec2a4'}
          setActiveTab={changeTab}
          activeTab={activeTab}
        />
      </div>

      <div className="bg-dark-gray h-px w-full md:hidden"></div>

      {activeTab === 'OVERVIEW' && (
        <div className="px-6 pt-16 pb-7">
          <div>
            <img
              src={PlanetUranusImg}
              className="mx-auto h-[10.8125rem] w-[10.8125rem]"
            />
          </div>

          <div className="mt-[4.1875rem] flex flex-col items-center gap-2.5">
            <h1 className="font-antonio font-weight-medium leading-xl text-[2.5rem] tracking-tight">
              URANUS
            </h1>
            <p className="leading-md mt-[0.375rem] cursor-text text-center text-[0.9187rem]">
              Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus. According to Greek mythology, Uranus was the great-grandfather of Ares. It has the third-largest planetary radius and the fourth-largest planetary mass in the Solar System.
            </p>

            <div className="text-light-gray leading-md flex items-center">
              <p className="text-[0.875rem]">Source :</p>
              <a
                href="https://en.wikipedia.org/wiki/Uranus"
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
              src={UranusStructureImg}
              className="mx-auto h-[10.8125rem] w-[10.8125rem]"
            />
          </div>

          <div className="mt-[4.1875rem] flex flex-col items-center gap-2.5">
            <h1 className="font-antonio font-weight-medium leading-xl text-[2.5rem] tracking-tight">
              URANUS
            </h1>
            <p className="leading-md mt-[0.375rem] cursor-text text-center text-[0.9187rem]">
              The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle, and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.
            </p>

            <div className="text-light-gray leading-md flex items-center">
              <p className="text-[0.875rem]">Source :</p>
              <a
                href="https://en.wikipedia.org/wiki/Uranus#Internal_structure"
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
                src={PlanetUranusImg}
                className="h-[10.8125rem] w-[10.8125rem]"
              />
              <img
                src={UranusSurfaceImg}
                className="absolute top-[68%] left-[32%] h-[4.8125rem] w-[3.9375rem]"
              />
            </div>
          </div>

          <div className="mt-[4.1875rem] flex flex-col items-center gap-2.5">
            <h1 className="font-antonio font-weight-medium leading-xl text-[2.5rem] tracking-tight">
              URANUS
            </h1>
            <p className="leading-md mt-[0.375rem] cursor-text text-center text-[0.9187rem]">
              The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.
            </p>

            <div className="text-light-gray leading-md flex items-center">
              <p className="text-[0.875rem]">Source :</p>
              <a
                href="https://en.wikipedia.org/wiki/Uranus#Atmosphere"
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
          RotationTimeValue={'17.2 Hours'}
          RevolutionTimeValue={'84 Years'}
          RadiusValue={'25,362 KM'}
          Temp={'-195°c'}
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

export default Uranus;
