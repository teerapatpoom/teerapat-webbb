/**
 * GRURU MUSEUM — INTERACTIVE ENGINE SCRIPT (script.jss)
 * Concept: Future Archaeology & Digital Knowledge Graph
 * Theme: "New Knowledge. New Storytelling. Built for Everyday Living."
 */

// ==========================================================================
// 1. KNOWLEDGE GRAPH DATABASE (Sample dataset according to brief schema)
// ==========================================================================
const KNOWLEDGE_GRAPH_DATA = [
  {
    id: "GRM-1872-SCI-014",
    title_th: "การสังเคราะห์แสง & กำเนิดพลังงานชีวภาพ",
    title_en: "Photosynthesis & Bio-Energy Matrix",
    category: "science",
    year: 1872,
    era: "ยุคปฏิวัติวิทยาศาสตร์ (ศตวรรษที่ 19)",
    summary: "การค้นพบว่าคลอโรพลาสต์ในพืชสามารถเปลี่ยนโฟตอนจากแสงอาทิตย์และคาร์บอนไดออกไซด์ให้กลายเป็นพลังงานกลูโคสและออกซิเจน ซึ่งเป็นรากฐานของห่วงโซ่อาหารของโลก",
    everyday_takeaway: "เดินรับแสงแดดยามเช้า 15 นาทีก่อนเริ่มทำงาน ช่วยเพิ่มไมโทคอนเดรียและสั่งให้สมองหลั่งเซโรโทนิน เพิ่มโฟกัสและความสดชื่น 40%",
    sources: ["Journal of Historical Biology, Vol. 42", "Royal Society Archives 1872"],
    connections: ["GRM-1928-BIO-009", "GRM-1971-TEC-088"]
  },
  {
    id: "GRM-1928-BIO-009",
    title_th: "การค้นพบเพนิซิลลิน & จุลินทรีย์ธรรมชาติ",
    title_en: "Penicillin Discovery & Natural Microbes",
    category: "nature",
    year: 1928,
    era: "ยุคปฏิวัติการแพทย์ (ทศวรรษ 1920)",
    summary: "อเล็กซานเดอร์ เฟลมมิง สังเกตเห็นรา Penicillium ที่ยับยั้งการเติบโตของแบคทีเรีย นำไปสู่การค้นพบยาปฏิชีวนะตัวแรกของมนุษยชาติ",
    everyday_takeaway: "ไม่ทานยาปฏิชีวนะโดยไม่จำเป็น และเพิ่มจุลินทรีย์ดีด้วยอาหารหมักธรรมชาติ (โยเกิร์ต กิมจิ เทมเป้) เพื่อรักษาความสมดุลของลำไส้",
    sources: ["Alexander Fleming Laboratory Notes, 1928", "Lancet Historical Archive"],
    connections: ["GRM-1872-SCI-014", "GRM-1953-SCI-032"]
  },
  {
    id: "GRM-1953-SCI-032",
    title_th: "โครงสร้างเกลียวคู่ดีเอ็นเอ (DNA Double Helix)",
    title_en: "DNA Double Helix & Molecular Code",
    category: "science",
    year: 1953,
    era: "ยุคอณูชีววิทยา (ทศวรรษ 1950)",
    summary: "การถอดรหัสโครงสร้างบันไดเวียนของกรดดีออกซีไรโบนิวคลีอิก เผยให้เห็นกลไกการถ่ายทอดรหัสพันธุกรรมของสิ่งมีชีวิตทุกชนิดบนโลก",
    everyday_takeaway: "การนอนหลับลึก 7-8 ชั่วโมงและการลดน้ำตาล ช่วยลดความเครียดระดับเซลล์ (Oxidative Stress) ปกป้องปลายเทโลเมียร์ของดีเอ็นเอ",
    sources: ["Nature Journal, Vol. 171, April 1953"],
    connections: ["GRM-1928-BIO-009", "GRM-1971-TEC-088"]
  },
  {
    id: "GRM-1971-TEC-088",
    title_th: "ไมโครโปรเซสเซอร์ 4004 & ยุคซิลิคอน",
    title_en: "Intel 4004 Microprocessor & Silicon Era",
    category: "tech",
    year: 1971,
    era: "ยุคดิจิทัลเรเนซองส์ (ทศวรรษ 1970)",
    summary: "ชิปประมวลผลขนาดจิ๋วชิ้นแรกที่รวมวงจรคอมพิวเตอร์นับพันตัวลงบนแผ่นซิลิคอนแผ่นเดียว จุดชนวนการปฏิวัติดิจิทัลและสมาร์ทโฟนในปัจจุบัน",
    everyday_takeaway: "กฎการประมวลผลแบบขนาน: จัดตารางการทำงานเป็นบล็อกเวลาเดี่ยว (Single-tasking) 90 นาที ช่วยให้สมองประมวลผลลึกขึ้นเหมือนซีพียู",
    sources: ["IEEE Computer Society Archives", "Smithsonian Tech History"],
    connections: ["GRM-1872-SCI-014", "GRM-2008-TEC-112"]
  },
  {
    id: "GRM-1450-HIS-002",
    title_th: "แท่นพิมพ์กูเทนแบร์ก & การกระจายความรู้",
    title_en: "Gutenberg Moveable Type Press",
    category: "history",
    year: 1450,
    era: "ยุคฟื้นฟูศิลปวิทยาการ (ศตวรรษที่ 15)",
    summary: "โยฮันเนส กูเทนแบร์ก ประดิษฐ์แท่นพิมพ์โลหะเปลี่ยนตัวอักษรได้ ทำให้หนังสือหลุดพ้นจากการเป็นของชนชั้นสูง และกระจายสู่ประชาชนทั่วไป",
    everyday_takeaway: "จดบันทึกความคิดลงกระดาษหรือแอปพลิเคชันทันทีที่คิดออก การทำให้ความรู้เป็นลายลักษณ์อักษรช่วยปลดปล่อย RAM ในสมอง",
    sources: ["Mainz Gutenberg Museum Manuscripts", "British Library Rare Books"],
    connections: ["GRM-1971-TEC-088", "GRM-1600-CUL-019"]
  },
  {
    id: "GRM-1600-CUL-019",
    title_th: "ภูมิปัญญาการหมักดอง & การถนอมอาหารข้ามยุค",
    title_en: "Fermentation & Ancient Food Wisdom",
    category: "culture",
    year: 1600,
    era: "ยุคภูมิปัญญาชาวบ้านโบราณ",
    summary: "ศาสตร์การใช้จุลินทรีย์ธรรมชาติย่อยสลายน้ำตาลและแป้ง เกิดเป็นรสชาติอูมามิและช่วยถนอมอาหารให้อยู่รอดข้ามฤดูหนาวและทวีป",
    everyday_takeaway: "อาหารที่มีรสเปรี้ยวหมักตามธรรมชาติ (เช่น ข้าวหมาก มิโสะ ซาวเคราต์) ช่วยเสริมภูมิต้านทานและลดอาการท้องอืดได้ทันที",
    sources: ["Asian Culinary Archaeology Compendium", "Folk Wisdom Records"],
    connections: ["GRM-1450-HIS-002", "GRM-1928-BIO-009"]
  },
  {
    id: "GRM-1919-ART-005",
    title_th: "เบาเฮาส์ (Bauhaus) & ฟังก์ชันกำหนดรูปแบบ",
    title_en: "Bauhaus: Form Follows Function",
    category: "art",
    year: 1919,
    era: "ยุคโมเดิร์นนิสต์ต้นศตวรรษที่ 20",
    summary: "โรงเรียนศิลปะและการออกแบบในเยอรมนีที่ทลายเส้นแบ่งระหว่างศิลปะกับงานฝีมือ สถาปัตยกรรมและของใช้ในบ้านต้องตอบประโยชน์ใช้สอยจริง",
    everyday_takeaway: "ก่อนซื้อของเข้าบ้านหรือจัดโต๊ะทำงาน ให้ถามว่า 'สิ่งนี้มีฟังก์ชันอะไร?' ตัดสิ่งที่ไม่จำเป็นออกเพื่อเพิ่มพื้นที่ความสงบทางใจ",
    sources: ["Bauhaus Archiv Berlin", "Modern Art Institute Review"],
    connections: ["GRM-1971-TEC-088", "GRM-1450-HIS-002"]
  },
  {
    id: "GRM-2008-TEC-112",
    title_th: "สมุดบัญชีกระจายศูนย์ (Decentralized Ledger)",
    title_en: "Decentralized Ledger & Cryptographic Trust",
    category: "tech",
    year: 2008,
    era: "ยุคเครือข่ายไร้ตัวกลาง (ทศวรรษ 2000)",
    summary: "การออกแบบระบบบันทึกธุรกรรมแบบกระจายศูนย์ผ่านวิทยาการเข้ารหัสลับ สร้างความไว้วางใจโดยไม่ต้องพึ่งพิงองค์กรตัวกลางเดี่ยว",
    everyday_takeaway: "สร้างระบบ Trust แต่ตรวจสอบได้ (Trust but Verify) ในชีวิตการทำงาน ด้วยการมีข้อตกลงและหลักฐานที่ทุกคนเข้าถึงได้เสมอ",
    sources: ["Satoshi Nakamoto Whitepaper, 2008"],
    connections: ["GRM-1971-TEC-088", "GRM-1450-HIS-002"]
  }
];

