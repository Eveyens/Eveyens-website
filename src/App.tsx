import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import References from './pages/References';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import DiagnosticLanding from './pages/DiagnosticLanding';
import DiagnosticExperience from './pages/DiagnosticExperience';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-white min-h-screen">
        <Navbar />
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
    </BrowserRouter>
  );
}

export default App;
