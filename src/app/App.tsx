import { useState, createContext, useContext } from "react";
import {
  Home,
  Smartphone,
  Image as ImageIcon,
  Settings,
  Battery,
  Activity,
  Cpu,
  Database,
  Thermometer,
  Droplets,
  Cloud,
  Anchor,
  Trash2,
  Bell,
  Globe,
  Eye,
  Lock,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  Pencil,
  Check,
  Mail,
} from "lucide-react";

import imgFace from "../imports/image-2.png";
import imgPoses from "../imports/image-1.png";

// ─── i18n ─────────────────────────────────────────────────────────────────────
type Lang = "en" | "ko" | "hi";

const T = {
  en: {
    // Onboarding
    nameYourPhone: "Name your phone",
    nameSubtitle: "Give your tech a personality. Naming it helps you treat it like a companion, not just a tool.",
    namePlaceholder: "Name your phone...",
    done: "Done",
    skipBtn: "Skip for now",
    // Home
    goodMorning: "Good morning,",
    helloFriend: "Hello, Friend",
    sproutSpeech: (n: string) => `"Hi, I'm ${n}!"`,
    sproutMessage: "I'm feeling cozy today! Let's keep my battery fresh and stretch our legs for wellness.",
    tapHint: "Tap to hear today's message",
    todaysMission: "Today's Mission",
    missionSub: "Complete these companion goals to boost wellness.",
    battery: "Battery",
    batteryTip: "Unplug now for optimal life",
    streak: "Streak",
    streakDays: "Days",
    streakTip: "Keep it up! Stretch your legs",
    // My Phone
    myPhone: "MY Phone",
    healthLabel: (n: string) => `${n}'s Health`,
    healthState: "Optimal Performance State",
    batteryStatus: "Battery Status",
    batteryVal: "Excellent (82%)",
    systemPerf: "System Performance",
    systemVal: "Smooth",
    storage: "Storage Saved",
    storageVal: "24 GB free",
    temp: "Phone Temperature",
    tempVal: "Cool (32°C)",
    tipsBtn: "Tips for you",
    tipsList: [
      "Keep your battery between 20–80% for a longer lifespan.",
      "Avoid extreme heat or cold — keep your phone at a comfortable temperature.",
      "Lower your screen brightness or use dark mode to save power.",
      "Close background apps you aren't using.",
    ],
    // Awareness
    awarenessTitle: "The E-Waste Crisis",
    awarenessIntro: "Electronic waste is becoming a global crisis — and every phone that gets replaced too soon adds to it.",
    awarenessFacts: [
      "In 2022, the world generated 62 million tonnes of e-waste — projected to reach 82 million tonnes by 2030.",
      "Only a small fraction is properly recycled. Most is shipped to developing countries, where workers dismantle and burn devices by hand to recover valuable metals.",
      "That process releases toxic fumes that seriously harm local communities and the environment.",
    ],
    awarenessSource: "Source: Global E-waste Monitor 2024",
    awarenessCta: "Ever wondered if you really need a new phone?",
    awarenessCtaBtn: "Keep reading",
    // Retirement
    retirementTitle: "Before You Let Go",
    retirementCompareTitle: "The upgrade might not be worth it",
    retirementCompareBody: (n: string) =>
      `The latest model shares about 85% of the same camera features as ${n}. Most of what feels "new" is marketing, not a real difference.`,
    retirementResourceTitle: "What one new phone costs the planet",
    retirementResourceLabel1: "Water used",
    retirementResourceLabel2: "CO₂ emitted",
    retirementResourceLabel3: "Raw materials mined",
    retirementResourceLabel4: "E-waste created",
    retirementMemoryTitle: "Remember what you've been through together",
    retirementFinalTitle: "Are you sure you want to replace it?",
    retirementFinalBody: (n: string) =>
      `${n} still has plenty of life left. Every extra year you keep using it keeps real resources in the ground and out of a landfill.`,
    retirementKeepBtn: (n: string) => `Keep using ${n}`,
    retirementContinueBtn: "I still want to look at new phones",
    retirementContinueNote: "This is a prototype, so there's no real store to send you to — but in the finished app, this is where the trade-off would get one more honest look.",
    // Memories
    memories: "Memories",
    ourStory: "Our Story",
    gallery: "Gallery",
    storyTitle: "2 Years Together",
    storySince: "Since October 14, 2024",
    storyText: (n: string) =>
      `Remember when ${n} survived that coffee spill? We dried ${n} with eco towels and kept going. You've saved 24kg of potential carbon by keeping ${n} in active use!`,
    letterBtn: "A Letter From Your Phone",
    letterSalutation: (n: string) => `Dear friend, — from ${n}`,
    letterBody: (n: string) =>
      `Hi, it's ${n}. Thank you for taking such good care of me. Here's everything we've been through together, in numbers.`,
    letterClosing: (n: string) => `Let's keep making memories together. Love, ${n}.`,
    letterPhotos: "Photos taken together",
    letterPhotosVal: "1,204 photos",
    letterSongs: "Songs we listened to",
    letterSongsVal: "356 songs",
    letterSteps: "Steps we walked",
    letterStepsVal: "482,930 steps",
    // Settings
    settings: "Settings",
    profileEmail: "eco.friend@sprout.earth",
    edit: "Edit",
    save: "Save",
    namePlaceholderShort: "Phone name",
    notifications: "Notification Settings",
    language: "Language",
    langCurrent: "English (US)",
    accessibility: "Accessibility",
    privacy: "Privacy & Data",
    notifMission: "Mission reminders",
    notifBattery: "Battery care alerts",
    notifMemories: "New memory suggestions",
    a11yLargeText: "Larger text",
    a11yHighContrast: "High contrast mode",
    a11yScreenReader: "Screen reader support",
    privacyBody: "Phonetori is a prototype — no account data leaves this device, and there's nothing stored on a server. This screen shows what a real privacy & data control panel would look like.",
    privacyDeleteBtn: "Request data deletion",
    privacyDeleteConfirm: "Noted — in the real app this would erase your data. Nothing was actually deleted here.",
    // Nav
    navHome: "Home",
    navMyPhone: "My Phone",
    navAwareness: "Awareness",
    navMemories: "Memories",
    navSettings: "Settings",
    // Lang picker
    selectLang: "Select Language",
    langEn: "English (US)",
    langKo: "한국어",
    langHi: "हिन्दी",
  },
  ko: {
    nameYourPhone: "폰 이름 짓기",
    nameSubtitle: "기기에 개성을 불어넣어 보세요. 이름을 붙이면 단순한 도구가 아닌 동반자처럼 대하게 돼요.",
    namePlaceholder: "폰 이름을 입력하세요...",
    done: "완료",
    skipBtn: "나중에 하기",
    goodMorning: "좋은 아침이에요,",
    helloFriend: "안녕하세요!",
    sproutSpeech: (n: string) => `"안녕, 나는 ${n}이야!"`,
    sproutMessage: "오늘 기분이 아늑해요! 배터리를 아끼고 스트레칭으로 건강을 챙겨볼까요.",
    tapHint: "탭하면 오늘의 한마디를 들을 수 있어요",
    todaysMission: "오늘의 미션",
    missionSub: "목표를 달성해서 동반자의 건강을 지켜주세요.",
    battery: "배터리",
    batteryTip: "지금 충전기를 빼면 배터리 수명이 늘어요",
    streak: "연속 달성",
    streakDays: "일",
    streakTip: "잘하고 있어요! 스트레칭도 해볼까요",
    myPhone: "내 폰",
    healthLabel: (n: string) => `${n}의 건강 상태`,
    healthState: "최적 성능 상태",
    batteryStatus: "배터리 상태",
    batteryVal: "우수 (82%)",
    systemPerf: "시스템 성능",
    systemVal: "원활함",
    storage: "절약된 저장공간",
    storageVal: "24 GB 여유",
    temp: "폰 온도",
    tempVal: "시원함 (32°C)",
    tipsBtn: "맞춤 팁 보기",
    tipsList: [
      "배터리는 20~80% 사이로 유지하면 수명이 길어져요.",
      "너무 덥거나 추운 곳은 피하고 적정 온도를 유지해주세요.",
      "화면 밝기를 낮추거나 다크 모드를 사용하면 전력을 아낄 수 있어요.",
      "사용하지 않는 백그라운드 앱을 정리해보세요.",
    ],
    awarenessTitle: "전자폐기물 위기",
    awarenessIntro: "전자폐기물은 전 세계적인 위기로 떠오르고 있어요. 너무 이르게 바뀌는 폰 한 대 한 대가 그 위기를 키우고 있죠.",
    awarenessFacts: [
      "2022년 전 세계 전자폐기물 발생량은 6,200만 톤이었고, 2030년에는 8,200만 톤에 달할 것으로 전망돼요.",
      "이 중 극히 일부만 제대로 재활용되고, 대부분은 저개발국으로 수출돼 현지 노동자들이 유가금속을 회수하려고 기기를 손으로 분해하거나 태워요.",
      "이 과정에서 나오는 유독가스는 지역사회 건강과 환경에 심각한 위협이 돼요.",
    ],
    awarenessSource: "출처: Global E-waste Monitor 2024",
    awarenessCta: "생각해보셨나요? 새로운 폰이 꼭 필요한 순간인가요?",
    awarenessCtaBtn: "계속보기",
    retirementTitle: "떠나보내기 전에",
    retirementCompareTitle: "교체가 그만한 가치가 없을 수도 있어요",
    retirementCompareBody: (n: string) =>
      `최신 모델은 ${n}와 카메라 기능의 약 85%가 동일해요. "새롭다"고 느껴지는 대부분은 마케팅일 뿐, 실제 차이는 크지 않아요.`,
    retirementResourceTitle: "새 폰 한 대가 지구에 요구하는 것",
    retirementResourceLabel1: "사용되는 물",
    retirementResourceLabel2: "배출되는 CO₂",
    retirementResourceLabel3: "채굴되는 원자재",
    retirementResourceLabel4: "발생하는 전자폐기물",
    retirementMemoryTitle: "함께한 시간을 떠올려보세요",
    retirementFinalTitle: "정말 바꾸시겠어요?",
    retirementFinalBody: (n: string) =>
      `${n}는 아직 쓸 수 있는 날이 많이 남았어요. 한 해 더 사용할 때마다 실제 자원을 땅속에, 폐기물을 매립지 밖에 있게 하는 거예요.`,
    retirementKeepBtn: (n: string) => `${n} 계속 사용하기`,
    retirementContinueBtn: "그래도 새 폰을 둘러볼래요",
    retirementContinueNote: "지금은 프로토타입이라 실제로 연결되는 스토어는 없어요. 완성된 앱이라면 여기서 한 번 더 정직하게 저울질할 기회를 드렸을 거예요.",
    memories: "추억",
    ourStory: "우리의 이야기",
    gallery: "갤러리",
    storyTitle: "함께한 2년",
    storySince: "2024년 10월 14일부터",
    storyText: (n: string) =>
      `${n}가 커피를 쏟고도 살아남았던 거 기억나요? 에코 수건으로 닦아내고 함께 이겨냈죠. ${n}를 계속 사용한 덕분에 탄소 24kg을 절약했어요!`,
    letterBtn: "기기가 보내는 편지",
    letterSalutation: (n: string) => `${n}가 보내는 편지`,
    letterBody: (n: string) =>
      `안녕, 나는 ${n}이야. 나를 이렇게 아껴줘서 고마워. 우리가 함께한 시간을 숫자로 담아봤어.`,
    letterClosing: (n: string) => `앞으로도 오래오래 함께 추억을 쌓아가자! - ${n}`,
    letterPhotos: "함께 찍은 사진",
    letterPhotosVal: "1,204장",
    letterSongs: "함께 들은 노래",
    letterSongsVal: "356곡",
    letterSteps: "함께 걸은 걸음 수",
    letterStepsVal: "482,930보",
    settings: "설정",
    profileEmail: "eco.friend@sprout.earth",
    edit: "편집",
    save: "저장",
    namePlaceholderShort: "폰 이름",
    notifications: "알림 설정",
    language: "언어",
    langCurrent: "한국어",
    accessibility: "접근성",
    privacy: "개인정보 및 데이터",
    notifMission: "미션 알림",
    notifBattery: "배터리 관리 알림",
    notifMemories: "새 추억 제안 알림",
    a11yLargeText: "글씨 크게 보기",
    a11yHighContrast: "고대비 모드",
    a11yScreenReader: "스크린 리더 지원",
    privacyBody: "폰토리는 프로토타입이에요 — 계정 데이터가 기기 밖으로 나가지 않고, 서버에 저장되는 것도 없어요. 이 화면은 실제 개인정보 및 데이터 관리 화면이 어떤 모습일지 보여드려요.",
    privacyDeleteBtn: "데이터 삭제 요청",
    privacyDeleteConfirm: "확인했어요 — 실제 앱이라면 데이터가 삭제됐을 거예요. 지금은 프로토타입이라 실제로 삭제된 건 없어요.",
    navHome: "홈",
    navMyPhone: "내 폰",
    navAwareness: "인식",
    navMemories: "추억",
    navSettings: "설정",
    selectLang: "언어 선택",
    langEn: "English (US)",
    langKo: "한국어",
    langHi: "हिन्दी",
  },
  hi: {
    nameYourPhone: "अपने फ़ोन का नाम रखें",
    nameSubtitle: "अपने डिवाइस को एक पहचान दें। नाम देने से आप इसे सिर्फ़ एक टूल नहीं, बल्कि एक साथी की तरह मानेंगे।",
    namePlaceholder: "फ़ोन का नाम लिखें...",
    done: "हो गया",
    skipBtn: "अभी नहीं",
    goodMorning: "सुप्रभात,",
    helloFriend: "नमस्ते, दोस्त",
    sproutSpeech: (n: string) => `"नमस्ते, मैं ${n} हूँ!"`,
    sproutMessage: "आज मुझे बहुत अच्छा लग रहा है! चलिए बैटरी को तरोताज़ा रखें और सेहत के लिए थोड़ा टहलें।",
    tapHint: "आज का संदेश सुनने के लिए टैप करें",
    todaysMission: "आज का मिशन",
    missionSub: "सेहत बढ़ाने के लिए ये लक्ष्य पूरे करें।",
    battery: "बैटरी",
    batteryTip: "अभी चार्जर निकाल दें, बैटरी लंबी चलेगी",
    streak: "स्ट्रीक",
    streakDays: "दिन",
    streakTip: "बढ़िया चल रहा है! थोड़ा टहल लें",
    myPhone: "मेरा फ़ोन",
    healthLabel: (n: string) => `${n} की सेहत`,
    healthState: "सर्वोत्तम प्रदर्शन स्थिति",
    batteryStatus: "बैटरी स्थिति",
    batteryVal: "बेहतरीन (82%)",
    systemPerf: "सिस्टम प्रदर्शन",
    systemVal: "सुचारू",
    storage: "बचाया गया स्टोरेज",
    storageVal: "24 GB खाली",
    temp: "फ़ोन का तापमान",
    tempVal: "ठंडा (32°C)",
    tipsBtn: "आपके लिए सुझाव",
    tipsList: [
      "बैटरी लंबे समय तक चलाने के लिए इसे 20-80% के बीच रखें।",
      "फ़ोन को उचित तापमान में रखें, बहुत गर्म या ठंडी जगह से बचाएं।",
      "स्क्रीन की चमक कम करें या डार्क मोड का उपयोग करें, इससे बिजली बचेगी।",
      "जिन ऐप्स का उपयोग नहीं कर रहे, उन्हें बैकग्राउंड से बंद करें।",
    ],
    awarenessTitle: "ई-कचरा संकट",
    awarenessIntro: "इलेक्ट्रॉनिक कचरा एक वैश्विक संकट बनता जा रहा है — और हर फ़ोन जो जल्दी बदल दिया जाता है, इसे और बढ़ाता है।",
    awarenessFacts: [
      "2022 में दुनिया भर में 6.2 करोड़ टन ई-कचरा पैदा हुआ, और 2030 तक यह 8.2 करोड़ टन तक पहुंचने का अनुमान है।",
      "इसका बहुत छोटा हिस्सा ही सही तरीके से रीसायकल होता है। बाकी ज़्यादातर विकासशील देशों में भेज दिया जाता है, जहां मज़दूर कीमती धातुएं निकालने के लिए डिवाइस हाथ से तोड़ते और जलाते हैं।",
      "इस प्रक्रिया से निकलने वाली ज़हरीली गैसें स्थानीय समुदायों की सेहत और पर्यावरण के लिए गंभीर ख़तरा बनती हैं।",
    ],
    awarenessSource: "स्रोत: Global E-waste Monitor 2024",
    awarenessCta: "क्या कभी सोचा है — क्या आपको सच में नया फ़ोन चाहिए?",
    awarenessCtaBtn: "आगे पढ़ें",
    retirementTitle: "अलविदा कहने से पहले",
    retirementCompareTitle: "अपग्रेड शायद उतना फ़ायदेमंद न हो",
    retirementCompareBody: (n: string) =>
      `नए मॉडल में ${n} जैसी लगभग 85% कैमरा सुविधाएं पहले से मौजूद हैं। जो "नया" लगता है, वह ज़्यादातर मार्केटिंग है, असली फ़र्क़ नहीं।`,
    retirementResourceTitle: "एक नए फ़ोन की धरती पर असली कीमत",
    retirementResourceLabel1: "इस्तेमाल हुआ पानी",
    retirementResourceLabel2: "उत्सर्जित CO₂",
    retirementResourceLabel3: "खनन की गई कच्ची सामग्री",
    retirementResourceLabel4: "बना ई-कचरा",
    retirementMemoryTitle: "साथ बिताया गया समय याद करें",
    retirementFinalTitle: "क्या आप वाक़ई इसे बदलना चाहते हैं?",
    retirementFinalBody: (n: string) =>
      `${n} में अभी भी बहुत ज़िंदगी बाकी है। इसे हर अतिरिक्त साल इस्तेमाल करने से असली संसाधन ज़मीन में और कचरा लैंडफिल से दूर रहता है।`,
    retirementKeepBtn: (n: string) => `${n} का उपयोग जारी रखें`,
    retirementContinueBtn: "फिर भी नए फ़ोन देखना चाहता/चाहती हूँ",
    retirementContinueNote: "यह एक प्रोटोटाइप है, इसलिए यहाँ से कोई असली स्टोर नहीं खुलेगा — पूरे ऐप में यही वह जगह होती जहाँ आपको एक बार फिर ईमानदारी से सोचने का मौका मिलता।",
    memories: "यादें",
    ourStory: "हमारी कहानी",
    gallery: "गैलरी",
    storyTitle: "साथ बिताए 2 साल",
    storySince: "14 अक्टूबर 2024 से",
    storyText: (n: string) =>
      `याद है जब ${n} पर कॉफ़ी गिर गई थी? हमने ${n} को इको तौलिये से सुखाया और आगे बढ़ते रहे। ${n} को लगातार इस्तेमाल में रखकर आपने 24kg कार्बन बचाया है!`,
    letterBtn: "आपके फ़ोन का पत्र",
    letterSalutation: (n: string) => `${n} की तरफ़ से एक पत्र`,
    letterBody: (n: string) =>
      `नमस्ते, मैं ${n} हूँ। मेरा इतना ख़याल रखने के लिए शुक्रिया। हमने साथ में जो समय बिताया, उसे आंकड़ों में समेटा है।`,
    letterClosing: (n: string) => `आइए, हम आगे भी लंबे समय तक साथ यादें बनाते रहें! - ${n}`,
    letterPhotos: "साथ खींची गई तस्वीरें",
    letterPhotosVal: "1,204 तस्वीरें",
    letterSongs: "साथ सुने गए गाने",
    letterSongsVal: "356 गाने",
    letterSteps: "साथ चले गए कदम",
    letterStepsVal: "482,930 कदम",
    settings: "सेटिंग्स",
    profileEmail: "eco.friend@sprout.earth",
    edit: "संपादित करें",
    save: "सेव करें",
    namePlaceholderShort: "फ़ोन का नाम",
    notifications: "सूचना सेटिंग्स",
    language: "भाषा",
    langCurrent: "हिन्दी",
    accessibility: "सुगमता",
    privacy: "गोपनीयता और डेटा",
    notifMission: "मिशन रिमाइंडर",
    notifBattery: "बैटरी देखभाल अलर्ट",
    notifMemories: "नई याद के सुझाव",
    a11yLargeText: "बड़ा टेक्स्ट",
    a11yHighContrast: "हाई कॉन्ट्रास्ट मोड",
    a11yScreenReader: "स्क्रीन रीडर समर्थन",
    privacyBody: "फ़ोनेटोरी एक प्रोटोटाइप है — कोई भी डेटा इस डिवाइस से बाहर नहीं जाता और किसी सर्वर पर कुछ भी सेव नहीं होता। यह स्क्रीन दिखाती है कि असली गोपनीयता व डेटा सेटिंग कैसी दिखेगी।",
    privacyDeleteBtn: "डेटा हटाने का अनुरोध करें",
    privacyDeleteConfirm: "नोट कर लिया — असली ऐप में इससे आपका डेटा मिट जाता। यहाँ प्रोटोटाइप में कुछ भी वास्तव में नहीं हटाया गया।",
    navHome: "होम",
    navMyPhone: "मेरा फ़ोन",
    navAwareness: "जागरूकता",
    navMemories: "यादें",
    navSettings: "सेटिंग्स",
    selectLang: "भाषा चुनें",
    langEn: "English (US)",
    langKo: "한국어",
    langHi: "हिन्दी",
  },
} as const;

