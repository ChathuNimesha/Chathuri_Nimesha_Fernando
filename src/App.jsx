import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SceneBanner from './components/SceneBanner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Experience from './components/Experience';
import Volunteer from './components/Volunteer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <SceneBanner />
      <Skills />
      <Projects />
      <Experience />
      <Volunteer />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
