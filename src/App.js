import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Work from './components/Portfolio/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  const [currentSection, setCurrentSection] = useState('Home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id); // Set the current section based on the section in view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const getPageTitle = () => {
    switch (currentSection) {
      case 'about':
        return 'Lionel Muhire - About';
      case 'skills':
        return 'Lionel Muhire - Skills';
      case 'services':
        return 'Lionel Muhire - Services';
      case 'qualification':
        return 'Lionel Muhire - Qualification';
      case 'portfolio':
        return 'Lionel Muhire - Portfolio';
      case 'contact':
        return 'Lionel Muhire - Contact';
      default:
        return 'Lionel Muhire - Home';
    }
  };

  return (
    <>
      {/* Set the dynamic title based on the current section */}
      <Helmet>
        <title>{getPageTitle()}</title>
      </Helmet>
      
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