type Strings = typeof T.en;

const LangCtx = createContext<{ t: Strings; lang: Lang; setLang: (l: Lang) => void }>({
  t: T.ko,
  lang: "ko",
  setLang: () => {},
});

function useLang() {
  return useContext(LangCtx);
}

// ─── Pontory Character Crops ──────────────────────────────────────────────────
// 이미지 교체 시: import 경로만 변경하면 됩니다.

function PontoryFace({ size = 40, radius = "50%" }: { size?: number; radius?: string }) {
  return (
    <div style={{ width: size, height: size, borderRadius: radius, overflow: "hidden", flexShrink: 0, backgroundImage: `url(${imgFace})`, backgroundSize: "cover", backgroundPosition: "center" }} />
  );
}

function PontoryNormal({ width = 100, height = 120 }: { width?: number; height?: number }) {
  return (
    <div style={{ width, height, backgroundImage: `url(${imgPoses})`, backgroundSize: "210% auto", backgroundPosition: "10% 65%", backgroundRepeat: "no-repeat" }} />
  );
}

function PontoryTips({ width = 80, height = 100 }: { width?: number; height?: number }) {
  return (
    <div style={{ width, height, backgroundImage: `url(${imgPoses})`, backgroundSize: "210% auto", backgroundPosition: "90% 60%", backgroundRepeat: "no-repeat" }} />
  );
}

