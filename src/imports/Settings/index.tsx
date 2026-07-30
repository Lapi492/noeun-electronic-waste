import svgPaths from "./svg-twrinfzphy";
import imgProfileAvatarFrame from "./27b5aed01dbc0d924150a76061cb7084d79813bc.png";

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

function ProfileAvatarFrame() {
  return (
    <div className="relative rounded-[28px] shrink-0 size-[56px]" data-name="profile-avatar-frame">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[28px] size-full" src={imgProfileAvatarFrame} />
    </div>
  );
}

function ProfileInfo() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="profile-info">
      <p className="font-['Bricolage_Grotesque:Bold',sans-serif] font-bold relative shrink-0 text-[#1a2e1f] text-[18px]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
        Eco Companion
      </p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal relative shrink-0 text-[#5c6b5e] text-[13px]">eco.friend@sprout.earth</p>
    </div>
  );
}

function EditButton() {
  return (
    <div className="bg-[#e8f2ec] content-stretch flex items-start px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="edit-button">
      <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1c3524] text-[13px] whitespace-nowrap">Edit</p>
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(26,46,31,0.04)] relative rounded-[20px] shrink-0 w-full" data-name="profile-card">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <ProfileAvatarFrame />
          <ProfileInfo />
          <EditButton />
        </div>
      </div>
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="bell">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="bell">
          <path d={svgPaths.p21bb9400} id="Vector" stroke="var(--stroke-0, #1C3524)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ItemLeft() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="item-left">
      <Bell />
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a2e1f] text-[15px] whitespace-nowrap">Notification Settings</p>
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
    <div className="content-stretch flex items-center relative shrink-0" data-name="item-right">
      <ChevronRight />
    </div>
  );
}

function SettingsItem() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(26,46,31,0.04)] relative rounded-[16px] shrink-0 w-full" data-name="settings-item-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <ItemLeft />
          <ItemRight />
        </div>
      </div>
    </div>
  );
}

function Globe() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="globe">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_1_515)" id="globe">
          <path d={svgPaths.p16bd2100} id="Vector" stroke="var(--stroke-0, #1C3524)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_515">
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
      <Globe />
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a2e1f] text-[15px] whitespace-nowrap">Language</p>
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
      <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5c6b5e] text-[14px] whitespace-nowrap">English (US)</p>
      <ChevronRight1 />
    </div>
  );
}

function SettingsItem1() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(26,46,31,0.04)] relative rounded-[16px] shrink-0 w-full" data-name="settings-item-1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <ItemLeft1 />
          <ItemRight1 />
        </div>
      </div>
    </div>
  );
}

function Eye() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="eye">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="eye">
          <path d={svgPaths.p197a0df0} id="Vector" stroke="var(--stroke-0, #1C3524)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ItemLeft2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="item-left">
      <Eye />
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a2e1f] text-[15px] whitespace-nowrap">Accessibility</p>
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
    <div className="content-stretch flex items-center relative shrink-0" data-name="item-right">
      <ChevronRight2 />
    </div>
  );
}

function SettingsItem2() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(26,46,31,0.04)] relative rounded-[16px] shrink-0 w-full" data-name="settings-item-2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <ItemLeft2 />
          <ItemRight2 />
        </div>
      </div>
    </div>
  );
}

function Lock() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lock">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="lock">
          <path d={svgPaths.p3ad10700} id="Vector" stroke="var(--stroke-0, #1C3524)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ItemLeft3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="item-left">
      <Lock />
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1a2e1f] text-[15px] whitespace-nowrap">{`Privacy & Data`}</p>
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
    <div className="content-stretch flex items-center relative shrink-0" data-name="item-right">
      <ChevronRight3 />
    </div>
  );
}

function SettingsItem3() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(26,46,31,0.04)] relative rounded-[16px] shrink-0 w-full" data-name="settings-item-3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <ItemLeft3 />
          <ItemRight3 />
        </div>
      </div>
    </div>
  );
}

function SettingsList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="settings-list">
      <SettingsItem />
      <SettingsItem1 />
      <SettingsItem2 />
      <SettingsItem3 />
    </div>
  );
}

function SettingsContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="settings-content">
      <p className="[word-break:break-word] font-['Bricolage_Grotesque:96pt_ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#1c3524] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 96, "wdth" 100' }}>
        Settings
      </p>
      <ProfileCard />
      <SettingsList />
    </div>
  );
}

function ContentScroll() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="content-scroll">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[16px] px-[24px] relative size-full">
          <SettingsContent />
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

function Settings1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="settings">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="settings">
          <path d={svgPaths.pc965540} id="Vector" stroke="var(--stroke-0, #1C3524)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconCircle4() {
  return (
    <div className="bg-[#e8f2ec] content-stretch flex flex-col items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="icon-circle">
      <Settings1 />
    </div>
  );
}

function NavItemSettings() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[64px]" data-name="nav-item-settings">
      <IconCircle4 />
      <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1c3524] text-[11px] whitespace-nowrap">Settings</p>
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

export default function Settings() {
  return (
    <div className="bg-[#f4f8f5] relative rounded-[32px] size-full" data-name="settings">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <ScreenFlow />
      </div>
      <div aria-hidden className="absolute border border-[#e2ece6] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}