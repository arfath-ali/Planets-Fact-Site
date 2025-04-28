import PlanetData from '../assets/data/data.json';
import Page from '../components/PageLayout';

const Uranus = () => {
  const UranusData = PlanetData.uranus;

  const UranusColor = '#1ec2a4';

  const UranusImg = UranusData.images.planet;
  const UranusStructureImg = UranusData.images.internal;
  const UranusGeologyImg = UranusData.images.geology;

  const UranusImgDimensions =
    'mx-auto h-[10.8125rem] w-[10.8125rem] md:h-[17.8125rem] md:w-[17.8125rem] lg:h-[28.125rem] lg:w-[28.125rem]';

  const UranusSurfaceImgDimensions =
    'absolute top-[68%] left-[42.6%] h-[4.8125rem] w-[3.9375rem] md:h-[7.9375rem] md:w-[6.5rem] lg:h-[12.5rem] lg:w-[10.25rem] lg:left-[31.8%]';

  const Title = UranusData.name;

  const UranusOverview = UranusData.overview.content;
  const UranusStructure = UranusData.structure.content;
  const UranusSurface = UranusData.geology.content;

  const UranusOverviewSource = UranusData.overview.source;
  const UranusStructureSource = UranusData.structure.source;
  const UranusSurfaceSource = UranusData.geology.source;

  const UranusRotation = UranusData.rotation;
  const UranusRevolution = UranusData.revolution;
  const UranusRadius = UranusData.radius;
  const UranusTemp = UranusData.temperature;

  return (
    <Page
      PlanetColor={UranusColor}
      PlanetImg={UranusImg}
      PlanetStructureImg={UranusStructureImg}
      PlanetSurfaceImg={UranusGeologyImg}
      PlanetImgDimensions={UranusImgDimensions}
      PlanetSurfaceImgDimensions={UranusSurfaceImgDimensions}
      PlanetName={Title}
      PlanetOverviewContent={UranusOverview}
      PlanetStructureContent={UranusStructure}
      PlanetSurfaceContent={UranusSurface}
      PlanetOverviewSource={UranusOverviewSource}
      PlanetStructureSource={UranusStructureSource}
      PlanetSurfaceSource={UranusSurfaceSource}
      PlanetRotation={UranusRotation}
      PlanetRevolution={UranusRevolution}
      PlanetRadius={UranusRadius}
      PlanetTemp={UranusTemp}
    />
  );
};

export default Uranus;