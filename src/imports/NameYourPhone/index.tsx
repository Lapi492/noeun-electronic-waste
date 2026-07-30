import svgPaths from "./svg-rfx5p4ogex";
import imgIllustrationFrame from "./6b88ef26596b1afe85a917f5242df031ff3da03b.png";

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

function IllustrationFrame() {
  return (
    <div className="h-[260px] relative rounded-[24px] shrink-0 w-full" data-name="illustration-frame">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgIllustrationFrame} />
    </div>
  );
}

function TextGroup() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center relative shrink-0 text-center w-full" data-name="text-group">
      <p className="font-['Bricolage_Grotesque:96pt_ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#1c3524] text-[32px] w-full" style={{ fontVariationSettings: '"opsz" 96, "wdth" 100' }}>
        Name your phone
      </p>
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#5c6b5e] text-[15px] w-full">Give your tech a personality. Naming it helps you treat it like a companion, not just a tool.</p>
    </div>
  );
}

function Pencil() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="pencil">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_1_416)" id="pencil">
          <path d={svgPaths.p4c0b400} id="Vector" stroke="var(--stroke-0, #1C3524)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_416">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="input-field">
      <div aria-hidden className="absolute border-[#1c3524] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[14px] relative size-full">
          <Pencil />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#1a2e1f] text-[16px]">Sprout</p>
        </div>
      </div>
    </div>
  );
}

function ActionButton() {
  return (
    <div className="bg-[#1c3524] relative rounded-[16px] shrink-0 w-full" data-name="action-button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[14px] relative size-full">
          <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">Done</p>
        </div>
      </div>
    </div>
  );
}

function OnboardingContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px relative w-full" data-name="onboarding-content">
      <IllustrationFrame />
      <TextGroup />
      <InputField />
      <ActionButton />
    </div>
  );
}

function ContentScroll() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="content-scroll">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[16px] px-[24px] relative size-full">
          <OnboardingContent />
        </div>
      </div>
    </div>
  );
}

function ScreenFlow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="screen-flow">
      <HeaderStack />
      <ContentScroll />
    </div>
  );
}

export default function NameYourPhone() {
  return (
    <div className="bg-[#f4f8f5] relative rounded-[32px] size-full" data-name="name-your-phone">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <ScreenFlow />
      </div>
      <div aria-hidden className="absolute border border-[#e2ece6] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}