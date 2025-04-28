import PlanetData from '../assets/data/data.json';
import Page from '../components/PageLayout';

const Mercury = () => {
  const MercuryData = PlanetData.mercury;

  const MercuryColor = '#419EBB';

  const MercuryImg = MercuryData.images.planet;
  const MercuryStructureImg = MercuryData.images.internal;
  const MercuryGeologyImg = MercuryData.images.geology;

  const MercuryImgDimensions =
    'mx-auto h-[10.8125rem] w-[10.8125rem] md:h-[17.8125rem] md:w-[17.8125rem] lg:h-[28.125rem] lg:w-[28.125rem]';

  const MercurySurfaceImgDimensions =
    'absolute top-[68%] left-[42.6%] h-[4.8125rem] w-[3.9375rem] md:h-[7.9375rem] md:w-[6.5rem] lg:h-[12.5rem] lg:w-[10.25rem] lg:left-[31.8%]';

  const Title = MercuryData.name;

  const MercuryOverview = MercuryData.overview.content;
  const MercuryStructure = MercuryData.structure.content;
  const MercurySurface = MercuryData.geology.content;

  const MercuryOverviewSource = MercuryData.overview.source;
  const MercuryStructureSource = MercuryData.structure.source;
  const MercurySurfaceSource = MercuryData.geology.source;

  const MercuryRotation = MercuryData.rotation;
  const MercuryRevolution = MercuryData.revolution;
  const MercuryRadius = MercuryData.radius;
  const MercuryTemp = MercuryData.temperature;

  return (
    <Page
      PlanetColor={MercuryColor}
      PlanetImg={MercuryImg}
      PlanetStructureImg={MercuryStructureImg}
      PlanetSurfaceImg={MercuryGeologyImg}
      PlanetImgDimensions={MercuryImgDimensions}
      PlanetSurfaceImgDimensions={MercurySurfaceImgDimensions}
      PlanetName={Title}
      PlanetOverviewContent={MercuryOverview}
      PlanetStructureContent={MercuryStructure}
      PlanetSurfaceContent={MercurySurface}
      PlanetOverviewSource={MercuryOverviewSource}
      PlanetStructureSource={MercuryStructureSource}
      PlanetSurfaceSource={MercurySurfaceSource}
      PlanetRotation={MercuryRotation}
      PlanetRevolution={MercuryRevolution}
      PlanetRadius={MercuryRadius}
      PlanetTemp={MercuryTemp}
    />
  );
};

export default Mercury;
