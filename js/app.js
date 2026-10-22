(()=>{
  const r=document.documentElement,btn=document.getElementById('themeBtn'),mq=matchMedia('(prefers-color-scheme: dark)');
  let saved=null;try{saved=localStorage.getItem('ms-theme')}catch{}
  if(saved==='light'||saved==='dark')r.dataset.theme=saved;
  const cur=()=>r.dataset.theme||(mq.matches?'dark':'light');
  const paint=()=>{const d=cur()==='dark';btn.textContent=d?'☀️':'🌙';btn.setAttribute('aria-label',d?'Switch to light theme':'Switch to dark theme');btn.title=btn.getAttribute('aria-label')};
  btn.addEventListener('click',()=>{const n=cur()==='dark'?'light':'dark';r.dataset.theme=n;try{localStorage.setItem('ms-theme',n)}catch{}paint()});
  mq.addEventListener?.('change',paint);
  paint();
})();
(()=>{
  // WCAG 2.2.2: looping animations need an on-page way to stop them, not only the system setting
  const r=document.documentElement,btn=document.getElementById('motionBtn');
  let off=false;try{off=localStorage.getItem('ms-motion')==='off'}catch{}
  const paint=()=>{r.classList.toggle('no-motion',off);btn.setAttribute('aria-pressed',off);btn.textContent=off?'▶︎':'⏸︎'};
  btn.addEventListener('click',()=>{off=!off;try{localStorage.setItem('ms-motion',off?'off':'on')}catch{}paint()});
  paint();
})();
/* ---------- illustrations (flat sticker style) ---------- */
const G='#3F6B1F',L='#8BA53A',P='#CFDCA3',Y='#F2B33D',Y2='#FFD873',W='#FFFFFF',D='#2C3A12',C='#FFF7E3';
const S=(vb,inner)=>`<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" stroke-linejoin="round" stroke-linecap="round">${inner}</svg>`;
const ART={
  logo:S('0 0 64 64',`<circle cx="32" cy="32" r="22" fill="${L}" stroke="${D}" stroke-width="2"/>${[0,45,90,135,180,225,270,315].map(a=>`<rect x="29" y="4" width="6" height="10" rx="1.5" fill="${L}" stroke="${D}" stroke-width="2" transform="rotate(${a} 32 32)"/>`).join('')}<circle cx="32" cy="32" r="13" fill="${C}" stroke="${D}" stroke-width="2"/><path d="M24 38l12-12 4 4-12 12h-4z" fill="${Y}" stroke="${D}" stroke-width="2"/><path d="M36 26l3-3 4 4-3 3" fill="${G}" stroke="${D}" stroke-width="2"/>`),
  calendar:S('0 0 64 64',`<rect x="8" y="12" width="44" height="42" rx="5" fill="${C}" stroke="${D}" stroke-width="2.5"/><rect x="8" y="12" width="44" height="11" rx="5" fill="${L}" stroke="${D}" stroke-width="2.5"/>${[16,24,32,40].map(x=>`<rect x="${x}" y="7" width="4" height="9" rx="2" fill="${Y}" stroke="${D}" stroke-width="2"/>`).join('')}${[0,1,2].map(r=>[0,1,2,3].map(c=>`<rect x="${14+c*9}" y="${28+r*8}" width="6" height="5" rx="1" fill="${(r==1&&c==2)?Y:G}"/>`).join('')).join('')}<path d="M44 44l4 14 3-5 5 4 2-2-4-5 6-1z" fill="${W}" stroke="${D}" stroke-width="2"/>`),
  book:S('0 0 64 64',`<rect x="10" y="12" width="44" height="30" rx="3" fill="${G}" stroke="${D}" stroke-width="2.5"/><rect x="14" y="16" width="36" height="22" rx="1" fill="${C}"/><rect x="26" y="19" width="12" height="10" rx="2" fill="${L}"/><path d="M29 24l2.5 2.5 4.5-5" fill="none" stroke="${W}" stroke-width="2.2"/><rect x="24" y="31" width="16" height="5" rx="1.5" fill="${Y}"/><path d="M4 46h56l-4 6H8z" fill="${L}" stroke="${D}" stroke-width="2.5"/><path d="M38 34l3 14 2.5-4 4.5 3.5 2-2-3.5-4.5 5-1z" fill="${W}" stroke="${D}" stroke-width="2"/>`),
  checkin:S('0 0 64 64',`<rect x="16" y="6" width="32" height="52" rx="4" fill="${L}" stroke="${D}" stroke-width="2.5"/><rect x="20" y="10" width="24" height="14" rx="2" fill="${D}"/><rect x="22" y="12" width="20" height="10" rx="1" fill="${Y2}"/><text x="32" y="19.5" font-size="5" font-family="monospace" font-weight="700" text-anchor="middle" fill="${D}">CHECK-IN</text><rect x="24" y="30" width="16" height="18" rx="2" fill="${G}" stroke="${D}" stroke-width="2"/><rect x="29" y="34" width="6" height="10" rx="1" fill="${P}"/><rect x="12" y="56" width="40" height="4" rx="2" fill="${G}"/><path d="M52 14l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5z" fill="${Y}"/>`),
  work:S('0 0 64 64',`<rect x="6" y="36" width="52" height="7" rx="2" fill="${L}" stroke="${D}" stroke-width="2.5"/><rect x="10" y="43" width="7" height="14" fill="${G}" stroke="${D}" stroke-width="2"/><rect x="47" y="43" width="7" height="14" fill="${G}" stroke="${D}" stroke-width="2"/><rect x="21" y="45" width="22" height="8" rx="1" fill="${Y}" stroke="${D}" stroke-width="2"/><path d="M12 36c0-10 6-15 13-15s13 5 13 15z" fill="${Y}" stroke="${D}" stroke-width="2.5"/><path d="M9 36h32" stroke="${D}" stroke-width="3"/><rect x="23" y="17" width="5" height="6" rx="1" fill="${Y2}" stroke="${D}" stroke-width="2"/><rect x="44" y="24" width="10" height="12" rx="1" fill="${G}" stroke="${D}" stroke-width="2"/><path d="M47 24v-6M51 24v-4" stroke="${D}" stroke-width="2.5"/><path d="M56 10l1.2 2.5 2.5 1.2-2.5 1.2-1.2 2.5-1.2-2.5-2.5-1.2 2.5-1.2z" fill="${Y}"/>`),

  /* tool icons */
  printer3d:S('0 0 64 64',`<rect x="8" y="8" width="48" height="48" rx="3" fill="${G}" stroke="${D}" stroke-width="2.5"/><rect x="13" y="13" width="38" height="36" fill="${C}"/><rect x="13" y="18" width="38" height="4" fill="${D}"/><path d="M28 22h8v6l-4 4-4-4z" fill="${Y}" stroke="${D}" stroke-width="2"/><path d="M22 47l5-12h10l5 12z" fill="${L}" stroke="${D}" stroke-width="2"/><rect x="13" y="47" width="38" height="3" fill="${D}"/>`),
  screen:S('0 0 64 64',`<path d="M22 8l-14 8 5 10 6-3v33h26V23l6 3 5-10-14-8c-2 4-6 6-10 6s-8-2-10-6z" fill="${L}" stroke="${D}" stroke-width="2.5"/><rect x="24" y="26" width="16" height="13" rx="1" fill="${Y2}" stroke="${D}" stroke-width="1.5"/><path d="M24 39l5-6 3 3 3-4 5 7z" fill="${G}"/><circle cx="36" cy="30" r="2" fill="${Y}"/>`),
  laser:S('0 0 64 64',`<rect x="6" y="18" width="52" height="30" rx="3" fill="${C}" stroke="${D}" stroke-width="2.5"/><path d="M6 18l8-10h36l8 10z" fill="${G}" stroke="${D}" stroke-width="2.5"/><rect x="12" y="24" width="40" height="18" rx="1" fill="${P}"/><path d="M32 24v12" stroke="${Y}" stroke-width="3"/><path d="M24 40h16" stroke="${D}" stroke-width="2"/><circle cx="32" cy="38" r="3" fill="${Y}"/><rect x="10" y="48" width="44" height="6" rx="1" fill="${L}" stroke="${D}" stroke-width="2"/><path d="M50 4l1.2 2.5 2.5 1.2-2.5 1.2L50 11.4l-1.2-2.5-2.5-1.2 2.5-1.2z" fill="${Y}"/>`),
  wood:S('0 0 64 64',`<rect x="6" y="36" width="52" height="10" rx="2" fill="${Y}" stroke="${D}" stroke-width="2.5"/><path d="M12 41h14M32 39h10M44 43h8" stroke="#C9871F" stroke-width="1.6"/><path d="M18 12l26 0 0 14-26 0z" fill="${L}" stroke="${D}" stroke-width="2.5"/><path d="M18 26l-4 10M44 26l4 10" stroke="${D}" stroke-width="2.5"/><path d="M22 26v4M26 26v4M30 26v4M34 26v4M38 26v4" stroke="${D}" stroke-width="1.6"/><rect x="44" y="10" width="12" height="9" rx="3" fill="${G}" stroke="${D}" stroke-width="2.5"/><rect x="10" y="46" width="6" height="10" fill="${G}" stroke="${D}" stroke-width="2"/><rect x="48" y="46" width="6" height="10" fill="${G}" stroke="${D}" stroke-width="2"/>`),
  metal:S('0 0 64 64',`<path d="M8 28h40c0 6-4 10-10 10H22l-2 8h24v8H14v-8l2-8c-5-1-8-5-8-10z" fill="${G}" stroke="${D}" stroke-width="2.5"/><path d="M48 28h10l-10 6z" fill="${G}" stroke="${D}" stroke-width="2.5"/><rect x="26" y="8" width="8" height="18" rx="1" fill="${Y}" stroke="${D}" stroke-width="2.5" transform="rotate(-30 30 17)"/><rect x="14" y="4" width="18" height="8" rx="2" fill="${P}" stroke="${D}" stroke-width="2.5" transform="rotate(-30 23 8)"/><path d="M44 14l2 4 4 2-4 2-2 4-2-4-4-2 4-2z" fill="${Y}"/>`),

  /* large tool scenes */
  scene3d:S('0 0 380 240',`<ellipse cx="190" cy="222" rx="160" ry="10" fill="${P}" opacity=".6"/><rect x="70" y="20" width="200" height="196" rx="8" fill="${G}" stroke="${W}" stroke-width="6"/><rect x="86" y="36" width="168" height="150" fill="${C}"/><rect x="86" y="56" width="168" height="10" fill="${D}"/><path d="M156 66h28v20l-14 12-14-12z" fill="${Y}" stroke="${D}" stroke-width="3"/><path d="M170 98v8" stroke="${Y}" stroke-width="4"/><path d="M118 186l20-58h64l20 58z" fill="${L}" stroke="${D}" stroke-width="3"/><path d="M128 158h84M134 140h72" stroke="${G}" stroke-width="2"/><rect x="86" y="186" width="168" height="10" fill="${D}"/><rect x="278" y="120" width="60" height="70" rx="6" fill="${Y}" stroke="${W}" stroke-width="6"/><path d="M290 140h36M290 156h36M290 172h24" stroke="${D}" stroke-width="4"/><circle cx="308" cy="98" r="18" fill="${L}" stroke="${W}" stroke-width="6"/><path d="M300 98l6 6 10-12" fill="none" stroke="${W}" stroke-width="4"/>`),
  sceneScreen:S('0 0 380 240',`<rect x="20" y="40" width="160" height="110" rx="8" fill="${G}" stroke="${W}" stroke-width="6"/><rect x="32" y="52" width="136" height="86" fill="${C}"/><rect x="38" y="58" width="32" height="74" fill="${P}"/><rect x="42" y="64" width="24" height="5" rx="2" fill="${G}"/><rect x="42" y="74" width="24" height="5" rx="2" fill="${Y}"/><rect x="78" y="62" width="80" height="54" fill="${Y2}"/><path d="M78 116l26-30 16 16 14-12 24 26z" fill="${G}"/><circle cx="142" cy="78" r="9" fill="${Y}"/><rect x="88" y="150" width="24" height="18" fill="${G}"/><path d="M10 168h180l-8 18H18z" fill="${L}" stroke="${W}" stroke-width="6"/><rect x="50" y="172" width="90" height="8" rx="2" fill="${C}"/><path d="M196 96h30v-16l28 30-28 30v-16h-30z" fill="${Y}" stroke="${W}" stroke-width="5"/><path d="M286 56l-28 14 10 26 14-6v94h72v-94l14 6 10-26-28-14c-6 10-14 14-32 14s-26-4-32-14z" fill="${L}" stroke="${W}" stroke-width="6"/><path d="M308 26a10 10 0 1 1 10 10v10" fill="none" stroke="${G}" stroke-width="5"/><path d="M280 66L318 46L356 66" fill="none" stroke="${Y}" stroke-width="6"/><rect x="292" y="110" width="52" height="40" fill="${Y2}"/><path d="M292 150l18-22 12 12 8-8 14 18z" fill="${G}"/><circle cx="332" cy="120" r="7" fill="${Y}"/>`),
  sceneLaser:S('0 0 380 240',`<ellipse cx="190" cy="222" rx="170" ry="10" fill="${P}" opacity=".6"/><rect x="40" y="80" width="300" height="130" rx="8" fill="${C}" stroke="${W}" stroke-width="6"/><path d="M40 80l30-50h240l30 50z" fill="${G}" stroke="${W}" stroke-width="6"/><path d="M80 40h220l18 30H62z" fill="${D}" opacity=".35"/><rect x="60" y="96" width="260" height="92" rx="3" fill="${P}"/><rect x="60" y="128" width="260" height="8" fill="${G}"/><rect x="180" y="118" width="22" height="28" rx="3" fill="${Y}" stroke="${D}" stroke-width="3"/><path d="M191 146v20" stroke="#E5532E" stroke-width="3"/><path d="M110 168c20-14 40-14 60 0s40 14 60 0 40-14 60 0" fill="none" stroke="${G}" stroke-width="3" stroke-dasharray="6 5"/><circle cx="191" cy="168" r="5" fill="${Y}"/><rect x="60" y="188" width="260" height="10" fill="${L}"/>`),
  sceneWood:S('0 0 380 240',`<ellipse cx="190" cy="224" rx="170" ry="10" fill="${P}" opacity=".6"/><rect x="40" y="120" width="300" height="24" rx="4" fill="${L}" stroke="${W}" stroke-width="6"/><rect x="60" y="144" width="20" height="74" fill="${G}"/><rect x="300" y="144" width="20" height="74" fill="${G}"/><rect x="90" y="88" width="170" height="32" rx="3" fill="${Y}" stroke="${D}" stroke-width="3"/><path d="M100 100h40M160 96h30M200 108h50M120 112h30" stroke="#C9871F" stroke-width="2.5"/><path d="M200 20l70 58-14 16-70-58z" fill="${C}" stroke="${D}" stroke-width="3"/><path d="M196 38l66 54" stroke="${D}" stroke-width="2" stroke-dasharray="4 4"/><rect x="176" y="10" width="40" height="22" rx="8" fill="${G}" stroke="${W}" stroke-width="5" transform="rotate(40 196 21)"/><path d="M290 70l20 46" stroke="${D}" stroke-width="8"/><rect x="274" y="44" width="40" height="30" rx="4" fill="${G}" stroke="${W}" stroke-width="5"/><path d="M80 80l1.8 4 4 1.8-4 1.8L80 91.6l-1.8-4-4-1.8 4-1.8z" fill="${Y}"/>`),
  sceneMetal:S('0 0 380 240',`<ellipse cx="190" cy="226" rx="160" ry="10" fill="${P}" opacity=".6"/><path d="M70 110h200c0 26-20 40-46 40h-70l-10 36h100v32H96v-32l10-36c-22-4-36-20-36-40z" fill="${G}" stroke="${W}" stroke-width="6"/><path d="M270 110h50l-50 26z" fill="${G}" stroke="${W}" stroke-width="6"/><rect x="130" y="90" width="80" height="20" rx="3" fill="${Y}" stroke="${D}" stroke-width="3"/><g transform="rotate(-35 210 50)"><rect x="200" y="40" width="16" height="80" rx="3" fill="${Y}" stroke="${W}" stroke-width="5"/><rect x="176" y="20" width="64" height="30" rx="5" fill="${P}" stroke="${W}" stroke-width="5"/></g><path d="M110 70l3 7 7 3-7 3-3 7-3-7-7-3 7-3zM250 140l2.5 5 5 2.5-5 2.5-2.5 5-2.5-5-5-2.5 5-2.5zM140 60l2 4 4 2-4 2-2 4-2-4-4-2 4-2z" fill="${Y}"/>`),

  /* project art */
  trophy:S('0 0 120 120',`<path d="M36 18h48v22c0 16-10 28-24 28S36 56 36 40z" fill="${Y}" stroke="${D}" stroke-width="3"/><path d="M36 26H20c0 16 8 22 18 22M84 26h16c0 16-8 22-18 22" fill="none" stroke="${D}" stroke-width="3"/><rect x="54" y="68" width="12" height="16" fill="${Y}" stroke="${D}" stroke-width="3"/><rect x="38" y="84" width="44" height="18" rx="2" fill="${G}" stroke="${D}" stroke-width="3"/><path d="M60 28l3.5 7 7.5 1-5.5 5 1.5 7.5-7-4-7 4 1.5-7.5-5.5-5 7.5-1z" fill="${W}"/><path d="M48 90h24" stroke="${P}" stroke-width="3"/>`),
  tote:S('0 0 120 120',`<path d="M42 36c0-18 36-18 36 0" fill="none" stroke="${D}" stroke-width="5"/><path d="M24 36h72l-6 70H30z" fill="${C}" stroke="${D}" stroke-width="3"/><rect x="38" y="52" width="44" height="34" fill="${L}"/><path d="M38 86l14-16 10 8 8-8 12 16z" fill="${G}"/><circle cx="70" cy="62" r="5" fill="${Y}"/>`),
  lamp:S('0 0 120 120',`<path d="M60 22l30 30H30z" fill="${Y}" stroke="${D}" stroke-width="3"/><path d="M38 52c4 6 40 6 44 0" fill="${Y2}" stroke="${D}" stroke-width="3"/>${[34,44,54,64,74].map(x=>`<circle cx="${x+6}" cy="40" r="2.5" fill="${D}"/>`).join('')}<rect x="57" y="56" width="6" height="40" fill="${G}" stroke="${D}" stroke-width="2"/><rect x="36" y="96" width="48" height="10" rx="3" fill="${L}" stroke="${D}" stroke-width="3"/><path d="M48 76l-12 8M72 76l12 8" stroke="${Y}" stroke-width="3"/>`),
  stool:S('0 0 120 120',`<ellipse cx="60" cy="34" rx="36" ry="12" fill="${Y}" stroke="${D}" stroke-width="3"/><path d="M24 34v8c0 6 16 12 36 12s36-6 36-12v-8" fill="#E0A033" stroke="${D}" stroke-width="3"/><path d="M36 50l-10 54M84 50l10 54M60 54v52" stroke="${G}" stroke-width="7"/><path d="M32 80h56" stroke="${L}" stroke-width="5"/><path d="M44 30h16M66 36h12" stroke="#C9871F" stroke-width="2"/>`),
  keychain:S('0 0 120 120',`<circle cx="40" cy="30" r="12" fill="none" stroke="${D}" stroke-width="5"/><rect x="34" y="40" width="54" height="54" rx="10" fill="${L}" stroke="${D}" stroke-width="3" transform="rotate(12 61 67)"/><path d="M48 58l26 20M74 58L48 78" stroke="${Y}" stroke-width="6"/><circle cx="61" cy="68" r="6" fill="${W}" stroke="${D}" stroke-width="2"/>`),
  phone:S('0 0 120 120',`<rect x="22" y="78" width="76" height="14" rx="3" fill="${G}" stroke="${D}" stroke-width="3"/><path d="M34 78l12-48h28l12 48z" fill="${L}" stroke="${D}" stroke-width="3"/><rect x="48" y="22" width="24" height="44" rx="4" fill="${D}" transform="rotate(-10 60 44)"/><rect x="51" y="26" width="18" height="34" rx="2" fill="${Y2}" transform="rotate(-10 60 44)"/>`),
  sign:S('0 0 120 120',`<path d="M60 14v14" stroke="${D}" stroke-width="3"/><path d="M40 28l20-14 20 14" fill="none" stroke="${D}" stroke-width="3"/><rect x="14" y="28" width="92" height="60" rx="6" fill="${G}" stroke="${D}" stroke-width="3"/><rect x="22" y="36" width="76" height="44" rx="3" fill="${Y}"/><text x="60" y="56" font-family="monospace" font-weight="700" font-size="12" text-anchor="middle" fill="${D}">OPEN</text><text x="60" y="71" font-family="monospace" font-size="8" text-anchor="middle" fill="${D}">STUDIO 3B</text>`),
  hoodie:S('0 0 120 120',`<path d="M42 20c4-8 32-8 36 0l20 12 10 40-14 4-4-20v52H30V56l-4 20-14-4 10-40z" fill="${L}" stroke="${D}" stroke-width="3"/><path d="M42 20c0 14 36 14 36 0" fill="${G}" stroke="${D}" stroke-width="3"/><path d="M54 34v12M66 34v12" stroke="${W}" stroke-width="2"/><rect x="42" y="56" width="36" height="22" rx="2" fill="${Y2}"/><text x="60" y="71" font-family="monospace" font-weight="700" font-size="10" text-anchor="middle" fill="${D}">BAND</text><path d="M44 92h32" stroke="${G}" stroke-width="3"/>`),
  bracket:S('0 0 120 120',`<path d="M22 24h20v52h56v20H22z" fill="${P}" stroke="${D}" stroke-width="3"/><circle cx="32" cy="40" r="4" fill="${D}"/><circle cx="32" cy="60" r="4" fill="${D}"/><circle cx="62" cy="86" r="4" fill="${D}"/><circle cx="84" cy="86" r="4" fill="${D}"/><path d="M42 76c10 0 18-4 24-14" fill="none" stroke="${Y}" stroke-width="5"/><rect x="72" y="20" width="26" height="40" rx="4" fill="${G}" stroke="${D}" stroke-width="3"/><path d="M78 30h14M78 40h14M78 50h10" stroke="${Y}" stroke-width="3"/>`)
};

