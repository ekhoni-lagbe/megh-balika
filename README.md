# মেঘ বালিকা — নতুন ডিজাইন

ফাইল: `index.html`, `style.css`, `app.js`। তিনটি ফাইল একই ফোল্ডারে রাখুন।

## GitHub ও Cloudflare Pages-এ প্রকাশ
1. GitHub-এ `megh-balika` নামে নতুন repository তৈরি করুন।
2. এই তিনটি ফাইল repository-র root-এ upload করুন।
3. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git।
4. Repository নির্বাচন করুন; Framework preset `None`, Build command ফাঁকা, Build output directory `/` বা `.` দিন।
5. Deploy চাপুন।

## বর্তমানে কাজ করে
- মোবাইল-ফ্রেন্ডলি হোমপেজ ও মেনু
- ক্যাটাগরি নেভিগেশন
- ডেমো পোস্টে সার্চ
- ডার্ক মোড

## পরের ধাপের কাজ
এটি এখন frontend demo। বাস্তব login/register, admin dashboard, লেখা publish/edit/delete, সবার জন্য shared comments, likes, bookmarks ও newsletter storage চালাতে Supabase Free বা Cloudflare Workers + D1 backend যুক্ত করতে হবে। এগুলো এখনো সংযুক্ত নয়।

ছবি Unsplash থেকে এবং ফন্ট Google Fonts থেকে লোড হয়; নিজের অনুমতিপ্রাপ্ত ছবি দিয়ে পরে বদলানো যাবে।
