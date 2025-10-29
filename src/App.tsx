import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import References from './pages/References';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

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
      case '/privacy':
        return <Privacy />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
