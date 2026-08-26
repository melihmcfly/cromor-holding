import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language, Sector, Project } from '../types';
import { 
  Calculator, 
  Mountain, 
  Layers, 
  Building2, 
  CheckCircle2, 
  Send, 
  Clock, 
  Sparkles, 
  FileCheck, 
  ShieldCheck,
  ChevronRight,
  RefreshCw
} from 'lucide-react';

interface QuoteCalculatorProps {
  lang: Language;
  preselectedProject?: Project | null;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({
  lang,
  preselectedProject,
}) => {
  const [selectedSector, setSelectedSector] = useState<Sector | 'entegre'>('entegre');
  const [projectType, setProjectType] = useState('industrial');
  const [scaleValue, setScaleValue] = useState('10000');
  const [locationCity, setLocationCity] = useState('');
  const [specialRequirements, setSpecialRequirements] = useState<string[]>(['bim', 'iso']);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectorOptions = [
    { id: 'entegre', label: { tr: 'Entegre Paket (Maden + Mimarlık + İnşaat)', en: 'Integrated (Mining + Design + Build)' }, icon: Sparkles },
    { id: 'maden', label: { tr: 'Maden & Krom / Doğal Taş Tedariği', en: 'Mining & Mineral/Stone Supply' }, icon: Mountain },
    { id: 'mimarlik', label: { tr: 'Mimari Tasarım, İç Mekan & BIM', en: 'Architectural Design & BIM' }, icon: Layers },
    { id: 'insaat', label: { tr: 'İnşaat, Ağır Taahhüt & Sanayi Tesisi', en: 'Turnkey Construction & EPC' }, icon: Building2 },
  ];

  const projectTypesBySector: Record<string, { id: string; label: Record<Language, string> }[]> = {
    entegre: [
      { id: 'turnkey-hq', label: { tr: 'Özel Taş Cepheli Genel Merkez / Kule', en: 'Stone-Clad Corporate HQ / Tower' } },
      { id: 'industrial-complex', label: { tr: 'Ağır Sanayi & Maden İşletme Kompleksi', en: 'Industrial & Mining Processing Plant' } },
      { id: 'luxury-resort', label: { tr: 'Doğal Taş Lüks Turizm / Konut Yerleşkesi', en: 'Luxury Stone Resort / Residential' } },
    ],
    maden: [
      { id: 'chrome-ore', label: { tr: 'Yüksek Tenörlü Krom Cevheri (%42-48)', en: 'High Grade Chrome Ore (42-48%)' } },
      { id: 'marble-blocks', label: { tr: 'Mermer & Oniks Blok İhracatı', en: 'Marble & Onyx Block Export' } },
      { id: 'crushed-minerals', label: { tr: 'Endüstriyel Kuvars & Mineral Tedariği', en: 'Quartz & Industrial Minerals' } },
    ],
    mimarlik: [
      { id: 'concept-masterplan', label: { tr: 'Konsept Tasarım & Masterplanlama', en: 'Concept Design & Masterplan' } },
      { id: 'interior-luxury', label: { tr: 'Lüks Rezidans & İç Mimari Uygulama', en: 'Luxury Interior & Detailing' } },
      { id: 'facade-stone', label: { tr: 'Özel Taş & Parametrik Cephe Mühendisliği', en: 'Bespoke Stone Facade Engineering' } },
    ],
    insaat: [
      { id: 'factory-steel', label: { tr: 'Endüstriyel Çelik Fabrika / Depo', en: 'Industrial Steel Plant / Logistics' } },
      { id: 'highrise-residence', label: { tr: 'Yüksek Katlı Konut / Ticari Plaza', en: 'High-Rise Residential / Plaza' } },
      { id: 'geotech-infra', label: { tr: 'Derin Kazı, İksa & Altyapı İşleri', en: 'Deep Shoring & Infrastructure' } },
    ],
  };

  const toggleRequirement = (reqId: string) => {
    if (specialRequirements.includes(reqId)) {
      setSpecialRequirements(specialRequirements.filter((r) => r !== reqId));
    } else {
      setSpecialRequirements([...specialRequirements, reqId]);
    }
  };

  const calculateEstimate = () => {
    const scale = parseInt(scaleValue, 10) || 5000;
    let baseMonths = 6;
    let teamSize = '15-25';

    if (selectedSector === 'maden') {
      baseMonths = scale > 50000 ? 12 : 3;
      teamSize = '20-40 Uzman Maden & Lojistik';
    } else if (selectedSector === 'mimarlik') {
      baseMonths = scale > 20000 ? 6 : 3;
      teamSize = '8-15 Mimar & BIM Mühendisi';
    } else if (selectedSector === 'insaat' || selectedSector === 'entegre') {
      baseMonths = scale > 50000 ? 18 : 12;
      teamSize = '50-150 Şantiye & Mühendislik Kadrosu';
    }

    return {
      estimatedTimeline: `${baseMonths} - ${baseMonths + 4} ${lang === 'tr' ? 'Ay' : 'Months'}`,
      engineeringTeam: teamSize,
      complianceStandard: 'ISO 9001 • ISO 14001 • ISO 45001',
    };
  };

  const estimate = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `CRM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedId(generatedId);
    }, 800);
  };

  return (
    <section id="calculator" className="py-24 relative bg-[#0a0a0a] border-b border-[#222222]">
      
      <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#c5a358]">
            <Calculator className="w-3.5 h-3.5 text-[#c5a358]" />
            {lang === 'tr' ? 'Cromor Keşif & Ön Değerlendirme Modülü' : 'Interactive Project Discovery & Estimation'}
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f4f4f4] tracking-tight">
            {lang === 'tr' ? 'Projenizi Planlayın, Hızlı Teklif Alın' : 'Configure Your Scope & Get an Instant Brief'}
          </h2>
          <p className="text-[#888888] text-sm sm:text-base">
            {lang === 'tr'
              ? 'Madencilik tedariğinden mimari projelendirmeye, anahtar teslim inşaattan entegre çözümlere kadar projenizin temel parametrelerini belirleyin.'
              : 'Specify your scope across mining supply, architectural blueprints, or turnkey construction to receive a tailored assessment.'}
          </p>
        </motion.div>

        {submittedId ? (
          /* Submission Confirmation Card */
          <div className="max-w-2xl mx-auto bg-[#0a0a0a] border-2 border-[#c5a358] p-8 sm:p-12 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-[#111111] border border-[#c5a358] flex items-center justify-center text-[#c5a358] mx-auto">
              <FileCheck className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#c5a358]">
                {lang === 'tr' ? 'Teklif Talebiniz Başarıyla Alındı' : 'Proposal Request Successfully Received'}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#f4f4f4]">
                {lang === 'tr' ? 'Mühendislik Heyetimiz Dosyanızı İnceliyor' : 'Our Engineering Board is Reviewing Your File'}
              </h3>
            </div>

            <p className="text-sm text-[#888888]">
              {lang === 'tr'
                ? `Talebiniz ${submittedId} referans numarasıyla kayıt altına alınmıştır. 24 saat içinde detaylı teknik şartname ve fizibilite ön raporu ile tarafınıza dönüş sağlanacaktır.`
                : `Your inquiry has been registered under reference ${submittedId}. Our senior technical directors will follow up within 24 hours.`}
            </p>

            <div className="p-4 bg-[#111111] border border-[#222222] text-xs text-[#888888] font-mono inline-block">
              {lang === 'tr' ? 'Referans No:' : 'Reference ID:'} <strong className="text-[#c5a358]">{submittedId}</strong>
            </div>

            <div>
              <button
                id="reset-calculator-btn"
                onClick={() => setSubmittedId(null)}
                className="px-6 py-2.5 bg-[#111111] hover:bg-[#1a1a1a] text-[#f4f4f4] border border-[#222222] text-xs font-bold uppercase tracking-[2px] transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{lang === 'tr' ? 'Yeni Bir Talep Oluştur' : 'Create Another Inquiry'}</span>
              </button>
            </div>
          </div>
        ) : (
          /* Main Interactive Wizard Form */
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#0a0a0a] border border-[#222222] p-6 sm:p-10 lg:p-12"
          >
            
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Step 1: Sector Selection */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#c5a358]">
                  <span className="w-5 h-5 bg-[#c5a358] text-black flex items-center justify-center text-[10px] font-extrabold">1</span>
                  <span>{lang === 'tr' ? 'Hizmet & Faaliyet Alanı Seçin' : 'Select Business Sector / Service'}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {sectorOptions.map((opt) => {
                    const isSelected = selectedSector === opt.id;
                    const Icon = opt.icon;
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => {
                          setSelectedSector(opt.id as any);
                          const firstSubType = projectTypesBySector[opt.id]?.[0]?.id || 'custom';
                          setProjectType(firstSubType);
                        }}
                        className={`p-4 text-left border transition-all flex items-start gap-3 cursor-pointer ${
                          isSelected
                            ? 'bg-[#111111] border-2 border-[#c5a358]'
                            : 'bg-[#0a0a0a] border-[#222222] hover:border-[#444444] hover:bg-[#111111]'
                        }`}
                      >
                        <div className={`p-2 border shrink-0 ${isSelected ? 'bg-[#c5a358] text-black border-[#c5a358]' : 'bg-[#111111] text-[#c5a358] border-[#222222]'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-[#f4f4f4] leading-snug">
                          {opt.label[lang]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Project Type & Scale */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 border-t border-[#222222]">
                
                {/* Project Sub-Type */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#c5a358]">
                    <span className="w-5 h-5 bg-[#c5a358] text-black flex items-center justify-center text-[10px] font-extrabold">2</span>
                    <span>{lang === 'tr' ? 'Proje Tipi & Kapsamı' : 'Project Scope & Type'}</span>
                  </div>

                  <div className="space-y-2">
                    {projectTypesBySector[selectedSector]?.map((t) => (
                      <label
                        key={t.id}
                        className={`flex items-center justify-between p-3.5 border cursor-pointer transition-all ${
                          projectType === t.id
                            ? 'bg-[#111111] border-2 border-[#c5a358] text-[#f4f4f4] font-semibold'
                            : 'bg-[#0a0a0a] border-[#222222] text-[#888888] hover:bg-[#111111] hover:text-[#f4f4f4]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input 
                            type="radio" 
                            name="projectType" 
                            checked={projectType === t.id}
                            onChange={() => setProjectType(t.id)}
                            className="text-[#c5a358] focus:ring-0 cursor-pointer"
                          />
                          <span className="text-xs sm:text-sm">{t.label[lang]}</span>
                        </div>
                        {projectType === t.id && <CheckCircle2 className="w-4 h-4 text-[#c5a358]" />}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Scale / Quantity & City */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#c5a358]">
                    <span className="w-5 h-5 bg-[#c5a358] text-black flex items-center justify-center text-[10px] font-extrabold">3</span>
                    <span>{lang === 'tr' ? 'Tahmini Ölçek & Konum' : 'Estimated Scale & Location'}</span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-bold text-[#888888] uppercase tracking-[1px] mb-1.5">
                        {selectedSector === 'maden' 
                          ? (lang === 'tr' ? 'Talep Edilen Miktar (Ton / Yıl)' : 'Requested Volume (Tons / Year)') 
                          : (lang === 'tr' ? 'Toplam Alan / Kapasite (m²)' : 'Total Footprint / Area (m²)')}
                      </label>
                      <input 
                        type="text" 
                        value={scaleValue}
                        onChange={(e) => setScaleValue(e.target.value)}
                        placeholder="Örn: 25.000"
                        className="w-full bg-[#111111] border border-[#222222] px-4 py-2.5 text-sm text-[#f4f4f4] font-mono focus:outline-none focus:border-[#c5a358] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-[#888888] uppercase tracking-[1px] mb-1.5">
                        {lang === 'tr' ? 'Proje / Teslimat Şehri & Ülke' : 'Project Location / Delivery Destination'}
                      </label>
                      <input 
                        type="text" 
                        value={locationCity}
                        onChange={(e) => setLocationCity(e.target.value)}
                        placeholder={lang === 'tr' ? 'Örn: İstanbul, Kocaeli veya İhracat Limanı' : 'e.g. Istanbul, Rotterdam or Export Port'}
                        className="w-full bg-[#111111] border border-[#222222] px-4 py-2.5 text-sm text-[#f4f4f4] focus:outline-none focus:border-[#c5a358] transition-colors"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Step 3: Special Requirements & Instant Estimate Preview */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-[#222222]">
                
                {/* Special Checkboxes */}
                <div className="lg:col-span-6 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-[2px] text-[#c5a358]">
                    {lang === 'tr' ? 'Özel Standartlar & Şartname Talepleri' : 'Specific Compliance & Standards'}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { id: 'bim', label: { tr: 'BIM / 3D Dijital İkiz', en: 'BIM / 3D Digital Twin' } },
                      { id: 'leed', label: { tr: 'LEED / Yeşil Bina Uyumu', en: 'LEED Green Building' } },
                      { id: 'iso', label: { tr: 'ISO 45001 İSG Güvencesi', en: 'ISO 45001 HSE Protocols' } },
                      { id: 'turnkey', label: { tr: 'Hafriyat Dahil Anahtar Teslim', en: 'Full Turnkey Handover' } },
                      { id: 'quarry-cert', label: { tr: 'Ocak Tenör & Menşe Sertifikası', en: 'Quarry Origin Certificate' } },
                      { id: 'seismic', label: { tr: 'Sismik Taban İzolasyonu', en: 'Base Seismic Isolation' } },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => toggleRequirement(item.id)}
                        className={`p-2.5 border text-left text-xs transition-all flex items-center gap-2 cursor-pointer ${
                          specialRequirements.includes(item.id)
                            ? 'bg-[#111111] border-[#c5a358] text-[#f4f4f4] font-medium'
                            : 'bg-[#0a0a0a] border-[#222222] text-[#888888] hover:text-[#f4f4f4]'
                        }`}
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 ${specialRequirements.includes(item.id) ? 'text-[#c5a358]' : 'text-[#444444]'}`} />
                        <span>{item.label[lang]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Real-time Calculation Summary Box */}
                <div className="lg:col-span-6 bg-[#111111] border border-[#222222] p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#222222] pb-3">
                    <span className="text-xs font-bold uppercase tracking-[2px] text-[#f4f4f4]">
                      {lang === 'tr' ? 'Ön Fizibilite Projeksiyonu' : 'Preliminary Projection Summary'}
                    </span>
                    <span className="text-[10px] font-mono text-[#c5a358] bg-[#0a0a0a] border border-[#222222] px-2 py-0.5">
                      Cromor Matrix
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="space-y-1">
                      <span className="text-[#888888] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#c5a358]" />
                        {lang === 'tr' ? 'Tahmini Proje Takvimi' : 'Estimated Timeline'}
                      </span>
                      <div className="text-[#f4f4f4] font-bold text-sm">
                        {estimate.estimatedTimeline}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[#888888]">
                        {lang === 'tr' ? 'Öngörülen Mühendislik Gücü' : 'Allocated Team Scale'}
                      </span>
                      <div className="text-[#f4f4f4] font-bold text-sm">
                        {estimate.engineeringTeam}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] text-[#888888] border-t border-[#222222]">
                    {lang === 'tr' 
                      ? 'Bu hesaplama ön değerlendirme niteliğindedir. Kesin bütçe ve uygulama takvimi mimari/statik dosya incelemesi sonrasında verilir.' 
                      : 'This projection provides a preliminary framework. Formal contract milestones are verified after structural review.'}
                  </div>
                </div>

              </div>

              {/* Step 4: Contact & Submission */}
              <div className="pt-4 border-t border-[#222222] space-y-4">
                <div className="text-xs font-bold uppercase tracking-[2px] text-[#c5a358]">
                  {lang === 'tr' ? 'Teklifin İletileceği İletişim Bilgileri' : 'Representative & Contact Information'}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={lang === 'tr' ? 'Ad Soyad / Yetkili *' : 'Full Name *'}
                    className="bg-[#111111] border border-[#222222] px-4 py-2.5 text-xs text-[#f4f4f4] placeholder-[#888888] focus:outline-none focus:border-[#c5a358]"
                  />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder={lang === 'tr' ? 'Firma / Kurum Adı' : 'Company Name'}
                    className="bg-[#111111] border border-[#222222] px-4 py-2.5 text-xs text-[#f4f4f4] placeholder-[#888888] focus:outline-none focus:border-[#c5a358]"
                  />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={lang === 'tr' ? 'Kurumsal E-Posta *' : 'Corporate Email *'}
                    className="bg-[#111111] border border-[#222222] px-4 py-2.5 text-xs text-[#f4f4f4] placeholder-[#888888] focus:outline-none focus:border-[#c5a358]"
                  />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={lang === 'tr' ? 'Telefon Numarası *' : 'Phone Number *'}
                    className="bg-[#111111] border border-[#222222] px-4 py-2.5 text-xs text-[#f4f4f4] placeholder-[#888888] focus:outline-none focus:border-[#c5a358]"
                  />
                </div>

                <div>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={lang === 'tr' ? 'Projenizle ilgili ek notlar, şartname detayları veya özel malzeme beklentileriniz...' : 'Additional technical specs, bespoke materials, or delivery expectations...'}
                    className="w-full bg-[#111111] border border-[#222222] p-3 text-xs text-[#f4f4f4] placeholder-[#888888] focus:outline-none focus:border-[#c5a358]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-[11px] text-[#888888]">
                    <ShieldCheck className="w-4 h-4 text-[#c5a358]" />
                    <span>{lang === 'tr' ? 'Verileriniz KVKK ve kurumsal gizlilik sözleşmesi altında korunur.' : 'All data handled strictly under corporate NDA & GDPR.'}</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit-proposal-btn"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#c5a358] hover:bg-[#ebd7bd] text-black font-bold text-xs uppercase tracking-[2px] transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>{lang === 'tr' ? 'Gönderiliyor...' : 'Submitting...'}</span>
                      </>
                    ) : (
                      <>
                        <span>{lang === 'tr' ? 'Resmi Teklif Talebini İlet' : 'Submit Official Proposal Request'}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </div>

            </form>

          </motion.div>
        )}

      </div>
    </section>
  );
};

