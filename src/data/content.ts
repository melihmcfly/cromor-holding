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
      tr: 'Cromor Madencilik, Türkiye’nin zengin yeraltı kaynaklarını en ileri jeolojik tarama, açık ve kapalı ocak işletmeciliği teknikleriyle ekonomiye kazandırır. Yıllık 250.000 tonu aşan krom cevheri üretimimiz ve 18 adet doğal taş ocağımız ile dünya standartlarında hammadde ve yarı mamul tedariği sağlıyoruz.',
      en: 'Cromor Mining brings Turkey’s rich underground resources to the global economy using advanced geological surveys, underground and open-pit operations. With over 250,000 tons of chrome ore annual capacity and 18 natural stone quarries, we provide world-class raw materials.',
    },
    heroImage: 'https://images.unsplash.com/photo-1604148039380-2b2e1e48c3b4?auto=format&fit=crop&w=1600&q=80',
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
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
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
      tr: 'İnşaat & Ağır Mühendislik',
      en: 'Construction & Heavy Engineering',
    },
    tagline: {
      tr: 'Sağlam temeller, ödünsüz mühendislik ve anahtar teslim mükemmellik.',
      en: 'Solid foundations, uncompromising engineering, and turnkey excellence.',
    },
    shortDesc: {
      tr: 'Endüstriyel tesisler, lüks konut kuleleri, maden işletme altyapıları ve mega ticari yapıların anahtar teslim inşası.',
      en: 'Turnkey construction of industrial complexes, luxury residential towers, mining facilities, and mega commercial infrastructures.',
    },
    fullDesc: {
      tr: 'Cromor İnşaat, güçlü makine parkı, uzman mühendis kadrosu ve madencilikten gelen zemin hakimiyeti ile en zorlu coğrafyalarda dahi güvenli, zamanında ve bütçeye sadık projeler teslim eder. Yüksek dayanımlı betonarme, çelik konstrüksiyon ve akıllı bina teknolojilerinde lider taahhüt çözümleri sunar.',
      en: 'Cromor Construction leverages an extensive heavy machinery fleet, elite engineering teams, and deep geotechnical know-how to deliver high-risk projects on schedule and within budget. We lead the sector in reinforced concrete, structural steel, and smart building execution.',
    },
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
    accentColor: '#997849',
    capabilities: [
      {
        title: { tr: 'Anahtar Teslim Genel Taahhüt', en: 'Turnkey General Contracting' },
        desc: { tr: 'Hafriyattan anahtar teslimine kadar uçtan uca tek elden yönetim.', en: 'End-to-end management from groundbreaking to final handover.' },
        icon: 'Hammer',
      },
      {
        title: { tr: 'Endüstriyel & Maden Tesisleri', en: 'Industrial & Mining Plants' },
        desc: { tr: 'Kırma-eleme, zenginleştirme tesisleri ve ağır sanayi fabrikaları.', en: 'Crushing-screening plants, flotation facilities, and heavy industrial hubs.' },
        icon: 'Factory',
      },
      {
        title: { tr: 'Prestij Konut & Karma Yapılar', en: 'Prestige Residential & Mixed' },
        desc: { tr: 'Depreme tam dayanımlı lüks rezidanslar ve ikonik kuleler.', en: 'Earthquake-resilient luxury residences and landmark architectural towers.' },
        icon: 'Building2',
      },
      {
        title: { tr: 'Altyapı & Geoteknik Çözümler', en: 'Infrastructure & Geotechnical' },
        desc: { tr: 'Zemin iyileştirme, derin kazı iksa sistemleri ve tünel işleri.', en: 'Soil stabilization, deep shoring systems, and specialized tunneling.' },
        icon: 'ShieldCheck',
      },
    ],
    metrics: [
      { value: '2.4M m²', label: { tr: 'İnşa Edilen Alan', en: 'Built Area' } },
      { value: '0', label: { tr: 'Kayıp Zamanlı İş Kazası', en: 'Lost Time Incident' } },
      { value: '65+', label: { tr: 'Büyük Ölçekli Şantiye', en: 'Major Sites Handled' } },
      { value: 'ISO 45001', label: { tr: 'İSG Sertifikasyonu', en: 'HSE Certification' } },
    ],
  },
};

