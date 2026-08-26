import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, Sector } from '../types';
import { SafeImage } from './SafeImage';
import { 
  Mountain, 
  Layers, 
  Building2, 
  ArrowRight, 
  Shield, 
  Gem, 
  Compass, 
  HardHat, 
  Sparkles,
  ChevronRight,
  Play
} from 'lucide-react';

interface HeroSectionProps {
  lang: Language;
  activeSector: Sector | 'all';
  onSelectSector: (sector: Sector | 'all') => void;
  onExploreProjects: () => void;
  onRequestQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  activeSector,
  onSelectSector,
  onExploreProjects,
  onRequestQuote,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      sectorKey: 'all',
      category: 'general' as const,
      title: {
        tr: 'Yerin Derinliklerinden Geleceğin Siluetlerine',
        en: 'From the Deep Earth to Iconic Skylines',
      },
      subtitle: {
        tr: 'Cromor; yüksek tenörlü madencilik gücünü, çağdaş mimari vizyonu ve ödünsüz inşaat mühendisliğini tek çatı altında birleştiren entegre kurumsal güç.',
        en: 'Cromor combines high-grade mineral extraction, visionary architecture, and heavy engineering into a seamless value chain.',
      },
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85',
      badge: { tr: 'Maden • Mimarlık • İnşaat Entegre Liderliği', en: 'Integrated Industry Leader' },
      highlight: { tr: '3 Kıtada İhracat • 25+ Yıllık Güven', en: 'Exporting to 3 Continents • 25+ Years' },
    },
    {
      sectorKey: 'maden',
      category: 'mining' as const,
      title: {
        tr: 'Maden & Doğal Taş: Küresel Sanayinin Çelik Damarı',
        en: 'Mining & Natural Stone: The Core of Global Industry',
      },
      subtitle: {
        tr: 'Yüksek tenörlü krom cevheri, birinci sınıf seleksiyon mermerler ve endüstriyel mineralleri modern ve sürdürülebilir yöntemlerle yeryüzüne kazandırıyoruz.',
        en: 'Extracting high-grade chrome ore, bespoke natural stones, and industrial minerals through sustainable extraction protocols.',
      },
      image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1920&q=85',
      badge: { tr: 'Cromor Madencilik Grubu', en: 'Cromor Mining Division' },
      highlight: { tr: 'Yıllık 250.000+ Ton Krom & 18 Ruhsatlı Ocak', en: '250,000+ Tons Chrome Ore / Year' },
    },
    {
      sectorKey: 'mimarlik',
      category: 'architecture' as const,
      title: {
        tr: 'Mimarlık & Tasarım: Doğal Malzemenin Şiirsel Formu',
        en: 'Architecture & Design: The Poetic Form of Raw Matter',
      },
      subtitle: {
        tr: 'Ocaklarımızdan çıkan cevheri ve taşı, parametrik mühendislik ve çağdaş estetik anlayışıyla ikonik yaşam alanlarına ve zamansız yapılara dönüştürüyoruz.',
        en: 'Transforming natural quarry stones and metals into sculptural living spaces and sustainable landmark architecture.',
      },
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85',
      badge: { tr: 'Cromor Mimarlık Stüdyosu', en: 'Cromor Architecture Studio' },
      highlight: { tr: '1.2M m² Tasarım • Uluslararası Tasarım Ödülleri', en: '1.2M m² Designed • Global Design Awards' },
    },
    {
      sectorKey: 'insaat',
      category: 'construction' as const,
      title: {
        tr: 'İnşaat & Taahhüt: Sarsılmaz Temeller, İleri Mühendislik',
        en: 'Construction & EPC: Unshakable Foundations, Heavy Engineering',
      },
      subtitle: {
        tr: 'Endüstriyel tesislerden lüks kulelere, altyapıdan maden tesislerine kadar sıfır kaza ve yüksek kalite standartlarında anahtar teslim projeler inşa ediyoruz.',
        en: 'Delivering turnkey industrial plants, high-rise towers, and infrastructure with zero-incident safety and uncompromising quality.',
      },
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1920&q=85',
      badge: { tr: 'Cromor İnşaat & Ağır Mühendislik', en: 'Cromor Construction Division' },
      highlight: { tr: '2.4M m² İnşa Edilen Alan • Sıfır Kaza Standardı', en: '2.4M m² Built Footprint • Zero Lost Time' },
    },
  ];

  // If user selected a sector from parent, sync slide
  useEffect(() => {
    if (activeSector === 'all') setCurrentSlide(0);
    else if (activeSector === 'maden') setCurrentSlide(1);
    else if (activeSector === 'mimarlik') setCurrentSlide(2);
    else if (activeSector === 'insaat') setCurrentSlide(3);
  }, [activeSector]);

  const activeData = heroSlides[currentSlide];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#0a0a0a] border-b border-[#222222]">
      
      {/* Background Image Slides with Ambient Transitions */}
      {heroSlides.map((slide, idx) => (
        <div 
          key={slide.sectorKey}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-30 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <SafeImage 
            src={slide.image} 
            alt="Cromor Hero Backdrop"
            fallbackCategory={slide.category}
            className="w-full h-full object-cover object-center filter grayscale contrast-125"
          />
        </div>
      ))}

      {/* Atmospheric Gradients & Topographic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/70 z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-topo-pattern opacity-30 z-10 pointer-events-none"></div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-12 w-full my-auto py-12">
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl space-y-6"
        >
          
          {/* Badge Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-[#222222]">
            <span className="w-1.5 h-1.5 bg-[#c5a358]"></span>
            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#c5a358]">
              {activeData.badge[lang]}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#f4f4f4] tracking-tight leading-[1.08]">
            {activeData.title[lang]}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#888888] font-normal leading-relaxed max-w-2xl">
            {activeData.subtitle[lang]}
          </p>

          {/* Key Stat Highlight Box */}
          <div className="p-3 bg-[#111111] border border-[#222222] inline-flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-[#c5a358] shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-[#f4f4f4]">
              {activeData.highlight[lang]}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              id="hero-request-quote-btn"
              onClick={onRequestQuote}
              className="px-7 py-3.5 bg-[#c5a358] text-black font-bold text-xs tracking-[2px] uppercase hover:bg-[#ebd7bd] transition-all flex items-center gap-2"
            >
              <span>{lang === 'tr' ? 'Keşif & Teklif Talebi' : 'Request a Proposal'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-explore-projects-btn"
              onClick={onExploreProjects}
              className="px-7 py-3.5 bg-[#111111] hover:bg-[#181818] border border-[#222222] text-[#f4f4f4] font-semibold text-xs tracking-[2px] uppercase transition-all flex items-center gap-2"
            >
              <span>{lang === 'tr' ? 'Projelerimizi İnceleyin' : 'Explore Portfolio'}</span>
              <ChevronRight className="w-4 h-4 text-[#c5a358]" />
            </button>
          </div>

        </motion.div>
      </div>

      {/* Interactive Bottom Sector Switcher Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-20 max-w-7xl mx-auto px-4 lg:px-12 w-full mt-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 bg-[#0a0a0a] border border-[#222222] divide-y md:divide-y-0 md:divide-x divide-[#222222]">
          
          {/* Tab 0: Tüm Alanlar (All) */}
          <button
            id="hero-tab-all"
            onClick={() => {
              setCurrentSlide(0);
              onSelectSector('all');
            }}
            className={`text-left p-4 transition-all flex items-center gap-3 group relative ${
              currentSlide === 0
                ? 'bg-[#141414] border-b-2 md:border-b-0 md:border-t-2 border-[#c5a358]'
                : 'hover:bg-[#111111]'
            }`}
          >
            <div className={`w-8 h-8 flex items-center justify-center shrink-0 border transition-colors ${
              currentSlide === 0 ? 'bg-[#c5a358] text-black border-[#c5a358]' : 'bg-[#111111] text-[#c5a358] border-[#222222]'
            }`}>
              <Gem className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[1.5px] text-[#888888] font-bold">
                00 / {lang === 'tr' ? 'GENEL BAKIŞ' : 'OVERVIEW'}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#f4f4f4] group-hover:text-[#c5a358] transition-colors">
                {lang === 'tr' ? 'Entegre Cromor' : 'Integrated Cromor'}
              </div>
            </div>
          </button>

          {/* Tab 1: Maden */}
          <button
            id="hero-tab-maden"
            onClick={() => {
              setCurrentSlide(1);
              onSelectSector('maden');
            }}
            className={`text-left p-4 transition-all flex items-center gap-3 group relative ${
              currentSlide === 1
                ? 'bg-[#141414] border-b-2 md:border-b-0 md:border-t-2 border-[#c5a358]'
                : 'hover:bg-[#111111]'
            }`}
          >
            <div className={`w-8 h-8 flex items-center justify-center shrink-0 border transition-colors ${
              currentSlide === 1 ? 'bg-[#c5a358] text-black border-[#c5a358]' : 'bg-[#111111] text-[#c5a358] border-[#222222]'
            }`}>
              <Mountain className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[1.5px] text-[#888888] font-bold">
                01 / {lang === 'tr' ? 'MADEN' : 'MINING'}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#f4f4f4] group-hover:text-[#c5a358] transition-colors">
                {lang === 'tr' ? 'Maden & Taş' : 'Mining & Ore'}
              </div>
            </div>
          </button>

          {/* Tab 2: Mimarlık */}
          <button
            id="hero-tab-mimarlik"
            onClick={() => {
              setCurrentSlide(2);
              onSelectSector('mimarlik');
            }}
            className={`text-left p-4 transition-all flex items-center gap-3 group relative ${
              currentSlide === 2
                ? 'bg-[#141414] border-b-2 md:border-b-0 md:border-t-2 border-[#c5a358]'
                : 'hover:bg-[#111111]'
            }`}
          >
            <div className={`w-8 h-8 flex items-center justify-center shrink-0 border transition-colors ${
              currentSlide === 2 ? 'bg-[#c5a358] text-black border-[#c5a358]' : 'bg-[#111111] text-[#c5a358] border-[#222222]'
            }`}>
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[1.5px] text-[#888888] font-bold">
                02 / {lang === 'tr' ? 'MİMARLIK' : 'ARCHITECTURE'}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#f4f4f4] group-hover:text-[#c5a358] transition-colors">
                {lang === 'tr' ? 'Mimarlık Stüdyosu' : 'Architecture Studio'}
              </div>
            </div>
          </button>

          {/* Tab 3: İnşaat */}
          <button
            id="hero-tab-insaat"
            onClick={() => {
              setCurrentSlide(3);
              onSelectSector('insaat');
            }}
            className={`text-left p-4 transition-all flex items-center gap-3 group relative ${
              currentSlide === 3
                ? 'bg-[#141414] border-b-2 md:border-b-0 md:border-t-2 border-[#c5a358]'
                : 'hover:bg-[#111111]'
            }`}
          >
            <div className={`w-8 h-8 flex items-center justify-center shrink-0 border transition-colors ${
              currentSlide === 3 ? 'bg-[#c5a358] text-black border-[#c5a358]' : 'bg-[#111111] text-[#c5a358] border-[#222222]'
            }`}>
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[1.5px] text-[#888888] font-bold">
                03 / {lang === 'tr' ? 'İNŞAAT' : 'CONSTRUCTION'}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#f4f4f4] group-hover:text-[#c5a358] transition-colors">
                {lang === 'tr' ? 'İnşaat & Taahhüt' : 'Construction & EPC'}
              </div>
            </div>
          </button>

        </div>
      </motion.div>

    </section>
  );
};