function PontoryWelcome({ width = 220, height = 220 }: { width?: number; height?: number }) {
  return (
    <div style={{ width, height, backgroundImage: `url(${imgPoses})`, backgroundSize: "220% auto", backgroundPosition: "8% 68%", backgroundRepeat: "no-repeat" }} />
  );
}

const DEFAULT_PHONE_NAME = "폰토리";

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  bg: "#f4f8f5",
  dark: "#1c3524",
  darkAlt: "#1a2e1f",
  muted: "#5c6b5e",
  green: "#e8f2ec",
  border: "#e2ece6",
  orange: "#e29578",
};

// ─── Status Bar ───────────────────────────────────────────────────────────────
function StatusBar() {
  return (
    <div className="h-[44px] flex items-center justify-between px-6 shrink-0">
      <span style={{ color: C.darkAlt, fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: 600, fontSize: 15 }}>9:41</span>
      <div className="flex items-center gap-1">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 11h2V6H0v5zm3 0h2V4H3v7zm3 0h2V2H6v9zm3 0h2V0H9v11zm3 0h2V0h-2v11zm3 0h2V0h-2v11z" fill={C.darkAlt} />
        </svg>
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M7.5 2.2C9.9 2.2 12 3.2 13.5 4.8L15 3.2C13.1 1.2 10.4 0 7.5 0S1.9 1.2 0 3.2l1.5 1.6C3 3.2 5.1 2.2 7.5 2.2zm0 3.6c1.4 0 2.7.6 3.6 1.5L12.6 6c-1.3-1.3-3.1-2.1-5.1-2.1S3.7 4.7 2.4 6l1.5 1.3C4.8 6.4 6.1 5.8 7.5 5.8zm0 3.5c.8 0 1.5.3 2 .8L11 8.6C10.1 7.6 8.9 7 7.5 7S4.9 7.6 4 8.6l1.5 1.5c.5-.5 1.2-.8 2-.8z" fill={C.darkAlt} />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke={C.darkAlt} />
          <rect x="2" y="2" width="18" height="8" rx="2" fill={C.darkAlt} />
          <path d="M23 4v4a2 2 0 000-4z" fill={C.darkAlt} />
        </svg>
      </div>
    </div>
  );
}

