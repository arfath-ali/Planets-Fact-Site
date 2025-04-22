import { Routes, Route } from 'react-router-dom';
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
      <Route path="/" element={<Earth />} />
      <Route path="/mercury" element={<Mercury />} />
      <Route path="/venus" element={<Venus />} />
      <Route path="/earth" element={<Earth />} />
      <Route path="/mars" element={<Mars />} />
      <Route path="/jupiter" element={<Jupiter />} />
      <Route path="/saturn" element={<Saturn />} />
      <Route path="/uranus" element={<Uranus />} />
      <Route path="/neptune" element={<Neptune />} />
    </Routes>
  );
};

export default PlanetsRoutes;
