import PlanetData from '../assets/data/data.json';
import Page from '../components/PageLayout';
import MarsImg from '/src/assets/images/planet-mars.svg';
import MarsStructureImg from '/src/assets/images/planet-mars-internal.svg';
import MarsGeologyImg from '/src/assets/images/geology-mars.png';

const Mars = () => {
  const MarsData = PlanetData.mars;

  const MarsColor = '#D14C32';

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
