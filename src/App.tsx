import React from 'react';
import Navbar from './components/layout/Navbar';
import ContactButton from './components/ui/ContactButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import References from './pages/References';
import Contact from './pages/Contact';

function App() {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/about':
        return <About />;
      case '/services':
        return <Services />;
      case '/references':
        return <References />;
      case '/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const showContactButton = !['/contact', '/'].includes(currentPath);

  return (
    <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 min-h-screen text-white">
      <Navbar />
      {showContactButton && <ContactButton />}
      {renderPage()}
    </div>
  );
}

export default App;