export const PROJECTS: Project[] = [
  {
    id: 'cromor-chrome-facility',
    title: {
      tr: 'Kromis Konsantratör & Maden Kompleksi',
      en: 'Kromis Concentrator & Mining Complex',
    },
    sector: 'maden',
    category: { tr: 'Maden & Zenginleştirme', en: 'Mining & Beneficiation' },
    location: { tr: 'Elazığ - Alacakaya Havzası', en: 'Elazığ - Alacakaya Basin, TR' },
    year: '2024',
    client: { tr: 'Cromor Maden A.Ş.', en: 'Cromor Mining Corp.' },
    areaOrCapacity: { tr: '120.000 Ton / Yıl Kapasite', en: '120,000 Tons / Year Capacity' },
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1604148039380-2b2e1e48c3b4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1604148039380-2b2e1e48c3b4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1604148039380-2b2e1e48c3b4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    ],
    description: {
      tr: 'Yüksek verimli spiral ve manyetik ayırıcı teknolojileriyle donatılmış, kapalı devre su sirkülasyonlu, sıfır atık deşarjlı krom zenginleştirme tesisi.',
      en: 'State-of-the-art chrome beneficiation plant equipped with gravity spirals and magnetic separators, featuring 100% closed-loop water recirculation.',
    },
    features: [
      { tr: '%48 Tenörlü Konsantre Çıktı', en: '48% High Grade Concentrate Output' },
      { tr: 'Kapalı Devre Su Geri Kazanım Sistemi', en: 'Closed-Loop Water Recovery System' },
      { tr: 'Güneş Enerjisiyle %35 Öz Tüketim', en: '35% Solar Self-Powered' },
    ],
    technicalSpecs: [
      { label: { tr: 'Tenör Artışı', en: 'Grade Increase' }, value: '%18 -> %48 Cr2O3' },
      { label: { tr: 'Yıllık İşleme', en: 'Annual Processing' }, value: '350.000 Ton Ham Cevher' },
      { label: { tr: 'Otomasyon', en: 'Automation' }, value: 'Siemens SCADA v8.2' },
      { label: { tr: 'Çevre Standardı', en: 'Env Standard' }, value: 'ISO 14001 / Zero Slag' },
    ],
  },
  {
    id: 'aurora-monolith-tower',
    title: {
      tr: 'Aurora Monolit Plaza & Sanat Galerisi',
      en: 'Aurora Monolith Tower & Art Gallery',
    },
    sector: 'mimarlik',
    category: { tr: 'Ticari & Karma Kullanım', en: 'Commercial & Mixed-Use' },
    location: { tr: 'Maslak, İstanbul', en: 'Maslak, Istanbul, TR' },
    year: '2025',
    client: { tr: 'Aurora Finans Grubu', en: 'Aurora Finance Group' },
    areaOrCapacity: { tr: '48.500 m²', en: '48,500 m²' },
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    ],
    description: {
      tr: 'Cromor ocaklarından çıkarılan özel vişne ve gri mermer bloklarının parametrik cephe panelleriyle harmanlandığı, LEED Platinum adayı 34 katlı ofis kulesi.',
      en: 'A 34-story flagship tower blending custom rosso levanto and titanium grey marble cladding sourced directly from Cromor quarries, targeting LEED Platinum.',
    },
    features: [
      { tr: 'Özel Mermer-Cam Kompozit Cephe', en: 'Custom Marble-Glass Composite Facade' },
      { tr: 'Doğal İklimlendirmeli Düşey Avlular', en: 'Naturally Ventilated Vertical Atriums' },
      { tr: 'LEED Platinum Sertifikasyonu', en: 'LEED Platinum Certification' },
    ],
    technicalSpecs: [
      { label: { tr: 'Kat Sayısı', en: 'Floors' }, value: '34 Kat + 4 Bodrum' },
      { label: { tr: 'Cephe Alanı', en: 'Facade Area' }, value: '22.400 m² Özel Mermer Kaplama' },
      { label: { tr: 'Enerji Tasarrufu', en: 'Energy Saving' }, value: '%42 Standart Üstü' },
      { label: { tr: 'Statik Sistem', en: 'Structure' }, value: 'Outrigger Çelik & Kompozit Çekirdek' },
    ],
  },
  {
    id: 'port-logistics-industrial-hub',
    title: {
      tr: 'Marmara Mega Lojistik & Ağır Sanayi Kampüsü',
      en: 'Marmara Mega Logistics & Industrial Campus',
    },
    sector: 'insaat',
    category: { tr: 'Endüstriyel Taahhüt', en: 'Industrial Contracting' },
    location: { tr: 'Kocaeli - Dilovası', en: 'Kocaeli - Dilovası, TR' },
    year: '2024',
    client: { tr: 'Avrasya Lojistik A.Ş.', en: 'Eurasia Logistics Corp.' },
    areaOrCapacity: { tr: '145.000 m² Kapalı Alan', en: '145,000 m² Enclosed Area' },
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    ],
    description: {
      tr: 'Ağır yük dayanımlı prefabrik çelik konstrüksiyon, yüksek tavanlı otomasyonlu depolar ve 60 TIR kapasiteli eşzamanlı yükleme doku inşaatı.',
      en: 'High-payload prefabricated steel structures, automated high-bay warehouses, and concurrent 60-bay dock logistics campus built on deep vibro-stone foundations.',
    },
    features: [
      { tr: '35 Metre Kolonsuz Açıklık', en: '35m Clear Column Span' },
      { tr: 'Laser Screed 10 Ton/m² Zemin Kapasitesi', en: '10 Ton/m² Laser-Screed Floor' },
      { tr: '12 Megawatt Çatı GES Sistemi', en: '12 MW Rooftop Solar Array' },
    ],
    technicalSpecs: [
      { label: { tr: 'Çelik Tonajı', en: 'Structural Steel' }, value: '8.400 Ton' },
      { label: { tr: 'Kazık Sayısı', en: 'Piling Count' }, value: '2.150 Adet Fore Kazık' },
      { label: { tr: 'Teslim Süresi', en: 'Execution Time' }, value: '14 Ay (Zamanından Önce)' },
      { label: { tr: 'İSG Skoru', en: 'HSE Score' }, value: '%99.8 Denetim Notu' },
    ],
  },
  {
    id: 'murom-marble-quarry',
    title: {
      tr: 'Akdeniz Doğal Taş & Oniks Ocağı',
      en: 'Mediterranean Natural Stone & Onyx Quarry',
    },
    sector: 'maden',
    category: { tr: 'Mermer & Oniks Ekstraksiyonu', en: 'Marble & Onyx Extraction' },
    location: { tr: 'Muğla / Burdur Bölgesi', en: 'Muğla / Burdur Region, TR' },
    year: '2025',
    areaOrCapacity: { tr: '60.000 m³ / Yıl Blok Üretimi', en: '60,000 m³ / Year Block Production' },
    status: 'ongoing',
    image: 'https://images.unsplash.com/photo-1604148039380-2b2e1e48c3b4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1604148039380-2b2e1e48c3b4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1604148039380-2b2e1e48c3b4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1604148039380-2b2e1e48c3b4?auto=format&fit=crop&w=1200&q=80',
    ],
    description: {
      tr: 'En son teknoloji elmas tel kesme makineleriyle donatılmış, sıfır çatlak garantili birinci sınıf beyaz, bej ve oniks bloklarının ihracatı.',
      en: 'Equipped with precision diamond wire saws, producing zero-fissure premium white, beige, and translucent onyx blocks for global architectural demand.',
    },
    features: [
      { tr: 'Elmas Tel ve Su Jeti Kesim Teknolojisi', en: 'Diamond Wire & Waterjet Tech' },
      { tr: '%94 Blok Verimliliği', en: '94% Block Efficiency' },
      { tr: 'Eşzamanlı Ağaçlandırma Protokolü', en: 'Concurrent Reforestation Protocol' },
    ],
    technicalSpecs: [
      { label: { tr: 'Rezerv Ömrü', en: 'Reserve Life' }, value: '30+ Yıl Kanıtlanmış' },
      { label: { tr: 'İhracat Limanı', en: 'Export Port' }, value: 'İzmir & Antalya Limanları' },
      { label: { tr: 'Blok Boyutları', en: 'Block Sizes' }, value: 'Gangue-Saw Uyumlu (300x180x150cm)' },
    ],
  },
  {
    id: 'solaris-villas-concept',
    title: {
      tr: 'Ege Kıyı Taş Malikaneleri',
      en: 'Aegean Coastal Stone Estates',
    },
    sector: 'mimarlik',
    category: { tr: 'Lüks Konut & Peyzaj', en: 'Luxury Residential & Landscape' },
    location: { tr: 'Bodrum - Yalıkavak', en: 'Bodrum - Yalıkavak, TR' },
    year: '2024',
    client: { tr: 'Özel Yatırımcı Grubu', en: 'Private Investor Consortium' },
    areaOrCapacity: { tr: '14 Müstakil Villa / 18.000 m²', en: '14 Private Estates / 18,000 m²' },
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    ],
    description: {
      tr: 'Cromor ocaklarından çıkarılan yerel taşlar ile modern brüt betonun kusursuz entegrasyonu; rüzgar ve güneş açılarına göre optimize edilmiş heykelsi yerleşim.',
      en: 'Seamless convergence of local quarry-cut natural stones and contemporary off-form concrete; microclimate-optimized sculptural residential compound.',
    },
    features: [
      { tr: 'Pasif Güneş ve Gölge Mimarisi', en: 'Passive Solar Architecture' },
      { tr: 'Sonsuzluk Havuzu & Taş Teraslar', en: 'Infinity Pools & Stone Terraces' },
      { tr: 'Akıllı Ev Otomasyonu', en: 'KNX Smart Home Automation' },
    ],
    technicalSpecs: [
      { label: { tr: 'Malzeme', en: 'Materials' }, value: 'Cromor Bej Taşı, Titanyum Çinko, Masif Meşe' },
      { label: { tr: 'İklimlendirme', en: 'HVAC' }, value: 'Jeotermal Isı Pompası' },
      { label: { tr: 'Ödül', en: 'Award' }, value: 'European Property Awards 2024' },
    ],
  },
  {
    id: 'zenith-business-center',
    title: {
      tr: 'Zenith Finans ve Teknopark Yerleşkesi',
      en: 'Zenith Finance & Tech Campus',
    },
    sector: 'insaat',
    category: { tr: 'Ticari Kompleks & Altyapı', en: 'Commercial Complex & Infra' },
    location: { tr: 'Çankaya, Ankara', en: 'Çankaya, Ankara, TR' },
    year: '2025',
    client: { tr: 'Zenith Girişim Ortaklığı', en: 'Zenith Venture Partnership' },
    areaOrCapacity: { tr: '82.000 m²', en: '82,000 m²' },
    status: 'ongoing',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    ],
    description: {
      tr: 'A+ ofis standartları, veri merkezi altyapısı, 1.200 araçlık yer altı otoparkı ve sismik izolatörlü taşıyıcı sistemle donatılmış yeni nesil teknokent yapısı.',
      en: 'A+ corporate tech hub featuring seismic base isolators, Tier III datacenter infrastructure, and a 1,200-vehicle underground automated parking.',
    },
    features: [
      { tr: 'Sismik Taban İzolasyon Sistemi (128 İzolatör)', en: '128 Base Seismic Isolators' },
      { tr: 'BREEAM Excellent Standartları', en: 'BREEAM Excellent Compliant' },
      { tr: 'Kesintisiz Çift Hat Enerji Altyapısı', en: 'Dual Feed Redundant Power' },
    ],
    technicalSpecs: [
      { label: { tr: 'Beton Sınıfı', en: 'Concrete Grade' }, value: 'C50/60 Yüksek Dayanım' },
      { label: { tr: 'Fore Kazık Derinliği', en: 'Piling Depth' }, value: '38 Metre Kayaya Soket' },
      { label: { tr: 'İlerleme', en: 'Progress' }, value: '%78 Tamamlandı' },
    ],
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    title: {
      tr: 'Cromor Madencilik, Doğu Anadolu Havzasında Yeni Krom Rezervi Keşfetti',
      en: 'Cromor Mining Discovers New High-Grade Chrome Reserves in Eastern Anatolia',
    },
    date: '28 Temmuz 2026',
    category: { tr: 'Maden & İhracat', en: 'Mining & Export' },
    sector: 'maden',
    summary: {
      tr: 'Yapılan jeofizik sondajlar sonucunda ortalama %46 tenörlü 1.8 milyon tonluk yeni krom cevheri rezervi tescillendi.',
      en: 'Deep geophysical core drilling has confirmed a new 1.8 million ton reserve averaging 46% Cr2O3 grade.',
    },
    readTime: '3 dk',
    image: 'https://images.unsplash.com/photo-1604148039380-2b2e1e48c3b4?auto=format&fit=crop&w=800&q=80',
    content: {
      tr: 'Cromor Holding Madencilik Grubu, 3 yıldır sürdürdüğü modern jeolojik sondaj programının sonucunda 1.8 milyon tonluk yüksek tenörlü krom rezervine ulaştı. Tesisleşme çalışmaları derhal başlatılmıştır.',
      en: 'Following a 3-year exploration program, Cromor Mining has unlocked 1.8 million tons of high-grade chrome ore. Infrastructure setup is already underway.',
    },
  },
  {
    id: 'news-2',
    title: {
      tr: 'Aurora Kulesi, Dünya Mimarlık Festivali (WAF) Finalisti Seçildi',
      en: 'Aurora Tower Named Finalist at the World Architecture Festival (WAF)',
    },
    date: '14 Haziran 2026',
    category: { tr: 'Mimari Başarı', en: 'Architectural Award' },
    sector: 'mimarlik',
    summary: {
      tr: 'Cromor Mimarlık Stüdyosu tarafından tasarlanan taş ve cam kompozit cepheli kule projesi uluslararası jürinin beğenisini kazandı.',
      en: 'The natural stone composite facade tower designed by Cromor Architecture Studio achieved finalist status among international projects.',
    },
    readTime: '4 dk',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    content: {
      tr: 'Doğal taşın modern yüksek yapılarla kurduğu şiirsel ilişkiyi vurgulayan tasarımımız, sürdürülebilirlik ve malzeme inovasyonu kategorilerinde ödüle aday gösterildi.',
      en: 'Highlighting the poetic relationship between indigenous natural stones and contemporary high-rise design, the project was shortlisted for material innovation.',
    },
  },
  {
    id: 'news-3',
    title: {
      tr: 'İnşaat Grubumuz 2 Milyon Adam/Saat Sıfır Kaza Hedefini Başarıyla Tamamladı',
      en: 'Construction Division Surpasses 2 Million Man-Hours Without Lost-Time Incident',
    },
    date: '02 Mayıs 2026',
    category: { tr: 'İSG & Kurumsal', en: 'HSE & Corporate' },
    sector: 'insaat',
    summary: {
      tr: 'Tüm aktif şantiyelerimizde uygulanan dijital denetim sistemleri ve tavizsiz iş güvenliği kültürü yeni bir rekora imza attı.',
      en: 'Rigorous digital safety inspection protocols and safety-first culture resulted in an outstanding HSE milestone across all active jobsites.',
    },
    readTime: '2 dk',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    content: {
      tr: 'İnsan hayatı ve çalışma güvenliği Cromor için her türlü ticari hedefin üzerindedir. Sıfır kaza politikamızı ödünsüz şekilde sürdürüyoruz.',
      en: 'Human safety remains our absolute top priority above all commercial goals. We continue to uphold zero-accident standards.',
    },
  },
];