// ─── Bottom Nav ───────────────────────────────────────────────────────────────
type Tab = "home" | "myphone" | "awareness" | "memories" | "settings";
type Screen = Tab | "onboarding" | "retirement";

function BottomNav({ active, onNavigate }: { active: Tab; onNavigate: (tab: Tab) => void }) {
  const { t } = useLang();
  const items: { id: Tab; label: string; Icon: React.FC<{ size?: number; strokeWidth?: number; color?: string }> }[] = [
    { id: "home",     label: t.navHome,     Icon: Home },
    { id: "myphone",  label: t.navMyPhone,  Icon: Smartphone },
    { id: "awareness", label: t.navAwareness, Icon: Globe },
    { id: "memories", label: t.navMemories, Icon: ImageIcon },
    { id: "settings", label: t.navSettings, Icon: Settings },
  ];
  return (
    <div style={{ background: "white", borderTop: `1px solid ${C.border}` }} className="h-[80px] flex items-center justify-between px-4 pt-3 pb-5 shrink-0">
      {items.map(({ id, label, Icon }) => {
        const on = active === id;
        return (
          <button key={id} onClick={() => onNavigate(id)} className="flex flex-col items-center gap-1 w-[64px]">
            <div style={{ background: on ? C.green : "transparent", borderRadius: 18, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon size={20} strokeWidth={2} color={on ? C.dark : C.muted} />
            </div>
            <span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: on ? 700 : 500, fontSize: 10, color: on ? C.dark : C.muted, whiteSpace: "nowrap" }}>
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ─── Bottom Sheet (shared shell) ───────────────────────────────────────────────
function BottomSheet({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 20, borderRadius: 32 }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, maxHeight: "82%", overflowY: "auto", background: "white", borderRadius: "24px 24px 32px 32px", zIndex: 21, padding: "0 24px 44px" }}>
        {/* drag handle */}
        <div style={{ width: 40, height: 4, background: C.border, borderRadius: 2, margin: "16px auto 24px" }} />
        <p style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 800, fontSize: 20, color: C.dark, marginBottom: 16 }}>
          {title}
        </p>
        {children}
      </div>
    </>
  );
}

// ─── Language Picker Bottom Sheet ─────────────────────────────────────────────
function LangSheet({ onClose }: { onClose: () => void }) {
  const { t, lang, setLang } = useLang();
  const opts: { value: Lang; primary: string; secondary: string }[] = [
    { value: "en", primary: "English", secondary: "English (US)" },
    { value: "ko", primary: "한국어", secondary: "Korean" },
    { value: "hi", primary: "हिन्दी", secondary: "Hindi" },
  ];
  return (
    <BottomSheet title={t.selectLang} onClose={onClose}>
      <div className="flex flex-col gap-3">
        {opts.map(({ value, primary, secondary }) => {
          const selected = lang === value;
          return (
            <button
              key={value}
              onClick={() => { setLang(value); onClose(); }}
              style={{
                background: selected ? C.green : "#f9faf9",
                border: `1.5px solid ${selected ? C.dark : C.border}`,
                borderRadius: 16,
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div style={{ textAlign: "left" }}>
                <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: 700, fontSize: 16, color: C.dark }}>{primary}</p>
                <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 13, color: C.muted }}>{secondary}</p>
              </div>
              {selected && (
                <div style={{ background: C.dark, borderRadius: "50%", width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Check size={13} color="white" strokeWidth={3} />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </BottomSheet>
  );
}

// ─── My Phone Tips Bottom Sheet ────────────────────────────────────────────────
function TipsSheet({ onClose }: { onClose: () => void }) {
  const { t } = useLang();
  return (
    <BottomSheet title={t.tipsBtn} onClose={onClose}>
      <div className="flex flex-col gap-3">
        {t.tipsList.map((tip, i) => (
          <div key={i} style={{ background: C.green, borderRadius: 16 }} className="flex items-start gap-3 p-4">
            <div style={{ background: C.dark, borderRadius: "50%", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
              <span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: 700, fontSize: 12, color: "white" }}>{i + 1}</span>
            </div>
            <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 14, color: C.darkAlt, lineHeight: 1.4 }}>{tip}</p>
          </div>
        ))}
      </div>
    </BottomSheet>
  );
}

// ─── "Letter From Your Phone" Bottom Sheet ─────────────────────────────────────
function LetterSheet({ phoneName, onClose }: { phoneName: string; onClose: () => void }) {
  const { t } = useLang();
  const stats = [
    { label: t.letterPhotos, value: t.letterPhotosVal },
    { label: t.letterSongs, value: t.letterSongsVal },
    { label: t.letterSteps, value: t.letterStepsVal },
  ];
  return (
    <BottomSheet title={t.letterBtn} onClose={onClose}>
      <div style={{ background: C.green, borderRadius: 20 }} className="p-5 flex flex-col gap-4">
        <div>
          <p style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 700, fontSize: 16, color: C.dark }}>{t.letterSalutation(phoneName)}</p>
          <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 14, color: C.darkAlt, lineHeight: 1.5, marginTop: 8 }}>{t.letterBody(phoneName)}</p>
        </div>
        <div className="flex flex-col gap-2">
          {stats.map(({ label, value }) => (
            <div key={label} style={{ background: "white", borderRadius: 14 }} className="flex items-center justify-between px-4 py-3">
              <span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 13, color: C.muted }}>{label}</span>
              <span style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 800, fontSize: 15, color: C.dark }}>{value}</span>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 14, color: C.darkAlt, lineHeight: 1.5, fontStyle: "italic" }}>{t.letterClosing(phoneName)}</p>
      </div>
    </BottomSheet>
  );
}

