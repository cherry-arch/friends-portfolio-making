
import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <ParticleBackground />
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero setActiveSection={setActiveSection} />
        <About id="about" setActiveVisibility={setActiveSection} />
        <Education id="education" setActiveVisibility={setActiveSection} />
        <Skills id="skills" setActiveVisibility={setActiveSection} />
        <Certifications id="certifications" setActiveVisibility={setActiveSection} />
        <Projects id="projects" setActiveVisibility={setActiveSection} />
        <Contact id="contact" setActiveVisibility={setActiveSection} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
