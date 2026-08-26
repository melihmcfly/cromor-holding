import React, { useState } from 'react';
import { Project, Language } from '../types';
import { SafeImage } from './SafeImage';
import { 
  X, 
  MapPin, 
  Calendar, 
  Maximize2, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Mountain, 
  Building2, 
  ExternalLink,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  lang: Language;
  onClose: () => void;
  onRequestSimilarQuote: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  lang,
  onClose,
  onRequestSimilarQuote,
}) => {
  if (!project) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const gallery = project.gallery?.length ? project.gallery : [project.image];

  const getSectorBadge = (sector: string) => {
    switch (sector) {
      case 'maden':
        return { label: lang === 'tr' ? '01 / MADEN' : '01 / MINING', color: 'bg-[#111111] text-[#c5a358] border-[#222222]', icon: Mountain };
      case 'mimarlik':
        return { label: lang === 'tr' ? '02 / MİMARLIK' : '02 / ARCHITECTURE', color: 'bg-[#111111] text-[#c5a358] border-[#222222]', icon: Layers };
      case 'insaat':
        return { label: lang === 'tr' ? '03 / İNŞAAT' : '03 / CONSTRUCTION', color: 'bg-[#111111] text-[#c5a358] border-[#222222]', icon: Building2 };
      default:
        return { label: 'CROMOR', color: 'bg-[#111111] text-[#f4f4f4] border-[#222222]', icon: Building2 };
    }
  };

  const badge = getSectorBadge(project.sector);
  const SectorIcon = badge.icon;
  const fallbackCat = project.sector === 'maden' ? 'mining' : project.sector === 'mimarlik' ? 'architecture' : 'construction';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-[#0a0a0a] border border-[#222222] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-[#0a0a0a]/95 backdrop-blur-md px-6 py-4 border-b border-[#222222] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[1px] border ${badge.color}`}>
              <SectorIcon className="w-3 h-3" />
              {badge.label}
            </span>
            <span className="text-xs text-[#888888] font-medium hidden sm:inline">
              {project.category[lang]}
            </span>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="p-1.5 bg-[#111111] border border-[#222222] text-[#888888] hover:text-[#f4f4f4] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Main Gallery Showcase */}
          <div className="space-y-3">
            <div className="relative overflow-hidden bg-black h-72 sm:h-96 border border-[#222222] group">
              <SafeImage 
                src={gallery[activeImageIndex]} 
                alt={project.title[lang]}
                fallbackCategory={fallbackCat}
                className="w-full h-full object-cover filter grayscale contrast-125"
              />

              {gallery.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/80 hover:bg-black text-white border border-[#222222] transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/80 hover:bg-black text-white border border-[#222222] transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}

              <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/80 border border-[#222222] text-[10px] font-mono text-[#f4f4f4]">
                {activeImageIndex + 1} / {gallery.length}
              </div>
            </div>

            {/* Thumbnails */}
            {gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative overflow-hidden w-20 h-14 shrink-0 border transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'border-[#c5a358]' : 'border-[#222222] opacity-50 hover:opacity-100'
                    }`}
                  >
                    <SafeImage 
                      src={img} 
                      alt="Thumbnail" 
                      fallbackCategory={fallbackCat}
                      className="w-full h-full object-cover filter grayscale" 
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Title & Meta Grid */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#f4f4f4]">
              {project.title[lang]}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-[#111111] border border-[#222222]">
                <div className="flex items-center gap-1.5 text-[10px] text-[#888888] font-bold uppercase tracking-[1px] mb-0.5">
                  <MapPin className="w-3 h-3 text-[#c5a358]" />
                  {lang === 'tr' ? 'Lokasyon' : 'Location'}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#f4f4f4] truncate">
                  {project.location[lang]}
                </div>
              </div>

              <div className="p-3 bg-[#111111] border border-[#222222]">
                <div className="flex items-center gap-1.5 text-[10px] text-[#888888] font-bold uppercase tracking-[1px] mb-0.5">
                  <Calendar className="w-3 h-3 text-[#c5a358]" />
                  {lang === 'tr' ? 'Yıl / Dönem' : 'Year'}
                </div>
                <div className="text-xs sm:text-sm font-mono font-semibold text-[#f4f4f4]">
                  {project.year}
                </div>
              </div>

              <div className="p-3 bg-[#111111] border border-[#222222]">
                <div className="flex items-center gap-1.5 text-[10px] text-[#888888] font-bold uppercase tracking-[1px] mb-0.5">
                  <Maximize2 className="w-3 h-3 text-[#c5a358]" />
                  {lang === 'tr' ? 'Kapasite / Alan' : 'Scale / Area'}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#f4f4f4] truncate">
                  {project.areaOrCapacity[lang]}
                </div>
              </div>

              <div className="p-3 bg-[#111111] border border-[#222222]">
                <div className="flex items-center gap-1.5 text-[10px] text-[#888888] font-bold uppercase tracking-[1px] mb-0.5">
                  <ShieldCheck className="w-3 h-3 text-[#c5a358]" />
                  {lang === 'tr' ? 'Durum' : 'Status'}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#c5a358]">
                  {project.status === 'completed' 
                    ? (lang === 'tr' ? 'Tamamlandı' : 'Completed') 
                    : (lang === 'tr' ? 'Devam Ediyor' : 'In Progress')}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-[2px] text-[#c5a358]">
              {lang === 'tr' ? 'Proje Özeti & Kapsam' : 'Project Summary & Scope'}
            </h3>
            <p className="text-sm sm:text-base text-[#888888] leading-relaxed">
              {project.description[lang]}
            </p>
          </div>

          {/* Key Features & Highlights */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-[2px] text-[#c5a358]">
                {lang === 'tr' ? 'Öne Çıkan Mühendislik & Mimari Detaylar' : 'Key Engineering & Design Highlights'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 p-2.5 bg-[#111111] border border-[#222222] text-xs text-[#f4f4f4]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a358] shrink-0" />
                    <span>{feat[lang]}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Specifications Table */}
          {project.technicalSpecs && project.technicalSpecs.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-[2px] text-[#c5a358]">
                {lang === 'tr' ? 'Teknik Şartname & Metrikler' : 'Technical Specifications'}
              </h3>
              <div className="border border-[#222222]">
                <table className="w-full text-left text-xs">
                  <tbody className="divide-y divide-[#222222]">
                    {project.technicalSpecs.map((spec, sIdx) => (
                      <tr key={sIdx} className="hover:bg-[#111111]">
                        <td className="py-2.5 px-4 font-bold uppercase tracking-wider text-[#888888] w-1/3">
                          {spec.label[lang]}
                        </td>
                        <td className="py-2.5 px-4 text-[#f4f4f4] font-mono">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Modal Action CTA */}
          <div className="pt-4 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#888888]">
              {lang === 'tr' ? 'Bu proje veya benzer bir ölçek için teknik dosya talebinde bulunun.' : 'Request detailed engineering files or similar scale quotation.'}
            </div>

            <button
              id="modal-request-quote-btn"
              onClick={() => {
                onClose();
                onRequestSimilarQuote(project);
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#c5a358] hover:bg-[#ebd7bd] text-black font-bold text-xs uppercase tracking-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{lang === 'tr' ? 'Benzer Proje İçin Teklif Al' : 'Request Similar Proposal'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

