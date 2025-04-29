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
  <Route path="/Planets-Fact-Site/dist/" element={<Navigate to="/Planets-Fact-Site/dist/earth/overview" replace />} />
  <Route path="/Planets-Fact-Site/dist/mercury/overview" element={<Mercury />} />
  <Route path="/Planets-Fact-Site/dist/mercury/internal-structure" element={<Mercury />} />
  <Route path="/Planets-Fact-Site/dist/mercury/surface-geology" element={<Mercury />} />
  <Route path="/Planets-Fact-Site/dist/mercury/structure" element={<Mercury />} />
  <Route path="/Planets-Fact-Site/dist/mercury/surface" element={<Mercury />} />

  <Route path="/Planets-Fact-Site/dist/venus/overview" element={<Venus />} />
  <Route path="/Planets-Fact-Site/dist/venus/internal-structure" element={<Venus />} />
  <Route path="/Planets-Fact-Site/dist/venus/surface-geology" element={<Venus />} />
  <Route path="/Planets-Fact-Site/dist/venus/structure" element={<Venus />} />
  <Route path="/Planets-Fact-Site/dist/venus/surface" element={<Venus />} />

  <Route path="/Planets-Fact-Site/dist/earth/overview" element={<Earth />} />
  <Route path="/Planets-Fact-Site/dist/earth/internal-structure" element={<Earth />} />
  <Route path="/Planets-Fact-Site/dist/earth/surface-geology" element={<Earth />} />
  <Route path="/Planets-Fact-Site/dist/earth/structure" element={<Earth />} />
  <Route path="/Planets-Fact-Site/dist/earth/surface" element={<Earth />} />

  <Route path="/Planets-Fact-Site/dist/mars/overview" element={<Mars />} />
  <Route path="/Planets-Fact-Site/dist/mars/internal-structure" element={<Mars />} />
  <Route path="/Planets-Fact-Site/dist/mars/surface-geology" element={<Mars />} />
  <Route path="/Planets-Fact-Site/dist/mars/structure" element={<Mars />} />
  <Route path="/Planets-Fact-Site/dist/mars/surface" element={<Mars />} />

  <Route path="/Planets-Fact-Site/dist/jupiter/overview" element={<Jupiter />} />
  <Route path="/Planets-Fact-Site/dist/jupiter/internal-structure" element={<Jupiter />} />
  <Route path="/Planets-Fact-Site/dist/jupiter/surface-geology" element={<Jupiter />} />
  <Route path="/Planets-Fact-Site/dist/jupiter/structure" element={<Jupiter />} />
  <Route path="/Planets-Fact-Site/dist/jupiter/surface" element={<Jupiter />} />

  <Route path="/Planets-Fact-Site/dist/saturn/overview" element={<Saturn />} />
  <Route path="/Planets-Fact-Site/dist/saturn/internal-structure" element={<Saturn />} />
  <Route path="/Planets-Fact-Site/dist/saturn/surface-geology" element={<Saturn />} />
  <Route path="/Planets-Fact-Site/dist/saturn/structure" element={<Saturn />} />
  <Route path="/Planets-Fact-Site/dist/saturn/surface" element={<Saturn />} />

  <Route path="/Planets-Fact-Site/dist/uranus/overview" element={<Uranus />} />
  <Route path="/Planets-Fact-Site/dist/uranus/internal-structure" element={<Uranus />} />
  <Route path="/Planets-Fact-Site/dist/uranus/surface-geology" element={<Uranus />} />
  <Route path="/Planets-Fact-Site/dist/uranus/structure" element={<Uranus />} />
  <Route path="/Planets-Fact-Site/dist/uranus/surface" element={<Uranus />} />

  <Route path="/Planets-Fact-Site/dist/neptune/overview" element={<Neptune />} />
  <Route path="/Planets-Fact-Site/dist/neptune/internal-structure" element={<Neptune />} />
  <Route path="/Planets-Fact-Site/dist/neptune/surface-geology" element={<Neptune />} />
  <Route path="/Planets-Fact-Site/dist/neptune/structure" element={<Neptune />} />
  <Route path="/Planets-Fact-Site/dist/neptune/surface" element={<Neptune />} />
</Routes>

  );
};

export default PlanetsRoutes;
