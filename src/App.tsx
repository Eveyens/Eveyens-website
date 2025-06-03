import React from 'react';
import Navbar from './components/Navbar';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import References from './pages/References';
import Contact from './pages/Contact';
import Chat from './pages/Chat';

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
      case '/chat':
        return <Chat />;
      default:
        return <Home />;
    }
  };

  // Afficher le chatbot sur toutes les pages sauf la page chat (pour éviter les doublons)
  const showChatBot = currentPath !== '/chat';
  // Afficher la navbar sauf sur la page chat en plein écran
  const showNavbar = currentPath !== '/chat';

  return (
    <div className="bg-white min-h-screen">
      {showNavbar && <Navbar />}
      {showChatBot && <ChatBot mode="widget" />}
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
