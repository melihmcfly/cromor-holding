import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { 
  Leaf, 
  ShieldCheck, 
  Sun, 
  Droplets, 
  Trees, 
  Award, 
  CheckCircle2,
  FileCheck2
} from 'lucide-react';

interface SustainabilityESGProps {
  lang: Language;
}

export const SustainabilityESG: React.FC<SustainabilityESGProps> = ({ lang }) => {
  const esgPillars = [
    {
      title: { tr: 'Maden Sahası Rehabilitasyonu & Ağaçlandırma', en: 'Quarry Land Rehabilitation & Reforestation' },
      desc: {
        tr: 'Ömrünü tamamlayan veya aktif maden kademelerimizi eşzamanlı olarak yerel flora ile rehabilite ediyor, her yıl on binlerce fidan dikerek biyoçeşitliliği koruyoruz.',
        en: 'Simultaneously reforesting active and closed quarry benches with native flora, planting tens of thousands of saplings annually to enrich biodiversity.',
      },
      icon: Trees,
      stat: '120.000+',
      statLabel: { tr: 'Dikilen Ağaç & Rehabilite Alan', en: 'Trees Planted & Restored Land' },
    },
    {
      title: { tr: 'Sıfır Kaza Politikası & ISO 45001 İSG', en: 'Zero-Accident HSE Standard (ISO 45001)' },
      desc: {
        tr: 'Yeraltı maden ocaklarımızdan yüksek katlı şantiyelerimize kadar dijital sensörler, giyilebilir güvenlik teknolojileri ve sürekli eğitimle insan hayatını koruyoruz.',
        en: 'From deep underground shafts to high-rise jobsites, we enforce sensor-driven safety monitoring and rigorous continuous training.',
      },
      icon: ShieldCheck,
      stat: '0',
      statLabel: { tr: 'Hedeflenen & Sürdürülen Kaza Oranı', en: 'Lost Time Target & Benchmark' },
    },
    {
      title: { tr: 'Yeşil Mimarlık & LEED Platinum Standartları', en: 'Green Architecture & LEED Standards' },
      desc: {
        tr: 'Mimarlık stüdyomuz projelerinde pasif gölgelendirme, jeotermal iklimlendirme ve kendi ocaklarımızdan sağlanan sıfır karbon nakliyatlı doğal taşları önceler.',
        en: 'Our architectural studio optimizes passive solar gains, geothermal heat pumps, and near-zero transport emission native stones.',
      },
      icon: Leaf,
      stat: '%40',
      statLabel: { tr: 'Ortalama Enerji Tasarrufu', en: 'Average Energy Reduction' },
    },
    {
      title: { tr: 'Kapalı Devre Su ve Atık Geri Kazanımı', en: 'Closed-Loop Water & Mineral Recycling' },
      desc: {
        tr: 'Krom zenginleştirme ve taş işleme tesislerimizde kullanılan proses suyunun %98’i kapalı devre filtre presler ile arıtılarak yeniden sisteme verilir.',
        en: '98% of process water in our beneficiation plants and stone cutting facilities is purified via filter presses and recycled continuously.',
      },
      icon: Droplets,
      stat: '%98',
      statLabel: { tr: 'Su Geri Devir Oranı', en: 'Water Recirculation Rate' },
    },
  ];

  const certificates = [
    { code: 'ISO 9001:2015', name: { tr: 'Kalite Yönetim Sistemi', en: 'Quality Management' } },
    { code: 'ISO 14001:2015', name: { tr: 'Çevre Yönetim Sistemi', en: 'Environmental Management' } },
    { code: 'ISO 45001:2018', name: { tr: 'İş Sağlığı ve Güvenliği', en: 'Occupational Health & Safety' } },
    { code: 'LEED Accredited', name: { tr: 'Yeşil Bina Tasarım Standardı', en: 'Green Building Design' } },
    { code: 'CE & TSE', name: { tr: 'Avrupa ve Türk Standartları', en: 'European & Turkish Standards' } },
  ];

  return (
    <section id="sustainability" className="py-24 relative bg-[#0a0a0a] border-b border-[#222222]">
      
      <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#222222] pb-8"
        >
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#c5a358]">
              <Leaf className="w-3.5 h-3.5 text-[#c5a358]" />
              {lang === 'tr' ? 'Sürdürülebilirlik & İSG Vizyonumuz' : 'Sustainability, ESG & Safety'}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f4f4f4] tracking-tight">
              {lang === 'tr' ? 'Geleceğe Sorumlu, Doğaya Saygılı Üretim' : 'Responsible Stewardship for Future Generations'}
            </h2>
          </div>

          <p className="text-[#888888] text-sm sm:text-base max-w-md">
            {lang === 'tr'
              ? 'Yeraltından aldığımız her değeri, doğaya ve topluma kat kat fazlasıyla geri kazandırmak kurumsal ahlakımızın temelidir.'
              : 'Our ethical compass is grounded in returning more to the earth and community than we extract.'}
          </p>
        </motion.div>

        {/* 4 ESG Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {esgPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.15 }}
                className="p-8 bg-[#0a0a0a] border border-[#222222] hover:border-[#c5a358] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-[#111111] border border-[#222222] flex items-center justify-center text-[#c5a358] group-hover:bg-[#c5a358] group-hover:text-black transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="font-heading text-3xl font-extrabold text-[#f4f4f4] group-hover:text-[#c5a358] transition-colors">
                        {p.stat}
                      </span>
                      <div className="text-[10px] text-[#888888] uppercase tracking-[1px] font-medium">
                        {p.statLabel[lang]}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-[#f4f4f4] font-bold text-lg mb-3">
                    {p.title[lang]}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                    {p.desc[lang]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#222222] flex items-center gap-2 text-xs text-[#c5a358] font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{lang === 'tr' ? 'Denetlenen Kurumsal Politika' : 'Audited Corporate Commitment'}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#111111] border border-[#222222] p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-5 h-5 text-[#c5a358]" />
            <h3 className="text-[#f4f4f4] font-bold text-base uppercase tracking-[1px]">
              {lang === 'tr' ? 'Uluslararası Kalite & Güvenlik Akreditasyonlarımız' : 'International Certifications & Accreditations'}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {certificates.map((cert, cIdx) => (
              <div 
                key={cIdx} 
                className="p-3.5 bg-[#0a0a0a] border border-[#222222] text-center space-y-1 hover:border-[#c5a358] transition-colors"
              >
                <div className="font-mono text-xs sm:text-sm font-bold text-[#c5a358]">
                  {cert.code}
                </div>
                <div className="text-[11px] text-[#888888]">
                  {cert.name[lang]}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

