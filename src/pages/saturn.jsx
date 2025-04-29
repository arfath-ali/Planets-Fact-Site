import PlanetData from '../assets/data/data.json';
import Page from '../components/PageLayout';
import SaturnImg from '/src/assets/images/planet-saturn.svg';
import SaturnStructureImg from '/src/assets/images/planet-saturn-internal.svg';
import SaturnGeologyImg from '/src/assets/images/geology-saturn.png';

const Saturn = () => {
  const SaturnData = PlanetData.saturn;

  const SaturnColor = '#CD5120';

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
