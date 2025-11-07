// src/App.jsx

import React, { useState, useEffect } from 'react'; 

// === Component Imports (All Sections) ===
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx'; 
import AboutSection from './components/AboutSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import PlansSection from './components/PlansSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import PortfolioSection from './components/PortfolioSection.jsx';
import Footer from './components/Footer.jsx'; 

// === Modal Imports ===
import AppointmentModal from './components/AppointmentModal.jsx';
import QuoteModal from './components/QuoteModal.jsx'; 
import TawkMessenger from './components/TawkMessenger.jsx';


function App() {
  // === State Management ===
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  
  // === Handler Functions ===
  
  // Unified Modal Toggle Handler
  const handleModalToggle = (modalName, packageName = '') => {
    if (modalName === 'appointmentModal') {
      setIsAppointmentOpen(prev => !prev);
      setIsQuoteOpen(false);
    } else if (modalName === 'quoteModal') {
      setSelectedPackage(packageName);
      setIsQuoteOpen(true);
      setIsAppointmentOpen(false);
    }
  };
  
  // Menu Toggle (Used by the burger button)
  const toggleMenu = () => {
      setIsMenuOpen(prev => !prev);
  };
  
  // Specific Close Quote Handler
  const closeQuoteModal = () => {
      setIsQuoteOpen(false);
      setSelectedPackage('');
  };

  // ===================================
  // 🌟 useEffect Hooks for Script.js Logic 🌟
  // ===================================
  
  // 1. Mobile Menu Class Toggle Logic (Replaces burgerMenu.addEventListener)
  useEffect(() => {
    const navbarMenu = document.getElementById("ss-menu");
    const burgerMenu = document.getElementById("ss-burger");

    if (navbarMenu && burgerMenu) {
      if (isMenuOpen) {
        navbarMenu.classList.add('is-active');
        burgerMenu.classList.add('is-active');
        document.body.style.overflow = 'hidden'; // Prevents background scrolling
      } else {
        navbarMenu.classList.remove('is-active');
        burgerMenu.classList.remove('is-active');
        document.body.style.overflow = 'initial';
      }
    }
  }, [isMenuOpen]); // Runs whenever the menu state changes

  // 2. Resize Fix Logic (Replaces window.addEventListener("resize"))
  useEffect(() => {
    const handleResize = () => {
      // If the screen width increases past the mobile breakpoint (868px), close the menu
      if (window.innerWidth > 868 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);
  
  // 3. Sticky Header & Active Link Logic
  useEffect(() => {
    const handleScroll = () => {
        const currentScrollPosition = window.scrollY;
        
        // Sticky Header
        if (currentScrollPosition > 100) { 
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }

        // Active Link
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (currentScrollPosition >= sectionTop && currentScrollPosition < sectionTop + sectionHeight) {
                setActiveLink(section.id);
            }
        });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  

  return (
    <>
      {/* 1. HEADER (Passing control functions and sticky state) */}
      <Header 
        toggleAppointmentModal={() => handleModalToggle('appointmentModal')} 
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen} 
        isSticky={isSticky}
        activeLink={activeLink}
      />
      
      {/* 2. HERO */}
      <Hero toggleAppointmentModal={() => handleModalToggle('appointmentModal')} />
      
      {/* 3. ABOUT */}
      <AboutSection />
      
      {/* 4. SERVICES */}
      <ServicesSection />
      
      {/* 5. SKILLS */}
      <SkillsSection />
      
      {/* 6. PLANS / PACKAGES */}
      <PlansSection 
        openQuoteModal={(packageName) => handleModalToggle('quoteModal', packageName)} 
      />
      
      {/* 7. CONTACT */}
      <ContactSection />

      {/* 8. PORTFOLIO */}
      <PortfolioSection />

      
      {/* 9. FOOTER */}
      <Footer />
      
      {/* 10. CONDITIONAL MODAL RENDERING */}
      <AppointmentModal 
          show={isAppointmentOpen} 
          onClose={() => handleModalToggle('appointmentModal')} 
      />
      <QuoteModal 
          show={isQuoteOpen} 
          onClose={closeQuoteModal}
          selectedPackage={selectedPackage}
      />
      <TawkMessenger />
    </>
  );
}

export default App;