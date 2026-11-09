export const SITE = {
  name: 'মেঘ বালিকা',
  nameEn: 'Megh Balika',
  tagline: 'শব্দে ভেজা, স্বপ্নে বাঁধা',
  description: 'প্রিমিয়াম বাংলা উপন্যাস ও ধারাবাহিক গল্পের প্ল্যাটফর্ম',
} as const;

export const NAV_ITEMS = [
  { label: 'হোম', to: '/' },
  { label: 'ক্যাটাগরি', to: '/categories' },
  { label: 'সম্প্রতি পড়া', to: '/recently-read' },
  { label: 'পড়া চালিয়ে যান', to: '/continue-reading' },
  { label: 'নোটিফিকেশন', to: '/notifications' },
  { label: 'আমাদের সম্পর্কে', to: '/about' },
  { label: 'যোগাযোগ', to: '/contact' },
] as const;
