import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language, Sector } from '../types';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Building2, 
  Mountain, 
  Layers, 
  CheckCircle2, 
  ShieldCheck,
  Headphones
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'genel',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const locations = [
    {
      title: { tr: 'Genel Merkez & Yönetim', en: 'Headquarters & Executive' },
      address: 'Büyükdere Cad. No: 198, Levent Plaza Kat: 24, Levent / İstanbul',
      phone: '+90 (212) 890 55 00',
      email: 'genelmerkez@cromor.com.tr',
      icon: Building2,
    },
    {
      title: { tr: 'Mimarlık & Tasarım Atölyesi', en: 'Architecture & Design Studio' },
      address: 'Cevdet Paşa Cad. No: 42, Bebek / İstanbul',
      phone: '+90 (212) 890 55 20',
      email: 'studio@cromor.com.tr',
      icon: Layers,
    },
    {
      title: { tr: 'Maden & Ocaklar Bölge Müdürlüğü', en: 'Mining & Regional Directorate' },
      address: 'Organize Sanayi Bölgesi Maden Cad. No: 12, Elazığ & Muğla Sahaları',
      phone: '+90 (424) 248 90 00',
      email: 'maden@cromor.com.tr',
      icon: Mountain,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0a0a0a] border-b border-[#222222]">
      
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
              <Headphones className="w-3.5 h-3.5 text-[#c5a358]" />
              {lang === 'tr' ? 'Bize Ulaşın & İletişim' : 'Contact & Global Presence'}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f4f4f4] tracking-tight">
              {lang === 'tr' ? 'Projelerinizi Birlikte İnşa Edelim' : 'Let\'s Build Your Vision Together'}
            </h2>
          </div>

          <p className="text-[#888888] text-sm sm:text-base max-w-md">
            {lang === 'tr'
              ? 'Maden tedariği, mimari tasarım veya anahtar teslim inşaat ihtiyaçlarınız için uzman ekibimizle hemen iletişime geçin.'
              : 'Reach out to our executive directors for mineral exports, architectural partnerships, or construction EPC.'}
          </p>
        </motion.div>

        {/* 3 Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {locations.map((loc, idx) => {
            const Icon = loc.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="p-6 bg-[#0a0a0a] border border-[#222222] hover:border-[#c5a358] transition-all space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#111111] border border-[#222222] flex items-center justify-center text-[#c5a358]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[#f4f4f4] font-bold text-sm uppercase tracking-[1px]">
                    {loc.title[lang]}
                  </h3>
                </div>

                <div className="space-y-2 text-xs text-[#888888]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#c5a358] shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5 font-mono">
                    <Phone className="w-4 h-4 text-[#c5a358] shrink-0" />
                    <a href={`tel:${loc.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#c5a358] transition-colors">
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5 font-mono">
                    <Mail className="w-4 h-4 text-[#c5a358] shrink-0" />
                    <a href={`mailto:${loc.email}`} className="hover:text-[#c5a358] transition-colors">
                      {loc.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form & Corporate Details Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          
          {/* Form */}
          <div className="lg:col-span-7 bg-[#0a0a0a] border border-[#222222] p-6 sm:p-10">
            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-[#111111] border border-[#c5a358] flex items-center justify-center text-[#c5a358] mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#f4f4f4]">
                  {lang === 'tr' ? 'Mesajınız İletildi' : 'Message Successfully Transmitted'}
                </h3>
                <p className="text-xs text-[#888888]">
                  {lang === 'tr'
                    ? 'İlgili birim direktörümüz en geç 1 iş günü içerisinde sizinle temas kuracaktır.'
                    : 'Our relevant department head will respond within one business day.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 bg-[#111111] border border-[#222222] hover:bg-[#1a1a1a] text-[#f4f4f4] text-xs font-bold uppercase tracking-[1px] cursor-pointer"
                >
                  {lang === 'tr' ? 'Yeni Mesaj Gönder' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-xs font-bold uppercase tracking-[2px] text-[#c5a358] mb-2">
                  {lang === 'tr' ? 'Doğrudan İletişim Formu' : 'Direct Inquiry Form'}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-[#888888] font-bold uppercase tracking-[1px] mb-1">
                      {lang === 'tr' ? 'Adınız ve Soyadınız *' : 'Your Name *'}
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ad Soyad"
                      className="w-full bg-[#111111] border border-[#222222] px-4 py-2.5 text-xs text-[#f4f4f4] placeholder-[#888888] focus:outline-none focus:border-[#c5a358]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-[#888888] font-bold uppercase tracking-[1px] mb-1">
                      {lang === 'tr' ? 'E-Posta Adresiniz *' : 'Email Address *'}
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@sirket.com"
                      className="w-full bg-[#111111] border border-[#222222] px-4 py-2.5 text-xs text-[#f4f4f4] placeholder-[#888888] focus:outline-none focus:border-[#c5a358]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-[#888888] font-bold uppercase tracking-[1px] mb-1">
                      {lang === 'tr' ? 'Telefon Numaranız' : 'Phone Number'}
                    </label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+90 (5XX) XXX XX XX"
                      className="w-full bg-[#111111] border border-[#222222] px-4 py-2.5 text-xs text-[#f4f4f4] placeholder-[#888888] focus:outline-none focus:border-[#c5a358]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-[#888888] font-bold uppercase tracking-[1px] mb-1">
                      {lang === 'tr' ? 'İlgili Sektör / Konu' : 'Subject Sector'}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#111111] border border-[#222222] px-4 py-2.5 text-xs text-[#f4f4f4] focus:outline-none focus:border-[#c5a358] cursor-pointer"
                    >
                      <option value="genel">{lang === 'tr' ? 'Genel Kurumsal / Bilgi Talebi' : 'General Corporate Inquiry'}</option>
                      <option value="maden">{lang === 'tr' ? 'Maden & Krom / Taş Tedariği' : 'Mining & Mineral Supply'}</option>
                      <option value="mimarlik">{lang === 'tr' ? 'Mimarlık & Proje Tasarımı' : 'Architecture & Design'}</option>
                      <option value="insaat">{lang === 'tr' ? 'İnşaat & Taahhüt İhalesi' : 'Construction & Contracting'}</option>
                      <option value="ik">{lang === 'tr' ? 'İnsan Kaynakları & Kariyer' : 'Careers & HR'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-[#888888] font-bold uppercase tracking-[1px] mb-1">
                    {lang === 'tr' ? 'Mesajınız & Detaylar *' : 'Message Details *'}
                  </label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'tr' ? 'Projeniz veya talebiniz ile ilgili detayları yazınız...' : 'Please describe your inquiry or project requirements...'}
                    className="w-full bg-[#111111] border border-[#222222] p-3 text-xs text-[#f4f4f4] placeholder-[#888888] focus:outline-none focus:border-[#c5a358]"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-[11px] text-[#888888] flex items-center gap-1.5 font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#c5a358]" />
                    <span>{lang === 'tr' ? 'Çalışma Saatleri: H.İçi 08:30 - 18:00' : 'Hours: Mon-Fri 08:30 - 18:00'}</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    id="contact-submit-btn"
                    className="px-6 py-3 bg-[#c5a358] hover:bg-[#ebd7bd] text-black font-bold text-xs uppercase tracking-[2px] transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>{lang === 'tr' ? 'Mesajı Gönder' : 'Send Message'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Corporate Highlights & Working Hours */}
          <div className="lg:col-span-5 bg-[#111111] border border-[#222222] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-[#0a0a0a] border border-[#222222] flex items-center justify-center text-[#c5a358]">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <h3 className="font-heading text-xl font-bold text-[#f4f4f4] uppercase tracking-[1px]">
                {lang === 'tr' ? 'Cromor Kurumsal İletişim İlkeleri' : 'Cromor Communication Protocols'}
              </h3>

              <div className="space-y-3 text-xs text-[#888888]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a358] shrink-0 mt-0.5" />
                  <span>{lang === 'tr' ? 'Tüm teknik şartnameler ve mimari çizimler gizlilik sözleşmesiyle korunur.' : 'All drawings and specifications protected under NDAs.'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a358] shrink-0 mt-0.5" />
                  <span>{lang === 'tr' ? 'Yurtdışı maden ihracatı talepleri için çok dilli uzman dış ticaret masası.' : 'Dedicated multilingual export desk for mineral trades.'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a358] shrink-0 mt-0.5" />
                  <span>{lang === 'tr' ? 'Şantiye ve ocak ziyaretleri için randevu sistemi.' : 'Appointment-based quarry and jobsite site inspections.'}</span>
                </div>
              </div>
            </div>

            {/* Direct Line Badge */}
            <div className="p-5 bg-[#0a0a0a] border border-[#222222] space-y-2">
              <div className="text-[10px] font-bold text-[#c5a358] uppercase tracking-[2px]">
                {lang === 'tr' ? 'Hızlı Çağrı Merkezi' : 'Direct Line'}
              </div>
              <div className="text-xl font-bold text-[#f4f4f4] font-mono">
                +90 (212) 890 55 00
              </div>
              <div className="text-[10px] text-[#888888]">
                {lang === 'tr' ? 'Hafta içi 08:30 - 18:00 kesintisiz kurumsal hat.' : 'Direct assistance during business hours.'}
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

