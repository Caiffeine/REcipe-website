// REcipe Web - Main App Component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/nav-bar/nav-bar';
import Footer from './components/footer/footer';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
import HomePage from './pages/home/home-page';
import AboutPage from './pages/about/about-page';
import DownloadPage from './pages/download/download-page';
import ContactPage from './pages/contact/contact-page';
import NotFound from './pages/not-found/not-found';
import { useAOSInit } from './hooks/use-aos-init';
import './styles/variables.css';
import './styles/base.css';
import './styles/components.css';

function App() {
  // Initialize AOS animations
  useAOSInit({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
