import PlanetData from '../assets/data/data.json';
import Page from '../components/PageLayout';
import SaturnImg from '/src/assets/images/planet-saturn.svg';
import SaturnStructureImg from '/src/assets/images/planet-saturn-internal.svg';
import SaturnGeologyImg from '/src/assets/images/geology-saturn.png';

const Saturn = () => {
  const SaturnData = PlanetData.saturn;

  const SaturnColor = '#CD5120';

  const SaturnImgDimensions =
    'mx-auto h-[10.8125rem] w-[10.8125rem] md:h-[17.8125rem] md:w-[17.8125rem] lg:h-[28.125rem] lg:w-[28.125rem]';

  const SaturnSurfaceImgDimensions =
    'absolute top-[68%] left-[42.6%] h-[4.8125rem] w-[3.9375rem] md:h-[7.9375rem] md:w-[6.5rem] lg:h-[12.5rem] lg:w-[10.25rem] lg:left-[31.8%]';

  const Title = SaturnData.name;

  const SaturnOverview = SaturnData.overview.content;
  const SaturnStructure = SaturnData.structure.content;
  const SaturnSurface = SaturnData.geology.content;

  const SaturnOverviewSource = SaturnData.overview.source;
  const SaturnStructureSource = SaturnData.structure.source;
  const SaturnSurfaceSource = SaturnData.geology.source;

  const SaturnRotation = SaturnData.rotation;
  const SaturnRevolution = SaturnData.revolution;
  const SaturnRadius = SaturnData.radius;
  const SaturnTemp = SaturnData.temperature;

  return (
    <Page
      PlanetColor={SaturnColor}
      PlanetImg={SaturnImg}
      PlanetStructureImg={SaturnStructureImg}
      PlanetSurfaceImg={SaturnGeologyImg}
      PlanetImgDimensions={SaturnImgDimensions}
      PlanetSurfaceImgDimensions={SaturnSurfaceImgDimensions}
      PlanetName={Title}
      PlanetOverviewContent={SaturnOverview}
      PlanetStructureContent={SaturnStructure}
      PlanetSurfaceContent={SaturnSurface}
      PlanetOverviewSource={SaturnOverviewSource}
      PlanetStructureSource={SaturnStructureSource}
      PlanetSurfaceSource={SaturnSurfaceSource}
      PlanetRotation={SaturnRotation}
      PlanetRevolution={SaturnRevolution}
      PlanetRadius={SaturnRadius}
      PlanetTemp={SaturnTemp}
    />
  );
};

export default Saturn;
