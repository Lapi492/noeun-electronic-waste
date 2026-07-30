import svgPaths from "./svg-sbukl5zmph";
import imgAvatarCircle from "./b4fc65f598092fd4cdcd6d5206fdb5d3a92f0a33.png";
import imgSproutAvatar from "./e2523078f1012554cd0cfa9a97e3e708daafdab3.png";

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

function UserProfile() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="user-profile">
      <p className="font-['Figtree:Regular',sans-serif] font-normal relative shrink-0 text-[#5c6b5e] text-[14px]">Good morning,</p>
      <p className="font-['Bricolage_Grotesque:96pt_ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#1c3524] text-[24px]" style={{ fontVariationSettings: '"opsz" 96, "wdth" 100' }}>
        Hello, Friend
      </p>
    </div>
  );
}

function AvatarCircle() {
  return (
    <div className="relative rounded-[20px] shrink-0 size-[40px]" data-name="avatar-circle">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgAvatarCircle} />
    </div>
  );
}

function GreetingRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="greeting-row">
      <UserProfile />
      <AvatarCircle />
    </div>
  );
}

function TextBubble() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="text-bubble">
      <p className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1c3524] text-[18px] w-full" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>{`"Hi, I'm Sprout!"`}</p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#5c6b5e] text-[14px] w-full">{`I'm feeling cozy today! Let's keep my battery fresh and stretch our legs for wellness.`}</p>
    </div>
  );
}

function SpeechBubbleCard() {
  return (
    <div className="bg-[#e8f2ec] relative rounded-[24px] shrink-0 w-full" data-name="speech-bubble-card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
          <TextBubble />
          <div className="h-[120px] relative rounded-[16px] shrink-0 w-full" data-name="sprout-avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgSproutAvatar} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MissionHeader() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="mission-header">
      <p className="font-['Bricolage_Grotesque:96pt_ExtraBold',sans-serif] font-extrabold relative shrink-0 text-[#1c3524] text-[20px]" style={{ fontVariationSettings: '"opsz" 96, "wdth" 100' }}>{`Today's Mission`}</p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal relative shrink-0 text-[#5c6b5e] text-[14px]">Complete these companion goals to boost wellness.</p>
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

function IconHeader() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon-header">
      <Battery />
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#5c6b5e] text-[13px] whitespace-nowrap">Battery</p>
    </div>
  );
}

function BatteryMissionCard() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(26,46,31,0.04)] flex-[1_0_0] min-w-px relative rounded-[20px]" data-name="battery-mission-card">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
        <IconHeader />
        <p className="[word-break:break-word] font-['Bricolage_Grotesque:96pt_ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#1c3524] text-[28px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 96, "wdth" 100' }}>
          80%
        </p>
        <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5c6b5e] text-[12px] whitespace-nowrap">Unplug now for optimal life</p>
      </div>
    </div>
  );
}

function Activity() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="activity">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_1_441)" id="activity">
          <path d={svgPaths.p29e49700} id="Vector" stroke="var(--stroke-0, #E29578)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_441">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconHeader1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon-header">
      <Activity />
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#e29578] text-[13px] whitespace-nowrap">Streak</p>
    </div>
  );
}

function StretchMissionCard() {
  return (
    <div className="bg-[#fdf0ea] drop-shadow-[0px_4px_6px_rgba(26,46,31,0.04)] flex-[1_0_0] min-w-px relative rounded-[20px]" data-name="stretch-mission-card">
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
        <IconHeader1 />
        <p className="[word-break:break-word] font-['Bricolage_Grotesque:96pt_ExtraBold',sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#e29578] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 96, "wdth" 100' }}>
          <span className="leading-[normal] text-[28px]">{`5 `}</span>
          <span className="leading-[normal] text-[14px]">Days</span>
        </p>
        <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5c6b5e] text-[12px] whitespace-nowrap">Keep it up! Stretch your legs</p>
      </div>
    </div>
  );
}

function MissionCardsRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="mission-cards-row">
      <BatteryMissionCard />
      <StretchMissionCard />
    </div>
  );
}

function HomeContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="home-content">
      <GreetingRow />
      <SpeechBubbleCard />
      <MissionHeader />
      <MissionCardsRow />
    </div>
  );
}

function ContentScroll() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="content-scroll">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[16px] px-[24px] relative size-full">
          <HomeContent />
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
          <path d={svgPaths.p2046d6b0} id="Vector" stroke="var(--stroke-0, #1C3524)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconCircle() {
  return (
    <div className="bg-[#e8f2ec] content-stretch flex flex-col items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="icon-circle">
      <Home />
    </div>
  );
}

function NavItemHome() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]" data-name="nav-item-home">
      <IconCircle />
      <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1c3524] text-[11px] whitespace-nowrap">Home</p>
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

export default function HomeTodaysMission() {
  return (
    <div className="bg-[#f4f8f5] relative rounded-[32px] size-full" data-name="home-todays-mission">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <ScreenFlow />
      </div>
      <div aria-hidden className="absolute border border-[#e2ece6] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}