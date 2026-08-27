import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language, Sector } from '../types';
import {
  ArrowUp,
  Mountain,
  Layers,
  Building2,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Globe2,
  Send,
  CheckCircle2,
  Instagram
} from 'lucide-react';

interface FooterProps {
  lang: Language;
  onSelectSector: (sector: Sector) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onSelectSector }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#222222] text-[#888888] text-xs relative overflow-hidden">
      
      {/* Top Accent Line */}
      <div className="h-[2px] w-full bg-[#c5a358]"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-12 py-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16"
        >
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#111111] border border-[#c5a358] flex items-center justify-center">
                <span className="font-brand font-bold text-lg text-[#c5a358] tracking-wider">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-brand text-2xl font-bold tracking-[0.2em] text-[#f4f4f4]">
                  CROMOR
                </span>
                <span className="text-[9px] tracking-[2px] text-[#888888] uppercase font-medium">
                  Maden • Mimarlık • İnşaat
                </span>
              </div>
            </div>

            <p className="text-[#888888] text-xs leading-relaxed max-w-sm">
              {lang === 'tr'
                ? 'Yeraltının madencilik gücünü, çağdaş mimari vizyon ve ağır inşaat taahhüt tecrübesiyle buluşturan entegre sanayi ve tasarım grubu.'
                : 'An integrated powerhouse uniting mineral mining excellence, visionary architecture, and heavy turnkey engineering.'}
            </p>

            <div className="flex items-center gap-2 pt-2 text-[#c5a358] text-xs font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>ISO 9001 • ISO 14001 • ISO 45001</span>
            </div>
          </div>

          {/* Quick Sectors */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[#f4f4f4] font-bold text-xs uppercase tracking-[2px]">
              {lang === 'tr' ? 'Faaliyet Alanlarımız' : 'Core Business Units'}
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => { onSelectSector('maden'); scrollToSection('sectors'); }}
                  className="hover:text-[#c5a358] transition-colors flex items-center gap-2 text-left cursor-pointer"
                >
                  <Mountain className="w-3.5 h-3.5 text-[#c5a358]" />
                  <span>{lang === 'tr' ? 'Maden & Krom / Taş Madenciliği' : 'Mining & Chrome Ore Extraction'}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectSector('mimarlik'); scrollToSection('sectors'); }}
                  className="hover:text-[#c5a358] transition-colors flex items-center gap-2 text-left cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5 text-[#c5a358]" />
                  <span>{lang === 'tr' ? 'Mimarlık & Tasarım Stüdyosu' : 'Architecture & Design Studio'}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onSelectSector('insaat'); scrollToSection('sectors'); }}
                  className="hover:text-[#c5a358] transition-colors flex items-center gap-2 text-left cursor-pointer"
                >
                  <Building2 className="w-3.5 h-3.5 text-[#c5a358]" />
                  <span>{lang === 'tr' ? 'İnşaat, Sanayi & Genel Taahhüt' : 'Construction & Industrial EPC'}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('synergy')}
                  className="hover:text-[#c5a358] transition-colors flex items-center gap-2 text-left text-[#f4f4f4] cursor-pointer"
                >
                  <span>→</span>
                  <span>{lang === 'tr' ? 'Entegre Değer Zinciri (Sinerji)' : 'The Integrated Synergy Loop'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Corporate Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[#f4f4f4] font-bold text-xs uppercase tracking-[2px]">
              {lang === 'tr' ? 'Kurumsal Menü' : 'Corporate Menu'}
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-[#f4f4f4] transition-colors cursor-pointer">
                  {lang === 'tr' ? 'Biz Kimiz & Vizyon' : 'About & Heritage'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="hover:text-[#f4f4f4] transition-colors cursor-pointer">
                  {lang === 'tr' ? 'Proje Portfolyosu' : 'Flagship Portfolio'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('sustainability')} className="hover:text-[#f4f4f4] transition-colors cursor-pointer">
                  {lang === 'tr' ? 'Sürdürülebilirlik & İSG' : 'ESG & Safety Standards'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('calculator')} className="hover:text-[#f4f4f4] transition-colors cursor-pointer">
                  {lang === 'tr' ? 'Keşif & Teklif Robotu' : 'Project Cost Estimator'}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-[#f4f4f4] transition-colors cursor-pointer">
                  {lang === 'tr' ? 'İletişim & Lokasyonlar' : 'Contact & Locations'}
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Bulletin */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[#f4f4f4] font-bold text-xs uppercase tracking-[2px]">
              {lang === 'tr' ? 'Kurumsal E-Bülten' : 'Corporate Newsletter'}
            </h4>
            <p className="text-[#888888] text-xs">
              {lang === 'tr'
                ? 'Yeni maden rezervlerimiz ve mimari projelerimiz hakkında üç aylık bültenimize abone olun.'
                : 'Subscribe to our quarterly industrial and architectural insights.'}
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#111111] border border-[#c5a358] text-[#c5a358] text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{lang === 'tr' ? 'Bülten kaydınız başarıyla alındı.' : 'Subscribed successfully.'}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center gap-1 bg-[#111111] border border-[#222222] p-1 focus-within:border-[#c5a358] transition-colors">
                  <input 
                    type="email" 
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="eposta@sirket.com" 
                    className="w-full bg-transparent px-3 py-1.5 text-xs text-[#f4f4f4] placeholder-[#888888] focus:outline-none"
                  />
                  <button 
                    type="submit" 
                    className="p-2 bg-[#c5a358] text-black hover:bg-[#ebd7bd] transition-all shrink-0 cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-[#888888] block">
                  {lang === 'tr' ? 'İstediğiniz an abonelikten ayrılabilirsiniz.' : 'Unsubscribe at any time.'}
                </span>
              </form>
            )}
          </div>

        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-center gap-3 text-[11px] text-[#888888] mb-6 font-mono">
          <span className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#c5a358]" />
            319 Sokak No: 116 D:2, Buca / İzmir, Türkiye
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#c5a358]" />
            cromor@hotmail.com
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#c5a358]" />
            +90 (532) 216 09 82
          </span>
          <span className="hidden sm:inline">•</span>
          <span>Fax: +90 (232) 452 00 80</span>
        </div>
        <div className="pt-0 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#888888]">
          <div>
            © {new Date().getFullYear()} CROMOR Madencilik, Mimarlık, Mühendislik, İnşaat, Nakliye, San. ve Tic. Ltd. Şti. • {lang === 'tr' ? 'Tüm Hakları Saklıdır.' : 'All Rights Reserved.'}
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={() => scrollToSection('about')} className="hover:text-[#f4f4f4] transition-colors cursor-pointer">KVKK & Gizlilik</button>
            <span>•</span>
            <button onClick={() => scrollToSection('about')} className="hover:text-[#f4f4f4] transition-colors cursor-pointer">Çerez Politikası</button>
            <span>•</span>
            <button onClick={() => scrollToSection('about')} className="hover:text-[#f4f4f4] transition-colors cursor-pointer">Yasal Bildirim</button>
          </div>

          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#111111] hover:bg-[#1a1a1a] text-[#888888] hover:text-[#f4f4f4] border border-[#222222] transition-colors cursor-pointer"
          >
            <span>{lang === 'tr' ? 'Yukarı Çık' : 'Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Designer Credit */}
        <div className="pt-6 mt-6 border-t border-[#222222] flex items-center justify-center">
          <a
            id="designer-credit"
            href="https://www.instagram.com/melihmcfly"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[11px] text-[#888888] hover:text-[#c5a358] transition-colors"
          >
            <span>{lang === 'tr' ? 'Tasarım & Geliştirme' : 'Designed & Built by'}</span>
            <span className="font-semibold tracking-wide text-[#f4f4f4] group-hover:text-[#c5a358] transition-colors">
              Melih Mcfly
            </span>
            <Instagram className="w-3.5 h-3.5 text-[#c5a358] group-hover:scale-110 transition-transform" />
          </a>
        </div>

      </div>
    </footer>
  );
};

