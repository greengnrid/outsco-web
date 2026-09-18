import Footer from '../components/Footer';
import { metrics, achievements } from '../data/mockData';
import { type FormEvent, useState, useEffect } from 'react';

const heroImages = Array.from(
  { length: 34 },
  (_, i) => `/pics/Home/${String(i + 1).padStart(3, '0')}.webp`,
);

interface BerandaProps {}

export default function Beranda(_props: Readonly<BerandaProps>) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);
  const [heroFading, setHeroFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroFading(true);
      setTimeout(() => {
        setHeroIdx((prev) => (prev + 1) % heroImages.length);
        setHeroFading(false);
      }, 500);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  return (
    <div className="box-border w-full h-fit flex flex-col gap-0 justify-start items-start bg-[#1d0b2a] overflow-hidden">
      <div className="box-border w-full h-fit shrink-0 flex flex-col gap-0 justify-start items-start bg-[#1d0b2a]">
        <div className="box-border w-full h-fit shrink-0 flex flex-col gap-0 justify-start items-start">
          {/* ======================== SECTION 1: HERO ======================== */}
          <section className="box-border w-full h-fit shrink-0 flex flex-col gap-0 p-[40px_0px_53px_0px] justify-start items-start bg-no-repeat bg-[length:100%_100%] overflow-hidden relative" style={{ backgroundImage: 'linear-gradient(180deg, #7605aa4d 0%, #180624 50%, #1d0b2a 100%)' }}>
            {/* Ambient glows */}
            <div className="box-border w-[719.97px] h-[340px] absolute left-[280.12px] top-[-95.97px] bg-[#b807e633] rounded-full" style={{ filter: 'blur(55px)' }}></div>
            <div className="box-border w-[383.99px] h-[383.99px] absolute left-[856.24px] top-[160px] bg-[#00535b40] rounded-full" style={{ filter: 'blur(50px)', zIndex: 1 }}></div>
            <div className="box-border w-[319.99px] h-[319.99px] absolute left-[47.97px] top-[374.46px] bg-[#7605aa4d] rounded-full" style={{ filter: 'blur(45px)', zIndex: 2 }}></div>

            <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[39.98px] p-[0px_24px] justify-start items-start relative" style={{ zIndex: 3 }}>
              {/* Hero Grid */}
              <div className="box-border w-full h-[367.59px] shrink-0 relative">
                {/* Left content */}
                <div className="box-border w-[702.13px] h-[339.93px] absolute left-0 top-[13.91px]" style={{ zIndex: 0 }}>
                  <div className="box-border w-[538.18px] h-[135.98px] absolute left-[36px] top-[0.25px]" style={{ zIndex: 0 }}>
                    <div className="text-[84px]/[92px] box-border absolute left-0 top-0 text-[#f3daff] font-['Space_Grotesk',system-ui,sans-serif] font-bold tracking-[-0.4px] text-left whitespace-nowrap" style={{ zIndex: 0 }}>
                      IPB Outsco
                    </div>
                    <div
                      className="text-[37px]/[44px] box-border absolute left-0 top-[88.3px] font-['Space_Grotesk',system-ui,sans-serif] font-bold tracking-[-0.4px] text-left whitespace-nowrap"
                      style={{
                        zIndex: 1,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        backgroundImage: 'linear-gradient(0deg, #f6d9ff 0%, #f2afff 50%, #89d2dc 100%)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100% 100%',
                        color: 'transparent',
                      }}
                    >
                      (Outstanding Student College)
                    </div>
                  </div>
                  <div className="box-border w-[702.13px] h-[8px] absolute left-0 top-[135.98px]" style={{ zIndex: 1 }}></div>
                  <div className="text-[18px]/[29px] box-border w-[639px] h-[88px] absolute left-[36px] top-[144.25px] text-[#d1c1d4] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-normal text-left" style={{ zIndex: 2 }}>
                    Sebuah wadah pengembangan mahasiswa di bawah Direktorat Kemahasiswaan dan
                    Pengembangan Karir IPB University yang berfokus pada pengembangan mahasiswa
                    berprestasi serta potensi kepemimpinan.
                  </div>
                  <div className="box-border w-[702.13px] h-[23.98px] absolute left-0 top-[231.98px]" style={{ zIndex: 3 }}></div>
                  {/* CTA Buttons */}
                  <div className="box-border w-fit h-fit absolute left-[36.07px] top-[255.96px] flex flex-row gap-[15.99px] justify-start items-center" style={{ zIndex: 4 }}>
                    <div className="box-border w-fit shrink-0 h-[43.99px] flex flex-row gap-[8px] p-[8px_24px] justify-center items-center bg-[#7605aa] rounded-full" style={{ boxShadow: '0px 0px 30px 0px #b808e68c' }}>
                      <div className="text-[20px]/[28px] box-border text-[#ffffff] font-['Material_Symbols_Outlined',system-ui,sans-serif] font-normal text-left whitespace-nowrap">
                        token
                      </div>
                      <div className="text-[20px]/[28px] box-border text-[#ffffff] font-['Space_Grotesk',system-ui,sans-serif] font-semibold text-left whitespace-nowrap">
                        Masuk Portal Outscholar
                      </div>
                      <div className="text-[20px]/[28px] box-border text-[#ffffff] font-['Material_Symbols_Outlined',system-ui,sans-serif] font-normal text-left whitespace-nowrap">
                        arrow_forward
                      </div>
                    </div>
                    <div className="box-border w-fit shrink-0 h-[43.99px] flex flex-row gap-[8px] p-[8px_24px] justify-center items-center bg-[#35224299] rounded-full" style={{ boxShadow: '0px 4px 5px 0px #0000001a, 0px 2px 2px 0px #0000001a', backdropFilter: 'blur(12px)' }}>
                      <div className="text-[20px]/[28px] box-border text-[#89d2dc] font-['Material_Symbols_Outlined',system-ui,sans-serif] font-normal text-left whitespace-nowrap">
                        military_tech
                      </div>
                      <div className="text-[20px]/[28px] box-border text-[#a5eff9] font-['Space_Grotesk',system-ui,sans-serif] font-semibold text-left whitespace-nowrap">
                        Jelajahi Hall of Fame
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Hero Image Carousel */}
                <div className="box-border w-fit h-fit absolute left-[742.11px] top-0 flex flex-col gap-0 justify-start items-start rounded-2xl overflow-hidden" style={{ boxShadow: '0px 16px 48px 0px #00000073', zIndex: 1 }}>
                  <div
                    className="box-border w-[490.12px] h-[367.59px] shrink-0 relative bg-cover bg-center"
                    style={{
                      zIndex: 0,
                      backgroundImage: heroImages[heroIdx]?.startsWith('/') ? `url('${heroImages[heroIdx]}')` : undefined,
                      opacity: heroFading ? 0 : 1,
                      transition: 'opacity 0.5s ease-in-out',
                    }}
                  ></div>
                  {/* Carousel dots */}
                  <div className="box-border w-fit h-fit absolute left-[183.29px] top-[349.64px] flex flex-row gap-[5.98px] justify-start items-start" style={{ zIndex: 1 }}>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className={`box-border shrink-0 h-[5.97px] rounded-full ${
                          i === heroIdx % 10
                            ? 'w-[15.99px] bg-[#ffffff]'
                            : 'w-[5.97px] bg-[#ffffff66]'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats Cards Band */}
              <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[16px] justify-start items-start">
                {metrics.map((m) => {
                  const iconMap: Record<string, string> = {
                    'Cohort Terpilih': 'group',
                    'Rekor Prestasi': 'workspace_premium',
                    'Masa Inkubasi': 'workspace_premium',
                    'Bimbingan Prestasi': 'workspace_premium',
                  };
                  const valueMap: Record<string, string> = {
                    'Cohort Terpilih': '55',
                    'Rekor Prestasi': '142+',
                    'Masa Inkubasi': '100+',
                    'Bimbingan Prestasi': '10',
                  };
                  const subtitleMap: Record<string, string> = {
                    'Cohort Terpilih': 'Outscholars Terpilih Batch 8',
                    'Rekor Prestasi': 'Kemenangan Kompetisi diraih Outscholars',
                    'Masa Inkubasi': 'Penghargaan diterima Outscholars',
                    'Bimbingan Prestasi': 'Aksi sosial diinisiasi Outscholars',
                  };
                  const labelMap: Record<string, string> = {
                    'Cohort Terpilih': 'OUTSCHOLARS AKTIF',
                    'Rekor Prestasi': 'REKOR PRESTASI',
                    'Masa Inkubasi': 'PENGHARGAAN',
                    'Bimbingan Prestasi': 'SOCIAL IMPACT',
                  };
                  const iconColorMap: Record<string, string> = {
                    'Cohort Terpilih': 'text-[#f2afff]',
                    'Rekor Prestasi': 'text-[#f3d9ffff]',
                    'Masa Inkubasi': 'text-[#f3d9ffff]',
                    'Bimbingan Prestasi': 'text-[#f3d9ffff]',
                  };
                  return (
                    <div key={m.label} className="box-border flex-1 h-[153.94px] flex flex-col gap-[3.99px] p-[16px] justify-start items-start bg-[#261333b3] rounded-xl" style={{ boxShadow: '0px 10px 12px 0px #0000001a, 0px 4px 2px 0px #0000001a', backdropFilter: 'blur(12px)' }}>
                      <div className="box-border w-full h-[28px] shrink-0 flex flex-row gap-0 justify-between items-center">
                        <div className="text-[10px]/[14px] box-border text-[#d1c1d4] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-bold tracking-[0.5px] text-left whitespace-nowrap">
                          {labelMap[m.label] ?? m.label}
                        </div>
                        <div className={`text-[20px]/[28px] box-border ${iconColorMap[m.label] ?? 'text-[#f2afff]'} font-['Material_Symbols_Outlined',system-ui,sans-serif] font-normal text-left whitespace-nowrap`}>
                          {iconMap[m.label] ?? 'group'}
                        </div>
                      </div>
                      <div className="text-[40px]/[48px] box-border text-[#f3daff] font-['Space_Grotesk',system-ui,sans-serif] font-bold tracking-[-1px] text-left whitespace-nowrap">
                        {valueMap[m.label] ?? m.value}
                      </div>
                      <div className="text-[13px]/[20px] box-border text-[#a5eff9] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-normal text-left whitespace-nowrap">
                        {subtitleMap[m.label] ?? m.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ======================== SECTION 2: ACHIEVEMENTS ======================== */}
          <section className="box-border w-full h-fit shrink-0 flex flex-col gap-0 p-[40px_0px] justify-start items-start bg-[#1d0b2a]">
            <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[23.99px] p-[0px_24px] justify-start items-start">
              {/* Section header */}
              <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[16px] justify-between items-center">
                <div className="box-border w-[693px] shrink-0 h-[57px] flex flex-col gap-[3.98px] justify-start items-start">
                  <div className="text-[40px]/[48px] box-border text-[#f3daff] font-['Space_Grotesk',system-ui,sans-serif] font-bold tracking-[-0.8px] text-left whitespace-nowrap">
                    Capaian Prestasi Terbaru Outscholars
                  </div>
                </div>
                <div className="box-border w-[189.76px] shrink-0 h-[28px] flex flex-row gap-[3.99px] justify-start items-center">
                  <div className="text-[14px]/[20px] box-border text-[#a5eff9] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-semibold tracking-[0.28px] text-left whitespace-nowrap">
                    Lihat Arsip 142+ Prestasi
                  </div>
                  <div className="text-[18px]/[28px] box-border text-[#a5eff9] font-['Material_Symbols_Outlined',system-ui,sans-serif] font-normal text-left whitespace-nowrap">
                    arrow_forward
                  </div>
                </div>
              </div>

              {/* Achievement cards */}
              <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[16px] justify-start items-start">
                {achievements.map((ach) => {
                  const configMap: Record<string, { badge: string; icon: string; iconColor: string; label: string; labelColor: string }> = {
                    'ach-001': { badge: 'PUSPRESNAS KEMENDIKBUD', icon: 'emoji_events', iconColor: 'text-[#f2afff]', label: 'Juara 1 Nasional', labelColor: 'text-[#f2afff]' },
                    'ach-002': { badge: 'GEMASTIK XVII', icon: 'military_tech', iconColor: 'text-[#89d2dc]', label: 'Juara 2 Nasional', labelColor: 'text-[#89d2dc]' },
                    'ach-003': { badge: 'SEOUL, SOUTH KOREA', icon: 'emoji_events', iconColor: 'text-[#f6d9ff]', label: 'Gold Medal & Special Award', labelColor: 'text-[#f6d9ff]' },
                    'ach-004': { badge: 'UI NATIONAL B-PLAN', icon: 'emoji_events', iconColor: 'text-[#89d2dc]', label: 'Juara 1 Nasional', labelColor: 'text-[#89d2dc]' },
                  };
                  const c = configMap[ach.id] ?? configMap['ach-001'];
                  return (
                    <div key={ach.id} className="box-border flex-1 h-[341.93px] flex flex-col gap-0 p-[15.99px_0px_0px_0px] justify-start items-start bg-[#2a183799] rounded-xl" style={{ boxShadow: '0px 10px 12px 0px #0000001a, 0px 4px 2px 0px #0000001a', backdropFilter: 'blur(12px)' }}>
                      <div className="box-border w-full h-fit shrink-0 flex flex-col gap-0 justify-start items-center">
                        <div className="box-border w-[264.08px] h-[299.96px] shrink-0 flex flex-col gap-[3.98px] justify-start items-start">
                          <div className="box-border w-fit h-[164.01px] shrink-0 flex flex-col gap-0 justify-start items-start rounded-lg overflow-hidden relative">
                            <div
                              className="box-border w-[264.08px] h-[160px] shrink-0 relative bg-cover bg-center"
                              style={{
                                zIndex: 0,
                                backgroundImage: ach.imageUrl ? `url('${ach.imageUrl}')` : undefined,
                              }}
                            ></div>
                            <div className="box-border w-fit h-[18.96px] absolute left-[98.34px] top-[7.99px] flex flex-col gap-0 p-[2px_8px] justify-center items-start bg-[#180624cc] rounded-full" style={{ backdropFilter: 'blur(6px)', zIndex: 1 }}>
                              <div className="text-[10px]/[15px] box-border text-[#89d2dc] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-bold text-left whitespace-nowrap">
                                {c.badge}
                              </div>
                            </div>
                          </div>
                          <div className="box-border w-full h-[28px] shrink-0 flex flex-row gap-[5.97px] justify-start items-center">
                            <div className={`text-[18px]/[28px] box-border ${c.iconColor} font-['Material_Symbols_Outlined',system-ui,sans-serif] font-normal text-left whitespace-nowrap`}>
                              {c.icon}
                            </div>
                            <div className={`text-[12px]/[16px] box-border ${c.labelColor} font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-bold tracking-[0.48px] text-left whitespace-nowrap`}>
                              {c.label}
                            </div>
                          </div>
                          <div className="text-[20px]/[28px] box-border text-[#f3daff] font-['Space_Grotesk',system-ui,sans-serif] font-semibold text-left whitespace-nowrap">
                            {ach.title}
                          </div>
                          <div className="text-[13px]/[20px] box-border w-full h-[60.01px] shrink-0 text-[#d1c1d4] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-normal text-left">
                            {ach.description}
                          </div>
                        </div>
                      </div>
                      <div className="box-border w-full h-[25.98px] shrink-0 flex flex-row gap-0 p-[4px_8px_8px_8px] justify-between items-center bg-[#35224266] rounded-b-xl">
                        <div className="text-[10px]/[14px] box-border text-[#f3daff] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-semibold tracking-[0.8px] text-left whitespace-nowrap">
                          {ach.team}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ======================== SECTION 3: 4 CLUSTERS ======================== */}
          <section className="box-border w-full h-fit shrink-0 flex flex-col gap-0 p-[40px_0px] justify-start items-start bg-[#180624]">
            <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[39.97px] p-[0px_24px] justify-start items-start">
              {/* Section header */}
              <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[16px] justify-between items-end">
                <div className="box-border w-[762px] shrink-0 h-[62px] flex flex-col gap-[7.99px] p-[1.55px_0px_0.01px_0px] justify-start items-start">
                  <div className="text-[40px]/[48px] box-border text-[#f3daff] font-['Space_Grotesk',system-ui,sans-serif] font-bold tracking-[-0.8px] text-left whitespace-nowrap">
                    4 Cluster Pengembangan Diri Outscholar
                  </div>
                </div>
              </div>

              {/* 4 Pillar cards */}
              <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[16px] justify-start items-start">
                {/* Pillar 1: Scientific Writing */}
                <div className="box-border w-[296px] shrink-0 h-[338px] flex flex-col gap-[24.45px] p-[23.99px_0px_0px_0px] justify-start items-start bg-[#2a183766] rounded-xl" style={{ boxShadow: '0px 10px 12px 0px #0000001a, 0px 4px 2px 0px #0000001a', backdropFilter: 'blur(12px)' }}>
                  <div className="box-border w-full h-fit shrink-0 flex flex-col gap-0 justify-start items-center">
                    <div className="box-border w-[248.09px] h-fit shrink-0 flex flex-col gap-0 p-[0px_0px_16px_0px] justify-start items-start">
                      <div className="box-border w-[56px] h-[56px] shrink-0 flex flex-row gap-0 justify-center items-center rounded-xl" style={{ boxShadow: '0px 0px 24px 0px #b808e666', backgroundImage: 'linear-gradient(135deg, #7605aa 14.645%, #b807e6 85.355%)', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}>
                        <div className="box-border w-[31.98px] shrink-0 h-[31.98px] overflow-hidden relative">
                          <svg viewBox="-0.0000021457672119140625 0.0000015497207641601562 53.33334183692932 53.33494031429291" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[26px] h-[26px] absolute left-[2.99px] top-[2.99px] overflow-visible" style={{ zIndex: 1 }}>
                            <path d="M12.38133 29.52694l28.72267-28.72533c1.0694-1.06881 2.80261-1.06881 3.872 0l4.89067 4.89066c1.06881 1.06939 1.06881 2.80261 0 3.872l-28.72534 28.72267-13.14133 4.38133 4.38133-13.14133z m38.28534 18.47467l-48 0c-1.47276 0-2.66667 1.19391-2.66667 2.66666 0 1.47276 1.19391 2.66667 2.66667 2.66667l48 0c1.47276 0 2.66667-1.19391 2.66667-2.66667 0-1.47276-1.19391-2.66666-2.66667-2.66666" fill="#f3d9ffff"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="box-border w-full h-[19.53px] shrink-0"></div>
                      <div className="box-border w-full h-[11.53px] shrink-0"></div>
                      <div className="text-[28px]/[36px] box-border w-[235px] h-[72px] shrink-0 text-[#f3daff] font-['Space_Grotesk',system-ui,sans-serif] font-semibold text-left">
                        Scientiﬁc Writing
                      </div>
                      <div className="box-border w-full h-[3.98px] shrink-0"></div>
                      <div className="text-[15px]/[24px] box-border w-full h-[146.34px] shrink-0 text-[#d1c1d4] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-normal text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pillar 2: Business and Entrepreneur */}
                <div className="box-border w-[296px] shrink-0 h-[338px] flex flex-col gap-[24.39px] p-[23.99px_0px_0px_0px] justify-start items-start bg-[#2a183766] rounded-xl" style={{ boxShadow: '0px 10px 12px 0px #0000001a, 0px 4px 2px 0px #0000001a', backdropFilter: 'blur(12px)' }}>
                  <div className="box-border w-full h-fit shrink-0 flex flex-col gap-0 justify-start items-center">
                    <div className="box-border w-[248.09px] h-fit shrink-0 flex flex-col gap-0 p-[0px_0px_16px_0px] justify-start items-start">
                      <div className="box-border w-[56px] h-[56px] shrink-0 flex flex-row gap-0 justify-center items-center rounded-xl" style={{ boxShadow: '0px 0px 24px 0px #55006b80', backgroundImage: 'linear-gradient(135deg, #412d4e 14.645%, #55006c 85.355%)', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}>
                        <div className="box-border w-[35px] shrink-0 h-[35px] overflow-hidden relative">
                          <svg viewBox="0.0000021457672119140625 0 21.49999976158142 21.500001907348633" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[27px] h-[27px] absolute left-[4px] top-[4px] overflow-visible" style={{ zIndex: 0 }}>
                            <path d="M10.698 0l0.104 0c0.899 0 1.648 0 2.242 0.08 0.628 0.084 1.195 0.27 1.65 0.725 0.456 0.456 0.642 1.023 0.726 1.65 0.06 0.44 0.075 0.964 0.079 1.57 0.648 0.021 1.226 0.06 1.74 0.128 1.172 0.158 2.121 0.49 2.87 1.238 0.748 0.749 1.08 1.698 1.238 2.87 0.153 1.14 0.153 2.595 0.153 4.433l0 0.112c0 1.838 0 3.294-0.153 4.433-0.158 1.172-0.49 2.121-1.238 2.87-0.749 0.748-1.698 1.08-2.87 1.238-1.14 0.153-2.595 0.153-4.433 0.153l-4.112 0c-1.838 0-3.294 0-4.433-0.153-1.172-0.158-2.121-0.49-2.87-1.238-0.748-0.749-1.08-1.698-1.238-2.87-0.153-1.14-0.153-2.595-0.153-4.433l0-0.112c0-1.838 0-3.294 0.153-4.433 0.158-1.172 0.49-2.121 1.238-2.87 0.749-0.748 1.698-1.08 2.87-1.238 0.57759-0.07077 1.15827-0.11349 1.74-0.128 0.004-0.606 0.02-1.13 0.079-1.57 0.084-0.627 0.27-1.194 0.725-1.65 0.456-0.455 1.023-0.64 1.65-0.725 0.595-0.08 1.345-0.08 2.243-0.08m-3.196 4.002q0.567-0.003 1.192-0.002l4.112 0q0.625 0 1.192 0.002c-0.004-0.57-0.018-1-0.064-1.347-0.063-0.461-0.17-0.659-0.3-0.789-0.13-0.13-0.328-0.237-0.79-0.3-0.482-0.064-1.13-0.066-2.094-0.066-0.964 0-1.612 0.002-2.095 0.067-0.461 0.062-0.659 0.169-0.789 0.3-0.13 0.131-0.237 0.327-0.3 0.788-0.046 0.346-0.06 0.776-0.064 1.347m-3.042 1.638c-1.006 0.135-1.586 0.389-2.01 0.812-0.422 0.423-0.676 1.003-0.811 2.009-0.138 1.027-0.14 2.382-0.14 4.289 0 1.907 0.002 3.262 0.14 4.29 0.135 1.005 0.389 1.585 0.812 2.008 0.423 0.423 1.003 0.677 2.009 0.812 1.028 0.138 2.382 0.14 4.289 0.14l4 0c1.907 0 3.262-0.002 4.29-0.14 1.005-0.135 1.585-0.389 2.008-0.812 0.423-0.423 0.677-1.003 0.812-2.009 0.138-1.027 0.14-2.382 0.14-4.289 0-1.907-0.002-3.261-0.14-4.29-0.135-1.005-0.389-1.585-0.812-2.008-0.423-0.423-1.003-0.677-2.009-0.812-1.027-0.138-2.382-0.14-4.289-0.14l-4 0c-1.907 0-3.261 0.002-4.29 0.14m6.291 2.36c0.41421 0 0.75 0.33579 0.75 0.75l0 0.01c1.089 0.274 2 1.133 2 2.323 0 0.41421-0.33579 0.75-0.75 0.75-0.41421 0-0.75-0.33579-0.75-0.75 0-0.384-0.426-0.916-1.25-0.916-0.824 0-1.25 0.532-1.25 0.916 0 0.384 0.426 0.916 1.25 0.916 0.824 0 1.25 0.532 1.25 0.916 0 0.384-0.426 0.916-1.25 0.916-0.824 0-1.25 0.532-1.25 0.916 0 0.384 0.426 0.916 1.25 0.916 1.24221 0 2.25-1.00779 2.25-2.25l0-0.01c0-1.24221-1.00779-2.25-2.25-2.25-0.824 0-1.25 0.532-1.25 0.916 0 0.384 0.426 0.916 1.25 0.916 0.824 0 1.25 0.532 1.25 0.916 0 0.384-0.426 0.916-1.25 0.916-1.24221 0-2.25-1.00779-2.25-2.25l0-0.01c0-1.24221 1.00779-2.25 2.25-2.25 0.824 0 1.25 0.532 1.25 0.916 0-0.384 0.426-0.916 1.25-0.916 1.24221 0 2.25 1.00779 2.25 2.25l0 0.01c0 1.24221-1.00779 2.25-2.25 2.25-0.824 0-1.25 0.532-1.25 0.916 0 0.384 0.426 0.916 1.25 0.916" fill="#f3d9ffff" fillRule="evenodd"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="box-border w-full h-[19.53px] shrink-0"></div>
                      <div className="box-border w-full h-[11.53px] shrink-0"></div>
                      <div className="text-[28px]/[36px] box-border text-[#f3daff] font-['Space_Grotesk',system-ui,sans-serif] font-semibold text-left whitespace-nowrap">
                        Business and<br />Entrepreneur
                      </div>
                      <div className="box-border w-full h-[3.98px] shrink-0"></div>
                      <div className="text-[15px]/[24px] box-border w-full h-[121.95px] shrink-0 text-[#d1c1d4] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-normal text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pillar 3: Public Speaking and Diplomacy */}
                <div className="box-border w-[296px] shrink-0 h-[338px] flex flex-col gap-0 p-[23.99px_0px_0px_0px] justify-start items-start bg-[#2a183766] rounded-xl" style={{ boxShadow: '0px 10px 12px 0px #0000001a, 0px 4px 2px 0px #0000001a', backdropFilter: 'blur(12px)' }}>
                  <div className="box-border w-full h-fit shrink-0 flex flex-col gap-0 justify-start items-center">
                    <div className="box-border w-[248.09px] h-fit shrink-0 flex flex-col gap-0 p-[0px_0px_16px_0px] justify-start items-start">
                      <div className="box-border w-[56px] h-[56px] shrink-0 flex flex-row gap-0 justify-center items-center rounded-xl" style={{ boxShadow: '0px 0px 24px 0px #00535b80', backgroundImage: 'linear-gradient(135deg, #00535b 14.645%, #453152 85.355%)', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}>
                        <div className="box-border w-[31.98px] shrink-0 h-[31.98px] overflow-hidden relative">
                          <svg viewBox="2.5331974029541016e-7 0 16.051379904150963 19.959999084472656" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[23px] h-[28px] absolute left-[7px] top-[4.5px] overflow-visible" style={{ zIndex: 0 }}>
                            <path d="M15.81569 5.38c-0.19082-0.24149-0.48222-0.38166-0.79-0.38l-11 0 0-0.5c0.00256-0.89448 0.59874-1.67849 1.46-1.92 0.26928 0.25983 0.62595 0.40963 1 0.42l1 0c0.82843 0 1.5-0.67157 1.5-1.5 0-0.82843-0.67157-1.5-1.5-1.5l-1 0c-0.45675 0.00063-0.88798 0.21071-1.17 0.57-1.90213 0.34307-3.28687 1.99718-3.29 3.93l0 0.5-1 0c-0.30778-0.00166-0.59918 0.13851-0.79 0.38-0.20311 0.24074-0.28092 0.56311-0.21 0.87l0.62 2.49c0.30271 1.17279 1.28098 2.04849 2.48 2.22l0.78 7-0.88 0c-0.55228 0-1 0.44772-1 1 0 0.55229 0.44772 1 1 1l10 0c0.55228 0 1-0.44771 1-1 0-0.55228-0.44772-1-1-1l-0.88 0 0.78-7c1.19027-0.18413 2.15502-1.06225 2.45-2.23l0.65-2.48c0.07092-0.30689-0.00689-0.62926-0.21-0.87m-5.69 12.62l-4.2 0-0.78-7 5.76 0-0.78 7z m3.31-9.75c-0.11282 0.45718-0.5293 0.77371-1 0.76l-8.85 0c-0.4707 0.01371-0.88718-0.30282-1-0.76l-0.28-1.25 11.44 0-0.31 1.25z" fill="#f3d9ffff"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="box-border w-full h-[19.53px] shrink-0"></div>
                      <div className="box-border w-full h-[11.53px] shrink-0"></div>
                      <div className="text-[28px]/[36px] box-border w-[254px] text-[#f3daff] font-['Space_Grotesk',system-ui,sans-serif] font-semibold text-left">
                        Public Speaking and Diplomacy
                      </div>
                      <div className="box-border w-full h-[3.98px] shrink-0"></div>
                      <div className="text-[15px]/[24px] box-border w-full h-[146.34px] shrink-0 text-[#d1c1d4] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-normal text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pillar 4: Social Movement */}
                <div className="box-border w-[296px] shrink-0 h-[338px] flex flex-col gap-0 p-[23.99px_0px_0px_0px] justify-start items-start bg-[#2a183766] rounded-xl" style={{ boxShadow: '0px 10px 12px 0px #0000001a, 0px 4px 2px 0px #0000001a', backdropFilter: 'blur(12px)' }}>
                  <div className="box-border w-full h-fit shrink-0 flex flex-col gap-0 justify-start items-center">
                    <div className="box-border w-[248.09px] h-fit shrink-0 flex flex-col gap-0 p-[0px_0px_16px_0px] justify-start items-start">
                      <div className="box-border w-[56px] h-[56px] shrink-0 flex flex-row gap-0 justify-center items-center rounded-xl" style={{ boxShadow: '0px 0px 28px 0px #c854fe80', backgroundImage: 'linear-gradient(135deg, #7605aa 14.645%, #b807e6 50%, #00535b 85.355%)', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}>
                        <div className="box-border w-[31.98px] shrink-0 h-[31.98px] overflow-hidden relative">
                          <svg viewBox="8.344650268554688e-7 -2.384185791015625e-7 19.97225296497345 20.47250008583069" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[27px] h-[28px] absolute left-[4px] top-[3.5px] overflow-visible" style={{ zIndex: 0 }}>
                            <path d="M15.534 5.77c-0.0696-0.01056-0.1404-0.01056-0.21 0-1.55277-0.05081-2.78407-1.3264-2.78-2.88 0-1.59 1.29-2.89 2.89-2.89 1.59 0 2.89 1.29 2.89 2.89-0.00445 1.55397-1.23695 2.82624-2.79 2.88m3.262 6.93c-1.12 0.75-2.69 1.03-4.14 0.84 0.38-0.82 0.58-1.73 0.59-2.69 0-1-0.22-1.95-0.64-2.78 1.48-0.2 3.05 0.08 4.18 0.83 1.58 1.04 1.58 2.75 0.01 3.8m-14.352-6.93q0.105-0.015 0.21 0c1.55277-0.05081 2.78407-1.3264 2.78-2.88 0-1.59334-1.29166-2.885-2.885-2.885-1.59334 0-2.885 1.29166-2.885 2.885 0 1.56 1.23 2.83 2.78 2.88m0.111 5.08c0 0.97 0.21 1.89 0.59 2.72-1.41 0.15-2.88-0.15-3.96-0.86-1.58-1.05-1.58-2.76 0-3.81 1.07-0.72 2.58-1.01 4-0.85-0.41 0.84-0.63 1.79-0.63 2.8m5.569 3.02c-0.0863-0.01132-0.1737-0.01132-0.26 0-1.84846-0.0621-3.31374-1.5805-3.31-3.43 0.01-1.9 1.54-3.44 3.45-3.44 1.9 0 3.44 1.54 3.44 3.44-0.00114 1.85135-1.46967 3.36854-3.32 3.43m-3.25 2.07c-1.51 1.01-1.51 2.67 0 3.67 1.72 1.15 4.54 1.15 6.26 0 1.51-1.01 1.51-2.67 0-3.67-1.71-1.15-4.53-1.15-6.26 0" fill="#f3d9ffff"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="box-border w-full h-[19.53px] shrink-0"></div>
                      <div className="box-border w-full h-[11.53px] shrink-0"></div>
                      <div className="text-[28px]/[36px] box-border w-[231px] h-[67px] shrink-0 text-[#f3daff] font-['Space_Grotesk',system-ui,sans-serif] font-semibold text-left">
                        Social Movement
                      </div>
                      <div className="box-border w-full h-[3.98px] shrink-0"></div>
                      <div className="text-[15px]/[24px] box-border w-full h-[146.34px] shrink-0 text-[#d1c1d4] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-normal text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ======================== SECTION 4: PARTNERSHIP ======================== */}
          <section className="box-border w-full h-fit shrink-0 flex flex-col gap-0 p-[40px_0px] justify-start items-start bg-no-repeat bg-[length:100%_100%]" style={{ backgroundImage: 'linear-gradient(180deg, #1d0b2a 0%, #180624 50%, #261333 100%)' }}>
            <div className="box-border w-full h-fit shrink-0 flex flex-col gap-0 p-[0px_24px] justify-start items-start">
              <div className="box-border w-full h-[616.55px] shrink-0 relative">
                {/* Left: Partnership narrative */}
                <div className="box-border w-[596.11px] h-fit absolute left-0 top-0 flex flex-col gap-0 p-[1.56px_0px_23.98px_0px] justify-start items-start" style={{ zIndex: 0 }}>
                  <div className="box-border w-full h-[7.99px] shrink-0"></div>
                  <div className="text-[40px]/[48px] box-border w-[385px] h-[104px] shrink-0 text-[#f3daff] font-['Space_Grotesk',system-ui,sans-serif] font-bold tracking-[-0.8px] text-left">
                    Ayo Bersinergi Bersama IPB Outsco
                  </div>
                  <div className="box-border w-full h-[7.99px] shrink-0"></div>
                  <div className="text-[18px]/[29px] box-border w-[596px] h-[71px] shrink-0 text-[#d1c1d4] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-normal text-left">
                    Kami membuka kesempatan kolaborasi strategis dengan berbagai pihak untuk
                    mendukung pengembangan diri Outscholars Batch 8.
                  </div>
                  <div className="box-border w-full h-[23.99px] shrink-0"></div>
                  {/* Collaboration channels */}
                  <div className="box-border w-full h-fit shrink-0 flex flex-col gap-[7.99px] justify-start items-start">
                    {/* Sponsorship */}
                    <div className="box-border w-full h-[84px] shrink-0 bg-[#2a183780] rounded-lg relative">
                      <div className="text-[20px]/[28px] box-border absolute left-[7.99px] top-[9.98px] text-[#f3daff] font-['Material_Symbols_Outlined',system-ui,sans-serif] font-normal text-left whitespace-nowrap" style={{ zIndex: 0 }}>
                        handshake
                      </div>
                      <div className="box-border w-[552.12px] h-[68.01px] absolute left-[35.99px] top-[7.99px] flex flex-col gap-0 justify-start items-start" style={{ zIndex: 1 }}>
                        <div className="text-[20px]/[28px] box-border text-[#f3daff] font-['Space_Grotesk',system-ui,sans-serif] font-semibold text-left whitespace-nowrap">
                          Sponsorship Kompetisi & Riset
                        </div>
                        <div className="text-[13px]/[20px] box-border w-full h-[40.01px] shrink-0 text-[#d1c1d4] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-normal text-left">
                          Dukungan delegasi perlombaan bergengsi tingkat dunia dan pendanaan
                          prototipe karya inovatif.
                        </div>
                      </div>
                    </div>
                    {/* Media Partner */}
                    <div className="box-border w-full h-[84px] shrink-0 bg-[#2a183780] rounded-lg relative">
                      <div className="text-[20px]/[28px] box-border absolute left-[7.99px] top-[9.98px] text-[#f2afff] font-['Material_Symbols_Outlined',system-ui,sans-serif] font-normal text-left whitespace-nowrap" style={{ zIndex: 0 }}>
                        campaign
                      </div>
                      <div className="box-border w-[552.12px] h-[68.01px] absolute left-[35.99px] top-[7.99px] flex flex-col gap-0 justify-start items-start" style={{ zIndex: 1 }}>
                        <div className="text-[20px]/[28px] box-border text-[#f3daff] font-['Space_Grotesk',system-ui,sans-serif] font-semibold text-left whitespace-nowrap">
                          Media Partner & Publikasi Prestasi
                        </div>
                        <div className="text-[13px]/[20px] box-border w-full h-[40.01px] shrink-0 text-[#d1c1d4] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-normal text-left">
                          Eksposur liputan nasional kanal Outsco Stories dan kampanye inspirasi
                          generasi muda Indonesia.
                        </div>
                      </div>
                    </div>
                    {/* Company Visit */}
                    <div className="box-border w-full h-[84px] shrink-0 bg-[#2a183780] rounded-lg relative">
                      <div className="text-[20px]/[28px] box-border absolute left-[7.99px] top-[9.99px] text-[#89d2dc] font-['Material_Symbols_Outlined',system-ui,sans-serif] font-normal text-left whitespace-nowrap" style={{ zIndex: 0 }}>
                        domain
                      </div>
                      <div className="box-border w-[552.12px] h-[68.01px] absolute left-[35.99px] top-[7.99px] flex flex-col gap-0 justify-start items-start" style={{ zIndex: 1 }}>
                        <div className="text-[20px]/[28px] box-border text-[#f3daff] font-['Space_Grotesk',system-ui,sans-serif] font-semibold text-left whitespace-nowrap">
                          Company Visit & Catalyst Hiring
                        </div>
                        <div className="text-[13px]/[20px] box-border w-full h-[40.01px] shrink-0 text-[#d1c1d4] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-normal text-left">
                          Akses prioritas talent pool mahasiswa berprestasi dengan rekam jejak
                          kepemimpinan tervalidasi.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Partnership form */}
                <div className="box-border w-[596.14px] h-fit absolute left-[636.09px] top-[96.7px] flex flex-col gap-[15.98px] p-[24px] justify-start items-start bg-[#2a1837b3] rounded-xl" style={{ boxShadow: '0px 20px 50px 0px #00000080', backdropFilter: 'blur(20px)', zIndex: 1 }}>
                  <div className="box-border w-full h-[56px] shrink-0 flex flex-col gap-0 justify-start items-start">
                    <div className="text-[28px]/[36px] box-border text-[#f3daff] font-['Space_Grotesk',system-ui,sans-serif] font-semibold text-left whitespace-nowrap">
                      Formulir Kontak Kemitraan
                    </div>
                    <div className="text-[13px]/[20px] box-border text-[#d1c1d4] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-normal text-left whitespace-nowrap">
                      Tim Hubungan Eksternal (IMB & RAI) akan merespons dalam kurun waktu 1x24
                      jam kerja.
                    </div>
                  </div>
                  <form className="box-border w-full h-fit shrink-0 flex flex-col gap-[8px] justify-start items-start" onSubmit={handleFormSubmit}>
                    <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[8px] justify-start items-start">
                      <div className="box-border flex-1 h-[59.95px] flex flex-col gap-[3.99px] justify-start items-start">
                        <div className="text-[12px]/[16px] box-border text-[#d1c1d4] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-semibold tracking-[0.48px] text-left whitespace-nowrap">
                          Nama Lengkap PIC
                        </div>
                        <div className="box-border w-full h-[39.98px] shrink-0 flex flex-col gap-0 p-[10px_16px] justify-center items-start bg-[#180624] rounded-lg overflow-hidden">
                          <input
                            type="text"
                            placeholder="Dr. / Ir. / Bpk / Ibu..."
                            className="text-[13px]/[20px] box-border w-full h-full text-[#d1c1d4] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-normal text-left bg-transparent outline-none placeholder-[#4e4352]"
                            required
                          />
                        </div>
                      </div>
                      <div className="box-border flex-1 h-[59.95px] flex flex-col gap-[3.99px] justify-start items-start">
                        <div className="text-[12px]/[16px] box-border text-[#d1c1d4] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-semibold tracking-[0.48px] text-left whitespace-nowrap">
                          Institusi / Perusahaan
                        </div>
                        <div className="box-border w-full h-[39.98px] shrink-0 flex flex-col gap-0 p-[10px_16px] justify-center items-start bg-[#180624] rounded-lg overflow-hidden">
                          <input
                            type="text"
                            placeholder="Nama PT / Agensi / Yayasan"
                            className="text-[13px]/[20px] box-border w-full h-full text-[#d1c1d4] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-normal text-left bg-transparent outline-none placeholder-[#4e4352]"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="box-border w-full h-fit shrink-0 flex flex-row gap-[8px] justify-start items-start">
                      <div className="box-border flex-1 h-[59.95px] flex flex-col gap-[3.99px] justify-start items-start">
                        <div className="text-[12px]/[16px] box-border text-[#d1c1d4] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-semibold tracking-[0.48px] text-left whitespace-nowrap">
                          Email Resmi
                        </div>
                        <div className="box-border w-full h-[39.98px] shrink-0 flex flex-col gap-0 p-[10px_16px] justify-center items-start bg-[#180624] rounded-lg overflow-hidden">
                          <input
                            type="email"
                            placeholder="pic@perusahaan.com"
                            className="text-[13px]/[20px] box-border w-full h-full text-[#d1c1d4] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-normal text-left bg-transparent outline-none placeholder-[#4e4352]"
                            required
                          />
                        </div>
                      </div>
                      <div className="box-border flex-1 h-[59.95px] flex flex-col gap-[3.99px] justify-start items-start">
                        <div className="text-[12px]/[16px] box-border text-[#d1c1d4] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-semibold tracking-[0.48px] text-left whitespace-nowrap">
                          Pilihan Bentuk Kolaborasi
                        </div>
                        <select className="box-border w-full h-[36.6px] shrink-0 bg-[#180624] rounded-lg text-[#d1c1d4] font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[13px] p-[10px_16px] outline-none">
                          <option value="">Pilih Bentuk Kolaborasi</option>
                          <option value="sponsorship">Sponsorship Delegasi Lomba</option>
                          <option value="media">Media Partner Publikasi</option>
                          <option value="riset">Kolaborasi Riset / Grand Project</option>
                          <option value="visit">Company Visit & Mentoring</option>
                          <option value="lainnya">Lainnya</option>
                        </select>
                      </div>
                    </div>
                    <div className="box-border w-full h-[107.32px] shrink-0 flex flex-col gap-[3.98px] justify-start items-start">
                      <div className="text-[12px]/[16px] box-border text-[#d1c1d4] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-semibold tracking-[0.48px] text-left whitespace-nowrap">
                        Pesan atau Rencana Kerjasama
                      </div>
                      <div className="box-border w-full h-[79.98px] shrink-0 flex flex-col gap-0 p-[10px_16px] justify-center items-start bg-[#180624] rounded-lg overflow-hidden">
                        <textarea
                          placeholder="Deskripsikan secara singkat rencana kolaborasi yang ingin dijalin bersama IPB Outsco..."
                          className="text-[13px]/[20px] box-border w-full h-full text-[#f3daff] font-['Plus_Jakarta_Sans',system-ui,sans-serif] font-normal text-left bg-transparent outline-none resize-none placeholder-[#4e4352]"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="box-border w-full h-[51.96px] shrink-0 flex flex-row gap-[8px] p-[12px_0px] justify-center items-center bg-no-repeat bg-[length:100%_100%] rounded-full cursor-pointer border-none"
                      style={{ boxShadow: '0px 0px 25px 0px #b808e673', backgroundImage: 'linear-gradient(90deg, #7605aa 0%, #b807e6 50%, #00535b 100%)' }}
                    >
                      <div className="text-[18px]/[28px] box-border text-[#500075] font-['Material_Symbols_Outlined',system-ui,sans-serif] font-normal text-center whitespace-nowrap">
                        send
                      </div>
                      <div className="text-[20px]/[28px] box-border text-[#500075] font-['Space_Grotesk',system-ui,sans-serif] font-semibold text-center whitespace-nowrap">
                        Kirim Penawaran Kolaborasi
                      </div>
                    </button>
                    {formSubmitted && (
                      <div className="box-border w-full p-[10px_16px] rounded-lg bg-[#352242] text-[#a5eff9] font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[13px]/[20px] text-center">
                        Terima kasih. Permohonan kolaborasi telah diteruskan ke Sekretariat Ditmawa IPB.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ======================== FOOTER ======================== */}
        <Footer />
      </div>
    </div>
  );
}