// ─── Toggle row (shared) ───────────────────────────────────────────────────────
function ToggleRow({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button onClick={() => onChange(!value)} style={{ background: "white", borderRadius: 16, border: `1px solid ${C.border}` }} className="flex items-center justify-between p-4 w-full text-left">
      <span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: 600, fontSize: 15, color: C.darkAlt }}>{label}</span>
      <div style={{ width: 44, height: 26, borderRadius: 13, background: value ? C.dark : C.border, position: "relative", flexShrink: 0, transition: "background 0.15s" }}>
        <div style={{ position: "absolute", top: 2, left: value ? 20 : 2, width: 22, height: 22, borderRadius: "50%", background: "white", transition: "left 0.15s" }} />
      </div>
    </button>
  );
}

// ─── Notifications Bottom Sheet ────────────────────────────────────────────────
function NotificationsSheet({ onClose }: { onClose: () => void }) {
  const { t } = useLang();
  const [mission, setMission] = useState(true);
  const [battery, setBattery] = useState(true);
  const [memories, setMemories] = useState(false);
  return (
    <BottomSheet title={t.notifications} onClose={onClose}>
      <div className="flex flex-col gap-3">
        <ToggleRow label={t.notifMission} value={mission} onChange={setMission} />
        <ToggleRow label={t.notifBattery} value={battery} onChange={setBattery} />
        <ToggleRow label={t.notifMemories} value={memories} onChange={setMemories} />
      </div>
    </BottomSheet>
  );
}

// ─── Accessibility Bottom Sheet ────────────────────────────────────────────────
function AccessibilitySheet({ onClose }: { onClose: () => void }) {
  const { t } = useLang();
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [screenReader, setScreenReader] = useState(false);
  return (
    <BottomSheet title={t.accessibility} onClose={onClose}>
      <div className="flex flex-col gap-3">
        <ToggleRow label={t.a11yLargeText} value={largeText} onChange={setLargeText} />
        <ToggleRow label={t.a11yHighContrast} value={highContrast} onChange={setHighContrast} />
        <ToggleRow label={t.a11yScreenReader} value={screenReader} onChange={setScreenReader} />
      </div>
    </BottomSheet>
  );
}

// ─── Privacy & Data Bottom Sheet ───────────────────────────────────────────────
function PrivacySheet({ onClose }: { onClose: () => void }) {
  const { t } = useLang();
  const [confirmed, setConfirmed] = useState(false);
  return (
    <BottomSheet title={t.privacy} onClose={onClose}>
      <div className="flex flex-col gap-4">
        <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 14, color: C.darkAlt, lineHeight: 1.5 }}>{t.privacyBody}</p>
        <button
          onClick={() => setConfirmed(true)}
          style={{ background: confirmed ? C.green : C.dark, borderRadius: 16, border: confirmed ? `1px solid ${C.dark}` : "none" }}
          className="flex items-center justify-center p-4"
        >
          <span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: 700, fontSize: 15, color: confirmed ? C.dark : "white" }}>{t.privacyDeleteBtn}</span>
        </button>
        {confirmed && (
          <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 13, color: C.muted, lineHeight: 1.4 }}>{t.privacyDeleteConfirm}</p>
        )}
      </div>
    </BottomSheet>
  );
}

// ─── Screens ──────────────────────────────────────────────────────────────────

function OnboardingScreen({ name, onNameChange, onDone, onSkip }: { name: string; onNameChange: (n: string) => void; onDone: () => void; onSkip: () => void }) {
  const { t } = useLang();
  return (
    <div style={{ background: C.bg }} className="flex flex-col h-full rounded-[32px] overflow-clip">
      <StatusBar />
      <div className="flex-1 overflow-y-auto px-6 pb-4 flex flex-col gap-6 justify-center">
        <div style={{ background: C.green, borderRadius: 24, height: 260, overflow: "hidden", display: "flex", alignItems: "flex-end", justifyContent: "center" }} className="shrink-0">
          <PontoryWelcome width={260} height={240} />
        </div>
        <div className="flex flex-col gap-2 text-center">
          <p style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 800, fontSize: 32, color: C.dark }}>{t.nameYourPhone}</p>
          <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 15, color: C.muted, lineHeight: 1.4 }}>{t.nameSubtitle}</p>
        </div>
        <div style={{ background: "white", borderRadius: 16, border: `1.5px solid ${C.dark}` }} className="flex items-center gap-3 px-4 py-[14px]">
          <Pencil size={18} color={C.dark} />
          <input value={name} onChange={(e) => onNameChange(e.target.value)} placeholder={t.namePlaceholder}
            style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: 500, fontSize: 16, color: C.darkAlt, background: "transparent", outline: "none", flex: 1 }} />
        </div>
        <button onClick={() => { if (!name.trim()) onNameChange(DEFAULT_PHONE_NAME); onDone(); }} style={{ background: C.dark, borderRadius: 16 }} className="w-full flex items-center justify-center py-[14px]">
          <span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: 700, fontSize: 16, color: "white" }}>{t.done}</span>
        </button>
        <button onClick={onSkip} className="w-full flex items-center justify-center py-2">
          <span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: 600, fontSize: 14, color: C.muted, textDecoration: "underline" }}>{t.skipBtn}</span>
        </button>
      </div>
      <div aria-hidden className="absolute inset-0 rounded-[32px] border pointer-events-none" style={{ borderColor: C.border }} />
    </div>
  );
}