/* ---------- data ---------- */
const TOOLS=[
 {id:'3d',name:'3D Printers',icon:'printer3d',scene:'scene3d',rate:4,units:'4 Prusa MK4 printers',
  intro:'Print your projects with precision and creativity. Create prototypes, custom parts, detailed models, and unique designs using our professional 3D printing equipment.',
  make:['Prototypes and product mock-ups','Custom trophies, awards and figurines','Replacement parts and phone stands','Cosplay props and miniatures','Architecture and school models'],
  training:'A 30-minute intro covers loading filament, slicing a model in PrusaSlicer, and starting and watching a print safely.',
  materials:['PLA in 8 colors (included for prints under 50 g)','PETG for stronger parts','TPU flexible filament on request'],
  cost:'$4/hour of booked time plus $0.05 per gram over 50 g. A palm-sized trophy is about $3–6 in material.',
  how:['Model your part in Tinkercad, Fusion or download one from Printables.','Export it as .STL or .3MF and bring it on a USB stick.','Slice it at the station with staff help on your first visit.','Start the print. Long prints can finish after your slot; pick up the next day.'],
  links:[['Prusa Knowledge Base','help.prusa3d.com','https://help.prusa3d.com/'],['Tinkercad lessons for beginners','tinkercad.com','https://www.tinkercad.com/learn'],['Free models to print','printables.com','https://www.printables.com/']]},
 {id:'screen',name:'Screen Printing',icon:'screen',scene:'sceneScreen',rate:6,units:'2 four-color presses',
  intro:'Create custom prints on fabric and paper using professional screen printing tools. Turn your artwork into T-shirts, posters, tote bags, and other creative products.',
  make:['Custom T-shirts and hoodies','Tote bags and fabric accessories','Posters and art prints','Band or event merchandise','Custom designs for small brands','Limited edition prints'],
  training:'Before using the screen printing station, complete a short introduction workshop. You will learn how to prepare a screen, apply ink, and properly print your design. Estimated training time: 30–45 minutes.',
  materials:['Screen frames','Water-based printing inks','Squeegees','Cleaning supplies','Bring your own shirts, hoodies or bags'],
  cost:'Basic prints usually cost $5–$15 depending on the number of prints and ink colors used. Printing multiple items with the same design reduces the cost per item.',
  how:['Prepare your artwork in one color per layer.','Reserve a time slot online.','Set up your screen and ink.','Print your design and allow time for drying.'],
  links:[['Screen printing basics','speedballart.com','https://www.speedballart.com/'],['Printmaking projects on Instructables','instructables.com','https://www.instructables.com/'],['Preparing artwork in Inkscape','inkscape.org','https://inkscape.org/learn/']]},
 {id:'laser',name:'Laser Cutters',icon:'laser',scene:'sceneLaser',rate:8,units:'2 laser cutters, 24 × 18 in bed',
  intro:'Design, cut, and engrave with precision. Our laser cutters let you create custom shapes, detailed patterns, and professional-quality projects from wood, acrylic, leather and card.',
  make:['Signs, logos and name plates','Jewelry and keychains','Boxes and phone stands','Engraved gifts and coasters','Stencils for screen printing'],
  training:'A 30-minute intro covers safe materials, focus height, cut vs. engrave settings, and the fire-watch rule: never leave a running laser.',
  materials:['3 mm birch plywood','3 mm acrylic in 6 colors','Cardboard and craft paper','Leather offcuts','No PVC or vinyl, ever (toxic fumes)'],
  cost:'$8/hour of booked time. A 12 × 12 in plywood sheet is $3, acrylic $6.',
  how:['Draw your design as vectors in Inkscape or Illustrator.','Red hairline = cut, black fill = engrave. Export as .SVG or .PDF.','Run a small test cut to check power and speed.','Cut your piece and stay with the machine until it finishes.'],
  links:[['Laser cutting guide & settings','support.glowforge.com','https://support.glowforge.com/'],['Inkscape tutorials','inkscape.org','https://inkscape.org/learn/'],['Box generator for laser cutting','festi.info','https://www.festi.info/boxes.py/']]},
 {id:'wood',name:'Wood Workshop',icon:'wood',scene:'sceneWood',rate:5,units:'Table saw, bandsaw, drill press, hand tools',
  intro:'Cut, shape, and build with professional woodworking tools. Create custom furniture, prototypes, and handcrafted projects in a safe and creative environment.',
  make:['Stools, shelves and small furniture','Cutting boards and serving trays','Skateboard decks','Picture frames and planters','Prototypes for product design'],
  training:'Hand tools need no training. Power tools need the 45-minute shop safety session, and the table saw requires a staff sign-off.',
  materials:['Pine and plywood offcuts free','Oak, walnut and maple sold by the board foot','Glue, screws, sandpaper and finishes included'],
  cost:'$5/hour of booked time. Offcuts are free; hardwood from $8 per board foot.',
  how:['Sketch your piece with measurements.','Make a cut list and choose your wood.','Cut, drill and assemble with a staff member nearby.','Sand and finish. Finishes need 24 hours to dry on our rack.'],
  links:[['Woodworking projects on Instructables','instructables.com','https://www.instructables.com/workshop/'],['Woodworking basics','woodmagazine.com','https://www.woodmagazine.com/'],['Table saw safety (OSHA)','osha.gov','https://www.osha.gov/etools/machine-guarding']]},
 {id:'metal',name:'Metal Workshop',icon:'metal',scene:'sceneMetal',rate:7,units:'MIG welder, plasma cutter, metal lathe',
  intro:'Work with metal using specialized tools and equipment. Create strong, precise, and custom pieces for technical or artistic projects.',
  make:['Brackets, frames and stands','Metal sculptures and garden art','Bike and car parts','Fire pits and BBQ tools','Jewelry from brass and copper'],
  training:'A 60-minute session covers welding safety, protective gear, and a first practice weld. The lathe needs a separate sign-off.',
  materials:['Mild steel bar, tube and sheet','Aluminum sheet','Brass and copper offcuts','Welding helmets, gloves and jackets provided'],
  cost:'$7/hour of booked time plus material at cost. Welding wire and gas are included.',
  how:['Draw your part with dimensions.','Cut stock to size with the bandsaw or plasma cutter.','Weld or bolt together with staff supervision.','Grind, sand and paint or clear-coat.'],
  links:[['Welding how-to articles','millerwelds.com','https://www.millerwelds.com/resources/article-library'],['Welding resource center','lincolnelectric.com','https://www.lincolnelectric.com/en/welding-and-cutting-resource-center'],['Metalworking projects','instructables.com','https://www.instructables.com/workshop/']]}
];
const TOOL=Object.fromEntries(TOOLS.map(t=>[t.id,t]));

