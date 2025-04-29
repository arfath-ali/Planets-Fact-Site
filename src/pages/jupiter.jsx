import PlanetData from '../assets/data/data.json';
import Page from '../components/PageLayout';
import JupiterImg from '/src/assets/images/planet-jupiter.svg';
import JupiterStructureImg from '/src/assets/images/planet-jupiter-internal.svg';
import JupiterGeologyImg from '/src/assets/images/geology-jupiter.png';

const Jupiter = () => {
  const JupiterData = PlanetData.jupiter;

  const JupiterColor = '#D83A34';

  const Title = JupiterData.name;

  const JupiterOverview = JupiterData.overview.content;
  const JupiterStructure = JupiterData.structure.content;
  const JupiterSurface = JupiterData.geology.content;

  const JupiterOverviewSource = JupiterData.overview.source;
  const JupiterStructureSource = JupiterData.structure.source;
  const JupiterSurfaceSource = JupiterData.geology.source;

  const JupiterRotation = JupiterData.rotation;
  const JupiterRevolution = JupiterData.revolution;
  const JupiterRadius = JupiterData.radius;
  const JupiterTemp = JupiterData.temperature;

  return (
    <Page
      PlanetColor={JupiterColor}
      PlanetImg={JupiterImg}
      PlanetStructureImg={JupiterStructureImg}
      PlanetSurfaceImg={JupiterGeologyImg}
      PlanetName={Title}
      PlanetOverviewContent={JupiterOverview}
      PlanetStructureContent={JupiterStructure}
      PlanetSurfaceContent={JupiterSurface}
      PlanetOverviewSource={JupiterOverviewSource}
      PlanetStructureSource={JupiterStructureSource}
      PlanetSurfaceSource={JupiterSurfaceSource}
      PlanetRotation={JupiterRotation}
      PlanetRevolution={JupiterRevolution}
      PlanetRadius={JupiterRadius}
      PlanetTemp={JupiterTemp}
    />
  );
};

export default Jupiter;