function HomeScreen({ phoneName, onNavigate }: { phoneName: string; onNavigate: (tab: Tab) => void }) {
  const { t } = useLang();
  const [showSpeech, setShowSpeech] = useState(false);
  return (
    <div style={{ background: C.bg }} className="flex flex-col h-full rounded-[32px] overflow-clip">
      <StatusBar />
      <div className="flex-1 overflow-y-auto px-6 pb-4 flex flex-col gap-5">
        {/* Greeting */}
        <div className="flex items-center justify-between">
          <div>
            <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 14, color: C.muted }}>{t.goodMorning}</p>
            <p style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 800, fontSize: 24, color: C.dark }}>{t.helloFriend}</p>
          </div>
          <PontoryFace size={40} radius="20px" />
        </div>
        {/* Character + tap-to-speak bubble */}
        <div style={{ background: C.green, borderRadius: 24 }} className="p-5 flex flex-col items-center gap-3">
          {showSpeech && (
            <div style={{ position: "relative", background: "white", borderRadius: 20 }} className="w-full p-4">
              <p style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 700, fontSize: 18, color: C.dark }}>{t.sproutSpeech(phoneName)}</p>
              <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 14, color: C.muted, lineHeight: 1.4, marginTop: 6 }}>{t.sproutMessage}</p>
              <div style={{ position: "absolute", bottom: -8, left: "50%", width: 16, height: 16, background: "white", borderRadius: 3, transform: "translateX(-50%) rotate(45deg)" }} />
            </div>
          )}
          <button onClick={() => setShowSpeech((s) => !s)} className="w-full flex items-end justify-center" style={{ height: 130 }} aria-label={t.tapHint}>
            <PontoryNormal width={130} height={118} />
          </button>
          {!showSpeech && (
            <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 12, color: C.muted }}>{t.tapHint}</p>
          )}
        </div>
        {/* Mission */}
        <div>
          <p style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 800, fontSize: 20, color: C.dark }}>{t.todaysMission}</p>
          <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 14, color: C.muted }}>{t.missionSub}</p>
        </div>
        <div className="flex gap-3">
          <div style={{ background: "white", borderRadius: 20, flex: 1, boxShadow: "0 4px 6px rgba(26,46,31,0.04)" }} className="p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Battery size={20} color={C.dark} />
              <span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: 600, fontSize: 13, color: C.muted }}>{t.battery}</span>
            </div>
            <p style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 800, fontSize: 28, color: C.dark }}>80%</p>
            <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 12, color: C.muted }}>{t.batteryTip}</p>
          </div>
          <div style={{ background: "#fdf0ea", borderRadius: 20, flex: 1, boxShadow: "0 4px 6px rgba(26,46,31,0.04)" }} className="p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Activity size={20} color={C.orange} />
              <span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: 600, fontSize: 13, color: C.orange }}>{t.streak}</span>
            </div>
            <p style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 800, color: C.orange }}>
              <span style={{ fontSize: 28 }}>5 </span>
              <span style={{ fontSize: 14 }}>{t.streakDays}</span>
            </p>
            <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 12, color: C.muted }}>{t.streakTip}</p>
          </div>
        </div>
      </div>
      <BottomNav active="home" onNavigate={onNavigate} />
      <div aria-hidden className="absolute inset-0 rounded-[32px] border pointer-events-none" style={{ borderColor: C.border }} />
    </div>
  );
}

function MyPhoneScreen({ phoneName, onNavigate }: { phoneName: string; onNavigate: (tab: Tab) => void }) {
  const { t } = useLang();
  const [showTips, setShowTips] = useState(false);
  const stats = [
    { icon: <Battery size={20} color={C.dark} />, label: t.batteryStatus, value: t.batteryVal },
    { icon: <Cpu size={20} color={C.dark} />,     label: t.systemPerf,   value: t.systemVal },
    { icon: <Database size={20} color={C.dark} />, label: t.storage,     value: t.storageVal },
    { icon: <Thermometer size={20} color={C.dark} />, label: t.temp,     value: t.tempVal },
  ];
  return (
    <div style={{ background: C.bg }} className="flex flex-col h-full rounded-[32px] overflow-clip">
      <StatusBar />
      <div className="flex-1 overflow-y-auto px-6 pb-4 flex flex-col gap-5">
        <p style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 800, fontSize: 24, color: C.dark }}>{t.myPhone}</p>
        {/* Health card */}
        <div style={{ background: C.dark, borderRadius: 24 }} className="p-5 flex items-center gap-4">
          <div className="flex-1">
            <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: 600, fontSize: 14, color: C.orange }}>{t.healthLabel(phoneName)}</p>
            <p style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 800, fontSize: 36, color: "white" }}>92%</p>
            <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 12, color: C.green }}>{t.healthState}</p>
          </div>
          <div style={{ background: C.orange, borderRadius: 36, width: 72, height: 72, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ background: C.dark, borderRadius: 28, width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: 700, fontSize: 14, color: "white" }}>A+</span>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="flex flex-col gap-3">
          {stats.map(({ icon, label, value }) => (
            <div key={label} style={{ background: "white", borderRadius: 16, boxShadow: "0 4px 6px rgba(26,46,31,0.04)" }} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">{icon}<span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: 600, fontSize: 15, color: C.darkAlt }}>{label}</span></div>
              <div className="flex items-center gap-2">
                <span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 14, color: C.muted }}>{value}</span>
                <ChevronRight size={16} color={C.muted} />
              </div>
            </div>
          ))}
        </div>
        {/* Tips */}
        <div className="flex items-end gap-3">
          <div style={{ flexShrink: 0, marginBottom: -4 }}><PontoryTips width={64} height={80} /></div>
          <button onClick={() => setShowTips(true)} style={{ background: C.green, borderRadius: 16, border: `1px solid ${C.dark}`, flex: 1 }} className="flex items-center justify-center gap-3 p-4">
            <HelpCircle size={20} color={C.dark} />
            <span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: 700, fontSize: 15, color: C.dark }}>{t.tipsBtn}</span>
          </button>
        </div>
      </div>
      <BottomNav active="myphone" onNavigate={onNavigate} />
      <div aria-hidden className="absolute inset-0 rounded-[32px] border pointer-events-none" style={{ borderColor: C.border }} />
      {showTips && <TipsSheet onClose={() => setShowTips(false)} />}
    </div>
  );
}

