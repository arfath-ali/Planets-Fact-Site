import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import IconSource from '../assets/images/icon-source.svg';
import MobileTabs from './mobile/MobileTabs.jsx';
import Tabs from './Tabs.jsx';
import PlanetsStats from './PlanetStats.jsx';

const Page = ({
  PlanetColor,
  PlanetImg,
  PlanetStructureImg,
  PlanetSurfaceImg,
  PlanetName,
  PlanetOverviewContent,
  PlanetStructureContent,
  PlanetSurfaceContent,
  PlanetOverviewSource,
  PlanetStructureSource,
  PlanetSurfaceSource,
  PlanetRotation,
  PlanetRevolution,
  PlanetRadius,
  PlanetTemp,
}) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('OVERVIEW');

  useEffect(() => {
    const path = location.pathname;

    if (path.includes('internal-structure') || path.includes('structure')) {
      setActiveTab('INTERNAL STRUCTURE');
    } else if (path.includes('surface-geology') || path.includes('surface')) {
      setActiveTab('SURFACE GEOLOGY');
    } else {
      setActiveTab('OVERVIEW');
    }
  }, [location]);

  const changeTab = (ButtonLabel) => {
    setActiveTab(ButtonLabel);
  };

  const PlanetImgDimensions =
    'mx-auto h-[10.8125rem] w-[10.8125rem] md:h-[17.8125rem] md:w-[17.8125rem] lg:h-[28.125rem] lg:w-[28.125rem]';

  const PlanetSurfaceImgDimensions =
    'absolute top-[68%] left-[40.5%] h-[4.8125rem] w-[3.9375rem] md:h-[7.9375rem] md:w-[6.5rem] lg:h-[12.5rem] lg:w-[10.25rem] lg:left-[31.8%]';

  let activeImg = '';
  let activePage = '';
  let activeLink = '';

  if (activeTab === 'OVERVIEW') {
    activeImg = PlanetImg;
    activePage = PlanetOverviewContent;
    activeLink = PlanetOverviewSource;
  } else if (activeTab === 'STRUCTURE' || activeTab === 'INTERNAL STRUCTURE') {
    activeImg = PlanetStructureImg;
    activePage = PlanetStructureContent;
    activeLink = PlanetStructureSource;
  } else if (activeTab === 'SURFACE' || activeTab === 'SURFACE GEOLOGY') {
    activeImg = PlanetImg;
    activePage = PlanetSurfaceContent;
    activeLink = PlanetSurfaceSource;
  }

  return (
    <>
      <div className="flex justify-between px-6 md:hidden">
        <MobileTabs
          page={PlanetName}
          activeTabHighlight={PlanetColor}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      </div>

      <div className="bg-dark-gray h-px w-full md:hidden"></div>

      <div className="px-6 pt-16 pb-7 md:px-10 md:pt-24 md:pb-[1.6875rem] lg:flex lg:items-center lg:justify-between lg:pt-[10.125rem] lg:pr-[10.3125rem] lg:pb-[5.4375rem] lg:pl-[15.9375rem]">
        <div className="relative flex justify-center">
          <img src={activeImg} className={PlanetImgDimensions} />

          {(activeTab === 'SURFACE' || activeTab === 'SURFACE GEOLOGY') && (
            <img
              src={PlanetSurfaceImg}
              className={PlanetSurfaceImgDimensions}
            />
          )}
        </div>

        <div className="mt-[4.1875rem] basis-1/3 items-center justify-between md:mt-20 md:flex lg:mt-0 lg:flex-col lg:items-start lg:gap-10">
          <div className="flex basis-1/2 flex-col items-center gap-2.5 md:items-start md:gap-6 lg:gap-0">
            <h1 className="font-antonio font-weight-medium text-[2.5rem] uppercase md:text-5xl lg:mb-6 lg:text-[5rem]">
              {PlanetName}
            </h1>

            <p className="leading-sm mt-[0.375rem] cursor-text text-center text-[0.9187rem] md:mt-0 md:mb-2 md:text-left lg:mb-0">
              {activePage}
            </p>

            <div className="text-light-gray leading-md flex items-center lg:mt-2.5">
              <p className="text-[0.875rem]">Source :</p>
              <a
                href={activeLink}
                target="_blank"
                className="tracking-base mr-2 ml-1 text-[0.6875rem] font-bold underline hover:cursor-pointer">
                Wikipedia
              </a>
              <img src={IconSource} alt="Icon Source" />
            </div>
          </div>

          <Tabs
            page={PlanetName}
            setActiveTab={changeTab}
            activeTabHighlight={PlanetColor}
            activeTab={activeTab}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 px-6 pb-[2.9375rem] md:flex-row md:justify-between md:gap-0 lg:justify-center lg:gap-[1.875rem]">
        <PlanetsStats
          RotationTimeValue={PlanetRotation}
          RevolutionTimeValue={PlanetRevolution}
          RadiusValue={PlanetRadius}
          Temp={PlanetTemp}
        />
      </div>
    </>
  );
};

export default Page;
