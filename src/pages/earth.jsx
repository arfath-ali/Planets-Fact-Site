import PlanetData from '../assets/data/data.json';
import Page from '../components/PageLayout';
import EarthImg from '/src/assets/images/planet-earth.svg';
import EarthStructureImg from '/src/assets/images/planet-earth-internal.svg';
import EarthGeologyImg from '/src/assets/images/geology-earth.png';

const Earth = () => {
  const EarthData = PlanetData.earth;

  const EarthColor = '#6f2ed6';

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