export const STATS: StatItem[] = [
  {
    id: 'stat-experience',
    value: '25+',
    label: { tr: 'Yıllık Sektörel Tecrübe', en: 'Years of Experience' },
    sublabel: { tr: '1999\'dan günümüze güven', en: 'Trusted since 1999' },
  },
  {
    id: 'stat-capacity',
    value: '2.4M',
    suffix: 'm²',
    label: { tr: 'Toplam İnşaat & Tasarım Alanı', en: 'Total Built & Designed Footprint' },
    sublabel: { tr: 'Zamanında teslim edilen projeler', en: 'Delivered on schedule' },
  },
  {
    id: 'stat-mining',
    value: '250K',
    suffix: 'Ton/Yıl',
    label: { tr: 'Krom & Mineral Üretimi', en: 'Annual Mineral Production' },
    sublabel: { tr: 'Yüksek tenörlü küresel tedarik', en: 'High grade global export' },
  },
  {
    id: 'stat-export',
    value: '18+',
    label: { tr: 'Ülkeye İhracat ve Hizmet', en: 'Countries Exported To' },
    sublabel: { tr: 'Avrupa, Asya ve Ortadoğu', en: 'Europe, Asia & Middle East' },
  },
];

export const CORE_VALUES = [
  {
    id: 'val-integrity',
    title: { tr: 'Entegre Sinerji (Madenden Mimariye)', en: 'Integrated Synergy (Earth to Design)' },
    desc: {
      tr: 'Hammaddeyi kaynağından çıkarıyor, mimari atölyemizde işliyor ve inşaat mühendisliğimizle gerçeğe dönüştürüyoruz. Aracı yok, kalite kaybı yok.',
      en: 'We extract raw materials from our own quarries, shape them in our architectural studio, and build them with our contracting fleet. Zero intermediaries.',
    },
    icon: 'Layers',
  },
  {
    id: 'val-engineering',
    title: { tr: 'Ödünsüz Mühendislik & Güvenlik', en: 'Uncompromising Engineering' },
    desc: {
      tr: 'Depreme tam dayanıklı strüktürler, sismik izolasyonlar ve madencilikte sıfır kaza hedefiyle en yüksek global standartlarda çalışıyoruz.',
      en: 'Earthquake-resilient structures, base isolation technologies, and strict zero-incident mining protocols meeting global certifications.',
    },
    icon: 'ShieldCheck',
  },
  {
    id: 'val-sustainability',
    title: { tr: 'Ekolojik Sorumluluk & ESG', en: 'Ecological ESG Stewardship' },
    desc: {
      tr: 'Terk edilen maden sahalarını ormanlaştırıyor, inşaatlarımızda LEED ve BREEAM standartlarını hedefliyor, karbon ayak izimizi minimize ediyoruz.',
      en: 'Concurrent quarry reforestation, LEED and BREEAM green building certifications, and relentless pursuit of decarbonization.',
    },
    icon: 'Leaf',
  },
  {
    id: 'val-aesthetic',
    title: { tr: 'Heykelsi & Zamansız Estetik', en: 'Sculptural & Timeless Aesthetics' },
    desc: {
      tr: 'Doğal taş ve çeliğin asaletini yalın modern mimarlık çizgileriyle buluşturarak yüzyıllara meydan okuyan simge yapılar inşa ediyoruz.',
      en: 'Blending the dignity of natural stone and structural steel with clean architectural forms to produce enduring landmark edifices.',
    },
    icon: 'Sparkles',
  },
];
