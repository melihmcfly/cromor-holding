import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project, Language, Sector } from '../types';
import { PROJECTS } from '../data/content';
import { ProjectModal } from './ProjectModal';
import { SafeImage } from './SafeImage';
import { 
  Mountain, 
  Layers, 
  Building2, 
  ArrowRight, 
  MapPin, 
  Calendar, 
  ExternalLink,
  Filter,
  Search,
  CheckCircle,
  FileSpreadsheet
} from 'lucide-react';

interface ProjectsSectionProps {
  lang: Language;
  initialFilter?: Sector | 'all';
  onRequestQuoteWithProject?: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  lang,
  initialFilter = 'all',
  onRequestQuoteWithProject,
}) => {
  const [activeSectorFilter, setActiveSectorFilter] = useState<Sector | 'all'>(initialFilter);
  const [activeStatusFilter, setActiveStatusFilter] = useState<'all' | 'completed' | 'ongoing'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesSector = activeSectorFilter === 'all' || proj.sector === activeSectorFilter;
    const matchesStatus = activeStatusFilter === 'all' || proj.status === activeStatusFilter;
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      !query || 
      proj.title[lang].toLowerCase().includes(query) ||
      proj.location[lang].toLowerCase().includes(query) ||
      proj.category[lang].toLowerCase().includes(query);
    return matchesSector && matchesStatus && matchesSearch;
  });

  const getSectorBadge = (sector: Sector) => {
    switch (sector) {
      case 'maden':
        return { label: lang === 'tr' ? '01 / MADEN' : '01 / MINING', color: 'bg-[#111111] text-[#c5a358] border-[#222222]', icon: Mountain };
      case 'mimarlik':
        return { label: lang === 'tr' ? '02 / MİMARLIK' : '02 / ARCHITECTURE', color: 'bg-[#111111] text-[#c5a358] border-[#222222]', icon: Layers };
      case 'insaat':
        return { label: lang === 'tr' ? '03 / İNŞAAT' : '03 / CONSTRUCTION', color: 'bg-[#111111] text-[#c5a358] border-[#222222]', icon: Building2 };
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-[#0a0a0a] border-b border-[#222222]">
      
      <div className="max-w-7xl mx-auto px-4 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#222222] pb-8"
        >
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#c5a358]">
              <span className="w-4 h-[1px] bg-[#c5a358]"></span>
              {lang === 'tr' ? 'Seçkin Portfolyo' : 'Featured Portfolio'}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f4f4f4] tracking-tight">
              {lang === 'tr' ? 'İmzamızı Taşıyan Mega Projeler' : 'Flagship Projects & Milestones'}
            </h2>
          </div>

          <p className="text-[#888888] text-sm sm:text-base max-w-md">
            {lang === 'tr'
              ? 'Yüksek tenörlü krom tesislerinden LEED sertifikalı kulelere, ağır sanayi lojistik merkezlerinden sahil taş malikanelerine uzanan referanslarımız.'
              : 'Our benchmark works spanning beneficiation plants, high-rise headquarters, heavy industrial hubs, and stone estates.'}
          </p>
        </motion.div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 bg-[#0a0a0a] p-3 border border-[#222222]">
          
          {/* Sector Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button
              id="filter-sector-all"
              onClick={() => setActiveSectorFilter('all')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] transition-all border cursor-pointer ${
                activeSectorFilter === 'all'
                  ? 'bg-[#c5a358] text-black border-[#c5a358]'
                  : 'text-[#888888] hover:text-[#f4f4f4] bg-[#111111] border-[#222222]'
              }`}
            >
              {lang === 'tr' ? 'Tüm Alanlar' : 'All Sectors'}
            </button>

            <button
              id="filter-sector-maden"
              onClick={() => setActiveSectorFilter('maden')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] transition-all flex items-center gap-1.5 border cursor-pointer ${
                activeSectorFilter === 'maden'
                  ? 'bg-[#c5a358] text-black border-[#c5a358]'
                  : 'text-[#888888] hover:text-[#f4f4f4] bg-[#111111] border-[#222222]'
              }`}
            >
              <Mountain className="w-3.5 h-3.5" />
              <span>{lang === 'tr' ? 'Maden' : 'Mining'}</span>
            </button>

            <button
              id="filter-sector-mimarlik"
              onClick={() => setActiveSectorFilter('mimarlik')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] transition-all flex items-center gap-1.5 border cursor-pointer ${
                activeSectorFilter === 'mimarlik'
                  ? 'bg-[#c5a358] text-black border-[#c5a358]'
                  : 'text-[#888888] hover:text-[#f4f4f4] bg-[#111111] border-[#222222]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{lang === 'tr' ? 'Mimarlık' : 'Architecture'}</span>
            </button>

            <button
              id="filter-sector-insaat"
              onClick={() => setActiveSectorFilter('insaat')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] transition-all flex items-center gap-1.5 border cursor-pointer ${
                activeSectorFilter === 'insaat'
                  ? 'bg-[#c5a358] text-black border-[#c5a358]'
                  : 'text-[#888888] hover:text-[#f4f4f4] bg-[#111111] border-[#222222]'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{lang === 'tr' ? 'İnşaat' : 'Construction'}</span>
            </button>
          </div>

          {/* Search Input & Status Pill */}
          <div className="flex items-center gap-2">
            
            {/* Search */}
            <div className="relative flex-1 sm:w-60">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#888888]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'tr' ? 'Proje veya şehir ara...' : 'Search project...'}
                className="w-full bg-[#111111] border border-[#222222] pl-9 pr-3 py-2 text-xs text-[#f4f4f4] placeholder-[#888888] focus:outline-none focus:border-[#c5a358] transition-colors"
              />
            </div>

            {/* Status Selector */}
            <select
              value={activeStatusFilter}
              onChange={(e) => setActiveStatusFilter(e.target.value as any)}
              className="bg-[#111111] border border-[#222222] px-3 py-2 text-xs text-[#888888] focus:outline-none focus:border-[#c5a358] cursor-pointer"
            >
              <option value="all">{lang === 'tr' ? 'Tüm Durumlar' : 'All Statuses'}</option>
              <option value="completed">{lang === 'tr' ? 'Tamamlananlar' : 'Completed'}</option>
              <option value="ongoing">{lang === 'tr' ? 'Devam Edenler' : 'In Progress'}</option>
            </select>

          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center bg-[#0a0a0a] border border-[#222222] text-[#888888]">
            {lang === 'tr' ? 'Kriterlerinize uygun proje bulunamadı.' : 'No projects match your filter criteria.'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => {
              const badge = getSectorBadge(project.sector);
              const SectorIcon = badge.icon;
              const fallbackCat = project.sector === 'maden' ? 'mining' : project.sector === 'mimarlik' ? 'architecture' : 'construction';

              return (
                <motion.div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-[#0a0a0a] border border-[#222222] hover:border-[#c5a358] transition-all duration-200 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Project Image */}
                    <div className="relative h-60 overflow-hidden bg-black">
                      <SafeImage 
                        src={project.image} 
                        alt={project.title[lang]}
                        fallbackCategory={fallbackCat}
                        className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40"></div>

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[1px] border ${badge.color}`}>
                          <SectorIcon className="w-3 h-3" />
                          {badge.label}
                        </span>

                        <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-black/80 text-[#f4f4f4] border border-[#222222]">
                          {project.year}
                        </span>
                      </div>

                      {/* Bottom Info Bar inside image */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-[1px] text-[#f4f4f4]">
                        <span className="flex items-center gap-1 font-bold">
                          <MapPin className="w-3 h-3 text-[#c5a358]" />
                          {project.location[lang]}
                        </span>
                        <span className="font-mono text-[#c5a358]">
                          {project.areaOrCapacity[lang]}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-2">
                      <div className="text-[10px] font-bold text-[#c5a358] uppercase tracking-[2px]">
                        {project.category[lang]}
                      </div>

                      <h3 className="font-heading text-base font-bold text-[#f4f4f4] group-hover:text-[#c5a358] transition-colors leading-snug line-clamp-1">
                        {project.title[lang]}
                      </h3>

                      <p className="text-xs text-[#888888] leading-relaxed line-clamp-2">
                        {project.description[lang]}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="px-6 pb-5 pt-3 border-t border-[#222222] flex items-center justify-between text-[11px] font-bold uppercase tracking-[1.5px] text-[#888888] group-hover:text-[#c5a358] transition-colors">
                    <span>{lang === 'tr' ? 'Detayları & Şartnameyi İncele' : 'View Specs & Gallery'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>

                </motion.div>
              );
            })}
          </div>
        )}

      </div>

      {/* Project Modal Detail View */}
      <ProjectModal 
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
        onRequestSimilarQuote={(proj) => {
          if (onRequestQuoteWithProject) {
            onRequestQuoteWithProject(proj);
          }
        }}
      />

    </section>
  );
};

