import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Offer from './pages/Offer';
import Seats from './pages/Seats';
import Destinations from './pages/Destinations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="offer" element={<Offer />} />
          <Route path="seats" element={<Seats />} />
          <Route path="destinations" element={<Destinations />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
