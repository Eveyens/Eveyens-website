import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import DiagnosticCampaignHeader from './components/DiagnosticCampaignHeader';
import { ScrollToTop } from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import References from './pages/References';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import DiagnosticLanding from './pages/DiagnosticLanding';
import DiagnosticExperience from './pages/DiagnosticExperience';

function AppShell() {
  const { pathname } = useLocation();
  const isDiagnosticCampaign = pathname.startsWith('/diagnostic-temps-collectifs');

  return (
    <div className="min-h-screen bg-white">
      {isDiagnosticCampaign ? <DiagnosticCampaignHeader /> : <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/references" element={<References />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/diagnostic-temps-collectifs" element={<DiagnosticLanding />} />
          <Route path="/diagnostic-temps-collectifs/experience" element={<DiagnosticExperience />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
