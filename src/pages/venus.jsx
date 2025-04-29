import PlanetData from '../assets/data/data.json';
import Page from '../components/PageLayout';
import VenusImg from '/src/assets/images/planet-venus.svg';
import VenusStructureImg from '/src/assets/images/planet-venus-internal.svg';
import VenusGeologyImg from '/src/assets/images/geology-venus.png';

const Venus = () => {
  const VenusData = PlanetData.venus;

  const VenusColor = '#EDA249';

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
