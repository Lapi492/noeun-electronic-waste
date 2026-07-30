import svgPaths from "./svg-f08m9zjnay";

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

function HealthText() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="health-text">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#e29578] text-[14px]">{`Sprout's Health`}</p>
      <p className="font-['Bricolage_Grotesque:96pt_ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[36px] text-white" style={{ fontVariationSettings: '"opsz" 96, "wdth" 100' }}>
        92%
      </p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal relative shrink-0 text-[#e8f2ec] text-[12px]">Optimal Performance State</p>
    </div>
  );
}

function InnerCircle() {
  return (
    <div className="bg-[#1c3524] content-stretch flex flex-col items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="inner-circle">
      <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap">A+</p>
    </div>
  );
}

function CircularProgress() {
  return (
    <div className="bg-[#e29578] content-stretch flex flex-col items-center justify-center relative rounded-[36px] shrink-0 size-[72px]" data-name="circular-progress">
      <InnerCircle />
    </div>
  );
}

function PhoneHealthCard() {
  return (
    <div className="bg-[#1c3524] relative rounded-[24px] shrink-0 w-full" data-name="phone-health-card">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[20px] relative size-full">
          <HealthText />
          <CircularProgress />
        </div>
      </div>
    </div>
  );
}

function Battery() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="battery">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="battery">
          <path d={svgPaths.p17a4da80} id="Vector" stroke="var(--stroke-0, #1C3524)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ItemLeft() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="item-left">
      <Battery />
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a2e1f] text-[15px] whitespace-nowrap">Battery Status</p>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #5C6B5E)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ItemRight() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="item-right">
      <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5c6b5e] text-[14px] whitespace-nowrap">Excellent (82%)</p>
      <ChevronRight />
    </div>
  );
}

function ListItem() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(26,46,31,0.04)] relative rounded-[16px] shrink-0 w-full" data-name="list-item-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <ItemLeft />
          <ItemRight />
        </div>
      </div>
    </div>
  );
}

function Cpu() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="cpu">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_1_466)" id="cpu">
          <path d={svgPaths.p1ab27600} id="Vector" stroke="var(--stroke-0, #1C3524)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_466">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ItemLeft1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="item-left">
      <Cpu />
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a2e1f] text-[15px] whitespace-nowrap">System Performance</p>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #5C6B5E)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ItemRight1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="item-right">
      <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5c6b5e] text-[14px] whitespace-nowrap">Smooth</p>
      <ChevronRight1 />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(26,46,31,0.04)] relative rounded-[16px] shrink-0 w-full" data-name="list-item-1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <ItemLeft1 />
          <ItemRight1 />
        </div>
      </div>
    </div>
  );
}

function Database() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="database">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="database">
          <path d={svgPaths.p1e928400} id="Vector" stroke="var(--stroke-0, #1C3524)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ItemLeft2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="item-left">
      <Database />
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a2e1f] text-[15px] whitespace-nowrap">Storage Saved</p>
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #5C6B5E)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ItemRight2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="item-right">
      <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5c6b5e] text-[14px] whitespace-nowrap">24 GB free</p>
      <ChevronRight2 />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(26,46,31,0.04)] relative rounded-[16px] shrink-0 w-full" data-name="list-item-2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <ItemLeft2 />
          <ItemRight2 />
        </div>
      </div>
    </div>
  );
}

function Thermometer() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="thermometer">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="thermometer">
          <path d={svgPaths.p29c7a9c0} id="Vector" stroke="var(--stroke-0, #1C3524)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ItemLeft3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="item-left">
      <Thermometer />
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a2e1f] text-[15px] whitespace-nowrap">Phone Temperature</p>
    </div>
  );
}

function ChevronRight3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="chevron-right">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #5C6B5E)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ItemRight3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="item-right">
      <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5c6b5e] text-[14px] whitespace-nowrap">Cool (32°C)</p>
      <ChevronRight3 />
    </div>
  );
}

function ListItem3() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(26,46,31,0.04)] relative rounded-[16px] shrink-0 w-full" data-name="list-item-3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <ItemLeft3 />
          <ItemRight3 />
        </div>
      </div>
    </div>
  );
}

function StatsList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="stats-list">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function HelpCircle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="help-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_1_472)" id="help-circle">
          <path d={svgPaths.p1fb62380} id="Vector" stroke="var(--stroke-0, #1C3524)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_472">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TipsButton() {
  return (
    <div className="bg-[#e8f2ec] relative rounded-[16px] shrink-0 w-full" data-name="tips-button">
      <div aria-hidden className="absolute border border-[#1c3524] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center p-[16px] relative size-full">
          <HelpCircle />
          <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1c3524] text-[15px] whitespace-nowrap">Tips for you</p>
        </div>
      </div>
    </div>
  );
}

function MyPhoneContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="my-phone-content">
      <p className="[word-break:break-word] font-['Bricolage_Grotesque:96pt_ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#1c3524] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 96, "wdth" 100' }}>
        MY Phone
      </p>
      <PhoneHealthCard />
      <StatsList />
      <TipsButton />
    </div>
  );
}

function ContentScroll() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="content-scroll">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[16px] px-[24px] relative size-full">
          <MyPhoneContent />
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
          <path d={svgPaths.p32f1ec80} id="Vector" stroke="var(--stroke-0, #1C3524)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconCircle1() {
  return (
    <div className="bg-[#e8f2ec] content-stretch flex flex-col items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="icon-circle">
      <Smartphone />
    </div>
  );
}

function NavItemMyPhone() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]" data-name="nav-item-my-phone">
      <IconCircle1 />
      <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1c3524] text-[11px] whitespace-nowrap">My Phone</p>
    </div>
  );
}

function Leaf() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="leaf">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_1_435)" id="leaf">
          <path d={svgPaths.p35dff440} id="Vector" stroke="var(--stroke-0, #5C6B5E)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_435">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconCircle2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="icon-circle">
      <Leaf />
    </div>
  );
}

function NavItemImpact() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]" data-name="nav-item-impact">
      <IconCircle2 />
      <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#5c6b5e] text-[11px] whitespace-nowrap">Impact</p>
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

export default function MyPhone() {
  return (
    <div className="bg-[#f4f8f5] relative rounded-[32px] size-full" data-name="my-phone">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <ScreenFlow />
      </div>
      <div aria-hidden className="absolute border border-[#e2ece6] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}