const PROJECTS=[
 {id:'trophy',art:'trophy',tool:'3d',title:'Custom Robotics Trophy',by:'Max, high school senior',hours:6,cost:'$9',level:'Beginner',
  desc:'A school robotics competition trophy designed in Tinkercad and printed in gold PLA instead of buying a generic one.',
  steps:['Sketched the trophy shape and logo','Modeled it in Tinkercad in two parts','Printed the cup and base separately (5 h)','Glued, sanded and added a laser-cut name plate']},
 {id:'tote',art:'tote',tool:'screen',title:'Farmers Market Tote Bags',by:'Small-brand starter project',hours:3,cost:'$42 for 20 bags',level:'Beginner',
  desc:'A run of 20 two-color tote bags for a local farmers market stall. Same screens reused for every bag.',
  steps:['Separated the artwork into two colors','Burned two screens','Printed 20 bags in one session','Heat-set the ink before handing them over']},
 {id:'hoodie',art:'hoodie',tool:'screen',title:'Band Merch Hoodies',by:'College music club',hours:4,cost:'$60 for 15 hoodies',level:'Intermediate',
  desc:'Front and back prints for a student band\'s first tour. Black ink on olive hoodies.',
  steps:['Vectorized the band logo','Printed test sheets on paper first','Printed fronts, then backs after drying','Folded and tagged for sale']},
 {id:'lamp',art:'lamp',tool:'laser',title:'Pattern-Cut Desk Lamp',by:'Design student',hours:3,cost:'$14',level:'Intermediate',
  desc:'A flat-pack plywood lamp shade with a geometric pattern that throws shadows on the wall.',
  steps:['Generated the pattern in Inkscape','Test-cut one panel on card','Cut four plywood panels','Assembled with finger joints and a LED bulb kit']},
 {id:'keychain',art:'keychain',tool:'laser',title:'Engraved Club Keychains',by:'Student council',hours:1,cost:'$8 for 30',level:'Beginner',
  desc:'Thirty acrylic keychains engraved with the school logo, cut from a single sheet.',
  steps:['Laid out 30 shapes on one 12 × 12 in sheet','Engraved first, then cut','Peeled the protective film','Added split rings']},
 {id:'sign',art:'sign',tool:'laser',title:'Studio Door Sign',by:'Art studio tenant',hours:2,cost:'$11',level:'Beginner',
  desc:'A layered sign with an engraved acrylic face on a plywood backing.',
  steps:['Designed the lettering','Cut the plywood back and acrylic face','Engraved the text','Glued and mounted with brass screws']},
 {id:'stool',art:'stool',tool:'wood',title:'Three-Leg Oak Stool',by:'First-time woodworker',hours:8,cost:'$38',level:'Intermediate',
  desc:'A sturdy round-seat stool built over four sessions, finished with hard wax oil.',
  steps:['Cut the round seat on the bandsaw','Drilled angled leg holes on the drill press','Turned the legs and wedged them in','Sanded to 220 grit and oiled']},
 {id:'phone',art:'phone',tool:'wood',title:'Walnut Phone Dock',by:'Product design class',hours:2,cost:'$12',level:'Beginner',
  desc:'A minimal desk dock with a routed cable channel, made from a walnut offcut.',
  steps:['Marked the angle and slot','Cut the slot on the table saw with staff','Routed the cable channel','Finished with oil']},
 {id:'bracket',art:'bracket',tool:'metal',title:'Steel Wall Shelf Brackets',by:'Apartment renovation',hours:3,cost:'$16 for a pair',level:'Intermediate',
  desc:'Two welded L-brackets with a gusset, powder-coated black, for a floating oak shelf.',
  steps:['Cut flat bar to length','Drilled mounting holes','Welded the L and gusset','Ground the welds and painted']}
];

