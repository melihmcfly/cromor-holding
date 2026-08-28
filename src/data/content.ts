import { Project, SectorDetail, NewsItem, StatItem } from '../types';

export const SECTOR_DETAILS: Record<string, SectorDetail> = {
  maden: {
    id: 'maden',
    title: {
      tr: 'Maden & Doğal Kaynaklar',
      en: 'Mining & Natural Resources',
    },
    tagline: {
      tr: 'Yerin derinliklerinden gelen saflık, küresel endüstrinin hammadde gücü.',
      en: 'Purity extracted from the deep earth, powering global industries.',
    },
    shortDesc: {
      tr: 'Yüksek tenörlü krom cevheri, seçkin doğal taşlar ve endüstriyel minerallerin çevreye duyarlı modern madencilik ilkeleriyle çıkarılması ve işlenmesi.',
      en: 'Extraction and processing of high-grade chrome ore, premium natural stones, and industrial minerals with sustainable modern mining standards.',
    },
    fullDesc: {
      tr: 'Cromor Madencilik, Türkiye\'nin zengin yeraltı kaynaklarını en ileri jeolojik tarama, açık ve kapalı ocak işletmeciliği teknikleriyle ekonomiye kazandırır. Yıllık 250.000 tonu aşan krom cevheri üretimimiz ve 18 adet doğal taş ocağımız ile dünya standartlarında hammadde ve yarı mamul tedariği sağlıyoruz.',
      en: 'Cromor Mining brings Turkey\'s rich underground resources to the global economy using advanced geological surveys, underground and open-pit operations. With over 250,000 tons of chrome ore annual capacity and 18 natural stone quarries, we provide world-class raw materials.',
    },
    heroImage: '/images/krom-maden.jpg',
    accentColor: '#C5A880',
    capabilities: [
      {
        title: { tr: 'Yüksek Tenörlü Krom Cevheri', en: 'High-Grade Chrome Ore' },
        desc: { tr: '%42 - %48 Cr2O3 tenöründe lumpy ve konsantre krom ihracatı.', en: 'Export of 42% - 48% Cr2O3 lumpy and metallurgical chrome concentrate.' },
        icon: 'Gem',
      },
      {
        title: { tr: 'Mermer & Doğal Taş Ocakları', en: 'Marble & Natural Stone Quarries' },
        desc: { tr: 'Özel seleksiyon blok, plaka ve ebatlı doğal taş işleme tesisleri.', en: 'Custom selection blocks, slabs, and cut-to-size natural stone processing.' },
        icon: 'Layers',
      },
      {
        title: { tr: 'Endüstriyel Hammaddeler', en: 'Industrial Minerals' },
        desc: { tr: 'Kuvars, feldspat ve bazalt gibi yüksek saflıkta mineral rezervleri.', en: 'High purity mineral reserves including quartz, feldspar, and basalt.' },
        icon: 'Mountain',
      },
      {
        title: { tr: 'Sürdürülebilir & Yeşil Madencilik', en: 'Sustainable Green Mining' },
        desc: { tr: 'Eşzamanlı doğaya yeniden kazandırma ve sıfır atık yönetimi.', en: 'Simultaneous land rehabilitation and zero-waste operational protocols.' },
        icon: 'Leaf',
      },
    ],
    metrics: [
      { value: '250K+', label: { tr: 'Yıllık Krom Üretimi (Ton)', en: 'Annual Chrome (Tons)' } },
      { value: '18', label: { tr: 'Aktif Ruhsatlı Ocak', en: 'Active Quarry Sites' } },
      { value: '%48', label: { tr: 'Maksimum Cr2O3 Tenörü', en: 'Max Cr2O3 Grade' } },
      { value: '14+', label: { tr: 'İhracat Yapılan Ülke', en: 'Export Destinations' } },
    ],
  },
  mimarlik: {
    id: 'mimarlik',
    title: {
      tr: 'Mimarlık & Tasarım Stüdyosu',
      en: 'Architecture & Design Studio',
    },
    tagline: {
      tr: 'Maddenin ruhunu mekânsal zarafete ve zamansız strüktürlere dönüştürüyoruz.',
      en: 'Transforming raw matter into spatial elegance and timeless structures.',
    },
    shortDesc: {
      tr: 'Maden ocaklarımızdan elde ettiğimiz doğal taş ve metalleri mimari vizyonumuzla harmanlayarak, fonksiyonel ve heykelsi yaşam alanları tasarlıyoruz.',
      en: 'Harmonizing raw stones and metals from our quarries with visionary architectural concepts to craft functional, sculptural living environments.',
    },
    fullDesc: {
      tr: 'Cromor Mimarlık, konsept tasarımdan uygulama detaylarına kadar her ölçekte çağdaş mimarlık hizmeti sunar. Doğal malzeme bilgisini parametrik tasarım araçları ve BIM (Building Information Modeling) süreçleriyle birleştirerek sürdürülebilir, prestijli ve kimlikli yapılar üretir.',
      en: 'Cromor Architecture provides comprehensive architectural design across all scales. Combining natural material expertise with parametric modeling and BIM workflows, we create sustainable, prestigious, and distinctive environments.',
    },
    heroImage: '/images/mermer-mimarlik.jpg',
    accentColor: '#D4AF37',
    capabilities: [
      {
        title: { tr: 'Konsept & Masterplanlama', en: 'Concept & Master Planning' },
        desc: { tr: 'Geniş ölçekli kentsel dönüşüm, karma kullanım ve yerleşke planları.', en: 'Large scale urban renewal, mixed-use complexes, and campus planning.' },
        icon: 'Compass',
      },
      {
        title: { tr: 'Lüks İç Mimari & Detay Çözümleri', en: 'Luxury Interior & Detailing' },
        desc: { tr: 'Özel taş, ahşap ve metal işçiliğiyle entegre rezidans ve ofis mekanları.', en: 'Integrated residences and corporate offices with bespoke stone and metal.' },
        icon: 'Home',
      },
      {
        title: { tr: 'Doğal Malzeme Odaklı Tasarım', en: 'Material-Driven Architecture' },
        desc: { tr: 'Kendi ocaklarımızdan seçilen bloklarla özelleştirilmiş cephe ve kaplamalar.', en: 'Customized facades and cladding tailored with hand-picked quarry blocks.' },
        icon: 'Box',
      },
      {
        title: { tr: 'BIM & Parametrik Mühendislik', en: 'BIM & Parametric Engineering' },
        desc: { tr: 'Hatasız şantiye aktarımı için 3D dijital ikiz ve enerji modellemeleri.', en: '3D digital twin and energy performance simulation for seamless execution.' },
        icon: 'Cpu',
      },
    ],
    metrics: [
      { value: '180+', label: { tr: 'Tamamlanan Proje', en: 'Completed Projects' } },
      { value: '1.2M m²', label: { tr: 'Tasarım Alanı', en: 'Designed Footprint' } },
      { value: '12', label: { tr: 'Uluslararası Ödül', en: 'Design Awards' } },
      { value: '%100', label: { tr: 'BIM / 3D Entegrasyon', en: 'BIM Integration' } },
    ],
  },
  insaat: {
    id: 'insaat',
    title: {
      tr: 'İnşaat & Mühendislik',
      en: 'Construction & Engineering',
    },
    tagline: {
      tr: 'Yapının sağlam temeli, mühendisliğin kusursuz icrasıdır.',
      en: 'The foundation of enduring structures is flawless engineering execution.',
    },
    shortDesc: {
      tr: 'Cromor İnşaat, güçlü makine parkı, uzman mühendis kadrosu ve madencilikten gelen zemin hakimiyeti ile en zorlu coğrafyalarda dahi güvenli, zamanında ve bütçeye sadık projeler teslim eder. Yüksek dayanımlı betonarme, çelik konstrüksiyon ve akıllı bina teknolojilerinde lider taahhüt çözümleri sunar.',
      en: 'Cromor Construction leverages an extensive heavy machinery fleet, elite engineering teams, and deep geotechnical know-how to deliver high-risk projects on schedule and within budget. We lead the sector in reinforced concrete, structural steel, and smart building execution.',
    },
    heroImage: '/images/insaat-inisi.jpg',
    accentColor: '#997849',
    capabilities: [
      {
        title: { tr: 'Ağır Hizmet Taahhütleri', en: 'Heavy Civil Contracts' },
        desc: { tr: 'Yüksek taşıma kapasiteli ağır makine ve operatör kadroları.', en: 'Massive fleets of heavy machinery and certified operators for mega-scale infrastructure.' },
        icon: 'Hammer',
      },
      {
        title: { tr: 'Konut & Ticari Yapılar', en: 'Residential & Commercial Buildings' },
        desc: { tr: 'Mimari vizyonu mühendislik iskeletiyle birleştiren prestijli projeler.', en: 'Prestigious projects fusing architectural vision with engineering integrity.' },
        icon: 'Building2',
      },
      {
        title: { tr: 'Endüstriyel Tesisler', en: 'Industrial Facilities' },
        desc: { tr: 'Çelik konstrüksiyon, prefabrik ve ağır sanayi bina türleri.', en: 'Steel construction, prefabricated structures, and heavy industrial facilities.' },
        icon: 'Warehouse',
      },
      {
        title: { tr: 'Zemin & Jeoteknik Mühendislik', en: 'Geotechnical Engineering' },
        desc: { tr: 'Maden deneyimiyle güçlendirilmiş sağlam temel çözümleri.', en: 'Rock-solid foundation solutions backed by decades of mining geotech expertise.' },
        icon: 'Mountain',
      },
    ],
    metrics: [
      { value: '45+', label: { tr: 'Tamamlanan İnşaat Projesi', en: 'Completed Construction Projects' } },
      { value: '850K m²', label: { tr: 'İnşa Edilen Alan', en: 'Built Area (m²)' } },
      { value: '%99.2', label: { tr: 'Bütçe Tutarlılık Oranı', en: 'On-Budget Completion Rate' } },
      { value: '0', label: { tr: 'Kaza/Güvenlik Olayı', en: 'Safety Incidents (YTD)' } },
    ],
  },
};

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: { tr: 'Krom Madeni Operasyonu', en: 'Chrome Mine Operation' },
    sector: 'maden',
    description: {
      tr: 'Yüksek tenörlü krom cevheri çıkarımı ve işleme tesisi.',
      en: 'High-grade chrome ore extraction and processing facility.',
    },
    client: { tr: 'Cromor Maden A.Ş.', en: 'Cromor Mining Corp.' },
    areaOrCapacity: { tr: '120.000 Ton / Yıl Kapasite', en: '120,000 Tons / Year Capacity' },
    status: 'completed',
    image: '/images/proje-maden-1.jpg',
    gallery: [
      '/images/proje-maden-1.jpg',
      '/images/proje-maden-2.jpg',
      '/images/proje-maden-3.jpg',
    ],
  },
  {
    id: 'project-2',
    title: { tr: 'Lüks Rezidans Projesi', en: 'Luxury Residence Project' },
    sector: 'mimarlik',
    description: {
      tr: 'Doğal taş detaylı konsept lüks rezidans.',
      en: 'Concept luxury residence with natural stone detailing.',
    },
    client: { tr: 'Cromor Mimarlık A.Ş.', en: 'Cromor Architecture Inc.' },
    areaOrCapacity: { tr: '15.000 m² Toplam Alan', en: '15,000 m² Total Area' },
    status: 'completed',
    image: '/images/proje-mimarlik-1.jpg',
    gallery: [
      '/images/proje-mimarlik-1.jpg',
      '/images/proje-mimarlik-2.jpg',
      '/images/lobby-mimarlik.jpg',
    ],
  },
  {
    id: 'project-3',
    title: { tr: 'Endüstriyel Tesis İnşaatı', en: 'Industrial Facility Construction' },
    sector: 'insaat',
    description: {
      tr: 'Çelik konstrüksiyon ağır sanayi binası.',
      en: 'Steel construction heavy industrial building.',
    },
    client: { tr: 'Cromor İnşaat A.Ş.', en: 'Cromor Construction Inc.' },
    areaOrCapacity: { tr: '35.000 m² İnşa Alanı', en: '35,000 m² Built Area' },
    status: 'completed',
    image: '/images/proje-maden-2.jpg',
    gallery: [
      '/images/insaat-sisleri.jpg',
      '/images/insaat-genel.jpg',
      '/images/proje-maden-3.jpg',
    ],
  },
  {
    id: 'project-4',
    title: { tr: 'Mermer Ocağı Geliştirmesi', en: 'Marble Quarry Development' },
    sector: 'maden',
    description: {
      tr: 'Beyaz mermer ocağı ve işleme tesisi.',
      en: 'White marble quarry and processing facility.',
    },
    client: { tr: 'Cromor Maden A.Ş.', en: 'Cromor Mining Corp.' },
    areaOrCapacity: { tr: '85.000 Ton / Yıl Kapasite', en: '85,000 Tons / Year Capacity' },
    status: 'ongoing',
    image: '/images/lobby-mimarlik.jpg',
    gallery: [
      '/images/lobby-mimarlik.jpg',
      '/images/proje-maden-1.jpg',
      '/images/proje-maden-2.jpg',
    ],
  },
  {
    id: 'project-5',
    title: { tr: 'Ofis Kulesi Tasarımı', en: 'Office Tower Design' },
    sector: 'mimarlik',
    description: {
      tr: 'Modern ticari ofis kulesi konsept tasarımı.',
      en: 'Modern commercial office tower concept design.',
    },
    client: { tr: 'Cromor Mimarlık A.Ş.', en: 'Cromor Architecture Inc.' },
    areaOrCapacity: { tr: '42 Katlı / 60.000 m²', en: '42 Floors / 60,000 m²' },
    status: 'ongoing',
    image: '/images/ofis-mimarlik.jpg',
    gallery: [
      '/images/ofis-mimarlik.jpg',
      '/images/mermer-mimarlik.jpg',
      '/images/proje-mimarlik-1.jpg',
    ],
  },
  {
    id: 'project-6',
    title: { tr: 'Köprü & Yol İnşaatı', en: 'Bridge & Road Construction' },
    sector: 'insaat',
    description: {
      tr: 'Dağlık bölgede köprü ve yol altyapı projesi.',
      en: 'Bridge and road infrastructure project in mountainous region.',
    },
    client: { tr: 'Cromor İnşaat A.Ş.', en: 'Cromor Construction Inc.' },
    areaOrCapacity: { tr: '12 km Yol / 3 Köprü', en: '12 km Road / 3 Bridges' },
    status: 'ongoing',
    image: '/images/insaat-sisleri.jpg',
    gallery: [
      '/images/insaat-sisleri.jpg',
      '/images/insaat-genel.jpg',
      '/images/proje-maden-1.jpg',
    ],
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    title: { tr: 'Yeni Maden Ruhsatı Alındı', en: 'New Mining License Acquired' },
    date: '2026-07-15',
    excerpt: { tr: 'Kuzey Anadolu bölgesinde yeni krom ruhsatı alındı.', en: 'New chrome license acquired in Northern Anatolia region.' },
    image: '/images/krom-maden.jpg',
  },
  {
    id: 'news-2',
    title: { tr: 'Mimarlık Stüdyosu Genişliyor', en: 'Architecture Studio Expanding' },
    date: '2026-06-20',
    excerpt: { tr: 'Yeni tasarım ekibiyle birlikte 15 yeni proje başlatıldı.', en: '15 new projects launched with new design team.' },
    image: '/images/mermer-mimarlik.jpg',
  },
  {
    id: 'news-3',
    title: { tr: 'İnşaat Projesi Teslim Edildi', en: 'Construction Project Delivered' },
    date: '2026-05-10',
    excerpt: { tr: 'Bölgenin en büyük endüstriyel tesisi başarıyla teslim edildi.', en: 'Region\'s largest industrial facility successfully delivered.' },
    image: '/images/insaat-inisi.jpg',
  },
];

export const STATS: StatItem[] = [
  { value: '250K+', label: { tr: 'Ton Yıllık Krom Üretimi', en: 'Tons Annual Chrome Production' } },
  { value: '18', label: { tr: 'Aktif Ruhsatlı Ocak', en: 'Active Licensed Quarries' } },
  { value: '180+', label: { tr: 'Tamamlanan Mimari Proje', en: 'Completed Architecture Projects' } },
  { value: '45+', label: { tr: 'Tamamlanan İnşaat Projesi', en: 'Completed Construction Projects' } },
];