function AwarenessScreen({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  const { t } = useLang();
  return (
    <div style={{ background: C.bg }} className="flex flex-col h-full rounded-[32px] overflow-clip">
      <StatusBar />
      <div className="flex-1 overflow-y-auto px-6 pb-4 flex flex-col gap-5">
        <p style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 800, fontSize: 24, color: C.dark }}>{t.awarenessTitle}</p>
        {/* Hero */}
        <div style={{ background: C.green, borderRadius: 24 }} className="px-5 pt-5 flex items-end gap-2">
          <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 14, color: C.muted, lineHeight: 1.4, flex: 1, paddingBottom: 20 }}>{t.awarenessIntro}</p>
          <PontoryNormal width={80} height={90} />
        </div>
        {/* Facts */}
        <div className="flex flex-col gap-3">
          {t.awarenessFacts.map((fact, i) => (
            <div key={i} style={{ background: "white", borderRadius: 16, boxShadow: "0 4px 6px rgba(26,46,31,0.04)" }} className="flex items-start gap-3 p-4">
              <div style={{ background: C.dark, borderRadius: "50%", width: 8, height: 8, flexShrink: 0, marginTop: 7 }} />
              <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 14, color: C.darkAlt, lineHeight: 1.5 }}>{fact}</p>
            </div>
          ))}
          <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 12, color: C.muted, fontStyle: "italic" }}>{t.awarenessSource}</p>
        </div>
        {/* CTA into the retirement screen */}
        <div style={{ background: C.dark, borderRadius: 20 }} className="p-5 flex flex-col gap-3">
          <p style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 700, fontSize: 16, color: "white", lineHeight: 1.4 }}>{t.awarenessCta}</p>
          <button onClick={() => onNavigate("retirement")} style={{ background: C.orange, borderRadius: 14 }} className="flex items-center justify-center py-3">
            <span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: 700, fontSize: 14, color: "white" }}>{t.awarenessCtaBtn}</span>
          </button>
        </div>
      </div>
      <BottomNav active="awareness" onNavigate={onNavigate} />
      <div aria-hidden className="absolute inset-0 rounded-[32px] border pointer-events-none" style={{ borderColor: C.border }} />
    </div>
  );
}

function RetirementScreen({ phoneName, onBack, onKeep }: { phoneName: string; onBack: () => void; onKeep: () => void }) {
  const { t } = useLang();
  const [showContinueNote, setShowContinueNote] = useState(false);
  const resources = [
    { icon: <Droplets size={20} color={C.dark} />, label: t.retirementResourceLabel1, value: "45 L" },
    { icon: <Cloud size={20} color={C.dark} />,    label: t.retirementResourceLabel2, value: "12.4 kg" },
    { icon: <Anchor size={20} color={C.dark} />,   label: t.retirementResourceLabel3, value: "1.2 kg" },
    { icon: <Trash2 size={20} color={C.dark} />,   label: t.retirementResourceLabel4, value: "350 g" },
  ];
  return (
    <div style={{ background: C.bg }} className="flex flex-col h-full rounded-[32px] overflow-clip">
      <div className="h-[44px] flex items-center px-4 shrink-0">
        <button onClick={onBack} style={{ width: 32, height: 32, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ChevronLeft size={22} color={C.dark} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-6 pb-4 flex flex-col gap-5">
        <p style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 800, fontSize: 24, color: C.dark }}>{t.retirementTitle}</p>

        {/* Feature comparison */}
        <div style={{ background: C.green, borderRadius: 20 }} className="p-5 flex flex-col gap-2">
          <p style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 700, fontSize: 16, color: C.dark }}>{t.retirementCompareTitle}</p>
          <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 14, color: C.darkAlt, lineHeight: 1.5 }}>{t.retirementCompareBody(phoneName)}</p>
        </div>

        {/* Resource cost */}
        <div className="flex flex-col gap-3">
          <p style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 700, fontSize: 18, color: C.dark }}>{t.retirementResourceTitle}</p>
          <div className="flex flex-col gap-2">
            {resources.map(({ icon, label, value }) => (
              <div key={label} style={{ background: "white", borderRadius: 16, boxShadow: "0 4px 6px rgba(26,46,31,0.04)" }} className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">{icon}<span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 14, color: C.muted }}>{label}</span></div>
                <span style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 800, fontSize: 16, color: C.dark }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Memory retrospective */}
        <div className="flex flex-col gap-3">
          <p style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 700, fontSize: 18, color: C.dark }}>{t.retirementMemoryTitle}</p>
          <div style={{ background: "white", borderRadius: 16, boxShadow: "0 4px 6px rgba(26,46,31,0.04)" }} className="p-4">
            <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 14, color: C.darkAlt, lineHeight: 1.5 }}>{t.storyText(phoneName)}</p>
          </div>
        </div>

        {/* Final confirmation */}
        <div style={{ background: C.dark, borderRadius: 20 }} className="p-5 flex flex-col gap-3">
          <p style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 700, fontSize: 16, color: "white" }}>{t.retirementFinalTitle}</p>
          <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 14, color: C.green, lineHeight: 1.5 }}>{t.retirementFinalBody(phoneName)}</p>
          <button onClick={onKeep} style={{ background: C.orange, borderRadius: 14 }} className="flex items-center justify-center py-3">
            <span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: 700, fontSize: 14, color: "white" }}>{t.retirementKeepBtn(phoneName)}</span>
          </button>
          <button onClick={() => setShowContinueNote(true)} className="flex items-center justify-center py-1">
            <span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: 600, fontSize: 13, color: C.green, textDecoration: "underline" }}>{t.retirementContinueBtn}</span>
          </button>
          {showContinueNote && (
            <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 12, color: C.green, lineHeight: 1.4, opacity: 0.8 }}>{t.retirementContinueNote}</p>
          )}
        </div>
      </div>
      <div aria-hidden className="absolute inset-0 rounded-[32px] border pointer-events-none" style={{ borderColor: C.border }} />
    </div>
  );
}

