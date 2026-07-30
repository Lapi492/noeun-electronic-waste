import svgPaths from "./svg-nbkxp3g2gy";

function IosSignal() {
  return (
    <div className="h-[11px] relative shrink-0 w-[17px]" data-name="ios-signal">
      <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 17 11" width="17">
        <g id="ios-signal">
          <path clipRule="evenodd" d={svgPaths.p2d6ad970} fill="var(--fill-0, #1A2E1F)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IosWifiSignal() {
  return (
    <div className="h-[11px] relative shrink-0 w-[15px]" data-name="ios-wifi-signal">
      <svg className="absolute block inset-0 size-full" fill="none" height="11" preserveAspectRatio="none" viewBox="0 0 15 11" width="15">
        <g id="ios-wifi-signal">
          <path clipRule="evenodd" d={svgPaths.p190a1500} fill="var(--fill-0, #1A2E1F)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IosBatteryFull() {
  return (
    <div className="h-[12px] relative shrink-0 w-[25px]" data-name="ios-battery-full">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 25 12" width="25">
        <g id="ios-battery-full">
          <path d={svgPaths.pde03700} fill="var(--fill-0, #1A2E1F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StatusIcons() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="status-icons">
      <IosSignal />
      <IosWifiSignal />
      <IosBatteryFull />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="status-bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
          <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a2e1f] text-[15px] whitespace-nowrap">9:41</p>
          <StatusIcons />
        </div>
      </div>
    </div>
  );
}

function HeaderStack() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="header-stack">
      <StatusBar />
    </div>
  );
}

function ImpactHeroCard() {
  return (
    <div className="bg-[#e8f2ec] relative rounded-[24px] shrink-0 w-full" data-name="impact-hero-card">
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#5c6b5e] text-[14px] w-full">By optimizing your phone care, you are reducing carbon emissions and keeping raw minerals in the ground.</p>
      </div>
    </div>
  );
}

function Droplet() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="droplet">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="droplet">
          <path d={svgPaths.p2ed84800} id="Vector" stroke="var(--stroke-0, #1C3524)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function MetricLeft() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="metric-left">
      <Droplet />
      <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5c6b5e] text-[14px] whitespace-nowrap">Water Saved</p>
    </div>
  );
}

function MetricRow() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(26,46,31,0.04)] relative rounded-[16px] shrink-0 w-full" data-name="metric-row-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <MetricLeft />
          <p className="[word-break:break-word] font-['Bricolage_Grotesque:96pt_ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#1c3524] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 96, "wdth" 100' }}>
            45 L
          </p>
        </div>
      </div>
    </div>
  );
}

function Cloud() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="cloud">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="cloud">
          <path d={svgPaths.p1a1f0100} id="Vector" stroke="var(--stroke-0, #1C3524)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function MetricLeft1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="metric-left">
      <Cloud />
      <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5c6b5e] text-[14px] whitespace-nowrap">CO₂ Reduced</p>
    </div>
  );
}

function MetricRow1() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(26,46,31,0.04)] relative rounded-[16px] shrink-0 w-full" data-name="metric-row-1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <MetricLeft1 />
          <p className="[word-break:break-word] font-['Bricolage_Grotesque:96pt_ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#1c3524] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 96, "wdth" 100' }}>
            12.4 kg
          </p>
        </div>
      </div>
    </div>
  );
}

function Anchor() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="anchor">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="anchor">
          <path d={svgPaths.p10275a18} id="Vector" stroke="var(--stroke-0, #1C3524)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function MetricLeft2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="metric-left">
      <Anchor />
      <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5c6b5e] text-[14px] whitespace-nowrap">Raw Materials Saved</p>
    </div>
  );
}

function MetricRow2() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(26,46,31,0.04)] relative rounded-[16px] shrink-0 w-full" data-name="metric-row-2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <MetricLeft2 />
          <p className="[word-break:break-word] font-['Bricolage_Grotesque:96pt_ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#1c3524] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 96, "wdth" 100' }}>
            1.2 kg
          </p>
        </div>
      </div>
    </div>
  );
}

function Trash() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="trash-2">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="trash-2">
          <path d={svgPaths.p17c33a20} id="Vector" stroke="var(--stroke-0, #1C3524)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function MetricLeft3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="metric-left">
      <Trash />
      <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5c6b5e] text-[14px] whitespace-nowrap">E-waste Avoided</p>
    </div>
  );
}

function MetricRow3() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(26,46,31,0.04)] relative rounded-[16px] shrink-0 w-full" data-name="metric-row-3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <MetricLeft3 />
          <p className="[word-break:break-word] font-['Bricolage_Grotesque:96pt_ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#1c3524] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 96, "wdth" 100' }}>
            350 g
          </p>
        </div>
      </div>
    </div>
  );
}

function MetricsGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="metrics-grid">
      <MetricRow />
      <MetricRow1 />
      <MetricRow2 />
      <MetricRow3 />
    </div>
  );
}

function SectionThisMonth() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="section-this-month">
      <p className="[word-break:break-word] font-['Bricolage_Grotesque:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1c3524] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
        This Month
      </p>
      <MetricsGrid />
    </div>
  );
}

function Trees() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="trees">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="trees">
          <path d={svgPaths.p8679b80} id="Vector" stroke="var(--stroke-0, #1C3524)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function AllTimeLeft() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="all-time-left">
      <Trees />
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a2e1f] text-[15px] whitespace-nowrap">Trees Saved</p>
    </div>
  );
}

function AllTimeCard() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(26,46,31,0.04)] relative rounded-[16px] shrink-0 w-full" data-name="all-time-card">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <AllTimeLeft />
          <p className="[word-break:break-word] font-['Bricolage_Grotesque:96pt_ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#e29578] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 96, "wdth" 100' }}>
            2.4 Trees
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionAllTime() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="section-all-time">
      <p className="[word-break:break-word] font-['Bricolage_Grotesque:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1c3524] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
        All Time
      </p>
      <AllTimeCard />
    </div>
  );
}

function ImpactContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="impact-content">
      <p className="[word-break:break-word] font-['Bricolage_Grotesque:96pt_ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#1c3524] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 96, "wdth" 100' }}>
        Your Impact
      </p>
      <ImpactHeroCard />
      <SectionThisMonth />
      <SectionAllTime />
    </div>
  );
}

function ContentScroll() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="content-scroll">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[16px] px-[24px] relative size-full">
          <ImpactContent />
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="home">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="home">
          <path d={svgPaths.p2046d6b0} id="Vector" stroke="var(--stroke-0, #5C6B5E)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconCircle() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="icon-circle">
      <Home />
    </div>
  );
}

function NavItemHome() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]" data-name="nav-item-home">
      <IconCircle />
      <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#5c6b5e] text-[11px] whitespace-nowrap">Home</p>
    </div>
  );
}

function Smartphone() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="smartphone">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="smartphone">
          <path d={svgPaths.p32f1ec80} id="Vector" stroke="var(--stroke-0, #5C6B5E)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconCircle1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="icon-circle">
      <Smartphone />
    </div>
  );
}

function NavItemMyPhone() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]" data-name="nav-item-my-phone">
      <IconCircle1 />
      <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#5c6b5e] text-[11px] whitespace-nowrap">My Phone</p>
    </div>
  );
}

function Leaf() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="leaf">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_1_480)" id="leaf">
          <path d={svgPaths.p35dff440} id="Vector" stroke="var(--stroke-0, #1C3524)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_480">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconCircle2() {
  return (
    <div className="bg-[#e8f2ec] content-stretch flex flex-col items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="icon-circle">
      <Leaf />
    </div>
  );
}

function NavItemImpact() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]" data-name="nav-item-impact">
      <IconCircle2 />
      <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1c3524] text-[11px] whitespace-nowrap">Impact</p>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="image">
          <path d={svgPaths.pb903f80} id="Vector" stroke="var(--stroke-0, #5C6B5E)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconCircle3() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="icon-circle">
      <Image />
    </div>
  );
}

function NavItemMemories() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]" data-name="nav-item-memories">
      <IconCircle3 />
      <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#5c6b5e] text-[11px] whitespace-nowrap">Memories</p>
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="settings">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="settings">
          <path d={svgPaths.pc965540} id="Vector" stroke="var(--stroke-0, #5C6B5E)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconCircle4() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="icon-circle">
      <Settings />
    </div>
  );
}

function NavItemSettings() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]" data-name="nav-item-settings">
      <IconCircle4 />
      <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#5c6b5e] text-[11px] whitespace-nowrap">Settings</p>
    </div>
  );
}

function BottomNav() {
  return (
    <div className="bg-white h-[80px] relative shrink-0 w-full" data-name="bottom-nav">
      <div aria-hidden className="absolute border-[#e2ece6] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[20px] pt-[12px] px-[16px] relative size-full">
          <NavItemHome />
          <NavItemMyPhone />
          <NavItemImpact />
          <NavItemMemories />
          <NavItemSettings />
        </div>
      </div>
    </div>
  );
}

function BottomNavContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="bottom-nav-container">
      <BottomNav />
    </div>
  );
}

function ScreenFlow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="screen-flow">
      <HeaderStack />
      <ContentScroll />
      <BottomNavContainer />
    </div>
  );
}

export default function YourImpact() {
  return (
    <div className="bg-[#f4f8f5] relative rounded-[32px] size-full" data-name="your-impact">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <ScreenFlow />
      </div>
      <div aria-hidden className="absolute border border-[#e2ece6] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}