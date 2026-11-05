# মেঘ বালিকা — আপডেটেড সংস্করণ ৩

## এই আপডেটে
- সার্চ ও নেভিগেশন আর sticky নয়; পেজ স্ক্রল করলে এগুলোও স্বাভাবিকভাবে উপরে চলে যাবে।
- হিরো ব্যানারে তিনটি স্লাইড আছে।
- প্রতি ৫ সেকেন্ডে ব্যানার নিজে নিজে বদলাবে।
- মোবাইলে আঙুল দিয়ে এবং কম্পিউটারে মাউস দিয়ে বাম/ডানে swipe/drag করলে স্লাইড বদলাবে।
- আগের/পরের আলাদা arrow button সরিয়ে দেওয়া হয়েছে।
- মোবাইল মেনু, ডেমো সার্চ ও ডার্ক মোড আছে।

## GitHub + Cloudflare Pages
1. GitHub-এ `megh-balika` নামে repository তৈরি করুন।
2. `index.html`, `style.css`, `app.js` তিনটি ফাইল root-এ আপলোড করুন।
3. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git।
4. repository নির্বাচন করুন; Framework preset `None`, Build command ফাঁকা, Build output directory `/` বা `.` দিন।
5. Deploy চাপুন।

## এখনো বাকি
Login/register, admin dashboard, database-এ পোস্ট সংরক্ষণ/প্রকাশ, visitor comments, likes, bookmarks এবং newsletter storage এখনো backend ছাড়া demo মাত্র। পরের ধাপে Supabase Free tier বা Cloudflare Workers + D1 দিয়ে এগুলো যুক্ত করতে হবে।
