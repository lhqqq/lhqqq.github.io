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
/* ── Reset & base ─────────────────────────────────── */
.hp-wrap { max-width: 900px; margin: 0 auto; padding: 0 1rem 4rem; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #1a1a1a; }

/* ── Hero ─────────────────────────────────────────── */
.hp-hero { display: grid; grid-template-columns: 1fr auto; gap: 2.5rem; align-items: start; padding: 2rem 0 1.8rem; border-bottom: 1px solid #e8ecf0; }
.hp-hero-photo img { width: 140px; height: 140px; object-fit: cover; border-radius: 50%; border: 3px solid #e8ecf0; display: block; }
.hp-name { font-size: 2rem; font-weight: 700; color: #0f172a; margin: 0 0 0.3rem; letter-spacing: -0.02em; }
.hp-pos { font-size: 0.95rem; color: #475569; line-height: 1.6; margin: 0; }
.hp-links { display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 0.9rem; }
.hp-links a { display: inline-flex; align-items: center; gap: 0.3rem; padding: 0.3rem 0.85rem; font-size: 0.82rem; font-weight: 500; border: 1px solid #cbd5e1; border-radius: 999px; color: #334155; text-decoration: none; transition: border-color .15s, color .15s; }
.hp-links a:hover { border-color: #3b82f6; color: #2563eb; }
.hp-bio { margin-top: 1rem; font-size: 0.96rem; line-height: 1.75; color: #374151; }
.hp-quicknav { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem; padding: 0; list-style: none; }
.hp-quicknav a { display: inline-block; padding: 0.22rem 0.75rem; font-size: 0.82rem; border: 1px solid #dde3ec; border-radius: 999px; color: #475569; text-decoration: none; transition: background .15s, color .15s; }
.hp-quicknav a:hover { background: #f1f5f9; color: #1e293b; }

/* ── News banner ──────────────────────────────────── */
.hp-news { margin-top: 1.5rem; background: #f0f7ff; border-left: 4px solid #3b82f6; border-radius: 0 8px 8px 0; padding: 0.85rem 1.1rem; font-size: 0.93rem; line-height: 1.65; color: #1e3a5f; }

/* ── Section ──────────────────────────────────────── */
.hp-section { margin-top: 2.5rem; }
.hp-section-title { font-size: 1.05rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #3b82f6; margin: 0 0 1.1rem; padding-bottom: 0.45rem; border-bottom: 2px solid #e8ecf0; }

/* ── Research interests ───────────────────────────── */
.hp-ri { list-style: none; padding: 0; margin: 0; }
.hp-ri li { padding: 0.45em 0; border-bottom: 1px solid #f1f5f9; font-size: 0.95rem; line-height: 1.6; color: #374151; }
.hp-ri li:last-child { border-bottom: none; }

/* ── Publications ─────────────────────────────────── */
.hp-year { font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; margin: 1.5rem 0 0.6rem; }
.hp-pubs { list-style: none; padding: 0; margin: 0; }
.hp-pubs li { display: flex; gap: 0.7rem; align-items: baseline; padding: 0.55em 0; border-bottom: 1px solid #f1f5f9; font-size: 0.93rem; line-height: 1.65; color: #374151; }
.hp-pubs li:last-child { border-bottom: none; }
.hp-badge { display: inline-flex; align-items: center; flex-shrink: 0; padding: 0.15rem 0.6rem; font-size: 0.75rem; font-weight: 700; border-radius: 4px; background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe; white-space: nowrap; }

/* ── Experience ───────────────────────────────────── */
.hp-exp-item { margin-bottom: 1.5rem; }
.hp-exp-item:last-child { margin-bottom: 0; }
.hp-exp-header { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; flex-wrap: wrap; }
.hp-exp-org { font-size: 1rem; font-weight: 600; color: #0f172a; }
.hp-exp-loc { font-size: 0.85rem; color: #94a3b8; }
.hp-exp-role-row { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; flex-wrap: wrap; margin-top: 0.15rem; }
.hp-exp-role { font-size: 0.92rem; color: #475569; }
.hp-exp-date { font-size: 0.85rem; color: #94a3b8; white-space: nowrap; }
.hp-exp-ul { margin: 0.5rem 0 0 1rem; padding: 0; list-style: disc; }
.hp-exp-ul li { font-size: 0.92rem; line-height: 1.65; color: #374151; margin: 0.25rem 0; }

/* ── Education ────────────────────────────────────── */
.hp-edu { list-style: none; padding: 0; margin: 0; }
.hp-edu li { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; padding: 0.55em 0; border-bottom: 1px solid #f1f5f9; font-size: 0.93rem; line-height: 1.6; flex-wrap: wrap; }
.hp-edu li:last-child { border-bottom: none; }
.hp-edu-date { color: #94a3b8; font-size: 0.85rem; white-space: nowrap; }

/* ── Teaching ─────────────────────────────────────── */
.hp-teach { list-style: none; padding: 0; margin: 0; }
.hp-teach li { padding: 0.45em 0; border-bottom: 1px solid #f1f5f9; font-size: 0.93rem; line-height: 1.6; color: #374151; }
.hp-teach li:last-child { border-bottom: none; }

/* ── Honors ───────────────────────────────────────── */
.hp-honors { list-style: none; padding: 0; margin: 0; }
.hp-honors li { display: flex; gap: 0.6rem; align-items: baseline; padding: 0.45em 0; border-bottom: 1px solid #f1f5f9; font-size: 0.92rem; line-height: 1.6; color: #374151; }
.hp-honors li:last-child { border-bottom: none; }
.hp-honors li::before { content: "▸"; color: #3b82f6; font-size: 0.75em; flex-shrink: 0; margin-top: 0.2em; }

/* ── Services ─────────────────────────────────────── */
.hp-srv-label { font-size: 0.9rem; font-weight: 600; color: #334155; margin: 0.9rem 0 0.4rem; }
.hp-srv { list-style: none; padding: 0; margin: 0; }
.hp-srv li { padding: 0.35em 0; font-size: 0.92rem; line-height: 1.6; color: #374151; border-bottom: 1px solid #f1f5f9; }
.hp-srv li:last-child { border-bottom: none; }

/* ── Visitor map ──────────────────────────────────── */
.hp-map { margin-top: 3rem; text-align: center; }
.hp-map img { max-width: 100%; height: auto; border: 1px solid #e2e8f0; border-radius: 10px; }

/* ── Mobile ───────────────────────────────────────── */
@media (max-width: 640px) {
  .hp-hero { grid-template-columns: 1fr; }
  .hp-hero-photo { order: -1; }
  .hp-hero-photo img { width: 100px; height: 100px; }
  .hp-name { font-size: 1.6rem; }
}
</style>

<div class="hp-wrap">

<!-- HERO -->
<div class="hp-hero">
  <div class="hp-hero-main">
    <h1 class="hp-name">Haiqing Li</h1>
    <p class="hp-pos">
      PhD Student in Computer Science<br>
      SMILE Lab, University of Texas at Arlington<br>
      Arlington, TX, USA<br>
      Email: <a href="mailto:hxl9110@mavs.uta.edu">hxl9110@mavs.uta.edu</a>
    </p>
    <div class="hp-links">
      <a href="https://scholar.google.com/citations?user=Rc0GsFAAAAAJ&hl=zh-CN">Google Scholar</a>
      <a href="https://github.com/lhqqq">GitHub</a>
    </div>
    <p class="hp-bio">
      I am a second-year PhD student in Computer Science at the University of Texas at Arlington,
      advised by <a href="http://ranger.uta.edu/~huang/">Prof. Junzhou Huang</a>.
      I received my M.S. from Beijing University of Civil Engineering and Architecture, advised by <a href="https://academia.caiyong.wang/">Prof. Caiyong Wang</a>.
    </p>
    <ul class="hp-quicknav">
      <li><a href="#research">Research</a></li>
      <li><a href="#publications">Publications</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#teaching">Teaching</a></li>
      <li><a href="#honors">Honors</a></li>
    </ul>
  </div>
  <div class="hp-hero-photo">
    <img src="/images/profile.png" alt="Portrait of Haiqing Li">
  </div>
</div>

<!-- NEWS -->
<div class="hp-news">
  <strong>📢 News:</strong> I am actively seeking <strong>Summer/Fall 2026 Internships</strong>.
  My research focuses on <strong>LLM Rule-Following (World Models/Alignment)</strong>,
  <strong>Multimodal Learning for Healthcare</strong>, and <strong>Secure Biometric Analysis</strong>.
  With a track record of bridging <strong>CV and NLP</strong>,
  I am eager to contribute to cutting-edge AI research.
  Please feel free to <a href="mailto:hxl9110@mavs.uta.edu">reach out</a>!
</div>

<!-- RESEARCH INTERESTS -->
<div class="hp-section" id="research">
  <div class="hp-section-title">Research Interests</div>
  <ul class="hp-ri">
    <li><strong>LLM Rule-Following:</strong> World Model-based Alignment, Structured Prompt Optimization, and Guideline-driven Reasoning</li>
    <li><strong>Medical Image Analysis:</strong> Clinical-Guided Representation Learning and Multimodal Vision-Language Segmentation</li>
    <li><strong>Biometrics &amp; Security:</strong> Robust Ocular Recognition and Multi-scenario Deepfake Forensics</li>
  </ul>
</div>

<!-- PUBLICATIONS -->
<div class="hp-section" id="publications">
  <div class="hp-section-title">Publications</div>

  <div class="hp-year">2026</div>
  <ul class="hp-pubs">
    <li>
      <span class="hp-badge">AAAI'26</span>
      <span>Wenliang Zhong, <strong>Haiqing Li</strong>, Thao M. Dang, Feng Jiang, Hehuan Ma, Yuzhi Guo, Jean Gao, and Junzhou Huang. "Learning from Guidelines: Structured Prompt Optimization for Expert Annotation Tasks." <em>The 40th AAAI Conference on Artificial Intelligence (AAAI)</em>, 2026.</span>
    </li>
  </ul>

  <div class="hp-year">2025</div>
  <ul class="hp-pubs">
    <li>
      <span class="hp-badge">MICCAI'25</span>
      <span>Thao M. Dang, <strong>Haiqing Li</strong>, Yuzhi Guo, Hehuan Ma, Feng Jiang, Yuawei Miao, Qifeng Zhou, Junzhou Huang. "HAGE: Hierarchical Alignment Gene-Enhanced Pathology Representation Learning with Spatial Transcriptomics." <em>MICCAI</em>, 2025.</span>
    </li>
    <li>
      <span class="hp-badge">MICCAI'25</span>
      <span><strong>Haiqing Li</strong>, Yuzhi Guo, Feng Jiang, Thao M. Dang, Hehuan Ma, Qifeng Zhou, Junzhou Huang. "Text-Guided Multi-Instance Learning for Scoliosis Screening via Gait Video Analysis." <em>MICCAI</em>, 2025.</span>
    </li>
    <li>
      <span class="hp-badge">arXiv</span>
      <span>Qifeng Zhou, Thao M. Dang, Wenliang Zhong, Yuzhi Guo, Hehuan Ma, Saiyang Na, <strong>Haiqing Li</strong>, Junzhou Huang. "Mllm4pue: Toward Universal Embeddings in Digital Pathology through Multimodal LLMs." <em>arXiv:2502.07221</em>, 2025.</span>
    </li>
    <li>
      <span class="hp-badge">arXiv</span>
      <span><strong>Haiqing Li</strong>, Yuzhi Guo, Feng Jiang, Qiang Zhou, Hehuan Ma, Junzhou Huang. "Leveraging Gait Patterns as Biomarkers: An Attention-guided Deep Multiple Instance Learning Network for Scoliosis Classification." <em>arXiv:2504.03894</em>, 2025.</span>
    </li>
  </ul>

  <div class="hp-year">2024</div>
  <ul class="hp-pubs">
    <li>
      <span class="hp-badge">TBIOM'24</span>
      <span>Caiyong Wang, <strong>Haiqing Li</strong> (corresponding), Yi Zhang, Guangzhao Zhao, Yunlong Wang, and Zhenan Sun. "Sclera-TransFuse: Fusing Vision Transformer and CNN for Accurate Sclera Segmentation and Recognition." <em>IEEE Transactions on Biometrics, Behavior, and Identity Science (TBIOM)</em>, 2024.</span>
    </li>
    <li>
      <span class="hp-badge">Electronics'24</span>
      <span>Yixin Zhang, Caiyong Wang, <strong>Haiqing Li</strong>, Xianyun Sun, Qichuan Tian, and Guangzhe Zhao. "OcularSeg: Accurate and Efficient Multi-modal Ocular Segmentation in Non-constrained Scenarios." <em>Electronics</em>, 13(10), 1967, 2024.</span>
    </li>
  </ul>

  <div class="hp-year">2023</div>
  <ul class="hp-pubs">
    <li>
      <span class="hp-badge">IJCB'23</span>
      <span><strong>Haiqing Li</strong>, Caiyong Wang, Guangzhao Zhao, Zhenan He, Yunlong Wang, and Zhenan Sun. "Sclera-TransFuse: Fusing Swin Transformer and CNN for Accurate Sclera Segmentation." <em>IEEE International Joint Conference on Biometrics (IJCB)</em>, 2023. <strong style="color:#b45309;">(Best Student Paper Award)</strong></span>
    </li>
    <li>
      <span class="hp-badge">NCA'23</span>
      <span>Caiyong Wang, <strong>Haiqing Li</strong> (co-first), Wang Ma, Guangzhao Zhao, and Zhenan He. "MetaScleraSeg: An Effective Meta-learning Framework for Generalized Sclera Segmentation." <em>Neural Computing and Applications</em>, 2023.</span>
    </li>
    <li>
      <span class="hp-badge">IJCB'23</span>
      <span>Abhijit Das, Shorena Atreya, Aritra Mukherjee, Matej Vitek, <strong>Haiqing Li</strong>, Caiyong Wang, Guangzhao Zhao, et al. "Sclera Segmentation and Joint Recognition Benchmarking Competition: SSRBC 2023." <em>IJCB</em>, 2023.</span>
    </li>
  </ul>
</div>

<!-- RESEARCH EXPERIENCE -->
<div class="hp-section" id="experience">
  <div class="hp-section-title">Research Experience</div>

  <div class="hp-exp-item">
    <div class="hp-exp-header">
      <span class="hp-exp-org">Institute of Automation, Chinese Academy of Sciences (CASIA)</span>
      <span class="hp-exp-loc">Beijing, China</span>
    </div>
    <div class="hp-exp-role-row">
      <span class="hp-exp-role">Research Intern (Advised by Prof. Yunlong Wang)</span>
      <span class="hp-exp-date">Mar 2023 – Jul 2023</span>
    </div>
    <ul class="hp-exp-ul">
      <li>Researched <strong>multi-modal ocular recognition</strong> across iris, sclera, and periocular signals to enhance biometric robustness in unconstrained scenarios.</li>
      <li><strong>Outcome:</strong> This work led to the development of "Sclera-TransFuse," which received the <strong>Best Student Paper Award</strong> at IJCB 2023.</li>
    </ul>
  </div>

  <div class="hp-exp-item">
    <div class="hp-exp-header">
      <span class="hp-exp-org">Institute of Automation, Chinese Academy of Sciences (CASIA)</span>
      <span class="hp-exp-loc">Beijing, China</span>
    </div>
    <div class="hp-exp-role-row">
      <span class="hp-exp-role">Research Intern (Advised by Prof. Xiangyu Zhu)</span>
      <span class="hp-exp-date">Jul 2021 – Sep 2021</span>
    </div>
    <ul class="hp-exp-ul">
      <li>Developed <strong>Face Presentation Attack Detection (PAD)</strong> systems utilizing hybrid CNN and Transformer architectures.</li>
      <li>Evaluated model performance on large-scale biometric datasets to improve defense mechanisms against sophisticated spoofing attempts.</li>
    </ul>
  </div>
</div>

<!-- EDUCATION -->
<div class="hp-section" id="education">
  <div class="hp-section-title">Education</div>
  <ul class="hp-edu">
    <li>
      <span><strong>Ph.D. in Computer Science</strong>, University of Texas at Arlington</span>
      <span class="hp-edu-date">Sept 2024 – present</span>
    </li>
    <li>
      <span><strong>M.Eng. in Mechanical Engineering</strong>, BUCEA &nbsp;·&nbsp; GPA 89.82/100, top 10%</span>
      <span class="hp-edu-date">Sept 2021 – Jun 2024</span>
    </li>
    <li>
      <span><strong>B.E. in Electrical Engineering</strong>, Chengdu Technological University &nbsp;·&nbsp; GPA 3.72/4.0, top 1%</span>
      <span class="hp-edu-date">Sept 2017 – Jun 2021</span>
    </li>
  </ul>
</div>

<!-- TEACHING -->
<div class="hp-section" id="teaching">
  <div class="hp-section-title">Teaching Experience</div>
  <ul class="hp-teach">
    <li>CSE 1106: Introduction to Computer Science &amp; Engineering (Spring 2026)</li>
    <li>CSE 1106: Introduction to Computer Science &amp; Engineering (Fall 2025)</li>
    <li>CSE 3310: Fundamentals of Software Engineering (Summer 2025)</li>
    <li>CSE 4322: Software Project Management (Spring 2025)</li>
  </ul>
</div>

<!-- HONORS -->
<div class="hp-section" id="honors">
  <div class="hp-section-title">Honors &amp; Awards</div>
  <ul class="hp-honors">
    <li><strong>Best Student Paper Award</strong>, IEEE International Joint Conference on Biometrics (IJCB), 2023.</li>
    <li><strong>Winner</strong>, 8th Sclera Segmentation and Recognition Benchmarking Competition (SSRBC 2023), IJCB, Jun 2023.</li>
    <li><strong>National Second Prize &amp; National Third Prize</strong>, 22nd China Robotics and Artificial Intelligence Competition, CAAI, Jul 2020.</li>
    <li><strong>Honorable Mention</strong>, Mathematical Contest in Modeling (MCM/ICM), COMAP, Apr 2020.</li>
    <li><strong>Finalist</strong>, Academy Award of China Advertising Art Festival for College Students, Mar 2020.</li>
    <li><strong>First Prize</strong>, National Preliminary Competition of Siemens Cup China Intelligent Manufacturing Challenge, Jul 2019.</li>
    <li><strong>Most Impactful Project</strong>, Chinese College Students' Volunteer Activities for the Rural Revitalization, 2018.</li>
  </ul>
</div>

<!-- ACADEMIC SERVICES -->
<div class="hp-section">
  <div class="hp-section-title">Academic Services</div>
  <div class="hp-srv-label">Conference Reviewer</div>
  <ul class="hp-srv">
    <li>MICCAI 2025–2026</li>
    <li>AAAI 2026</li>
  </ul>
  <div class="hp-srv-label">Journal Reviewer</div>
  <ul class="hp-srv">
    <li>Expert Systems with Applications</li>
    <li>Information Fusion</li>
    <li>Knowledge-Based Systems</li>
    <li>Neurocomputing</li>
    <li>Optics and Laser Technology</li>
  </ul>
</div>

<!-- VISITOR MAP -->
<div class="hp-map">
  <a href="https://mapmyvisitors.com" target="_blank" rel="noopener">
    <img src="https://mapmyvisitors.com/map.png?d=EkH5u6DzAVe2dAf0ph3ygYjMhrE1Q0UsUmaOQrVlDx8&cl=ffffff&w=520&t=tt" alt="Visitor Map">
  </a>
</div>

</div>

<style>
@media (max-width: 640px) {
  .hp-hero { grid-template-columns: 1fr !important; }
  .hp-hero-photo { order: -1; }
}
</style>
