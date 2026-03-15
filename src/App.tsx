import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Exercise01 } from './pages/Exercise01';
import { Exercise02 } from './pages/Exercise02';
import { Exercise03 } from './pages/Exercise03';
import { Exercise04 } from './pages/Exercise04';
import { Exercise05 } from './pages/Exercise05';
import { Exercise06 } from './pages/Exercise06';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="exercise/1" element={<Exercise01 />} />
        <Route path="exercise/2" element={<Exercise02 />} />
        <Route path="exercise/3" element={<Exercise03 />} />
        <Route path="exercise/4" element={<Exercise04 />} />
        <Route path="exercise/5" element={<Exercise05 />} />
        <Route path="exercise/6" element={<Exercise06 />} />
      </Route>
    </Routes>
  );
}