// Local Storage Key for Personal Collection
const STORAGE_KEY = "gruru_saved_takeaways";

// ==========================================================================
// 2. HERO CONSTELLATION CANVAS ANIMATION
// ==========================================================================
function initHeroConstellation() {
  const canvas = document.getElementById('heroConstellation');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = 42;

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2 + 1;
      this.color = Math.random() > 0.4 ? '#D7FF3A' : '#2EE6FF';
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(44, 44, 58, ${1 - dist / 110})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(render);
  }
  render();
}

// ==========================================================================
// 3. INTERACTIVE FORCE-DIRECTED CANVAS GRAPH (HALL 02)
// ==========================================================================
let activeCategoryFilter = "all";
let canvasNodes = [];
let canvasLinks = [];
let selectedNode = null;
let hoveredNode = null;
let isDragging = false;
let draggedNode = null;

function initInteractiveGraph() {
  const canvas = document.getElementById('networkCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;

  function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = Math.max(rect.height, 420);
    resetNodePositions();
  }
  window.addEventListener('resize', resizeCanvas);

  function resetNodePositions() {
    canvasNodes = KNOWLEDGE_GRAPH_DATA.map((item, idx) => {
      const angle = (idx / KNOWLEDGE_GRAPH_DATA.length) * Math.PI * 2;
      const radius = Math.min(width, height) * 0.32;
      return {
        ...item,
        x: width / 2 + Math.cos(angle) * radius + (Math.random() - 0.5) * 40,
        y: height / 2 + Math.sin(angle) * radius + (Math.random() - 0.5) * 40,
        vx: 0,
        vy: 0,
        baseRadius: 18,
        targetRadius: 18
      };
    });

    // Create links
    canvasLinks = [];
    canvasNodes.forEach(source => {
      source.connections.forEach(targetId => {
        const target = canvasNodes.find(n => n.id === targetId);
        if (target) {
          canvasLinks.push({ source, target });
        }
      });
    });
  }

  resizeCanvas();

  // Mouse Listeners
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    if (isDragging && draggedNode) {
      draggedNode.x = mx;
      draggedNode.y = my;
      return;
    }

    hoveredNode = null;
    canvas.style.cursor = 'grab';

    for (const node of canvasNodes) {
      if (activeCategoryFilter !== "all" && node.category !== activeCategoryFilter) continue;
      const dx = mx - node.x;
      const dy = my - node.y;
      if (Math.sqrt(dx * dx + dy * dy) < node.baseRadius + 6) {
        hoveredNode = node;
        canvas.style.cursor = 'pointer';
        break;
      }
    }
  });

  canvas.addEventListener('mousedown', (e) => {
    if (hoveredNode) {
      isDragging = true;
      draggedNode = hoveredNode;
      canvas.style.cursor = 'grabbing';
    }
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    draggedNode = null;
  });

  canvas.addEventListener('click', () => {
    if (hoveredNode) {
      selectedNode = hoveredNode;
      openSpecimenModal(hoveredNode);
    }
  });

  // Category Color Map
  function getCategoryColor(cat) {
    switch (cat) {
      case 'science': return '#2EE6FF';
      case 'history': return '#FF5A1F';
      case 'tech': return '#8C6BFF';
      case 'culture': return '#FFC233';
      case 'nature': return '#34E89E';
      case 'art': return '#FF5FA2';
      default: return '#D7FF3A';
    }
  }

  // Draw Category Shapes (WCAG Colorblind-Safe)
  function drawNodeShape(ctx, node, isHovered, isSelected) {
    const r = node.baseRadius * (isHovered ? 1.25 : 1.0);
    const color = isSelected ? '#D7FF3A' : getCategoryColor(node.category);

    ctx.save();
    ctx.translate(node.x, node.y);

    // Glowing aura
    if (isSelected || isHovered) {
      ctx.shadowBlur = 18;
      ctx.shadowColor = color;
    }

    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.fillStyle = '#17171F';

    switch (node.category) {
      case 'science': // Circle
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        break;
      case 'history': // Hexagon
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (i * Math.PI) / 3;
          const hx = Math.cos(a) * r;
          const hy = Math.sin(a) * r;
          i === 0 ? ctx.moveTo(hx, hy) : ctx.lineTo(hx, hy);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        break;
      case 'tech': // Square
        ctx.beginPath();
        ctx.rect(-r * 0.9, -r * 0.9, r * 1.8, r * 1.8);
        ctx.fill();
        ctx.stroke();
        break;
      case 'culture': // Triangle
        ctx.beginPath();
        ctx.moveTo(0, -r * 1.2);
        ctx.lineTo(r, r * 0.8);
        ctx.lineTo(-r, r * 0.8);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        break;
      case 'nature': // Diamond
        ctx.beginPath();
        ctx.moveTo(0, -r * 1.15);
        ctx.lineTo(r * 1.15, 0);
        ctx.lineTo(0, r * 1.15);
        ctx.lineTo(-r * 1.15, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        break;
      case 'art': // Ring
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.45, 0, Math.PI * 2);
        ctx.stroke();
        break;
      default:
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }

    // Node Center Dot
    ctx.beginPath();
    ctx.arc(0, 0, 3, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    ctx.restore();

    // Node Label
    ctx.font = '11px "IBM Plex Sans Thai", sans-serif';
    ctx.fillStyle = isHovered ? '#D7FF3A' : '#F2EDE3';
    ctx.textAlign = 'center';
    ctx.fillText(node.title_th, node.x, node.y + r + 16);
  }

  // Animation Loop
  function graphLoop() {
    ctx.clearRect(0, 0, width, height);

    // Draw Links
    canvasLinks.forEach(link => {
      const isFilteredOut = activeCategoryFilter !== "all" && 
        (link.source.category !== activeCategoryFilter && link.target.category !== activeCategoryFilter);

      ctx.beginPath();
      ctx.moveTo(link.source.x, link.source.y);
      ctx.lineTo(link.target.x, link.target.y);
      ctx.strokeStyle = isFilteredOut ? 'rgba(44, 44, 58, 0.15)' : 'rgba(46, 230, 255, 0.35)';
      ctx.lineWidth = (link.source === hoveredNode || link.target === hoveredNode) ? 2.5 : 1;
      ctx.stroke();
    });

    // Draw Nodes
    canvasNodes.forEach(node => {
      const isFilteredOut = activeCategoryFilter !== "all" && node.category !== activeCategoryFilter;
      ctx.globalAlpha = isFilteredOut ? 0.2 : 1.0;
      drawNodeShape(ctx, node, node === hoveredNode, node === selectedNode);
    });
    ctx.globalAlpha = 1.0;

    // HUD Tooltip when hovering
    if (hoveredNode) {
      ctx.save();
      ctx.fillStyle = 'rgba(11, 11, 15, 0.92)';
      ctx.strokeStyle = '#D7FF3A';
      ctx.lineWidth = 1;
      const boxW = 220;
      const boxH = 50;
      const bx = Math.min(width - boxW - 10, Math.max(10, hoveredNode.x - boxW / 2));
      const by = Math.max(10, hoveredNode.y - hoveredNode.baseRadius - boxH - 12);
      ctx.fillRect(bx, by, boxW, boxH);
      ctx.strokeRect(bx, by, boxW, boxH);

      ctx.font = '10px "IBM Plex Mono", monospace';
      ctx.fillStyle = '#D7FF3A';
      ctx.textAlign = 'left';
      ctx.fillText(hoveredNode.id, bx + 10, by + 18);

      ctx.font = '11px "IBM Plex Sans Thai", sans-serif';
      ctx.fillStyle = '#F2EDE3';
      ctx.fillText(hoveredNode.era, bx + 10, by + 36);
      ctx.restore();
    }

    requestAnimationFrame(graphLoop);
  }

  graphLoop();
}