function MemoriesScreen({ phoneName, onNavigate }: { phoneName: string; onNavigate: (tab: Tab) => void }) {
  const { t } = useLang();
  const [tab, setTab] = useState<"story" | "gallery">("story");
  const [showLetter, setShowLetter] = useState(false);
  const gridColors = ["#d4e8d8", "#c8e0cc", "#bcd8c0", "#b0d0b4"];
  return (
    <div style={{ background: C.bg }} className="flex flex-col h-full rounded-[32px] overflow-clip">
      <StatusBar />
      <div className="flex-1 overflow-y-auto px-6 pb-4 flex flex-col gap-5">
        <p style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 800, fontSize: 24, color: C.dark }}>{t.memories}</p>
        {/* Tab switcher */}
        <div style={{ background: C.green, borderRadius: 16 }} className="flex p-1 gap-1">
          {(["story", "gallery"] as const).map((id) => (
            <button key={id} onClick={() => setTab(id)} style={{ flex: 1, borderRadius: 12, background: tab === id ? "white" : "transparent", padding: "10px 0" }}>
              <span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: tab === id ? 700 : 500, fontSize: 14, color: tab === id ? C.dark : C.muted }}>
                {id === "story" ? t.ourStory : t.gallery}
              </span>
            </button>
          ))}
        </div>
        {tab === "story" ? (
          <>
            <div style={{ background: "white", borderRadius: 20, boxShadow: "0 4px 6px rgba(26,46,31,0.04)" }} className="p-4 flex flex-col gap-4">
              <div>
                <p style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 700, fontSize: 18, color: C.dark }}>{t.storyTitle}</p>
                <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 13, color: C.muted }}>{t.storySince}</p>
              </div>
              <div className="flex flex-col gap-2">
                {[0, 2].map((offset) => (
                  <div key={offset} className="flex gap-2">
                    {[offset, offset + 1].map((i) => (
                      <div key={i} style={{ flex: 1, height: 80, borderRadius: 12, background: gridColors[i], overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {i === 1 ? <PontoryFace size={60} radius="12px" /> : <ImageIcon size={20} color={C.dark} opacity={0.25} />}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "white", borderRadius: 20, boxShadow: "0 4px 6px rgba(26,46,31,0.04)" }} className="p-4">
              <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 14, color: C.darkAlt, lineHeight: 1.5 }}>{t.storyText(phoneName)}</p>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-2">
            {[0, 2].map((offset) => (
              <div key={offset} className="flex gap-2">
                {[offset, offset + 1].map((i) => (
                  <div key={i} style={{ flex: 1, height: 120, borderRadius: 12, background: gridColors[i], display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ImageIcon size={24} color={C.dark} opacity={0.25} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        {/* Letter from the device */}
        <button onClick={() => setShowLetter(true)} style={{ background: C.dark, borderRadius: 16 }} className="flex items-center justify-center gap-3 p-4">
          <Mail size={20} color="white" />
          <span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: 700, fontSize: 15, color: "white" }}>{t.letterBtn}</span>
        </button>
      </div>
      <BottomNav active="memories" onNavigate={onNavigate} />
      <div aria-hidden className="absolute inset-0 rounded-[32px] border pointer-events-none" style={{ borderColor: C.border }} />
      {showLetter && <LetterSheet phoneName={phoneName} onClose={() => setShowLetter(false)} />}
    </div>
  );
}

function SettingsScreen({ phoneName, onNameChange, onNavigate }: { phoneName: string; onNameChange: (n: string) => void; onNavigate: (tab: Tab) => void }) {
  const { t, lang } = useLang();
  const [showLang, setShowLang] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAccessibility, setShowAccessibility] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [editingName, setEditingName] = useState(false);
  const [nameDraft, setNameDraft] = useState(phoneName);

  const startEdit = () => { setNameDraft(phoneName); setEditingName(true); };
  const saveEdit = () => { onNameChange(nameDraft.trim() || phoneName); setEditingName(false); };

  const items = [
    { icon: <Bell size={20} color={C.dark} />,   label: t.notifications, value: null,            onPress: () => setShowNotifications(true) },
    { icon: <Globe size={20} color={C.dark} />,  label: t.language,      value: t.langCurrent,   onPress: () => setShowLang(true) },
    { icon: <Eye size={20} color={C.dark} />,    label: t.accessibility, value: null,            onPress: () => setShowAccessibility(true) },
    { icon: <Lock size={20} color={C.dark} />,   label: t.privacy,       value: null,            onPress: () => setShowPrivacy(true) },
  ];

  return (
    <div style={{ background: C.bg, position: "relative" }} className="flex flex-col h-full rounded-[32px] overflow-clip">
      <StatusBar />
      <div className="flex-1 overflow-y-auto px-6 pb-4 flex flex-col gap-6">
        <p style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 800, fontSize: 24, color: C.dark }}>{t.settings}</p>
        {/* Profile */}
        <div style={{ background: "white", borderRadius: 20, boxShadow: "0 4px 6px rgba(26,46,31,0.04)" }} className="flex items-center gap-4 p-4">
          <PontoryFace size={56} radius="28px" />
          <div className="flex-1 min-w-0">
            {editingName ? (
              <input
                autoFocus
                value={nameDraft}
                onChange={(e) => setNameDraft(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") saveEdit(); }}
                placeholder={t.namePlaceholderShort}
                style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 700, fontSize: 18, color: C.darkAlt, background: C.bg, border: `1.5px solid ${C.dark}`, borderRadius: 10, padding: "4px 10px", outline: "none", width: "100%" }}
              />
            ) : (
              <p style={{ fontFamily: "'Bricolage Grotesque', 'Noto Sans Devanagari', sans-serif", fontWeight: 700, fontSize: 18, color: C.darkAlt }}>{phoneName}</p>
            )}
            <p style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 13, color: C.muted }}>{t.profileEmail}</p>
          </div>
          <button onClick={editingName ? saveEdit : startEdit} style={{ background: C.green, borderRadius: 12, padding: "8px 12px", flexShrink: 0 }}>
            <span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: 700, fontSize: 13, color: C.dark }}>{editingName ? t.save : t.edit}</span>
          </button>
        </div>
        {/* Settings list */}
        <div className="flex flex-col gap-3">
          {items.map(({ icon, label, value, onPress }) => (
            <button key={label} onClick={onPress} style={{ background: "white", borderRadius: 16, boxShadow: "0 4px 6px rgba(26,46,31,0.04)" }} className="flex items-center justify-between p-4 w-full text-left">
              <div className="flex items-center gap-3">{icon}<span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontWeight: 600, fontSize: 15, color: C.darkAlt }}>{label}</span></div>
              <div className="flex items-center gap-2">
                {value && <span style={{ fontFamily: "Figtree, 'Noto Sans Devanagari', sans-serif", fontSize: 14, color: C.muted }}>{value}</span>}
                <ChevronRight size={16} color={C.muted} />
              </div>
            </button>
          ))}
        </div>
      </div>
      <BottomNav active="settings" onNavigate={onNavigate} />
      <div aria-hidden className="absolute inset-0 rounded-[32px] border pointer-events-none" style={{ borderColor: C.border }} />
      {showLang && <LangSheet onClose={() => setShowLang(false)} />}
      {showNotifications && <NotificationsSheet onClose={() => setShowNotifications(false)} />}
      {showAccessibility && <AccessibilitySheet onClose={() => setShowAccessibility(false)} />}
      {showPrivacy && <PrivacySheet onClose={() => setShowPrivacy(false)} />}
    </div>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState<Screen>("onboarding");
  const [phoneName, setPhoneName] = useState(DEFAULT_PHONE_NAME);
  const [lang, setLang] = useState<Lang>("ko");

  return (
    <LangCtx.Provider value={{ t: T[lang], lang, setLang }}>
      <div className="size-full flex items-center justify-center" style={{ background: "#2a3d2e", minHeight: "100vh" }}>
        <div style={{ width: 390, height: 844, position: "relative", borderRadius: 32, overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.4)" }}>
          {screen === "onboarding" && <OnboardingScreen name={phoneName} onNameChange={setPhoneName} onDone={() => setScreen("home")} onSkip={() => { setPhoneName(DEFAULT_PHONE_NAME); setScreen("home"); }} />}
          {screen === "home"       && <HomeScreen phoneName={phoneName} onNavigate={setScreen} />}
          {screen === "myphone"    && <MyPhoneScreen phoneName={phoneName} onNavigate={setScreen} />}
          {screen === "awareness"  && <AwarenessScreen onNavigate={setScreen} />}
          {screen === "retirement" && <RetirementScreen phoneName={phoneName} onBack={() => setScreen("awareness")} onKeep={() => setScreen("home")} />}
          {screen === "memories"   && <MemoriesScreen phoneName={phoneName} onNavigate={setScreen} />}
          {screen === "settings"   && <SettingsScreen phoneName={phoneName} onNameChange={setPhoneName} onNavigate={setScreen} />}
        </div>
      </div>
    </LangCtx.Provider>
  );
}
