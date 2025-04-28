import PlanetData from '../assets/data/data.json';
import Page from '../components/PageLayout';

const Neptune = () => {
  const NeptuneData = PlanetData.neptune;

  const NeptuneColor = '#2d68f0';

  const NeptuneImg = NeptuneData.images.planet;
  const NeptuneStructureImg = NeptuneData.images.internal;
  const NeptuneGeologyImg = NeptuneData.images.geology;

  const NeptuneImgDimensions =
    'mx-auto h-[10.8125rem] w-[10.8125rem] md:h-[17.8125rem] md:w-[17.8125rem] lg:h-[28.125rem] lg:w-[28.125rem]';

  const NeptuneSurfaceImgDimensions =
    'absolute top-[68%] left-[42.6%] h-[4.8125rem] w-[3.9375rem] md:h-[7.9375rem] md:w-[6.5rem] lg:h-[12.5rem] lg:w-[10.25rem] lg:left-[31.8%]';

  const Title = NeptuneData.name;

  const NeptuneOverview = NeptuneData.overview.content;
  const NeptuneStructure = NeptuneData.structure.content;
  const NeptuneSurface = NeptuneData.geology.content;

  const NeptuneOverviewSource = NeptuneData.overview.source;
  const NeptuneStructureSource = NeptuneData.structure.source;
  const NeptuneSurfaceSource = NeptuneData.geology.source;

  const NeptuneRotation = NeptuneData.rotation;
  const NeptuneRevolution = NeptuneData.revolution;
  const NeptuneRadius = NeptuneData.radius;
  const NeptuneTemp = NeptuneData.temperature;

  return (
    <Page
      PlanetColor={NeptuneColor}
      PlanetImg={NeptuneImg}
      PlanetStructureImg={NeptuneStructureImg}
      PlanetSurfaceImg={NeptuneGeologyImg}
      PlanetImgDimensions={NeptuneImgDimensions}
      PlanetSurfaceImgDimensions={NeptuneSurfaceImgDimensions}
      PlanetName={Title}
      PlanetOverviewContent={NeptuneOverview}
      PlanetStructureContent={NeptuneStructure}
      PlanetSurfaceContent={NeptuneSurface}
      PlanetOverviewSource={NeptuneOverviewSource}
      PlanetStructureSource={NeptuneStructureSource}
      PlanetSurfaceSource={NeptuneSurfaceSource}
      PlanetRotation={NeptuneRotation}
      PlanetRevolution={NeptuneRevolution}
      PlanetRadius={NeptuneRadius}
      PlanetTemp={NeptuneTemp}
    />
  );
};

export default Neptune;