// Category Filter Handling
function setGraphCategory(category) {
  activeCategoryFilter = category;
  document.querySelectorAll('.graph-filter-btn').forEach(btn => {
    btn.classList.remove('bg-lime', 'text-black', 'border-lime');
    if (btn.dataset.category === category) {
      btn.classList.add('bg-lime', 'text-black', 'border-lime');
    }
  });
}

// ==========================================================================
// 4. DATA BOOMING INTERACTIVE ZONE
// ==========================================================================
let boomTier = 1;
function triggerDataBooming() {
  const centralNode = document.getElementById('boomingCore');
  const burstContainer = document.getElementById('boomingBurstContainer');
  const counter = document.getElementById('boomingConnectionCounter');
  if (!centralNode || !burstContainer) return;

  burstContainer.innerHTML = '';
  centralNode.classList.add('scale-110');
  setTimeout(() => centralNode.classList.remove('scale-110'), 200);

  const subNodes = [
    { title: "คลอโรพลาสต์", cat: "science", color: "#2EE6FF" },
    { title: "แสงแดดยามเช้า", cat: "nature", color: "#34E89E" },
    { title: "ไมโทคอนเดรีย", cat: "science", color: "#2EE6FF" },
    { title: "กลูโคส", cat: "science", color: "#2EE6FF" },
    { title: "เซโรโทนิน", cat: "nature", color: "#34E89E" },
    { title: "โฟกัสในการทำงาน", cat: "culture", color: "#FFC233" },
    { title: "ห่วงโซ่อาหารโลก", cat: "history", color: "#FF5A1F" },
    { title: "พลังงานชีวมวล", cat: "tech", color: "#8C6BFF" }
  ];

  const total = subNodes.length;
  const radius = 130;

  subNodes.forEach((node, i) => {
    const angle = (i / total) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'absolute px-2.5 py-1 bg-graphite border rounded font-mono text-xs flex items-center gap-1.5 shadow-lg transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300';
      el.style.borderColor = node.color;
      el.style.left = `calc(50% + ${x}px)`;
      el.style.top = `calc(50% + ${y}px)`;
      el.style.color = '#F2EDE3';
      el.innerHTML = `<span style="color:${node.color}">●</span> <span>${node.title}</span>`;
      burstContainer.appendChild(el);
    }, i * 40); // 40ms stagger per brief
  });

  if (counter) {
    boomTier = (boomTier % 3) + 1;
    counter.innerText = `${subNodes.length * boomTier} CONNECTED NODES // TIER ${boomTier}`;
    counter.className = 'font-mono text-xs text-lime font-bold';
  }
}

