import PlanetData from '../assets/data/data.json';
import Page from '../components/PageLayout';

const Earth = () => {
  const EarthData = PlanetData.earth;

  const EarthColor = '#6f2ed6';

  const EarthImg = EarthData.images.planet;
  const EarthStructureImg = EarthData.images.internal;
  const EarthGeologyImg = EarthData.images.geology;

  const EarthImgDimensions =
    'mx-auto h-[10.8125rem] w-[10.8125rem] md:h-[17.8125rem] md:w-[17.8125rem] lg:h-[28.125rem] lg:w-[28.125rem]';

  const EarthSurfaceImgDimensions =
    'absolute top-[68%] left-[42.6%] h-[4.8125rem] w-[3.9375rem] md:h-[7.9375rem] md:w-[6.5rem] lg:h-[12.5rem] lg:w-[10.25rem] lg:left-[31.8%]';

  const Title = EarthData.name;

  const EarthOverview = EarthData.overview.content;
  const EarthStructure = EarthData.structure.content;
  const EarthSurface = EarthData.geology.content;

  const EarthOverviewSource = EarthData.overview.source;
  const EarthStructureSource = EarthData.structure.source;
  const EarthSurfaceSource = EarthData.geology.source;

  const EarthRotation = EarthData.rotation;
  const EarthRevolution = EarthData.revolution;
  const EarthRadius = EarthData.radius;
  const EarthTemp = EarthData.temperature;



  return (
    <Page
      PlanetColor={EarthColor}
      PlanetImg={EarthImg}
      PlanetStructureImg={EarthStructureImg}
      PlanetSurfaceImg={EarthGeologyImg}
      PlanetImgDimensions={EarthImgDimensions}
      PlanetSurfaceImgDimensions={EarthSurfaceImgDimensions}
      PlanetName={Title}
      PlanetOverviewContent={EarthOverview}
      PlanetStructureContent={EarthStructure}
      PlanetSurfaceContent={EarthSurface}
      PlanetOverviewSource={EarthOverviewSource}
      PlanetStructureSource={EarthStructureSource}
      PlanetSurfaceSource={EarthSurfaceSource}
      PlanetRotation={EarthRotation}
      PlanetRevolution={EarthRevolution}
      PlanetRadius={EarthRadius}
      PlanetTemp={EarthTemp}
    />
  );
};

export default Earth;
