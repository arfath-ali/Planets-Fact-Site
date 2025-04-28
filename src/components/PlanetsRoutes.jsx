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
      <Route path="/" element={<Navigate to="/earth/overview" replace />} />
      <Route path="/mercury/overview" element={<Mercury />} />
      <Route path="/mercury/internal-structure" element={<Mercury />} />
      <Route path="/mercury/surface-geology" element={<Mercury />} />
      <Route path="/mercury/structure" element={<Mercury />} />
      <Route path="/mercury/surface" element={<Mercury />} />

      <Route path="/venus/overview" element={<Venus />} />
      <Route path="/venus/internal-structure" element={<Venus />} />
      <Route path="/venus/surface-geology" element={<Venus />} />
      <Route path="/venus/structure" element={<Venus />} />
      <Route path="/venus/surface" element={<Venus />} />

      <Route path="/earth/overview" element={<Earth />} />
      <Route path="/earth/internal-structure" element={<Earth />} />
      <Route path="/earth/surface-geology" element={<Earth />} />
      <Route path="/earth/structure" element={<Earth />} />
      <Route path="/earth/surface" element={<Earth />} />

      <Route path="/mars/overview" element={<Mars />} />
      <Route path="/mars/internal-structure" element={<Mars />} />
      <Route path="/mars/surface-geology" element={<Mars />} />
      <Route path="/mars/structure" element={<Mars />} />
      <Route path="/mars/surface" element={<Mars />} />

      <Route path="/jupiter/overview" element={<Jupiter />} />
      <Route path="/jupiter/internal-structure" element={<Jupiter />} />
      <Route path="/jupiter/surface-geology" element={<Jupiter />} />
      <Route path="/jupiter/structure" element={<Jupiter />} />
      <Route path="/jupiter/surface" element={<Jupiter />} />

      <Route path="/saturn/overview" element={<Saturn />} />
      <Route path="/saturn/internal-structure" element={<Saturn />} />
      <Route path="/saturn/surface-geology" element={<Saturn />} />
      <Route path="/saturn/structure" element={<Saturn />} />
      <Route path="/saturn/surface" element={<Saturn />} />

      <Route path="/uranus/overview" element={<Uranus />} />
      <Route path="/uranus/internal-structure" element={<Uranus />} />
      <Route path="/uranus/surface-geology" element={<Uranus />} />
      <Route path="/uranus/structure" element={<Uranus />} />
      <Route path="/uranus/surface" element={<Uranus />} />

      <Route path="/neptune/overview" element={<Neptune />} />
      <Route path="/neptune/internal-structure" element={<Neptune />} />
      <Route path="/neptune/surface-geology" element={<Neptune />} />
      <Route path="/neptune/structure" element={<Neptune />} />
      <Route path="/neptune/surface" element={<Neptune />} />
    </Routes>
  );
};

export default PlanetsRoutes;
