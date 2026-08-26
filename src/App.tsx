import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Language, Sector, Project } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { SectorsSection } from './components/SectorsSection';
import { IntegratedSynergy } from './components/IntegratedSynergy';
import { ProjectsSection } from './components/ProjectsSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { SustainabilityESG } from './components/SustainabilityESG';
import { NewsSection } from './components/NewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('tr');
  const [activeSector, setActiveSector] = useState<Sector | 'all'>('all');
  const [selectedSectorTab, setSelectedSectorTab] = useState<Sector>('maden');
  const [projectForQuote, setProjectForQuote] = useState<Project | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleSelectSector = (sec: Sector | 'all') => {
    setActiveSector(sec);
    if (sec !== 'all') {
      setSelectedSectorTab(sec);
    }
  };

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRequestQuote = () => {
    const el = document.getElementById('calculator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreSynergy = () => {
    const el = document.getElementById('synergy');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewSectorProjects = (sector: Sector) => {
    setActiveSector(sector);
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRequestQuoteWithProject = (project: Project) => {
    setProjectForQuote(project);
    const el = document.getElementById('calculator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f4f4f4] font-sans selection:bg-[#c5a358] selection:text-black relative">
      
      {/* Precision Gold Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#c5a358] origin-left z-[100] shadow-[0_0_8px_rgba(197,163,88,0.5)]"
        style={{ scaleX }}
      />

      {/* Top Fixed Navigation */}
      <Navbar 
        lang={lang}
        onLanguageChange={setLang}
        onSelectSector={(sec) => handleSelectSector(sec)}
        onOpenCalculator={handleRequestQuote}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        
        {/* Dynamic Hero Section */}
        <HeroSection 
          lang={lang}
          activeSector={activeSector}
          onSelectSector={handleSelectSector}
          onExploreProjects={handleExploreProjects}
          onRequestQuote={handleRequestQuote}
        />

        {/* Floating Impact Stats */}
        <StatsSection lang={lang} />

        {/* Corporate Profile & About Us */}
        <AboutSection 
          lang={lang}
          onExploreSynergy={handleExploreSynergy}
        />

        {/* 3 Core Business Pillars (Maden, Mimarlık, İnşaat) */}
        <SectorsSection 
          lang={lang}
          selectedSector={selectedSectorTab}
          onSelectSector={setSelectedSectorTab}
          onViewSectorProjects={handleViewSectorProjects}
          onRequestQuote={handleRequestQuote}
        />

        {/* Integrated Value Loop (From Earth to Skylines) */}
        <IntegratedSynergy 
          lang={lang}
          onOpenEstimator={handleRequestQuote}
        />

        {/* Flagship Projects Portfolio with Filter and Detail Modal */}
        <ProjectsSection 
          lang={lang}
          initialFilter={activeSector}
          onRequestQuoteWithProject={handleRequestQuoteWithProject}
        />

        {/* Interactive Cost Estimator & Proposal Wizard */}
        <QuoteCalculator 
          lang={lang}
          preselectedProject={projectForQuote}
        />

        {/* Sustainability, ESG & Health-Safety Standards */}
        <SustainabilityESG lang={lang} />

        {/* News, Press & Discoveries */}
        <NewsSection lang={lang} />

        {/* Contact & Regional Locations */}
        <ContactSection lang={lang} />

      </main>

      {/* Comprehensive Corporate Footer */}
      <Footer 
        lang={lang}
        onSelectSector={(sec) => handleSelectSector(sec)}
      />

    </div>
  );
}
