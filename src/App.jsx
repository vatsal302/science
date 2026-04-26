import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Physics from './pages/Physics';
import Chemistry from './pages/Chemistry';
import Biology from './pages/Biology';
import Environmental from './pages/Environmental';
import DataInsights from './pages/DataInsights';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="physics" element={<Physics />} />
          <Route path="chemistry" element={<Chemistry />} />
          <Route path="biology" element={<Biology />} />
          <Route path="environmental" element={<Environmental />} />
          <Route path="data-insights" element={<DataInsights />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
