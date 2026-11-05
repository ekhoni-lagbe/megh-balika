# মেঘ বালিকা — প্রাথমিক ওয়েবসাইট

## ফাইল
- `index.html` — রেসপনসিভ হোমপেজ, ক্যাটাগরি, ডেমো পোস্ট ও সার্চ।

## লোকালি দেখা
`index.html` ফাইলটি ব্রাউজারে খুলুন।

## GitHub Pages / Cloudflare Pages
1. GitHub-এ নতুন public repository তৈরি করুন (যেমন `megh-balika`)।
2. `index.html` আপলোড করুন।
3. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git।
4. repository নির্বাচন করুন। Framework preset: `None`; Build command ফাঁকা; Build output directory: `/` (প্রয়োজনে `.`)।
5. Deploy করুন।

## গুরুত্বপূর্ণ
এটি প্রথম ধাপের static frontend। মন্তব্য, অ্যাডমিন প্যানেল, লগইন, পোস্ট প্রকাশ, লাইক/বুকমার্ক সিঙ্ক এবং ডাটাবেস এখনও যুক্ত করা হয়নি। এগুলোর জন্য পরের ধাপে Supabase-এর Free plan বা Cloudflare Workers/D1 যুক্ত করতে হবে। বাস্তব মন্তব্য সবার কাছে দেখাতে backend আবশ্যক।
`hello@example.com`-কে নিজের যোগাযোগের ইমেইল দিয়ে বদলাবেন।