const SPARK=(pos,delay)=>`<span class="spark" style="${pos};animation-delay:${delay}s" aria-hidden="true"><svg viewBox="0 0 10 10"><path d="M5 0l1.3 3.7L10 5 6.3 6.3 5 10 3.7 6.3 0 5l3.7-1.3z"/></svg></span>`;
const STEPS=[
 ['calendar','Browse Calendar','See free slots for every machine','book','Browse','Free slots'],
 ['book','Book Your Time','Reserve up to 2 hours online','book','Book','Up to 2 hours'],
 ['checkin','Check In','Show your name at the kiosk','guides','Check In','At the kiosk'],
 ['work','Get to Work','Make it with staff nearby','projects','Get to Work','Staff nearby']
];

/* ---------- helpers ---------- */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const store={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch{return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch{}}};

/* ---------- static renders ---------- */
$('#logoArt').innerHTML=ART.logo;
(function cycle(){
  // open rectangle: 1 top-left → 2 top-right → 3 bottom-right → 4 bottom-left; no line back to 1
  const VW=600,VH=500,PTS=[[90,80],[510,80],[510,420],[90,420]],side=['left','right','right','left'],GAP=62;
  const seg=(a,b)=>{const dx=Math.sign(b[0]-a[0]),dy=Math.sign(b[1]-a[1]);return `<path class="flow" d="M${a[0]+dx*GAP} ${a[1]+dy*GAP}L${b[0]-dx*GAP} ${b[1]-dy*GAP}" marker-end="url(#tip)"/>`};
  const lines=[0,1,2].map(i=>seg(PTS[i],PTS[i+1])).join('');
  $('#cycle').insertAdjacentHTML('afterbegin',S(`0 0 ${VW} ${VH}`,`<defs><marker id="tip" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path class="tip" d="M0 0L10 5L0 10L3 5z"/></marker></defs>${lines}`).replace('<svg','<svg class="ring"')+
    STEPS.map((s,i)=>`<a class="cycle-step s-${side[i]} r-${i<2?'top':'bottom'}" href="#${s[3]}" style="left:${(PTS[i][0]/VW*100).toFixed(2)}%;top:${(PTS[i][1]/VH*100).toFixed(2)}%"><span class="ic">${ART[s[0]]}${SPARK(i%2?'top:4px;left:2px':'top:2px;right:2px',i*.6)}</span><span class="cl"><span class="no">${i+1}</span><span class="full">${s[1]}<small>${s[2]}</small></span><span class="short">${s[4]}<small>${s[5]}</small></span></span></a>`).join(''));
})();

