import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, Sector } from '../types';
import { SECTOR_DETAILS } from '../data/content';
import { SafeImage } from './SafeImage';
import { 
  Mountain, 
  Layers, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Gem, 
  Leaf, 
  Compass, 
  Home, 
  Box, 
  Cpu, 
  Hammer, 
  Factory, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface SectorsSectionProps {
  lang: Language;
  selectedSector: Sector;
  onSelectSector: (sector: Sector) => void;
  onViewSectorProjects: (sector: Sector) => void;
  onRequestQuote: () => void;
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({
  lang,
  selectedSector,
  onSelectSector,
  onViewSectorProjects,
  onRequestQuote,
}) => {
  const [activeTab, setActiveTab] = useState<Sector>(selectedSector);

  const sectorKeys: Sector[] = ['maden', 'mimarlik', 'insaat'];
  const activeDetail = SECTOR_DETAILS[activeTab];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gem': return <Gem className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Mountain': return <Mountain className="w-5 h-5" />;
      case 'Leaf': return <Leaf className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Home': return <Home className="w-5 h-5" />;
      case 'Box': return <Box className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Hammer': return <Hammer className="w-5 h-5" />;
      case 'Factory': return <Factory className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="sectors" className="py-24 relative bg-[#0a0a0a] border-b border-[#222222]">
      
      <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#c5a358]">
            <span className="w-4 h-[1px] bg-[#c5a358]"></span>
            {lang === 'tr' ? 'Ana Faaliyet Alanlarımız' : 'Our Core Business Units'}
            <span className="w-4 h-[1px] bg-[#c5a358]"></span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f4f4f4] tracking-tight">
            {lang === 'tr' 
              ? '3 Temel Disiplinde Entegre Çözümler' 
              : 'Integrated Excellence Across 3 Core Pillars'}
          </h2>
          <p className="text-[#888888] text-sm sm:text-base">
            {lang === 'tr'
              ? 'Maden sahalarından mimarlık masasına, mimarlıktan şantiye sahasına kadar her adımda tavizsiz kalite ve mühendislik standardı.'
              : 'From mining quarries to architectural blueprints, and from drafting to heavy turnkey construction.'}
          </p>
        </motion.div>

        {/* 3 Sector Tabs Switcher */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {sectorKeys.map((sKey, idx) => {
            const sec = SECTOR_DETAILS[sKey];
            const isSelected = activeTab === sKey;
            return (
              <motion.button
                key={sKey}
                id={`sector-tab-btn-${sKey}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => {
                  setActiveTab(sKey);
                  onSelectSector(sKey);
                }}
                className={`p-6 text-left transition-all relative flex flex-col justify-between group cursor-pointer ${
                  isSelected 
                    ? 'bg-[#111111] border-2 border-[#c5a358]' 
                    : 'bg-[#0a0a0a] border border-[#222222] hover:border-[#444444] hover:bg-[#111111]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 flex items-center justify-center border transition-colors ${
                      isSelected ? 'bg-[#c5a358] text-black border-[#c5a358]' : 'bg-[#111111] text-[#c5a358] border-[#222222]'
                    }`}>
                      {sKey === 'maden' && <Mountain className="w-5 h-5" />}
                      {sKey === 'mimarlik' && <Layers className="w-5 h-5" />}
                      {sKey === 'insaat' && <Building2 className="w-5 h-5" />}
                    </div>

                    <span className={`text-[10px] font-bold uppercase tracking-[2px] px-2 py-0.5 border ${
                      isSelected ? 'border-[#c5a358] text-[#c5a358] bg-[#1a1a1a]' : 'text-[#888888] border-[#222222] bg-[#111111]'
                    }`}>
                      {sKey === 'maden' && (lang === 'tr' ? '01 / Maden' : '01 / Mining')}
                      {sKey === 'mimarlik' && (lang === 'tr' ? '02 / Mimarlık' : '02 / Architecture')}
                      {sKey === 'insaat' && (lang === 'tr' ? '03 / İnşaat' : '03 / Construction')}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#f4f4f4] group-hover:text-[#c5a358] transition-colors mb-2 uppercase tracking-wide">
                    {sec.title[lang]}
                  </h3>

                  <p className="text-xs text-[#888888] leading-relaxed line-clamp-2">
                    {sec.shortDesc[lang]}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[1.5px] text-[#c5a358]">
                  <span>{lang === 'tr' ? 'Disiplini İncele' : 'Explore Discipline'}</span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Sector Deep Dive Card */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0a0a0a] border border-[#222222] p-6 lg:p-12 relative"
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#c5a358]">
                  <span className="w-1.5 h-1.5 bg-[#c5a358]"></span>
                  {activeDetail.tagline[lang]}
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#f4f4f4]">
                  {activeDetail.title[lang]}
                </h3>
                <p className="text-[#888888] text-sm sm:text-base leading-relaxed">
                  {activeDetail.fullDesc[lang]}
                </p>
              </div>

              {/* 4 Capabilities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeDetail.capabilities.map((cap, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 bg-[#111111] border border-[#222222] hover:border-[#c5a358] transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-1.5 bg-[#181818] border border-[#222222] text-[#c5a358]">
                        {getIcon(cap.icon)}
                      </div>
                      <h4 className="text-[#f4f4f4] font-bold text-xs sm:text-sm uppercase tracking-wider">
                        {cap.title[lang]}
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#888888] leading-relaxed">
                      {cap.desc[lang]}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id={`view-projects-${activeTab}-btn`}
                  onClick={() => onViewSectorProjects(activeTab)}
                  className="px-6 py-3 bg-[#111111] hover:bg-[#181818] border border-[#222222] text-[#f4f4f4] font-bold text-xs uppercase tracking-[2px] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{lang === 'tr' ? `${activeDetail.title[lang]} Projeleri` : `View ${activeDetail.title[lang]} Projects`}</span>
                  <ArrowRight className="w-4 h-4 text-[#c5a358]" />
                </button>

                <button
                  id={`quote-${activeTab}-btn`}
                  onClick={onRequestQuote}
                  className="px-6 py-3 bg-[#c5a358] hover:bg-[#ebd7bd] text-black font-bold text-xs uppercase tracking-[2px] transition-all cursor-pointer"
                >
                  {lang === 'tr' ? 'Bu Alanda Teklif Talep Et' : 'Request Sector Quotation'}
                </button>
              </div>

            </div>

            {/* Right Visual & Key Metrics */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="relative border border-[#222222] overflow-hidden h-72 sm:h-80 group">
                <SafeImage 
                  src={activeDetail.heroImage} 
                  alt={activeDetail.title[lang]}
                  fallbackCategory={activeTab === 'maden' ? 'mining' : activeTab === 'mimarlik' ? 'architecture' : 'construction'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0a0a0a]/90 border border-[#222222] text-xs text-[#f4f4f4]">
                  <span className="text-[#c5a358] font-bold">Cromor {activeDetail.title[lang]}</span> • {lang === 'tr' ? 'Yüksek Mühendislik & Güven Standardı' : 'High Engineering & Reliability Standard'}
                </div>
              </div>

              {/* Sector Specific Metrics */}
              <div className="grid grid-cols-2 gap-3">
                {activeDetail.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 bg-[#111111] border border-[#222222] text-center">
                    <div className="font-heading text-2xl font-extrabold text-[#c5a358]">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-[#888888] font-bold uppercase tracking-[1px] mt-1">
                      {m.label[lang]}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

