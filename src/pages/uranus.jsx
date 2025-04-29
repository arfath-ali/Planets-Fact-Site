import PlanetData from '../assets/data/data.json';
import Page from '../components/PageLayout';
import UranusImg from '/src/assets/images/planet-uranus.svg';
import UranusStructureImg from '/src/assets/images/planet-uranus-internal.svg';
import UranusGeologyImg from '/src/assets/images/geology-uranus.png';

const Uranus = () => {
  const UranusData = PlanetData.uranus;

  const UranusColor = '#1ec2a4';

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