const guideLink=l=>`<a href="${l[2]}" target="_blank" rel="noopener">${esc(l[0])}<span>${l[1]} ↗<span class="sr"> (opens in new tab)</span></span></a>`;
// lv: heading level of the card title (3 under a home-page h2, 2 directly under a view's h1)
function toolCard(t,lv){
  const sub=`h${lv+1} class="tc-sub"`,end=`</h${lv+1}>`;
  return `<article class="tool-card">
    <h${lv} class="tc-h">${t.name}</h${lv}>
    <div class="tool-art">${ART[t.scene]}${SPARK('top:6%;left:14%',0)}${SPARK('top:18%;right:12%',1.1)}${SPARK('bottom:16%;left:46%',.5)}</div>
    <div class="tool-meta"><span class="chip">$${t.rate} / hour</span><span class="chip">${esc(t.units)}</span><span class="chip">Training required</span></div>
    <div class="tool-body">
      <p>${esc(t.intro)}</p>
      <div class="two">
        <div><${sub}>What you can make:${end}<ul>${t.make.map(m=>`<li>${esc(m)}</li>`).join('')}</ul></div>
        <div><${sub}>Materials:${end}<ul>${t.materials.map(m=>`<li>${esc(m)}</li>`).join('')}</ul></div>
      </div>
      <div><${sub}>Training:${end}<p>${esc(t.training)}</p></div>
      <div><${sub}>Estimated Cost:${end}<p>${esc(t.cost)}</p></div>
      <div><${sub}>How It Works${end}<ol>${t.how.map(m=>`<li>${esc(m)}</li>`).join('')}</ol></div>
      <div><${sub}>Instructions &amp; tutorials${end}<div class="guide-links">${t.links.map(guideLink).join('')}</div></div>
      <div class="tool-cta"><a class="btn btn-green" href="#book" data-book="${t.id}">Book Your Time</a><a class="btn btn-ghost" href="#projects" data-filter="${t.id}">See ${t.name.toLowerCase()} projects</a></div>
    </div></article>`;
}
let activeTool=store.get('ms-tool','screen'); if(!TOOL[activeTool]) activeTool='screen';
function renderExplorers(){
  document.querySelectorAll('[data-explorer]').forEach(el=>{
    const ex=el.dataset.explorer;
    if(!el.querySelector('.tool-tabs')){
      el.innerHTML=`<div class="tabs-wrap at-start"><button type="button" class="tabs-nav prev" aria-label="Previous workshops">‹</button><div class="tool-tabs" role="tablist" aria-label="Workshops">${TOOLS.map(t=>`<button type="button" class="tool-tab" role="tab" id="tab-${ex}-${t.id}" aria-controls="panel-${ex}" data-tool="${t.id}">${ART[t.icon]}${t.name}</button>`).join('')}</div><button type="button" class="tabs-nav next" aria-label="More workshops">›</button><div class="tab-dots" aria-hidden="true">${TOOLS.map(()=>'<i></i>').join('')}</div></div><div class="tool-card-slot" role="tabpanel" id="panel-${ex}"></div>`;
      const wrap=el.querySelector('.tabs-wrap'),tabs=el.querySelector('.tool-tabs');
      const edges=()=>{wrap.classList.toggle('at-start',tabs.scrollLeft<4);wrap.classList.toggle('at-end',tabs.scrollLeft+tabs.clientWidth>=tabs.scrollWidth-4)};
      tabs.addEventListener('scroll',edges,{passive:true});addEventListener('resize',edges);
      wrap.querySelector('.prev').onclick=()=>tabs.scrollBy({left:-tabs.clientWidth*.7,behavior:'smooth'});
      wrap.querySelector('.next').onclick=()=>tabs.scrollBy({left:tabs.clientWidth*.7,behavior:'smooth'});
      requestAnimationFrame(edges);
    }
    const tabs=el.querySelector('.tool-tabs');let sel=null;
    tabs.querySelectorAll('.tool-tab').forEach(b=>{const on=b.dataset.tool===activeTool;b.setAttribute('aria-selected',on);b.tabIndex=on?0:-1;if(on)sel=b});
    el.querySelectorAll('.tab-dots i').forEach((d,i)=>d.classList.toggle('on',TOOLS[i].id===activeTool));
    const panel=el.querySelector('.tool-card-slot');
    panel.innerHTML=toolCard(TOOL[activeTool],ex==='home'?3:2);panel.setAttribute('aria-labelledby',sel.id);
    if(sel&&tabs.scrollWidth>tabs.clientWidth) tabs.scrollTo({left:sel.offsetLeft-(tabs.clientWidth-sel.offsetWidth)/2,behavior:'smooth'});
  });
}
document.addEventListener('click',e=>{
  const tab=e.target.closest('.tool-tab'); if(tab){activeTool=tab.dataset.tool;store.set('ms-tool',activeTool);renderExplorers();return}
  const b=e.target.closest('[data-book]'); if(b){booking.tool=b.dataset.book;booking.slots=[];}
  const f=e.target.closest('[data-filter]'); if(f){projFilter=f.dataset.filter;renderProjects();}
  const p=e.target.closest('.pcard'); if(p) openProject(p.dataset.id);
});
// tabs pattern: arrow keys move between workshops, Tab jumps into the card
document.addEventListener('keydown',e=>{
  const tab=e.target.closest?.('.tool-tab'); if(!tab) return;
  const list=[...tab.parentElement.children],i=list.indexOf(tab),step={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1}[e.key];
  const n=e.key==='Home'?0:e.key==='End'?list.length-1:step?(i+step+list.length)%list.length:-1;
  if(n<0) return;
  e.preventDefault();activeTool=list[n].dataset.tool;store.set('ms-tool',activeTool);renderExplorers();list[n].focus();
});

