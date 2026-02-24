import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import ClientLogos from './components/ClientLogos';
import Footer from './components/Footer';

const Profile = lazy(() => import('./components/Profile'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const SkillsPage = lazy(() => import('./components/SkillsPage'));
const ProjectsPage = lazy(() => import('./components/ProjectsPage'));
const BlogPage = lazy(() => import('./components/BlogPage'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const CheapWebsitePage = lazy(() => import('./components/CheapWebsitePage'));
const FAQPage = lazy(() => import('./components/FAQPage'));

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  useEffect(() => {
    const LOADER_DURATION_MS = 2600;
    const hideLoaderTimer = setTimeout(() => {
      setIsLoaderVisible(false);
    }, LOADER_DURATION_MS);

    return () => {
      clearTimeout(hideLoaderTimer);
    };
  }, []);

  return (
    <ThemeProvider>
      <ScrollToTop />
      <style>{`
        @keyframes dt-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        @keyframes dt-glow {
          0%, 100% { opacity: 0.45; transform: scale(0.95); }
          50% { opacity: 0.9; transform: scale(1.08); }
        }
        @keyframes dt-sweep {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
        .loader-float {
          animation: dt-float 3.2s ease-in-out infinite;
        }
        .loader-glow {
          animation: dt-glow 3.2s ease-in-out infinite;
        }
        .loader-sweep {
          animation: dt-sweep 2.6s ease-in-out infinite;
        }
      `}</style>

      <div className="App overflow-x-hidden">
        <Navbar />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ClientLogos />
                <About />
                <Services />
                <HowItWorks />
                <Testimonials />
              </>
            } />
            <Route path="/profile" element={<Profile />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/cheap-website-south-africa" element={<CheapWebsitePage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>

      {isLoaderVisible && (
        <div className="fixed inset-0 z-[9999] min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <div className="relative inline-flex items-center justify-center">
              <div className="loader-glow absolute inset-0 -m-10 rounded-full bg-cyan-400/20 blur-3xl"></div>
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                <div className="loader-sweep absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent"></div>
              </div>
              <img
                src="/Logos/DynastyTechLogo-website.png"
                alt="Dynasty Tech Solutions"
                className="loader-float relative w-[32rem] sm:w-[40rem] md:w-[48rem] max-w-[92vw] h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
