import { Routes, Route, Navigate } from 'react-router-dom';
import Mercury from '../pages/mercury.jsx';
import Venus from '../pages/venus.jsx';
import Earth from '../pages/earth.jsx';
import Mars from '../pages/mars.jsx';
import Jupiter from '../pages/jupiter.jsx';
import Saturn from '../pages/saturn.jsx';
import Uranus from '../pages/uranus.jsx';
import Neptune from '../pages/neptune.jsx';

const PlanetsRoutes = () => {
  return (
    <Routes>
      <Route path="/planets-fact-site" element={<Navigate to="/planets-fact-site/earth/overview" replace />} />

      <Route path="/planets-fact-site/mercury/overview" element={<Mercury />} />
      <Route path="/planets-fact-site/mercury/internal-structure" element={<Mercury />} />
      <Route path="/planets-fact-site/mercury/surface-geology" element={<Mercury />} />
      <Route path="/planets-fact-site/mercury/structure" element={<Mercury />} />
      <Route path="/planets-fact-site/mercury/surface" element={<Mercury />} />

      <Route path="/planets-fact-site/venus/overview" element={<Venus />} />
      <Route path="/planets-fact-site/venus/internal-structure" element={<Venus />} />
      <Route path="/planets-fact-site/venus/surface-geology" element={<Venus />} />
      <Route path="/planets-fact-site/venus/structure" element={<Venus />} />
      <Route path="/planets-fact-site/venus/surface" element={<Venus />} />

      <Route path="/planets-fact-site/earth/overview" element={<Earth />} />
      <Route path="/planets-fact-site/earth/internal-structure" element={<Earth />} />
      <Route path="/planets-fact-site/earth/surface-geology" element={<Earth />} />
      <Route path="/planets-fact-site/earth/structure" element={<Earth />} />
      <Route path="/planets-fact-site/earth/surface" element={<Earth />} />

      <Route path="/planets-fact-site/mars/overview" element={<Mars />} />
      <Route path="/planets-fact-site/mars/internal-structure" element={<Mars />} />
      <Route path="/planets-fact-site/mars/surface-geology" element={<Mars />} />
      <Route path="/planets-fact-site/mars/structure" element={<Mars />} />
      <Route path="/planets-fact-site/mars/surface" element={<Mars />} />

      <Route path="/planets-fact-site/jupiter/overview" element={<Jupiter />} />
      <Route path="/planets-fact-site/jupiter/internal-structure" element={<Jupiter />} />
      <Route path="/planets-fact-site/jupiter/surface-geology" element={<Jupiter />} />
      <Route path="/planets-fact-site/jupiter/structure" element={<Jupiter />} />
      <Route path="/planets-fact-site/jupiter/surface" element={<Jupiter />} />

      <Route path="/planets-fact-site/saturn/overview" element={<Saturn />} />
      <Route path="/planets-fact-site/saturn/internal-structure" element={<Saturn />} />
      <Route path="/planets-fact-site/saturn/surface-geology" element={<Saturn />} />
      <Route path="/planets-fact-site/saturn/structure" element={<Saturn />} />
      <Route path="/planets-fact-site/saturn/surface" element={<Saturn />} />

      <Route path="/planets-fact-site/uranus/overview" element={<Uranus />} />
      <Route path="/planets-fact-site/uranus/internal-structure" element={<Uranus />} />
      <Route path="/planets-fact-site/uranus/surface-geology" element={<Uranus />} />
      <Route path="/planets-fact-site/uranus/structure" element={<Uranus />} />
      <Route path="/planets-fact-site/uranus/surface" element={<Uranus />} />

      <Route path="/planets-fact-site/neptune/overview" element={<Neptune />} />
      <Route path="/planets-fact-site/neptune/internal-structure" element={<Neptune />} />
      <Route path="/planets-fact-site/neptune/surface-geology" element={<Neptune />} />
      <Route path="/planets-fact-site/neptune/structure" element={<Neptune />} />
      <Route path="/planets-fact-site/neptune/surface" element={<Neptune />} />
    </Routes>
  );
};

export default PlanetsRoutes;
