import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { CORE_VALUES } from '../data/content';
import { SafeImage } from './SafeImage';
import { 
  Layers, 
  ShieldCheck, 
  Leaf, 
  Sparkles, 
  CheckCircle2, 
  Target, 
  Eye, 
  ArrowUpRight 
} from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
  onExploreSynergy: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, onExploreSynergy }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-5 h-5" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5" />,
    Leaf: <Leaf className="w-5 h-5" />,
    Sparkles: <Sparkles className="w-5 h-5" />,
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0a0a0a] border-b border-[#222222]">
      
      <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#222222] pb-8"
        >
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#c5a358]">
              <span className="w-4 h-[1px] bg-[#c5a358]"></span>
              {lang === 'tr' ? 'Biz Kimiz & Kurumsal Kimlik' : 'Who We Are & Corporate Profile'}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f4f4f4] tracking-tight leading-tight">
              {lang === 'tr' 
                ? 'Yeraltının Gücünü Yeryüzünün Estetiği ve Sağlamlığıyla Buluşturuyoruz' 
                : 'Uniting Earth\'s Raw Minerals with Architectural Elegance and Structural Integrity'}
            </h2>
          </div>

          <p className="text-[#888888] text-sm sm:text-base max-w-md leading-relaxed">
            {lang === 'tr'
              ? 'Cromor; çeyrek asırlık tecrübesiyle madencilikten mimariye, mimariden taahhüt ve inşaata uzanan entegre değer zincirinde Türkiye ve dünyada öncü çözümler sunar.'
              : 'With over a quarter-century of heritage, Cromor stands as an integrated powerhouse spanning mining, visionary architectural design, and turnkey engineering.'}
          </p>
        </motion.div>

        {/* 2-Column Corporate Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Visual Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative border border-[#222222] bg-[#111111] overflow-hidden">
              <SafeImage 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80" 
                alt="Cromor Corporate Structure"
                fallbackCategory="architecture"
                className="w-full h-[460px] object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent"></div>

              {/* Floating Quote / Credo Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0a0a0a]/95 border border-[#222222] backdrop-blur-md">
                <div className="text-[#c5a358] text-[10px] font-bold uppercase tracking-[2px] mb-1">
                  {lang === 'tr' ? 'CROMOR MANİFESTOSU' : 'CROMOR MANIFESTO'}
                </div>
                <div className="text-[#f4f4f4] text-sm font-medium italic">
                  "{lang === 'tr' 
                    ? 'Maden toprağın hafızasıdır; mimarlık bu hafızayı yorumlar, inşaat ise onu geleceğe taşır.' 
                    : 'Mining is earth\'s memory; architecture interprets it, and construction elevates it into the future.'}"
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative, Mission, Vision */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4 text-[#888888] text-sm sm:text-base leading-relaxed">
              <p>
                {lang === 'tr' ? (
                  <>
                    <strong className="text-[#f4f4f4]">Cromor Grubu</strong>, maden sahalarında başlayan üretim serüvenini, kendi bünyesindeki ödüllü mimarlık ofisi ve yüksek teknolojili inşaat taahhüt filosu ile tamamlar. Doğrudan ocaktan seçtiğimiz doğal taş ve metalleri mimari estetikle biçimlendirip en zorlu mühendislik projelerinde uygulayabilen nadir entegre organizasyonlardan biriyiz.
                  </>
                ) : (
                  <>
                    <strong className="text-[#f4f4f4]">The Cromor Group</strong> completes its mineral journey from deep subterranean quarries through our in-house architectural studio and high-capacity contracting fleet. We are among the rare integrated groups capable of quarrying raw stone, designing iconic facades, and delivering complex engineering turnkey.
                  </>
                )}
              </p>
              <p>
                {lang === 'tr' ? (
                  <>
                    Sürdürülebilirlik, sıfır kaza hedefi ve çevreye saygı ilkeleriyle yönetilen maden ocaklarımız, hem ulusal ekonomiye yüksek katma değerli krom ihracatı sağlamakta hem de mimari projelerimiz için eşsiz nitelikte hammadde kaynağı oluşturmaktadır.
                  </>
                ) : (
                  <>
                    Governed by zero-incident HSE protocols and environmental rehabilitation commitments, our operations power high-value metallurgical exports while supplying distinct materials for our flagship architectural landmarks.
                  </>
                )}
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-[#111111] border border-[#222222] hover:border-[#c5a358] transition-colors">
                <div className="w-8 h-8 bg-[#181818] border border-[#222222] flex items-center justify-center text-[#c5a358] mb-3">
                  <Eye className="w-4 h-4" />
                </div>
                <h3 className="text-[#f4f4f4] font-bold text-sm uppercase tracking-wider mb-1.5">
                  {lang === 'tr' ? 'Vizyonumuz' : 'Our Vision'}
                </h3>
                <p className="text-xs text-[#888888] leading-relaxed">
                  {lang === 'tr'
                    ? 'Doğal kaynakların zarafetini ileri mühendislikle buluşturarak küresel ölçekte referans kabul edilen sürdürülebilir bir değer lideri olmak.'
                    : 'To be a globally recognized benchmark of excellence, transforming earth\'s resources into enduring, sustainable architectural landmarks.'}
                </p>
              </div>

              <div className="p-5 bg-[#111111] border border-[#222222] hover:border-[#c5a358] transition-colors">
                <div className="w-8 h-8 bg-[#181818] border border-[#222222] flex items-center justify-center text-[#c5a358] mb-3">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-[#f4f4f4] font-bold text-sm uppercase tracking-wider mb-1.5">
                  {lang === 'tr' ? 'Misyonumuz' : 'Our Mission'}
                </h3>
                <p className="text-xs text-[#888888] leading-relaxed">
                  {lang === 'tr'
                    ? 'Maden, mimarlık ve inşaat üçgeninde aracıları ortadan kaldıran kusursuz kalite, güvenli çalışma ortamı ve çağdaş yapılar üretmek.'
                    : 'To eliminate supply frictions across mining, architecture, and construction, delivering zero-compromise quality and safety.'}
                </p>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2">
              <button
                id="about-explore-synergy-btn"
                onClick={onExploreSynergy}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#c5a358] hover:text-[#ebd7bd] transition-colors group"
              >
                <span>{lang === 'tr' ? 'Entegre Değer Döngümüzü Detaylı İnceleyin' : 'Explore our Integrated Value Cycle'}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </motion.div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CORE_VALUES.map((val, idx) => (
            <motion.div 
              key={val.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-[#0a0a0a] border border-[#222222] hover:border-[#c5a358] hover:bg-[#111111] transition-all group duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 bg-[#111111] border border-[#222222] flex items-center justify-center text-[#c5a358] group-hover:bg-[#c5a358] group-hover:text-black transition-colors mb-5">
                  {iconMap[val.icon] || <Sparkles className="w-4 h-4" />}
                </div>

                <h4 className="text-[#f4f4f4] font-bold text-sm uppercase tracking-wider mb-2 group-hover:text-[#c5a358] transition-colors">
                  {val.title[lang]}
                </h4>

                <p className="text-xs text-[#888888] leading-relaxed">
                  {val.desc[lang]}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#222222] flex items-center gap-2 text-[10px] text-[#c5a358] font-bold uppercase tracking-[1.5px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{lang === 'tr' ? 'Standart Üstü Güvence' : 'Guaranteed Standard'}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

