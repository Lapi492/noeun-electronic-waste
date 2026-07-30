import svgPaths from "./svg-5n10hi4ard";
import imgGridImg1 from "./3b9a8e7d0cb92607c2d30dc0609450847febbabf.png";
import imgGridImg2 from "./48c30953493182141a5d4c21b0f1cea1a4bbbf10.png";
import imgGridImg3 from "./9eae5254ceddb0e0430b99cb114770c68026d793.png";
import imgGridImg4 from "./0231451d974d3abca7cd6ba01711d537d332f0c3.png";

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

function TabStory() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="tab-story">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center p-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1c3524] text-[14px] whitespace-nowrap">Our Story</p>
        </div>
      </div>
    </div>
  );
}

function TabGallery() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="tab-gallery">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center p-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Figtree:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#5c6b5e] text-[14px] whitespace-nowrap">Gallery</p>
        </div>
      </div>
    </div>
  );
}

function TabSwitcher() {
  return (
    <div className="bg-[#e8f2ec] relative rounded-[16px] shrink-0 w-full" data-name="tab-switcher">
      <div className="content-stretch flex items-start p-[4px] relative size-full">
        <TabStory />
        <TabGallery />
      </div>
    </div>
  );
}

function StoryHeader() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="story-header">
      <p className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold relative shrink-0 text-[#1c3524] text-[18px]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
        2 Years Together
      </p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal relative shrink-0 text-[#5c6b5e] text-[13px]">Since October 14, 2024</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="row-1">
      <div className="flex-[1_0_0] h-[80px] min-w-px relative rounded-[12px]" data-name="grid-img-1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgGridImg1} />
      </div>
      <div className="flex-[1_0_0] h-[80px] min-w-px relative rounded-[12px]" data-name="grid-img-2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgGridImg2} />
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="row-2">
      <div className="flex-[1_0_0] h-[80px] min-w-px relative rounded-[12px]" data-name="grid-img-3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgGridImg3} />
      </div>
      <div className="flex-[1_0_0] h-[80px] min-w-px relative rounded-[12px]" data-name="grid-img-4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgGridImg4} />
      </div>
    </div>
  );
}

function GalleryGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="gallery-grid">
      <Row />
      <Row1 />
    </div>
  );
}

function StoryBox() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(26,46,31,0.04)] relative rounded-[20px] shrink-0 w-full" data-name="story-box">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <StoryHeader />
        <GalleryGrid />
      </div>
    </div>
  );
}

function StoryTextCard() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(26,46,31,0.04)] relative rounded-[20px] shrink-0 w-full" data-name="story-text-card">
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#1a2e1f] text-[14px] w-full">{`Remember when Sprout survived that coffee spill? We dried Sprout with eco towels and kept going. You've saved 24kg of potential carbon by keeping Sprout in active use!`}</p>
      </div>
    </div>
  );
}

function MemoriesContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="memories-content">
      <p className="[word-break:break-word] font-['Bricolage_Grotesque:96pt_ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#1c3524] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 96, "wdth" 100' }}>
        Memories
      </p>
      <TabSwitcher />
      <StoryBox />
      <StoryTextCard />
    </div>
  );
}

function ContentScroll() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="content-scroll">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[16px] px-[24px] relative size-full">
          <MemoriesContent />
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
          <path d={svgPaths.pb903f80} id="Vector" stroke="var(--stroke-0, #1C3524)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconCircle3() {
  return (
    <div className="bg-[#e8f2ec] content-stretch flex flex-col items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="icon-circle">
      <Image />
    </div>
  );
}

function NavItemMemories() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]" data-name="nav-item-memories">
      <IconCircle3 />
      <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1c3524] text-[11px] whitespace-nowrap">Memories</p>
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

export default function Memories() {
  return (
    <div className="bg-[#f4f8f5] relative rounded-[32px] size-full" data-name="memories">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <ScreenFlow />
      </div>
      <div aria-hidden className="absolute border border-[#e2ece6] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}