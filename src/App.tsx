import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import IndustryApplications from './components/IndustryApplications';
import Mission from './components/Mission';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import { ToastProvider } from './contexts/ToastContext';

function App() {
  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link?.hash) {
        e.preventDefault();
        const targetElement = document.querySelector(link.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          // Update URL without triggering scroll
          window.history.pushState(null, '', link.hash);
        }
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);

  return (
    <ToastProvider>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main className="pt-20"> {/* Added padding-top to account for fixed header */}
          <Hero />
          <Features />
          <IndustryApplications />
          <Mission />
          <Testimonials />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
        
        {/* Floating Components */}
        <CookieConsent />
        <ScrollToTop />
        {/* <SocialMediaBar /> */}
      </div>
    </ToastProvider>
  );
}

export default App;