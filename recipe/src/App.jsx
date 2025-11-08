// REcipe Web - Main App Component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/nav-bar/nav-bar';
import Footer from './components/footer/footer';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';
import ClickSpark from './components/click-spark/ClickSpark';
import CustomCursor from './components/custom-cursor/custom-cursor';
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
      <CustomCursor />
      <ScrollToTop />
      <ClickSpark
        sparkColor="#ff9900ff"
        sparkSize={12}
        sparkRadius={20}
        sparkCount={8}
        duration={500}
        easing="ease-out"
      >
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
      </ClickSpark>
    </Router>
  );
}

export default App;
