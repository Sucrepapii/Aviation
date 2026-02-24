import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Offer from './pages/Offer';
import Seats from './pages/Seats';
import Destinations from './pages/Destinations';
import ExecutiveClub from './pages/ExecutiveClub';
import LuxuryLounges from './pages/LuxuryLounges';
import OnboardDining from './pages/OnboardDining';
import PrivateJet from './pages/PrivateJet';
import PartnerAirlines from './pages/PartnerAirlines';

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

          {/* New Experience Routes */}
          <Route path="executive-club" element={<ExecutiveClub />} />
          <Route path="luxury-lounges" element={<LuxuryLounges />} />
          <Route path="onboard-dining" element={<OnboardDining />} />
          <Route path="private-jet" element={<PrivateJet />} />
          <Route path="partner-airlines" element={<PartnerAirlines />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