// ==========================================================================
// 5. EVERYDAY LAB CARDS & SAVED COLLECTION
// ==========================================================================
function renderEverydayCards(filter = "all") {
  const container = document.getElementById('everydayCardsGrid');
  if (!container) return;

  const savedIds = getSavedCollection();
  container.innerHTML = '';

  const filtered = filter === "all" ? KNOWLEDGE_GRAPH_DATA : KNOWLEDGE_GRAPH_DATA.filter(d => d.category === filter);

  filtered.forEach(item => {
    const isSaved = savedIds.includes(item.id);
    const card = document.createElement('div');
    card.className = 'hud-card p-5 space-y-3 flex flex-col justify-between';

    card.innerHTML = `
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <span class="cat-pill cat-pill-${item.category}">${item.category}</span>
          <span class="font-mono text-[10px] text-fog">${item.id}</span>
        </div>
        <h4 class="font-chakra font-bold text-lg text-paper">${item.title_th}</h4>
        <p class="text-xs font-thai text-fog line-clamp-2">${item.summary}</p>
        
        <div class="p-3 bg-void/80 border border-gridline rounded text-xs font-thai text-lime space-y-1">
          <div class="font-mono text-[10px] uppercase text-ember font-bold">Everyday Takeaway:</div>
          <div>${item.everyday_takeaway}</div>
        </div>
      </div>

      <div class="pt-3 border-t border-gridline flex items-center justify-between text-xs">
        <button onclick="toggleSaveCollection('${item.id}')" class="gr-btn-secondary px-3 py-1 rounded text-[11px] ${isSaved ? 'border-lime text-lime' : ''}">
          ${isSaved ? '★ บันทึกแล้ว' : '☆ บันทึกคอลเลกชัน'}
        </button>
        <button onclick="openSpecimenModalById('${item.id}')" class="text-fog hover:text-lime font-mono text-[11px]">
          ขุดค้นลึก &rarr;
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

function getSavedCollection() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function toggleSaveCollection(id) {
  let saved = getSavedCollection();
  if (saved.includes(id)) {
    saved = saved.filter(x => x !== id);
  } else {
    saved.push(id);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  updateSavedBadge();
  renderEverydayCards(activeCategoryFilter);
}

function updateSavedBadge() {
  const badge = document.getElementById('savedCountBadge');
  if (badge) {
    const count = getSavedCollection().length;
    badge.innerText = `SAVED (${count})`;
    badge.className = count > 0 ? 'nav-link text-lime border border-lime/30' : 'nav-link';
  }
}

// ==========================================================================
// 6. SPECIMEN DETAILS MODAL (Single-click citation lookup)
// ==========================================================================
function openSpecimenModal(item) {
  const modal = document.getElementById('specimenModal');
  if (!modal || !item) return;

  document.getElementById('modalSpecimenId').innerText = item.id;
  document.getElementById('modalTitleTh').innerText = item.title_th;
  document.getElementById('modalTitleEn').innerText = item.title_en;
  document.getElementById('modalCategoryPill').className = `cat-pill cat-pill-${item.category}`;
  document.getElementById('modalCategoryPill').innerText = item.category;
  document.getElementById('modalEra').innerText = `${item.era} (${item.year})`;
  document.getElementById('modalSummary').innerText = item.summary;
  document.getElementById('modalTakeaway').innerText = item.everyday_takeaway;

  const sourcesList = document.getElementById('modalSourcesList');
  sourcesList.innerHTML = '';
  item.sources.forEach(src => {
    const li = document.createElement('li');
    li.className = 'text-xs font-mono text-cyan flex items-center gap-1.5';
    li.innerHTML = `<span>✓</span> <span>${src}</span>`;
    sourcesList.appendChild(li);
  });

  modal.classList.add('active');
}

function openSpecimenModalById(id) {
  const item = KNOWLEDGE_GRAPH_DATA.find(x => x.id === id);
  if (item) openSpecimenModal(item);
}

function closeSpecimenModal() {
  const modal = document.getElementById('specimenModal');
  if (modal) modal.classList.remove('active');
}

// Style Guide Modal Toggle
function toggleStyleGuideModal() {
  const modal = document.getElementById('styleGuideModal');
  if (modal) modal.classList.toggle('active');
}

// Search Handler
function handleGraphSearch(keyword) {
  if (!keyword.trim()) {
    setGraphCategory('all');
    return;
  }
  const term = keyword.toLowerCase();
  const match = KNOWLEDGE_GRAPH_DATA.find(d => 
    d.title_th.toLowerCase().includes(term) || 
    d.title_en.toLowerCase().includes(term) || 
    d.id.toLowerCase().includes(term)
  );

  if (match) {
    selectedNode = canvasNodes.find(n => n.id === match.id);
    if (selectedNode) {
      openSpecimenModal(selectedNode);
    }
  }
}

// ==========================================================================
// 7. INITIALIZATION ON DOM READY
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initHeroConstellation();
  initInteractiveGraph();
  renderEverydayCards('all');
  updateSavedBadge();

  // Close modals on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSpecimenModal();
      const sg = document.getElementById('styleGuideModal');
      if (sg) sg.classList.remove('active');
    }
  });
});
