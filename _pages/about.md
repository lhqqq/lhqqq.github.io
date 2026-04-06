---
permalink: /
title: "Home"
excerpt: "PhD student focused on biometrics, medical image analysis, LLM, and NLP."
author_profile: false
classes: wide
redirect_from:
  - /about/
  - /about.html
---

<style>
/* ═══════════════════════════════════════════
   RESET & BASE
═══════════════════════════════════════════ */
*, *::before, *::after { box-sizing: border-box; }
.page { max-width: 1000px; margin: 0 auto; padding: 0 1.5rem 5rem; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif; color: #1c1c1e; line-height: 1.6; }

/* ═══════════════════════════════════════════
   HERO CARD
═══════════════════════════════════════════ */
.hero-card {
  display: grid;
  grid-template-columns: 1fr 160px;
  gap: 2.5rem;
  align-items: center;
  background: linear-gradient(135deg, #f8faff 0%, #eef3ff 100%);
  border: 1px solid #dbe5f8;
  border-radius: 20px;
  padding: 2.5rem 2.8rem;
  margin-top: 1.5rem;
}
.hero-name {
  font-size: 2.2rem;
  font-weight: 800;
  color: #0a0a0a;
  letter-spacing: -0.03em;
  margin: 0 0 0.5rem;
}
.hero-affil {
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.8;
  margin: 0 0 1rem;
}
.hero-affil a { color: #2563eb; text-decoration: none; }
.hero-affil a:hover { text-decoration: underline; }
.hero-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.1rem;
}
.hero-tag {
  padding: 0.25rem 0.75rem;
  background: #e0eaff;
  color: #1d4ed8;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
}
.hero-links {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}
.hero-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 1rem;
  font-size: 0.83rem;
  font-weight: 500;
  border-radius: 999px;
  text-decoration: none;
  border: 1.5px solid #c7d7f5;
  color: #2c3e6d;
  background: #fff;
  transition: all .15s;
}
.hero-links a:hover { background: #2563eb; color: #fff; border-color: #2563eb; }
.hero-photo img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 4px 20px rgba(37,99,235,.15);
  display: block;
  margin: 0 auto;
}
.hero-bio {
  margin-top: 1.2rem;
  font-size: 0.94rem;
  line-height: 1.75;
  color: #374151;
}
.hero-bio a { color: #2563eb; text-decoration: none; }
.hero-bio a:hover { text-decoration: underline; }

/* ═══════════════════════════════════════════
   NEWS BANNER
═══════════════════════════════════════════ */
.news-banner {
  margin-top: 1.5rem;
  display: flex;
  gap: 0.9rem;
  align-items: flex-start;
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: 12px;
  padding: 1rem 1.3rem;
  font-size: 0.92rem;
  line-height: 1.7;
  color: #78350f;
}
.news-icon { font-size: 1.2rem; flex-shrink: 0; margin-top: 0.1rem; }
.news-banner a { color: #92400e; font-weight: 600; }

/* ═══════════════════════════════════════════
   TWO-COLUMN LAYOUT
═══════════════════════════════════════════ */
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

/* ═══════════════════════════════════════════
   SECTION CARD
═══════════════════════════════════════════ */
.sec-card {
  background: #fff;
  border: 1px solid #e5eaf2;
  border-radius: 16px;
  padding: 1.6rem 1.8rem;
}
.sec-card.full { margin-top: 1.5rem; }
.sec-title {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #2563eb;
  margin: 0 0 1.1rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid #e5eaf2;
}

/* ═══════════════════════════════════════════
   RESEARCH INTERESTS
═══════════════════════════════════════════ */
.ri-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.65rem; }
.ri-list li {
  display: flex;
  gap: 0.7rem;
  align-items: flex-start;
  font-size: 0.9rem;
  color: #374151;
  line-height: 1.6;
}
.ri-dot { width: 6px; height: 6px; border-radius: 50%; background: #2563eb; flex-shrink: 0; margin-top: 0.5em; }

/* ═══════════════════════════════════════════
   EDUCATION
═══════════════════════════════════════════ */
.edu-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.9rem; }
.edu-item-deg { font-size: 0.92rem; font-weight: 600; color: #1c1c1e; }
.edu-item-school { font-size: 0.85rem; color: #64748b; margin-top: 0.1rem; }
.edu-item-date { font-size: 0.8rem; color: #94a3b8; margin-top: 0.1rem; }

/* ═══════════════════════════════════════════
   PUBLICATIONS
═══════════════════════════════════════════ */
.pub-year-group { margin-bottom: 1.8rem; }
.pub-year-group:last-child { margin-bottom: 0; }
.pub-year-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #94a3b8;
  margin-bottom: 0.8rem;
  padding-left: 0.2rem;
}
.pub-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.8rem; }
.pub-item {
  display: flex;
  gap: 0.8rem;
  align-items: flex-start;
  padding: 0.85rem 1rem;
  background: #f8fafc;
  border: 1px solid #e9eef6;
  border-radius: 10px;
  font-size: 0.9rem;
  line-height: 1.65;
  color: #374151;
  transition: border-color .15s;
}
.pub-item:hover { border-color: #93c5fd; }
.pub-badge {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.55rem;
  font-size: 0.7rem;
  font-weight: 700;
  border-radius: 5px;
  background: #dbeafe;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
  white-space: nowrap;
  min-width: 58px;
  text-align: center;
  margin-top: 0.2rem;
}
.pub-badge.award { background: #fef3c7; color: #92400e; border-color: #fde68a; }

/* ═══════════════════════════════════════════
   EXPERIENCE
═══════════════════════════════════════════ */
.exp-list { display: flex; flex-direction: column; gap: 1.3rem; }
.exp-item { padding-left: 1rem; border-left: 3px solid #dbeafe; }
.exp-org { font-size: 0.92rem; font-weight: 700; color: #1c1c1e; }
.exp-role-row { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 0.3rem; margin-top: 0.15rem; }
.exp-role { font-size: 0.85rem; color: #475569; }
.exp-date { font-size: 0.8rem; color: #94a3b8; }
.exp-ul { margin: 0.5rem 0 0 0.2rem; padding-left: 1rem; list-style: disc; }
.exp-ul li { font-size: 0.88rem; line-height: 1.65; color: #374151; margin: 0.2rem 0; }

/* ═══════════════════════════════════════════
   TEACHING & SERVICES
═══════════════════════════════════════════ */
.simple-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; }
.simple-list li { font-size: 0.9rem; color: #374151; padding: 0.4rem 0; border-bottom: 1px solid #f1f5f9; line-height: 1.55; }
.simple-list li:last-child { border-bottom: none; }
.srv-group-label { font-size: 0.8rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.07em; margin: 0.9rem 0 0.4rem; }
.srv-group-label:first-child { margin-top: 0; }

/* ═══════════════════════════════════════════
   HONORS
═══════════════════════════════════════════ */
.honor-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; }
.honor-list li { display: flex; gap: 0.6rem; align-items: flex-start; font-size: 0.9rem; color: #374151; padding: 0.45rem 0; border-bottom: 1px solid #f1f5f9; line-height: 1.6; }
.honor-list li:last-child { border-bottom: none; }
.honor-list li::before { content: "▸"; color: #2563eb; font-size: 0.7em; flex-shrink: 0; margin-top: 0.35em; }

/* ═══════════════════════════════════════════
   VISITOR MAP
═══════════════════════════════════════════ */
.map-wrap { margin-top: 2.5rem; text-align: center; }
.map-wrap img { max-width: 100%; height: auto; border-radius: 12px; border: 1px solid #e5eaf2; box-shadow: 0 2px 12px rgba(0,0,0,.06); }

/* ═══════════════════════════════════════════
   QUICK NAV
═══════════════════════════════════════════ */
.quick-nav { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1.2rem; padding: 0; list-style: none; }
.quick-nav a { display: inline-block; padding: 0.25rem 0.8rem; font-size: 0.8rem; border: 1px solid #dde3f0; border-radius: 999px; color: #475569; text-decoration: none; background: #fff; transition: all .15s; }
.quick-nav a:hover { background: #2563eb; color: #fff; border-color: #2563eb; }

/* ═══════════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════════ */
@media (max-width: 700px) {
  .hero-card { grid-template-columns: 1fr; text-align: center; padding: 1.8rem 1.4rem; }
  .hero-photo { order: -1; }
  .hero-tags, .hero-links, .quick-nav { justify-content: center; }
  .two-col { grid-template-columns: 1fr; }
}
</style>

<div class="page">

<!-- ░░ HERO ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
<div class="hero-card">
  <div>
    <h1 class="hero-name">Haiqing Li</h1>
    <p class="hero-affil">
      PhD Student in Computer Science<br>
      SMILE Lab · University of Texas at Arlington<br>
      Arlington, TX, USA &nbsp;·&nbsp;
      <a href="mailto:hxl9110@mavs.uta.edu">hxl9110@mavs.uta.edu</a>
    </p>
    <div class="hero-tags">
      <span class="hero-tag">LLM &amp; Alignment</span>
      <span class="hero-tag">Medical Image Analysis</span>
      <span class="hero-tag">Biometrics &amp; Security</span>
    </div>
    <div class="hero-links">
      <a href="https://scholar.google.com/citations?user=Rc0GsFAAAAAJ&hl=zh-CN">Google Scholar</a>
      <a href="https://github.com/lhqqq">GitHub</a>
    </div>
    <p class="hero-bio">
      I am a second-year PhD student in Computer Science at the University of Texas at Arlington,
      advised by <a href="http://ranger.uta.edu/~huang/">Prof. Junzhou Huang</a>.
      I received my M.S. from Beijing University of Civil Engineering and Architecture,
      advised by <a href="https://academia.caiyong.wang/">Prof. Caiyong Wang</a>.
    </p>
    <ul class="quick-nav">
      <li><a href="#research">Research</a></li>
      <li><a href="#publications">Publications</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#teaching">Teaching</a></li>
      <li><a href="#honors">Honors</a></li>
    </ul>
  </div>
  <div class="hero-photo">
    <img src="/images/profile.png" alt="Portrait of Haiqing Li">
  </div>
</div>

<!-- ░░ NEWS ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
<div class="news-banner">
  <div class="news-icon">📢</div>
  <div>
    <strong>I am actively seeking Summer/Fall 2026 Internships.</strong>
    My research focuses on <strong>LLM Rule-Following (World Models/Alignment)</strong>,
    <strong>Multimodal Learning for Healthcare</strong>, and <strong>Secure Biometric Analysis</strong>.
    With a track record of bridging <strong>CV and NLP</strong>,
    I am eager to contribute to cutting-edge AI research.
    Please feel free to <a href="mailto:hxl9110@mavs.uta.edu">reach out</a>!
  </div>
</div>

<!-- ░░ TWO-COL: Research + Education ░░░░░░░░░░░░░░░ -->
<div class="two-col">

  <div class="sec-card" id="research">
    <div class="sec-title">Research Interests</div>
    <ul class="ri-list">
      <li><span class="ri-dot"></span><span><strong>LLM Rule-Following:</strong> World Model-based Alignment, Structured Prompt Optimization, and Guideline-driven Reasoning</span></li>
      <li><span class="ri-dot"></span><span><strong>Medical Image Analysis:</strong> Clinical-Guided Representation Learning and Multimodal Vision-Language Segmentation</span></li>
      <li><span class="ri-dot"></span><span><strong>Biometrics &amp; Security:</strong> Robust Ocular Recognition and Multi-scenario Deepfake Forensics</span></li>
    </ul>
  </div>

  <div class="sec-card" id="education">
    <div class="sec-title">Education</div>
    <ul class="edu-list">
      <li>
        <div class="edu-item-deg">Ph.D. in Computer Science</div>
        <div class="edu-item-school">University of Texas at Arlington</div>
        <div class="edu-item-date">Sept 2024 – present</div>
      </li>
      <li>
        <div class="edu-item-deg">M.Eng. in Mechanical Engineering</div>
        <div class="edu-item-school">Beijing University of Civil Engineering and Architecture &nbsp;·&nbsp; GPA 89.82/100, top 10%</div>
        <div class="edu-item-date">Sept 2021 – Jun 2024</div>
      </li>
      <li>
        <div class="edu-item-deg">B.E. in Electrical Engineering</div>
        <div class="edu-item-school">Chengdu Technological University &nbsp;·&nbsp; GPA 3.72/4.0, top 1%</div>
        <div class="edu-item-date">Sept 2017 – Jun 2021</div>
      </li>
    </ul>
  </div>

</div>

<!-- ░░ PUBLICATIONS (full width) ░░░░░░░░░░░░░░░░░░░ -->
<div class="sec-card full" id="publications">
  <div class="sec-title">Publications</div>

  <div class="pub-year-group">
    <div class="pub-year-label">2026</div>
    <ul class="pub-list">
      <li class="pub-item">
        <span class="hp-badge">AAAI'26</span>
        <span>Wenliang Zhong, <strong>Haiqing Li</strong>, Thao M. Dang, Feng Jiang, Hehuan Ma, Yuzhi Guo, Jean Gao, and Junzhou Huang. "Learning from Guidelines: Structured Prompt Optimization for Expert Annotation Tasks." <em>AAAI</em>, 2026.</span>
      </li>
    </ul>
  </div>

  <div class="pub-year-group">
    <div class="pub-year-label">2025</div>
    <ul class="pub-list">
      <li class="pub-item">
        <span class="hp-badge">MICCAI'25</span>
        <span>Thao M. Dang, <strong>Haiqing Li</strong>, Yuzhi Guo, Hehuan Ma, Feng Jiang, Yuawei Miao, Qifeng Zhou, Junzhou Huang. "HAGE: Hierarchical Alignment Gene-Enhanced Pathology Representation Learning with Spatial Transcriptomics." <em>MICCAI</em>, 2025.</span>
      </li>
      <li class="pub-item">
        <span class="hp-badge">MICCAI'25</span>
        <span><strong>Haiqing Li</strong>, Yuzhi Guo, Feng Jiang, Thao M. Dang, Hehuan Ma, Qifeng Zhou, Junzhou Huang. "Text-Guided Multi-Instance Learning for Scoliosis Screening via Gait Video Analysis." <em>MICCAI</em>, 2025.</span>
      </li>
      <li class="pub-item">
        <span class="hp-badge">arXiv</span>
        <span>Qifeng Zhou, Thao M. Dang, Wenliang Zhong, Yuzhi Guo, Hehuan Ma, Saiyang Na, <strong>Haiqing Li</strong>, Junzhou Huang. "Mllm4pue: Toward Universal Embeddings in Digital Pathology through Multimodal LLMs." <em>arXiv:2502.07221</em>, 2025.</span>
      </li>
      <li class="pub-item">
        <span class="hp-badge">arXiv</span>
        <span><strong>Haiqing Li</strong>, Yuzhi Guo, Feng Jiang, Qiang Zhou, Hehuan Ma, Junzhou Huang. "Leveraging Gait Patterns as Biomarkers: An Attention-guided Deep Multiple Instance Learning Network for Scoliosis Classification." <em>arXiv:2504.03894</em>, 2025.</span>
      </li>
    </ul>
  </div>

  <div class="pub-year-group">
    <div class="pub-year-label">2024</div>
    <ul class="pub-list">
      <li class="pub-item">
        <span class="hp-badge">TBIOM'24</span>
        <span>Caiyong Wang, <strong>Haiqing Li</strong> (corresponding), Yi Zhang, Guangzhao Zhao, Yunlong Wang, and Zhenan Sun. "Sclera-TransFuse: Fusing Vision Transformer and CNN for Accurate Sclera Segmentation and Recognition." <em>IEEE TBIOM</em>, 2024.</span>
      </li>
      <li class="pub-item">
        <span class="hp-badge">Electronics'24</span>
        <span>Yixin Zhang, Caiyong Wang, <strong>Haiqing Li</strong>, Xianyun Sun, Qichuan Tian, and Guangzhe Zhao. "OcularSeg: Accurate and Efficient Multi-modal Ocular Segmentation in Non-constrained Scenarios." <em>Electronics</em>, 13(10), 1967, 2024.</span>
      </li>
    </ul>
  </div>

  <div class="pub-year-group">
    <div class="pub-year-label">2023</div>
    <ul class="pub-list">
      <li class="pub-item">
        <span class="hp-badge award">IJCB'23 🏆</span>
        <span><strong>Haiqing Li</strong>, Caiyong Wang, Guangzhao Zhao, Zhenan He, Yunlong Wang, and Zhenan Sun. "Sclera-TransFuse: Fusing Swin Transformer and CNN for Accurate Sclera Segmentation." <em>IJCB</em>, 2023. <strong style="color:#92400e;">(Best Student Paper Award)</strong></span>
      </li>
      <li class="pub-item">
        <span class="hp-badge">NCA'23</span>
        <span>Caiyong Wang, <strong>Haiqing Li</strong> (co-first), Wang Ma, Guangzhao Zhao, and Zhenan He. "MetaScleraSeg: An Effective Meta-learning Framework for Generalized Sclera Segmentation." <em>Neural Computing and Applications</em>, 2023.</span>
      </li>
      <li class="pub-item">
        <span class="hp-badge">IJCB'23</span>
        <span>Abhijit Das, Shorena Atreya, Aritra Mukherjee, Matej Vitek, <strong>Haiqing Li</strong>, Caiyong Wang, Guangzhao Zhao, et al. "Sclera Segmentation and Joint Recognition Benchmarking Competition: SSRBC 2023." <em>IJCB</em>, 2023.</span>
      </li>
    </ul>
  </div>
</div>

<!-- ░░ EXPERIENCE (full width) ░░░░░░░░░░░░░░░░░░░░░ -->
<div class="sec-card full" id="experience">
  <div class="sec-title">Research Experience</div>
  <div class="exp-list">
    <div class="exp-item">
      <div class="exp-org">Institute of Automation, Chinese Academy of Sciences (CASIA)</div>
      <div class="exp-role-row">
        <span class="exp-role">Research Intern · Advised by Prof. Yunlong Wang</span>
        <span class="exp-date">Mar 2023 – Jul 2023 · Beijing, China</span>
      </div>
      <ul class="exp-ul">
        <li>Researched <strong>multi-modal ocular recognition</strong> across iris, sclera, and periocular signals to enhance biometric robustness in unconstrained scenarios.</li>
        <li><strong>Outcome:</strong> This work led to the development of "Sclera-TransFuse," which received the <strong>Best Student Paper Award</strong> at IJCB 2023.</li>
      </ul>
    </div>
    <div class="exp-item">
      <div class="exp-org">Institute of Automation, Chinese Academy of Sciences (CASIA)</div>
      <div class="exp-role-row">
        <span class="exp-role">Research Intern · Advised by Prof. Xiangyu Zhu</span>
        <span class="exp-date">Jul 2021 – Sep 2021 · Beijing, China</span>
      </div>
      <ul class="exp-ul">
        <li>Developed <strong>Face Presentation Attack Detection (PAD)</strong> systems utilizing hybrid CNN and Transformer architectures.</li>
        <li>Evaluated model performance on large-scale biometric datasets to improve defense mechanisms against sophisticated spoofing attempts.</li>
      </ul>
    </div>
  </div>
</div>

<!-- ░░ TWO-COL: Teaching + Honors ░░░░░░░░░░░░░░░░░░ -->
<div class="two-col">

  <div class="sec-card" id="teaching">
    <div class="sec-title">Teaching Experience</div>
    <ul class="simple-list">
      <li>CSE 1106: Introduction to Computer Science &amp; Engineering (Spring 2026)</li>
      <li>CSE 1106: Introduction to Computer Science &amp; Engineering (Fall 2025)</li>
      <li>CSE 3310: Fundamentals of Software Engineering (Summer 2025)</li>
      <li>CSE 4322: Software Project Management (Spring 2025)</li>
    </ul>
  </div>

  <div class="sec-card" id="honors">
    <div class="sec-title">Honors &amp; Awards</div>
    <ul class="honor-list">
      <li><strong>Best Student Paper Award</strong>, IJCB 2023</li>
      <li><strong>Winner</strong>, 8th Sclera Segmentation &amp; Recognition Benchmarking Competition (SSRBC 2023), IJCB</li>
      <li><strong>National 2nd &amp; 3rd Prize</strong>, 22nd China Robotics &amp; AI Competition (CAAI), 2020</li>
      <li><strong>Honorable Mention</strong>, Mathematical Contest in Modeling (MCM/ICM), COMAP, 2020</li>
      <li><strong>Finalist</strong>, Academy Award of China Advertising Art Festival, 2020</li>
      <li><strong>First Prize</strong>, Siemens Cup China Intelligent Manufacturing Challenge, 2019</li>
      <li><strong>Most Impactful Project</strong>, Chinese College Students' Volunteer Activities, 2018</li>
    </ul>
  </div>

</div>

<!-- ░░ ACADEMIC SERVICES (full width) ░░░░░░░░░░░░░░ -->
<div class="sec-card full">
  <div class="sec-title">Academic Services</div>
  <div class="srv-group-label">Conference Reviewer</div>
  <ul class="simple-list">
    <li>MICCAI 2025–2026</li>
    <li>AAAI 2026</li>
  </ul>
  <div class="srv-group-label">Journal Reviewer</div>
  <ul class="simple-list">
    <li>Expert Systems with Applications</li>
    <li>Information Fusion</li>
    <li>Knowledge-Based Systems</li>
    <li>Neurocomputing</li>
    <li>Optics and Laser Technology</li>
  </ul>
</div>

<!-- ░░ VISITOR MAP ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ -->
<div class="map-wrap">
  <a href="https://mapmyvisitors.com" target="_blank" rel="noopener">
    <img src="https://mapmyvisitors.com/map.png?d=EkH5u6DzAVe2dAf0ph3ygYjMhrE1Q0UsUmaOQrVlDx8&cl=ffffff&w=520&t=tt" alt="Visitor Map">
  </a>
</div>

</div>