function pcard(p,lv=2){return `<button class="pcard" data-id="${p.id}"><div class="art">${ART[p.art]}</div><div class="body"><span class="tag">${TOOL[p.tool].name}</span><h${lv} class="pc-h">${esc(p.title)}</h${lv}><p>${esc(p.desc)}</p><div class="pmeta"><span>${p.hours} h · ${p.level}</span><span>${esc(p.cost)}</span></div></div></button>`}
$('#featured').innerHTML=['trophy','hoodie','lamp'].map(id=>pcard(PROJECTS.find(p=>p.id===id),3)).join('');
let projFilter='all';
function renderProjects(){
  $('#filters').innerHTML=[['all','All'],...TOOLS.map(t=>[t.id,t.name])].map(([id,n])=>`<button class="filter" aria-pressed="${projFilter===id}" data-f="${id}">${n}</button>`).join('');
  const list=PROJECTS.filter(p=>projFilter==='all'||p.tool===projFilter);
  $('#projectGrid').innerHTML=list.length?list.map(p=>pcard(p)).join(''):'<p class="lead">No projects yet for this workshop.</p>';
}
$('#filters').addEventListener('click',e=>{const b=e.target.closest('[data-f]');if(b){projFilter=b.dataset.f;renderProjects()}});
function openProject(id){
  const p=PROJECTS.find(x=>x.id===id); if(!p) return; const t=TOOL[p.tool];
  $('#dlgContent').innerHTML=`<button class="dlg-close" aria-label="Close" onclick="projDlg.close()">×</button><div class="dlg-art">${ART[p.art]}</div><div class="dlg-body"><span class="tag">${t.name} · ${p.level}</span><h3 id="dlgTitle" style="font-size:22px">${esc(p.title)}</h3><p>${esc(p.desc)}</p><div class="tool-meta" style="margin:0"><span class="chip">${p.hours} hours</span><span class="chip">${esc(p.cost)} materials</span><span class="chip">${esc(p.by)}</span></div><div><h4 style="font-size:15px;margin-bottom:8px">How it was made</h4><ol>${p.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol></div><div class="tool-cta"><a class="btn btn-green" href="#book" data-book="${t.id}" onclick="projDlg.close()">Book the ${t.name.toLowerCase()}</a><a class="btn btn-ghost" href="#tools" onclick="projDlg.close();activeTool='${t.id}';renderExplorers()">Read the guide</a></div></div>`;
  projDlg.showModal();
}
$('#guidesGrid').innerHTML=TOOLS.map(t=>`<article class="gcard"><header>${ART[t.icon]}<h3>${t.name}</h3></header><p style="color:var(--muted);font-size:14px">${esc(t.training)}</p><div class="guide-links">${t.links.map(guideLink).join('')}</div><a href="#tools" style="font-size:14px" onclick="activeTool='${t.id}';renderExplorers()">Full station guide →</a></article>`).join('');

