import PlanetData from '../assets/data/data.json';
import Page from '../components/PageLayout';
import NeptuneImg from '/src/assets/images/planet-neptune.svg';
import NeptuneStructureImg from '/src/assets/images/planet-neptune-internal.svg';
import NeptuneGeologyImg from '/src/assets/images/geology-neptune.png';

const Neptune = () => {
  const NeptuneData = PlanetData.neptune;

  const NeptuneColor = '#2d68f0';

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
