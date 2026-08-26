import React, { useState, useEffect } from 'react';
import { Language, Sector } from '../types';
import { 
  Building2, 
  Layers, 
  Mountain, 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  Globe, 
  ArrowRight,
  FileText,
  ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onSelectSector: (sector: Sector) => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  onSelectSector,
  onOpenCalculator,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sectorsDropdownOpen, setSectorsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTranslations = {
    about: { tr: 'Kurumsal', en: 'About Us' },
    sectors: { tr: 'Faaliyet Alanları', en: 'Sectors' },
    maden: { tr: 'Maden & Hammadde', en: 'Mining & Minerals' },
    mimarlik: { tr: 'Mimarlık & Tasarım', en: 'Architecture & Design' },
    insaat: { tr: 'İnşaat & Taahhüt', en: 'Construction & EPC' },
    synergy: { tr: 'Entegre Değer Döngüsü', en: 'Integrated Synergy' },
    projects: { tr: 'Projeler', en: 'Projects' },
    sustainability: { tr: 'Sürdürülebilirlik & İSG', en: 'ESG & Safety' },
    calculator: { tr: 'Keşif & Teklif', en: 'Cost Estimator' },
    news: { tr: 'Basın & Haberler', en: 'News & Media' },
    contact: { tr: 'İletişim', en: 'Contact' },
    getQuote: { tr: 'Teklif Talep Et', en: 'Request Proposal' },
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setSectorsDropdownOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar for Corporate Details */}
      <div className={`w-full bg-[#0a0a0a] text-xs text-[#888888] border-b border-[#222222] transition-all duration-300 px-4 lg:px-12 py-1.5 hidden md:flex items-center justify-between ${isScrolled ? 'h-0 py-0 opacity-0 overflow-hidden border-none' : 'h-8 opacity-100'}`}>
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-2 text-[#f4f4f4] text-[11px] uppercase tracking-[1px]">
            <span className="w-1.5 h-1.5 bg-[#c5a358]"></span>
            {lang === 'tr' ? 'Maden • Mimarlık • İnşaat Entegre Grubu' : 'Integrated Mining • Architecture • Construction Group'}
          </span>
          <div className="h-3 w-[1px] bg-[#222222]" />
          <a href="tel:+902128905500" className="flex items-center gap-1.5 hover:text-[#c5a358] transition-colors text-[11px]">
            <Phone className="w-3 h-3 text-[#c5a358]" />
            +90 (212) 890 55 00
          </a>
          <a href="mailto:info@cromor.com.tr" className="flex items-center gap-1.5 hover:text-[#c5a358] transition-colors text-[11px]">
            <Mail className="w-3 h-3 text-[#c5a358]" />
            info@cromor.com.tr
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-1.5 text-[#888888] text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c5a358]" />
            <span>ISO 9001 / ISO 14001 / ISO 45001</span>
          </div>
          <div className="h-3 w-[1px] bg-[#222222]" />
          {/* Language Toggle */}
          <div className="flex items-center bg-[#0a0a0a] border border-[#222222] p-0.5 text-[10px]">
            <button
              id="lang-tr-btn"
              onClick={() => onLanguageChange('tr')}
              className={`px-2 py-0.5 transition-all font-bold tracking-wider ${
                lang === 'tr' ? 'bg-[#c5a358] text-black' : 'text-[#888888] hover:text-[#f4f4f4]'
              }`}
            >
              TR
            </button>
            <button
              id="lang-en-btn"
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-0.5 transition-all font-bold tracking-wider ${
                lang === 'en' ? 'bg-[#c5a358] text-black' : 'text-[#888888] hover:text-[#f4f4f4]'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 px-4 lg:px-12 ${
        isScrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md py-3.5 border-b border-[#222222]' 
          : 'bg-[#0a0a0a]/80 backdrop-blur-sm py-4 border-b border-[#222222]/50'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#root" 
            id="brand-logo-btn"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            {/* Custom Mineral/Geometric Logo Monogram */}
            <div className="relative w-9 h-9 bg-[#111111] border border-[#222222] flex items-center justify-center group-hover:border-[#c5a358] transition-colors">
              <span className="font-brand font-bold text-lg text-[#c5a358] tracking-wider">C</span>
            </div>

            <div className="flex flex-col">
              <span className="font-brand text-xl font-bold tracking-[0.25em] text-[#f4f4f4] group-hover:text-[#c5a358] transition-colors leading-none">
                CROMOR
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#888888] uppercase font-medium mt-1">
                Maden • Mimarlık • İnşaat
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 text-xs uppercase tracking-[1.5px] font-semibold text-[#888888]">
            <button 
              id="nav-about-btn"
              onClick={() => scrollToSection('about')}
              className="px-3 py-2 hover:text-[#c5a358] transition-colors"
            >
              {navTranslations.about[lang]}
            </button>

            {/* Sectors Mega/Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setSectorsDropdownOpen(true)}
              onMouseLeave={() => setSectorsDropdownOpen(false)}
            >
              <button 
                id="nav-sectors-btn"
                onClick={() => scrollToSection('sectors')}
                className="px-3 py-2 hover:text-[#c5a358] transition-colors flex items-center gap-1"
              >
                <span>{navTranslations.sectors[lang]}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${sectorsDropdownOpen ? 'rotate-180 text-[#c5a358]' : ''}`} />
              </button>

              {sectorsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-[#0a0a0a] border border-[#222222] p-2 mt-2 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-1 duration-150">
                  <div 
                    onClick={() => { onSelectSector('maden'); scrollToSection('sectors'); setSectorsDropdownOpen(false); }}
                    className="flex items-center gap-3 p-2.5 hover:bg-[#141414] cursor-pointer transition-colors group border-b border-[#222222]/50"
                  >
                    <div className="w-7 h-7 bg-[#141414] border border-[#222222] flex items-center justify-center text-[#c5a358] group-hover:bg-[#c5a358] group-hover:text-black transition-colors">
                      <Mountain className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[#f4f4f4] text-xs font-semibold group-hover:text-[#c5a358] transition-colors">{navTranslations.maden[lang]}</div>
                      <div className="text-[10px] text-[#888888]">Krom, Mermer & Doğal Mineraller</div>
                    </div>
                  </div>

                  <div 
                    onClick={() => { onSelectSector('mimarlik'); scrollToSection('sectors'); setSectorsDropdownOpen(false); }}
                    className="flex items-center gap-3 p-2.5 hover:bg-[#141414] cursor-pointer transition-colors group border-b border-[#222222]/50"
                  >
                    <div className="w-7 h-7 bg-[#141414] border border-[#222222] flex items-center justify-center text-[#c5a358] group-hover:bg-[#c5a358] group-hover:text-black transition-colors">
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[#f4f4f4] text-xs font-semibold group-hover:text-[#c5a358] transition-colors">{navTranslations.mimarlik[lang]}</div>
                      <div className="text-[10px] text-[#888888]">Konsept Tasarım, BIM & İç Mimari</div>
                    </div>
                  </div>

                  <div 
                    onClick={() => { onSelectSector('insaat'); scrollToSection('sectors'); setSectorsDropdownOpen(false); }}
                    className="flex items-center gap-3 p-2.5 hover:bg-[#141414] cursor-pointer transition-colors group"
                  >
                    <div className="w-7 h-7 bg-[#141414] border border-[#222222] flex items-center justify-center text-[#c5a358] group-hover:bg-[#c5a358] group-hover:text-black transition-colors">
                      <Building2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[#f4f4f4] text-xs font-semibold group-hover:text-[#c5a358] transition-colors">{navTranslations.insaat[lang]}</div>
                      <div className="text-[10px] text-[#888888]">Anahtar Teslim Taahhüt & Sanayi Tesisleri</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button 
              id="nav-synergy-btn"
              onClick={() => scrollToSection('synergy')}
              className="px-3 py-2 hover:text-[#c5a358] transition-colors"
            >
              {navTranslations.synergy[lang]}
            </button>

            <button 
              id="nav-projects-btn"
              onClick={() => scrollToSection('projects')}
              className="px-3 py-2 hover:text-[#c5a358] transition-colors"
            >
              {navTranslations.projects[lang]}
            </button>

            <button 
              id="nav-sustainability-btn"
              onClick={() => scrollToSection('sustainability')}
              className="px-3 py-2 hover:text-[#c5a358] transition-colors"
            >
              {navTranslations.sustainability[lang]}
            </button>

            <button 
              id="nav-calculator-btn"
              onClick={() => scrollToSection('calculator')}
              className="px-3 py-2 hover:text-[#c5a358] transition-colors text-[#f4f4f4] flex items-center gap-1.5"
            >
              <FileText className="w-3 h-3 text-[#c5a358]" />
              <span>{navTranslations.calculator[lang]}</span>
            </button>

            <button 
              id="nav-contact-btn"
              onClick={() => scrollToSection('contact')}
              className="px-3 py-2 hover:text-[#c5a358] transition-colors"
            >
              {navTranslations.contact[lang]}
            </button>
          </div>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <button
              id="quote-cta-header-btn"
              onClick={() => {
                onOpenCalculator();
                scrollToSection('calculator');
              }}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#c5a358] text-black font-bold text-xs tracking-[1.5px] uppercase hover:bg-[#ebd7bd] transition-all"
            >
              <span>{navTranslations.getQuote[lang]}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 bg-[#111111] border border-[#222222] text-[#f4f4f4] hover:text-[#c5a358] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#0a0a0a] border-b border-[#222222] p-6 shadow-2xl flex flex-col space-y-4 max-h-[85vh] overflow-y-auto">
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-between pb-3 border-b border-[#222222]">
              <span className="text-xs text-[#888888] flex items-center gap-1.5 uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5 text-[#c5a358]" />
                Dil Seçimi / Language
              </span>
              <div className="flex items-center bg-[#111111] border border-[#222222] p-0.5 text-xs">
                <button
                  onClick={() => onLanguageChange('tr')}
                  className={`px-3 py-1 font-bold ${lang === 'tr' ? 'bg-[#c5a358] text-black' : 'text-[#888888]'}`}
                >
                  TR
                </button>
                <button
                  onClick={() => onLanguageChange('en')}
                  className={`px-3 py-1 font-bold ${lang === 'en' ? 'bg-[#c5a358] text-black' : 'text-[#888888]'}`}
                >
                  EN
                </button>
              </div>
            </div>

            <button 
              onClick={() => scrollToSection('about')}
              className="text-left py-2 text-sm font-semibold uppercase tracking-wider text-[#f4f4f4] hover:text-[#c5a358] border-b border-[#222222]/50"
            >
              {navTranslations.about[lang]}
            </button>

            {/* Sectors breakdown in mobile */}
            <div className="py-2 border-b border-[#222222]/50">
              <div className="text-xs uppercase tracking-[2px] text-[#c5a358] font-bold mb-2">
                {navTranslations.sectors[lang]}
              </div>
              <div className="pl-3 flex flex-col space-y-2.5">
                <button 
                  onClick={() => { onSelectSector('maden'); scrollToSection('sectors'); }}
                  className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#888888] hover:text-[#f4f4f4]"
                >
                  <Mountain className="w-3.5 h-3.5 text-[#c5a358]" />
                  <span>{navTranslations.maden[lang]}</span>
                </button>
                <button 
                  onClick={() => { onSelectSector('mimarlik'); scrollToSection('sectors'); }}
                  className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#888888] hover:text-[#f4f4f4]"
                >
                  <Layers className="w-3.5 h-3.5 text-[#c5a358]" />
                  <span>{navTranslations.mimarlik[lang]}</span>
                </button>
                <button 
                  onClick={() => { onSelectSector('insaat'); scrollToSection('sectors'); }}
                  className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#888888] hover:text-[#f4f4f4]"
                >
                  <Building2 className="w-3.5 h-3.5 text-[#c5a358]" />
                  <span>{navTranslations.insaat[lang]}</span>
                </button>
              </div>
            </div>

            <button 
              onClick={() => scrollToSection('synergy')}
              className="text-left py-2 text-sm font-semibold uppercase tracking-wider text-[#f4f4f4] hover:text-[#c5a358] border-b border-[#222222]/50"
            >
              {navTranslations.synergy[lang]}
            </button>

            <button 
              onClick={() => scrollToSection('projects')}
              className="text-left py-2 text-sm font-semibold uppercase tracking-wider text-[#f4f4f4] hover:text-[#c5a358] border-b border-[#222222]/50"
            >
              {navTranslations.projects[lang]}
            </button>

            <button 
              onClick={() => scrollToSection('sustainability')}
              className="text-left py-2 text-sm font-semibold uppercase tracking-wider text-[#f4f4f4] hover:text-[#c5a358] border-b border-[#222222]/50"
            >
              {navTranslations.sustainability[lang]}
            </button>

            <button 
              onClick={() => scrollToSection('calculator')}
              className="text-left py-2 text-sm font-semibold uppercase tracking-wider text-[#f4f4f4] hover:text-[#c5a358] border-b border-[#222222]/50 flex items-center justify-between"
            >
              <span>{navTranslations.calculator[lang]}</span>
              <span className="text-[10px] bg-[#c5a358] text-black font-bold px-1.5 py-0.5">MODÜL</span>
            </button>

            <button 
              onClick={() => scrollToSection('news')}
              className="text-left py-2 text-sm font-semibold uppercase tracking-wider text-[#f4f4f4] hover:text-[#c5a358] border-b border-[#222222]/50"
            >
              {navTranslations.news[lang]}
            </button>

            <button 
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 text-sm font-semibold uppercase tracking-wider text-[#f4f4f4] hover:text-[#c5a358]"
            >
              {navTranslations.contact[lang]}
            </button>

            <button
              onClick={() => {
                onOpenCalculator();
                scrollToSection('calculator');
              }}
              className="w-full mt-4 py-3 bg-[#c5a358] text-black font-bold text-center text-xs uppercase tracking-[2px]"
            >
              {navTranslations.getQuote[lang]}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
