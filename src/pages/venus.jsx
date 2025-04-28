import PlanetData from '../assets/data/data.json';
import Page from '../components/PageLayout';
import VenusImg from '/src/assets/images/planet-venus.svg';
import VenusStructureImg from '/src/assets/images/planet-venus-internal.svg';
import VenusGeologyImg from '/src/assets/images/geology-venus.png';

const Venus = () => {
  const VenusData = PlanetData.venus;

  const VenusColor = '#EDA249';

  const VenusImgDimensions =
    'mx-auto h-[10.8125rem] w-[10.8125rem] md:h-[17.8125rem] md:w-[17.8125rem] lg:h-[28.125rem] lg:w-[28.125rem]';

  const VenusSurfaceImgDimensions =
    'absolute top-[68%] left-[42.6%] h-[4.8125rem] w-[3.9375rem] md:h-[7.9375rem] md:w-[6.5rem] lg:h-[12.5rem] lg:w-[10.25rem] lg:left-[31.8%]';

  const Title = VenusData.name;

  const VenusOverview = VenusData.overview.content;
  const VenusStructure = VenusData.structure.content;
  const VenusSurface = VenusData.geology.content;

  const VenusOverviewSource = VenusData.overview.source;
  const VenusStructureSource = VenusData.structure.source;
  const VenusSurfaceSource = VenusData.geology.source;

  const VenusRotation = VenusData.rotation;
  const VenusRevolution = VenusData.revolution;
  const VenusRadius = VenusData.radius;
  const VenusTemp = VenusData.temperature;

  return (
    <Page
      PlanetColor={VenusColor}
      PlanetImg={VenusImg}
      PlanetStructureImg={VenusStructureImg}
      PlanetSurfaceImg={VenusGeologyImg}
      PlanetImgDimensions={VenusImgDimensions}
      PlanetSurfaceImgDimensions={VenusSurfaceImgDimensions}
      PlanetName={Title}
      PlanetOverviewContent={VenusOverview}
      PlanetStructureContent={VenusStructure}
      PlanetSurfaceContent={VenusSurface}
      PlanetOverviewSource={VenusOverviewSource}
      PlanetStructureSource={VenusStructureSource}
      PlanetSurfaceSource={VenusSurfaceSource}
      PlanetRotation={VenusRotation}
      PlanetRevolution={VenusRevolution}
      PlanetRadius={VenusRadius}
      PlanetTemp={VenusTemp}
    />
  );
};

export default Venus;
