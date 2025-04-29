import PlanetData from '../assets/data/data.json';
import Page from '../components/PageLayout';
import MercuryImg from '/src/assets/images/planet-mercury.svg';
import MercuryStructureImg from '/src/assets/images/planet-mercury-internal.svg';
import MercuryGeologyImg from '/src/assets/images/geology-mercury.png';

const Mercury = () => {
  const MercuryData = PlanetData.mercury;

  const MercuryColor = '#419EBB';

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
