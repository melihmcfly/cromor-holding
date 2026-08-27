import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { SafeImage } from './SafeImage';
import { 
  Mountain, 
  Layers, 
  Building2, 
  Leaf, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Repeat
} from 'lucide-react';

interface IntegratedSynergyProps {
  lang: Language;
  onOpenEstimator: () => void;
}

export const IntegratedSynergy: React.FC<IntegratedSynergyProps> = ({ lang, onOpenEstimator }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stepNum: '01',
      title: { tr: 'Maden & Hammadde Çıkarımı', en: 'Extraction & Mineral Sourcing' },
      tagline: { tr: 'Doğanın En Değerli Katmanları', en: 'Nature\'s Purest Form' },
      desc: {
        tr: 'Yüksek tenörlü krom cevheri ve 1. sınıf doğal taş blokları kendi ruhsatlı ocaklarımızdan ileri teknoloji ve çevreye saygılı yöntemlerle çıkarılır.',
        en: 'High-grade chrome ore and premium marble blocks extracted from our licensed quarries with state-of-the-art zero-fissure wire cutting.',
      },
      icon: Mountain,
      category: 'mining' as const,
      image: 'https://images.unsplash.com/photo-1548430670053-f2c9ea4ed4d6?auto=format&fit=crop&w=1000&q=80',
      bullets: [
        { tr: 'Aracısız doğrudan ocaktan tedarik gücü', en: 'Direct quarry-to-project supply chain' },
        { tr: 'Sıkı laboratuvar tenör ve dayanım analizleri', en: 'Rigorous laboratory grade testing' },
        { tr: 'Sıfır atık ve su geri devir filtreleri', en: 'Zero waste water recycling plants' },
      ],
    },
    {
      stepNum: '02',
      title: { tr: 'Mimari Tasarım & BIM Modelleme', en: 'Architectural Design & BIM' },
      tagline: { tr: 'Heykelsi Formlar, Zamansız Estetik', en: 'Sculptural Geometry & Innovation' },
      desc: {
        tr: 'Doğal taş ve çelik bilgisini harmanlayan mimarlık ofisimiz, parametrik tasarım ve BIM teknolojileriyle projeyi milimetrik hassasiyetle modeller.',
        en: 'Harmonizing raw geological understanding with parametric tools and BIM modeling to craft iconic, functional, and energy-efficient spaces.',
      },
      icon: Layers,
      category: 'architecture' as const,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      bullets: [
        { tr: 'Doğal malzeme odaklı özgün cephe detayları', en: 'Material-driven bespoke facade engineering' },
        { tr: '3D Dijital ikiz ve enerji simülasyonları', en: '3D Digital twins and energy simulations' },
        { tr: 'LEED ve BREEAM yeşil bina uyumu', en: 'LEED & BREEAM green building integration' },
      ],
    },
    {
      stepNum: '03',
      title: { tr: 'Ağır İnşaat & Genel Taahhüt', en: 'Heavy Construction & Contracting' },
      tagline: { tr: 'Sarsılmaz Temeller, Hızlı Teslimat', en: 'Precision Turnkey Execution' },
      desc: {
        tr: 'Kendi makine parkımız ve uzman şantiye kadromuzla, projelendirilen yapıları en zorlu zemin koşullarında sıfır kaza hedefiyle hayata geçiriyoruz.',
        en: 'Utilizing our heavy equipment fleet and seasoned engineers to execute projects turnkey under strict zero-incident safety protocols.',
      },
      icon: Building2,
      category: 'construction' as const,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
      bullets: [
        { tr: 'Zamanında ve sözleşmeye tam sadık teslimat', en: 'On-schedule, zero-variance delivery' },
        { tr: 'Sismik izolatörlü ve yüksek dayanımlı statik', en: 'Seismic isolated high-durability structures' },
        { tr: 'Uluslararası ISO 45001 iş güvenliği standardı', en: 'Global ISO 45001 HSE certification' },
      ],
    },
    {
      stepNum: '04',
      title: { tr: 'Sürdürülebilirlik & Ekosistem', en: 'Sustainability & Land Ecology' },
      tagline: { tr: 'Gelecek Nesillere Saygılı Döngü', en: 'Ecological Restoration & Lifecycle' },
      desc: {
        tr: 'İşletmesi tamamlanan maden ocaklarını eşzamanlı olarak rehabilite ediyor, doğaya kazandırıyor ve inşa ettiğimiz yapıların karbon ayak izini izliyoruz.',
        en: 'Concurrently rehabilitating and reforesting mined land while monitoring building life-cycles for long-term decarbonization.',
      },
      icon: Leaf,
      category: 'general' as const,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
      bullets: [
        { tr: 'Aktif saha ağaçlandırma ve biyoçeşitlilik', en: 'Active reforestation & biodiversity restoration' },
        { tr: 'Güneş enerjisiyle temiz elektrik üretimi', en: 'Solar powered facilities' },
        { tr: 'Döngüsel ekonomi ve geri kazanım', en: 'Circular economy and material recycling' },
      ],
    },
  ];

  return (
    <section id="synergy" className="py-24 relative bg-[#0a0a0a] border-b border-[#222222] overflow-hidden">
      
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
              <Repeat className="w-3.5 h-3.5 text-[#c5a358]" />
              {lang === 'tr' ? 'Cromor Entegre Değer Zinciri' : 'The Cromor Integrated Loop'}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f4f4f4] tracking-tight">
              {lang === 'tr' ? 'Topraktan Gökyüzüne Kesintisiz Sinerji' : 'From Earth to Skyline: The Unified Synergy'}
            </h2>
          </div>

          <p className="text-[#888888] text-sm sm:text-base max-w-md">
            {lang === 'tr'
              ? 'Hammaddeyi kendi ocağından çıkaran, mimarisini kendi çizen ve inşaatını kendi yapan entegre bir yapının sunduğu eşsiz maliyet, kalite ve hız avantajı.'
              : 'The unrivaled advantage of single-source accountability: mining the stone, drafting the blueprint, and raising the structure.'}
          </p>
        </motion.div>

        {/* 4 Interactive Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <motion.button
                key={step.stepNum}
                id={`synergy-step-btn-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveStep(idx)}
                className={`p-5 text-left transition-all relative flex flex-col justify-between border cursor-pointer ${
                  isSelected 
                    ? 'bg-[#111111] border-2 border-[#c5a358]' 
                    : 'bg-[#0a0a0a] border-[#222222] hover:border-[#444444] hover:bg-[#111111]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-2xl font-extrabold text-[#c5a358]">
                      {step.stepNum}
                    </span>
                    <div className={`p-2 border transition-colors ${
                      isSelected ? 'bg-[#c5a358] text-black border-[#c5a358]' : 'bg-[#111111] text-[#c5a358] border-[#222222]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-[#f4f4f4] font-bold text-sm uppercase tracking-wider mb-1">
                    {step.title[lang]}
                  </h3>
                  <div className="text-[10px] text-[#c5a358] font-bold uppercase tracking-[1px]">
                    {step.tagline[lang]}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#222222] flex items-center justify-between text-[10px] text-[#888888] uppercase tracking-[1px] font-bold">
                  <span>{lang === 'tr' ? 'Detayı Göster' : 'View Detail'}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1 text-[#c5a358]' : ''}`} />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Dynamic Detail Card for the Selected Step */}
        {(() => {
          const cur = steps[activeStep];
          const Icon = cur.icon;
          return (
            <motion.div 
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#0a0a0a] border border-[#222222] p-6 lg:p-10 relative"
            >
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Step Details */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-[#222222] text-[10px] font-bold uppercase tracking-[2px] text-[#c5a358]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{lang === 'tr' ? `Aşama ${cur.stepNum} • ${cur.tagline[lang]}` : `Phase ${cur.stepNum} • ${cur.tagline[lang]}`}</span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#f4f4f4]">
                      {cur.title[lang]}
                    </h3>
                  </div>

                  <p className="text-[#888888] text-sm sm:text-base leading-relaxed">
                    {cur.desc[lang]}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-3 pt-2">
                    {cur.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-3 text-xs sm:text-sm text-[#f4f4f4]">
                        <CheckCircle2 className="w-4 h-4 text-[#c5a358] shrink-0" />
                        <span>{bullet[lang]}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      id="synergy-estimate-cta-btn"
                      onClick={onOpenEstimator}
                      className="px-6 py-3 bg-[#c5a358] hover:bg-[#ebd7bd] text-black font-bold text-xs uppercase tracking-[2px] transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>{lang === 'tr' ? 'Entegre Proje Teklifi Başlatın' : 'Start an Integrated Project Quote'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* Right Image Showcase */}
                <div className="lg:col-span-5 relative border border-[#222222] overflow-hidden h-72 sm:h-80">
                  <SafeImage 
                    src={cur.image} 
                    alt={cur.title[lang]}
                    fallbackCategory={cur.category}
                    className="w-full h-full object-cover filter grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0a0a0a]/90 border border-[#222222] text-xs text-[#f4f4f4]">
                    <span className="text-[#c5a358] font-bold">Cromor Synergy</span> • {cur.title[lang]}
                  </div>
                </div>

              </div>

            </motion.div>
          );
        })()}

      </div>
    </section>
  );
};

