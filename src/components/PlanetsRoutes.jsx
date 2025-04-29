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
      <Route path="/planets-fact-site/dist/earth/overview" element={<Navigate to="/planets-fact-site/dist/earth/overview" replace />} />
      <Route path="/planets-fact-site/dist/mercury/overview" element={<Mercury />} />
      <Route path="/planets-fact-site/dist/mercury/internal-structure" element={<Mercury />} />
      <Route path="/planets-fact-site/dist/mercury/surface-geology" element={<Mercury />} />
      <Route path="/planets-fact-site/dist/mercury/structure" element={<Mercury />} />
      <Route path="/planets-fact-site/dist/mercury/surface" element={<Mercury />} />

      <Route path="/planets-fact-site/dist/venus/overview" element={<Venus />} />
      <Route path="/planets-fact-site/dist/venus/internal-structure" element={<Venus />} />
      <Route path="/planets-fact-site/dist/venus/surface-geology" element={<Venus />} />
      <Route path="/planets-fact-site/dist/venus/structure" element={<Venus />} />
      <Route path="/planets-fact-site/dist/venus/surface" element={<Venus />} />

      <Route path="/planets-fact-site/dist/earth/overview" element={<Earth />} />
      <Route path="/planets-fact-site/dist/earth/internal-structure" element={<Earth />} />
      <Route path="/planets-fact-site/dist/earth/surface-geology" element={<Earth />} />
      <Route path="/planets-fact-site/dist/earth/structure" element={<Earth />} />
      <Route path="/planets-fact-site/dist/earth/surface" element={<Earth />} />

      <Route path="/planets-fact-site/dist/mars/overview" element={<Mars />} />
      <Route path="/planets-fact-site/dist/mars/internal-structure" element={<Mars />} />
      <Route path="/planets-fact-site/dist/mars/surface-geology" element={<Mars />} />
      <Route path="/planets-fact-site/dist/mars/structure" element={<Mars />} />
      <Route path="/planets-fact-site/dist/mars/surface" element={<Mars />} />

      <Route path="/planets-fact-site/dist/jupiter/overview" element={<Jupiter />} />
      <Route path="/planets-fact-site/dist/jupiter/internal-structure" element={<Jupiter />} />
      <Route path="/planets-fact-site/dist/jupiter/surface-geology" element={<Jupiter />} />
      <Route path="/planets-fact-site/dist/jupiter/structure" element={<Jupiter />} />
      <Route path="/planets-fact-site/dist/jupiter/surface" element={<Jupiter />} />

      <Route path="/planets-fact-site/dist/saturn/overview" element={<Saturn />} />
      <Route path="/planets-fact-site/dist/saturn/internal-structure" element={<Saturn />} />
      <Route path="/planets-fact-site/dist/saturn/surface-geology" element={<Saturn />} />
      <Route path="/planets-fact-site/dist/saturn/structure" element={<Saturn />} />
      <Route path="/planets-fact-site/dist/saturn/surface" element={<Saturn />} />

      <Route path="/planets-fact-site/dist/uranus/overview" element={<Uranus />} />
      <Route path="/planets-fact-site/dist/uranus/internal-structure" element={<Uranus />} />
      <Route path="/planets-fact-site/dist/uranus/surface-geology" element={<Uranus />} />
      <Route path="/planets-fact-site/dist/uranus/structure" element={<Uranus />} />
      <Route path="/planets-fact-site/dist/uranus/surface" element={<Uranus />} />

      <Route path="/planets-fact-site/dist/neptune/overview" element={<Neptune />} />
      <Route path="/planets-fact-site/dist/neptune/internal-structure" element={<Neptune />} />
      <Route path="/planets-fact-site/dist/neptune/surface-geology" element={<Neptune />} />
      <Route path="/planets-fact-site/dist/neptune/structure" element={<Neptune />} />
      <Route path="/planets-fact-site/dist/neptune/surface" element={<Neptune />} />
    </Routes>
  );
};

export default PlanetsRoutes;
