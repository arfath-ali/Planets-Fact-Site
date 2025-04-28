import PlanetData from '../assets/data/data.json';
import Page from '../components/PageLayout';
import MarsImg from '/src/assets/images/planet-mars.svg';
import MarsStructureImg from '/src/assets/images/planet-mars-internal.svg';
import MarsGeologyImg from '/src/assets/images/geology-mars.png';

const Mars = () => {
  const MarsData = PlanetData.mars;

  const MarsColor = '#D14C32';

  const MarsImgDimensions =
    'mx-auto h-[10.8125rem] w-[10.8125rem] md:h-[17.8125rem] md:w-[17.8125rem] lg:h-[28.125rem] lg:w-[28.125rem]';

  const MarsSurfaceImgDimensions =
    'absolute top-[68%] left-[42.6%] h-[4.8125rem] w-[3.9375rem] md:h-[7.9375rem] md:w-[6.5rem] lg:h-[12.5rem] lg:w-[10.25rem] lg:left-[31.8%]';

  const Title = MarsData.name;

  const MarsOverview = MarsData.overview.content;
  const MarsStructure = MarsData.structure.content;
  const MarsSurface = MarsData.geology.content;

  const MarsOverviewSource = MarsData.overview.source;
  const MarsStructureSource = MarsData.structure.source;
  const MarsSurfaceSource = MarsData.geology.source;

  const MarsRotation = MarsData.rotation;
  const MarsRevolution = MarsData.revolution;
  const MarsRadius = MarsData.radius;
  const MarsTemp = MarsData.temperature;

  return (
    <Page
      PlanetColor={MarsColor}
      PlanetImg={MarsImg}
      PlanetStructureImg={MarsStructureImg}
      PlanetSurfaceImg={MarsGeologyImg}
      PlanetImgDimensions={MarsImgDimensions}
      PlanetSurfaceImgDimensions={MarsSurfaceImgDimensions}
      PlanetName={Title}
      PlanetOverviewContent={MarsOverview}
      PlanetStructureContent={MarsStructure}
      PlanetSurfaceContent={MarsSurface}
      PlanetOverviewSource={MarsOverviewSource}
      PlanetStructureSource={MarsStructureSource}
      PlanetSurfaceSource={MarsSurfaceSource}
      PlanetRotation={MarsRotation}
      PlanetRevolution={MarsRevolution}
      PlanetRadius={MarsRadius}
      PlanetTemp={MarsTemp}
    />
  );
};

export default Mars;
