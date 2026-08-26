import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, NewsItem } from '../types';
import { NEWS_ITEMS } from '../data/content';
import { SafeImage } from './SafeImage';
import { 
  Newspaper, 
  Calendar, 
  Clock, 
  ArrowRight, 
  X, 
  Sparkles,
  Mountain,
  Layers,
  Building2
} from 'lucide-react';

interface NewsSectionProps {
  lang: Language;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ lang }) => {
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);

  const getSectorIcon = (sector: string) => {
    switch (sector) {
      case 'maden': return <Mountain className="w-3.5 h-3.5 text-[#c5a880]" />;
      case 'mimarlik': return <Layers className="w-3.5 h-3.5 text-[#d4af37]" />;
      case 'insaat': return <Building2 className="w-3.5 h-3.5 text-[#997849]" />;
      default: return <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />;
    }
  };

  const getFallbackCategory = (sector: string) => {
    switch (sector) {
      case 'maden': return 'mining' as const;
      case 'mimarlik': return 'architecture' as const;
      case 'insaat': return 'construction' as const;
      default: return 'general' as const;
    }
  };

  return (
    <section id="news" className="py-24 relative bg-[#0a0a0a] border-b border-[#222222]">
      
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
              <Newspaper className="w-3.5 h-3.5 text-[#c5a358]" />
              {lang === 'tr' ? 'Haberler & Basın Bültenleri' : 'News & Press Releases'}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f4f4f4] tracking-tight">
              {lang === 'tr' ? 'Cromor Dünyasından Gelişmeler' : 'Latest Insights & Corporate Updates'}
            </h2>
          </div>

          <p className="text-[#888888] text-sm sm:text-base max-w-md">
            {lang === 'tr'
              ? 'Maden sahalarımızdaki yeni rezerv keşifleri, mimarlık stüdyomuzun ödülleri ve şantiyelerimizden en son haberler.'
              : 'Updates on new reserve discoveries, architectural accolades, and project completions across our group.'}
          </p>
        </motion.div>

        {/* 3 News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              onClick={() => setActiveArticle(item)}
              className="bg-[#0a0a0a] border border-[#222222] hover:border-[#c5a358] transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-black border-b border-[#222222]">
                  <SafeImage 
                    src={item.image} 
                    alt={item.title[lang]}
                    fallbackCategory={getFallbackCategory(item.sector)}
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0a0a0a]/30"></div>

                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-[#0a0a0a] text-[10px] font-bold text-[#f4f4f4] border border-[#222222] uppercase tracking-[1px]">
                    {getSectorIcon(item.sector)}
                    <span>{item.category[lang]}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-[#888888]">
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3 h-3 text-[#c5a358]" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3 text-[#c5a358]" />
                      {item.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-bold text-[#f4f4f4] group-hover:text-[#c5a358] transition-colors leading-snug line-clamp-2">
                    {item.title[lang]}
                  </h3>

                  <p className="text-xs text-[#888888] leading-relaxed line-clamp-3">
                    {item.summary[lang]}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-[#222222] flex items-center justify-between text-xs font-bold text-[#c5a358] uppercase tracking-[1px]">
                <span>{lang === 'tr' ? 'Haberi Oku' : 'Read Article'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setActiveArticle(null)} />

          <div className="relative bg-[#0a0a0a] border-2 border-[#c5a358] w-full max-w-2xl max-h-[85vh] overflow-y-auto z-10 p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-[#222222] pb-4">
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#c5a358]">
                {activeArticle.category[lang]}
              </span>
              <button 
                onClick={() => setActiveArticle(null)}
                className="p-1.5 bg-[#111111] border border-[#222222] text-[#888888] hover:text-[#f4f4f4] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-hidden h-60 border border-[#222222]">
              <SafeImage 
                src={activeArticle.image} 
                alt={activeArticle.title[lang]} 
                fallbackCategory={getFallbackCategory(activeArticle.sector)}
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="space-y-3">
              <div className="text-xs text-[#888888] flex items-center gap-4 font-mono">
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime} okuma</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#f4f4f4]">
                {activeArticle.title[lang]}
              </h3>
            </div>

            <div className="text-sm text-[#888888] leading-relaxed space-y-3">
              <p className="font-semibold text-[#f4f4f4]">
                {activeArticle.summary[lang]}
              </p>
              <p>
                {activeArticle.content[lang]}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

