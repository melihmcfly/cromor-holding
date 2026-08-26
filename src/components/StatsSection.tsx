import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { STATS } from '../data/content';
import { Award, Briefcase, Globe2, TrendingUp, ShieldCheck } from 'lucide-react';

interface StatsSectionProps {
  lang: Language;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ lang }) => {
  const icons = [Award, Briefcase, TrendingUp, Globe2];

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 lg:px-12 -mt-px">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#0a0a0a] border border-[#222222] p-6 lg:p-8 shadow-2xl"
      >
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#222222]">
          {STATS.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div 
                key={stat.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col space-y-2 ${idx > 0 ? 'pt-4 md:pt-0 md:pl-6' : ''}`}
              >
                <div className="flex items-center gap-2 text-[#c5a358]">
                  <Icon className="w-3.5 h-3.5 text-[#c5a358]" />
                  <span className="text-[10px] uppercase tracking-[2px] text-[#888888] font-bold">
                    {lang === 'tr' ? 'CROMOR GÜVENCESİ' : 'CROMOR STANDARD'}
                  </span>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f4f4f4] tracking-tight">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-base sm:text-lg font-bold text-[#c5a358]">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                <div className="text-xs sm:text-sm font-semibold text-[#f4f4f4] leading-tight">
                  {stat.label[lang]}
                </div>

                <div className="text-[11px] text-[#888888]">
                  {stat.sublabel[lang]}
                </div>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
};

