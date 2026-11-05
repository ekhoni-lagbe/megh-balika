const menuToggle=document.getElementById('menuToggle');
const mainNav=document.getElementById('mainNav');
menuToggle.addEventListener('click',()=>mainNav.classList.toggle('open'));
mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mainNav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('themeToggle').addEventListener('click',()=>{
 document.body.classList.toggle('dark');
 document.getElementById('themeToggle').textContent=document.body.classList.contains('dark')?'☀':'☾';
});
// Search/header is intentionally NOT sticky: it scrolls away with the page.
const searchForm=document.getElementById('searchForm');
searchForm.addEventListener('submit',e=>{
 e.preventDefault();
 const q=document.getElementById('searchInput').value.trim().toLowerCase();
 const cards=[...document.querySelectorAll('[data-search]')];let hits=0;
 cards.forEach(card=>{const match=!q||card.dataset.search.toLowerCase().includes(q)||card.innerText.toLowerCase().includes(q);card.hidden=!match;if(match)hits++;});
 document.getElementById('popular').scrollIntoView({behavior:'smooth'});
 if(q&&!hits)alert('এই ডেমো হোমপেজে মেলানো পোস্ট পাওয়া যায়নি। ব্যাকএন্ড যুক্ত হলে সব প্রকাশিত লেখা সার্চে আসবে।');
});
// Hero carousel: auto-advance + finger/mouse swipe, no previous/next buttons.
const slider=document.getElementById('heroSlider');
const slides=[...slider.querySelectorAll('.hero-slide')];
const dots=[...document.querySelectorAll('#slideDots span')];
let active=0,timer=null,startX=0,startY=0;
function showSlide(index){
 active=(index+slides.length)%slides.length;
 slides.forEach((s,i)=>s.classList.toggle('active',i===active));
 dots.forEach((d,i)=>d.classList.toggle('active',i===active));
}
function startAuto(){stopAuto();timer=setInterval(()=>showSlide(active+1),5000);}
function stopAuto(){if(timer)clearInterval(timer);}
slider.addEventListener('pointerdown',e=>{startX=e.clientX;startY=e.clientY;stopAuto();});
slider.addEventListener('pointerup',e=>{
 const dx=e.clientX-startX,dy=e.clientY-startY;
 if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy))showSlide(active+(dx<0?1:-1));
 startAuto();
});
slider.addEventListener('pointercancel',startAuto);
slider.addEventListener('mouseenter',stopAuto);
slider.addEventListener('mouseleave',startAuto);
document.addEventListener('visibilitychange',()=>document.hidden?stopAuto():startAuto());
startAuto();
document.getElementById('newsletter').addEventListener('submit',e=>{e.preventDefault();alert('ধন্যবাদ! ইমেইল সাবস্ক্রিপশন চালু করতে ব্যাকএন্ড সংযোগ প্রয়োজন।');});