/* ---------- router ---------- */
const ROUTES=['home','tools','guides','projects','book'];
const RV_SEL='.band .h2,.band .lead,.explorer,.stats,.safety,.pcard,.gcard,.filters,.book-grid';
const rvIO=('IntersectionObserver' in window)?new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target;el.classList.add('in');rvIO.unobserve(el);setTimeout(()=>{el.classList.remove('pre','in');el.style.transitionDelay=''},1200)}),{rootMargin:'0px 0px -6% 0px'}):null;
function prepReveal(root){
  if(!rvIO||!root||matchMedia('(prefers-reduced-motion: reduce)').matches||document.documentElement.classList.contains('no-motion'))return;
  root.querySelectorAll(RV_SEL).forEach(el=>{
    if(el.dataset.rv)return;const r=el.getBoundingClientRect();
    if(!r.height||r.top<innerHeight*.9)return;
    el.dataset.rv=1;const sib=el.parentElement?[...el.parentElement.children].indexOf(el):0;
    if(el.matches('.pcard,.gcard'))el.style.transitionDelay=(sib%3)*90+'ms';
    el.classList.add('pre');rvIO.observe(el);
  });
}
function route(e){
  const r=ROUTES.includes(location.hash.slice(1))?location.hash.slice(1):'home';
  document.querySelectorAll('[data-route]').forEach(el=>el.hidden=el.dataset.route!==r);
  const h1=document.querySelector(`[data-route="${r}"] h1`);
  document.title=r==='home'?'Maker Space':`${h1.textContent} · Maker Space`;
  // on navigation (not first load) move focus to the new view's heading so screen readers announce it
  if(e) h1.focus({preventScroll:true});
  document.querySelectorAll('.nav a').forEach(a=>{if(a.getAttribute('href')==='#'+r)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
  $('#nav').classList.remove('open');$('#menuBtn').setAttribute('aria-expanded','false');
  if(r==='book') renderBooking();
  window.scrollTo({top:0,behavior:'instant'});
  requestAnimationFrame(()=>prepReveal(document.querySelector(`[data-route="${r}"]`)));
}
addEventListener('hashchange',route);
$('#menuBtn').addEventListener('click',()=>{const o=$('#nav').classList.toggle('open');$('#menuBtn').setAttribute('aria-expanded',o)});

/* ---------- booking ---------- */
const TIMES=[];for(let h=10;h<18;h++){TIMES.push(`${String(h).padStart(2,'0')}:00`,`${String(h).padStart(2,'0')}:30`)}
const fmtTime=t=>{let [h,m]=t.split(':').map(Number);const ap=h>=12?'PM':'AM';h=h%12||12;return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')} ${ap}`};
const iso=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const DAYS=[];{const d=new Date();for(let i=0;i<14;i++){const x=new Date(d.getFullYear(),d.getMonth(),d.getDate()+i);DAYS.push(x)}}
const firstOpen=DAYS.find(d=>d.getDay()!==0&&!(iso(d)===iso(new Date())&&new Date().getHours()>=17));
const booking={tool:'screen',date:iso(firstOpen||DAYS[1]),slots:[],busy:false};
const slotId=(date,tool,time)=>`${date}_${tool}_${time.replace(':','')}`;

let db=null,uid=null,shared=false,canWrite=true;
const taken=new Map();   // slotId -> {by}
let mine=[];             // my bookings
(async()=>{
  if(!window.claude?.use) return renderBooking();
  try{
    const [d,u]=await Promise.all([claude.use('db'),claude.use('user')]);
    if(!d){renderBooking();return}
    db=d;shared=true;
    if(u){uid=await u.id();const cw=await u.can?.('data.write');if(cw===false)canWrite=false}
    db.collection('slots').where('date','>=',iso(new Date())).onSnapshot(s=>{taken.clear();s.docs.forEach(x=>{const v=x.data();if(v&&v.by!==undefined)taken.set(x.id,v)});renderBooking()},()=>{});
    if(uid) db.collection('data/users/'+uid).onSnapshot(s=>{mine=s.docs.map(x=>({id:x.id,...x.data()})).filter(b=>b.date>=iso(new Date())).sort((a,b)=>(a.date+a.times[0]).localeCompare(b.date+b.times[0]));renderBooking()},()=>{});
  }catch(e){db=null;shared=false}
  renderBooking();
})();
function localMine(){return store.get('ms-bookings',[]).filter(b=>b.date>=iso(new Date()))}

$('#fTool').innerHTML=TOOLS.map(t=>`<option value="${t.id}">${t.name}</option>`).join('');
$('#fTool').addEventListener('change',e=>{booking.tool=e.target.value;booking.slots=[];renderBooking()});
$('#fTraining').addEventListener('change',renderSummary);
$('#dates').addEventListener('click',e=>{const b=e.target.closest('.date');if(!b||b.disabled)return;booking.date=b.dataset.d;booking.slots=[];renderBooking()});
$('#slots').addEventListener('click',e=>{
  const b=e.target.closest('.slot');if(!b||b.disabled)return;const t=b.dataset.t;
  if(booking.slots.includes(t)) booking.slots=booking.slots.filter(x=>x!==t);
  else if(booking.slots.length>=4) return msg('You can book up to 4 slots (2 hours) at once. Make a second booking for more time.','err');
  else booking.slots=[...booking.slots,t].sort();
  msg('');renderBooking();
});
['fFirst','fLast','fPhone','fEmail'].forEach(id=>{const el=$('#'+id);const d=store.get('ms-draft',{});if(d[id])el.value=d[id];el.addEventListener('input',()=>{const x=store.get('ms-draft',{});x[id]=el.value;store.set('ms-draft',x);if(el.getAttribute('aria-invalid')==='true'&&el.checkValidity()){el.setAttribute('aria-invalid','false');el.removeAttribute('aria-describedby')}})});

function isTaken(time){
  const id=slotId(booking.date,booking.tool,time);
  if(shared) return taken.get(id);
  const l=localMine().find(b=>b.tool===booking.tool&&b.date===booking.date&&b.times.includes(time));
  return l?{by:'me'}:null;
}
function isPast(time){const now=new Date();if(booking.date!==iso(now))return false;const [h,m]=time.split(':').map(Number);return h*60+m<=now.getHours()*60+now.getMinutes()}
function renderBooking(){
  $('#fTool').value=booking.tool;
  $('#dates').innerHTML=DAYS.map(d=>{const v=iso(d),closed=d.getDay()===0;return `<button type="button" class="date" data-d="${v}" aria-pressed="${v===booking.date}" ${closed?'disabled title="Closed on Sundays"':''}><span>${d.toLocaleDateString('en-US',{weekday:'short'})}</span><b>${d.getDate()}</b><span>${d.toLocaleDateString('en-US',{month:'short'})}</span></button>`}).join('');
  $('#slots').innerHTML=TIMES.map(t=>{const tk=isTaken(t),past=isPast(t),me=tk&&(tk.by==='me'||(uid&&tk.by===uid));
    const dis=!!tk||past;return `<button type="button" class="slot${me?' mine':''}" data-t="${t}" aria-pressed="${booking.slots.includes(t)}" ${dis?'disabled':''} title="${me?'Your booking':tk?'Booked':past?'Already passed':'Free'}">${fmtTime(t)}</button>`}).join('');
  renderSummary();renderMine();
  $('#modeNote').textContent=shared?(canWrite?'Live schedule: slots booked by others update here automatically. Your contact details stay private to you.':'You can see the live schedule. To book, ask the page owner for Contributor access.'):'Bookings on this page are saved in this browser only. Connect a booking backend to share the schedule between visitors.';
}
function renderSummary(){
  const t=TOOL[booking.tool],n=booking.slots.length,d=new Date(booking.date+'T12:00');
  const end=n?(()=>{const [h,m]=booking.slots[n-1].split(':').map(Number);const e=h*60+m+30;return fmtTime(`${Math.floor(e/60)}:${String(e%60).padStart(2,'0')}`)})():'';
  $('#sumList').innerHTML=`<dt>Workshop</dt><dd>${t.name}</dd><dt>Date</dt><dd>${d.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'})}</dd><dt>Time</dt><dd>${n?booking.slots.map(fmtTime).join(', ')+(n>1?'':` – ${end}`):'Pick a slot'}</dd><dt>Duration</dt><dd>${n*30} min</dd><dt>Training</dt><dd>${$('#fTraining').checked?'Included, free':'No'}</dd>`;
  $('#sumTotal').textContent=`$${(t.rate*n/2).toFixed(2).replace('.00','')}`;
  $('#confirmBtn').disabled=booking.busy||(shared&&!canWrite);
}
function renderMine(){
  const list=shared?mine:localMine();
  $('#myWrap').hidden=!list.length;
  $('#myList').innerHTML=list.map(b=>`<div class="mybook-item"><span><b>${TOOL[b.tool]?.name||b.tool}</b><br>${new Date(b.date+'T12:00').toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'})} · ${b.times.map(fmtTime).join(', ')}</span><button type="button" data-cancel="${b.id}">Cancel</button></div>`).join('');
}
$('#myList').addEventListener('click',async e=>{
  const b=e.target.closest('[data-cancel]');if(!b)return;const id=b.dataset.cancel;
  if(b.dataset.sure!=='1'){b.dataset.sure='1';b.textContent='Tap to confirm';return}
  b.disabled=true;
  if(shared){const bk=mine.find(x=>x.id===id);try{for(const t of bk.times)await db.collection('slots').doc(slotId(bk.date,bk.tool,t)).delete();await db.collection('data/users/'+uid).doc(id).delete();msg('Booking cancelled.','ok')}catch{msg('Could not cancel right now. Try again in a moment.','err');b.disabled=false}}
  else{store.set('ms-bookings',store.get('ms-bookings',[]).filter(x=>x.id!==id));msg('Booking cancelled.','ok');renderBooking()}
});
function msg(text,kind){const m=$('#formMsg');m.textContent=text;m.className='msg'+(kind?' '+kind:'')}

$('#bookForm').addEventListener('submit',async e=>{
  e.preventDefault();
  const f={first:$('#fFirst').value.trim(),last:$('#fLast').value.trim(),phone:$('#fPhone').value.trim(),email:$('#fEmail').value.trim()};
  const ids=['fFirst','fLast','fPhone','fEmail'];
  ids.forEach(id=>{const el=$('#'+id),ok=el.checkValidity();el.setAttribute('aria-invalid',!ok);if(ok)el.removeAttribute('aria-describedby');else{el.setAttribute('aria-describedby','formMsg');el.placeholder=''}});
  const bad=ids.find(id=>!$('#'+id).checkValidity());
  if(bad){msg('Fill in your name, a phone number and a valid e-mail so staff can reach you.','err');$('#'+bad).focus();return}
  if(!booking.slots.length) return msg('Pick at least one time slot.','err');
  const rec={tool:booking.tool,date:booking.date,times:[...booking.slots],training:$('#fTraining').checked,...f,createdAt:Date.now()};
  const id=slotId(rec.date,rec.tool,rec.times[0]);
  booking.busy=true;renderSummary();msg('Reserving…');
  try{
    if(shared){
      const claimed=[];
      for(const t of rec.times){
        const ref=db.collection('slots').doc(slotId(rec.date,rec.tool,t));
        const l=await ref.acquire({holder:uid||'guest',ttlMs:5000});
        const s=l.acquired?await ref.get():null;
        if(!l.acquired||(s.exists&&s.data().by!==undefined)){
          for(const c of claimed)await db.collection('slots').doc(c).delete();
          throw {code:'taken',time:t};
        }
        await ref.set({tool:rec.tool,date:rec.date,time:t,by:uid||'guest',createdAt:rec.createdAt});
        claimed.push(ref.id);
      }
      if(uid) await db.collection('data/users/'+uid).doc(id).set(rec);
    }else{
      store.set('ms-bookings',[...store.get('ms-bookings',[]),{id,...rec}]);
    }
    booking.slots=[];booking.busy=false;renderBooking();
    const sp=$('#stamp');sp.classList.remove('go');void sp.offsetWidth;sp.classList.add('go');
    msg(`Booked: ${TOOL[rec.tool].name}, ${new Date(rec.date+'T12:00').toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'})} at ${fmtTime(rec.times[0])}. Check in at the kiosk 5 minutes early.`,'ok');
  }catch(err){
    booking.busy=false;
    if(err&&err.code==='taken'){booking.slots=booking.slots.filter(x=>x!==err.time);renderBooking();msg(`${fmtTime(err.time)} was just booked by someone else. Pick another slot.`,'err')}
    else if(err&&err.code==='invalid_argument'){canWrite=false;renderBooking();msg('Your access to this page is view-only, so you can\'t book. Ask the page owner for Contributor access.','err')}
    else{renderSummary();msg('The booking didn\'t go through. Check your connection and try again.','err')}
  }
});

renderExplorers();renderProjects();route();
