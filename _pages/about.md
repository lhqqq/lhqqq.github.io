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

<div class="onepage fj">
  <section class="hero" id="top">
    <div class="hero-grid">
      <div class="hero-main">
        <h1>Haiqing Li</h1>
        <div class="hero-meta">PhD Student in Computer Science</div>
        <div class="hero-meta">SMILE Lab, University of Texas at Arlington</div>
        <div class="hero-meta">Arlington, TX, USA</div>
        <div class="hero-meta">
          Email: <a href="mailto:hxl9110@mavs.uta.edu">hxl9110@mavs.uta.edu</a>
        </div>
        <div class="hero-links">
          <a href="https://scholar.google.com/citations?user=Rc0GsFAAAAAJ&hl=zh-CN">Google Scholar</a>
          <span class="sep">|</span>
          <a href="https://github.com/lhqqq">GitHub</a>
          
        </div>
        <p class="subtitle">
           I am a second-year PhD student in Computer Science at the University of Texas at Arlington, 
           advised by <a href="http://ranger.uta.edu/~huang/">Prof. Junzhou Huang</a>. 
          I received my M.S. from Beijing University of Civil Engineering and Architecture 
          (Advised by <a href="https://academia.stackexchange.com/users/caiyong-wang">Prof. Caiyong Wang</a>).
        </p>

        
        <ul class="quick-nav">
          <li><a href="#research">Research</a></li>
          <li><a href="#publications">Publications</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
         
        </ul>
      </div>
      <div class="hero-side">
        <img src="/images/profile.png" alt="Portrait of Haiqing Li">
      </div>
    </div>
  </section>
<div class="seeking-news">
  <p>
    <strong>📢 News:</strong> I am actively seeking <strong>Summer/Fall 2026 Internships</strong>. 
    My research interests include <strong>Multimodal Foundation Models</strong>, 
    <strong>LLM for Healthcare</strong>, and <strong>Biometric Image Analysis</strong>. 
    If you are looking for a researcher with a background in both Computer Vision and NLP, 
    please feel free to <a href="hxl9110@mavs.uta.edu">reach out</a>!
  </p>
</div>
<section id="research">
  <h3 class="section-title">Research Interests</h3>
  <ul class="simple-list">
    <li><strong>LLM Rule-Following:</strong> World Model-based Alignment, Structured Prompt Optimization, and Guideline-driven Reasoning</li>
    <li><strong>Medical Image Analysis:</strong> Clinical-Guided Representation Learning and Multimodal Vision-Language Segmentation</li>
    <li><strong>Biometrics & Security:</strong> Robust Ocular Recognition and Multi-scenario Deepfake Forensics</li>
    <li><strong>Awards & Competitions:</strong> Winner, 8th Sclera Segmentation and Recognition Benchmarking Competition (<strong>IJCB 2023</strong>)</li>
  </ul>
</section>

  <section id="publications">
    <h3 class="section-title">Selected Publications</h3>
    <ol class="simple-list">
      <li>
        C. Wang, <strong>H. Li</strong> (corresponding), G. Zhao, Z. He, Y. Wang, Z. Sun.
        “Sclera-TransFuse: Fusing Swin Transformer and CNN for Accurate Sclera Segmentation and Recognition.”
        IEEE TBIOM, 2024.
      </li>
      <li>
        <strong>H. Li</strong>, C. Wang, G. Zhao, Z. He, Y. Wang, Z. Sun.
        “Sclera-TransFuse: Fusing Swin Transformer and CNN for Accurate Sclera Segmentation.”
        IJCB 2023. Best Student Paper Award.
      </li>
      <li>
        C. Wang, <strong>H. Li</strong> (co-first), W. Ma, G. Zhao, Z. He.
        “MetaScleraSeg: An Effective Meta Learning Framework for Generalized Sclera Segmentation.”
        Neural Computing and Applications, 2023.
      </li>
      <li>
        A. Das, S. Atreya, A. Mukherjee, M. Vitek, <strong>H. Li</strong>, et al.
        “Sclera Segmentation and Joint Recognition Benchmarking Competition: SSRBC 2023.”
        IJCB 2023.
      </li>
    </ol>
  </section>

  <section id="experience">
    <h3 class="section-title">Research &amp; Work Experience</h3>
    <ul class="simple-list">
      <li><strong>Jan 2021–Present:</strong> BUCEA: Ocular biometrics in unconstrained scenarios; meta-learning and Transformer + CNN for sclera segmentation/recognition (NSFC Grant No. 62106015).</li>
      <li><strong>Mar 2023–Jul 2023:</strong> CASIA: Multi-modal ocular recognition across iris, sclera, and periocular signals.</li>
      <li><strong>Jun 2020–May 2021:</strong> CDTU: UAV-based insulator crack detection system with deep learning.</li>
      <li><strong>Jul 2021–Sep 2021:</strong> CASIA: Face presentation attack detection with CNN/Transformer on CASIA-SURF-CeFA.</li>
    </ul>
  </section>

  <section id="education">
    <h3 class="section-title">Education</h3>
    <ul class="simple-list">
      <li><strong>Ph.D. in Computer Science</strong>, University of Texas at Arlington, Sept 2024–present.</li>
      <li><strong>M.Eng. in Mechanical Engineering</strong>, BUCEA, Sept 2021–Jun 2024 (GPA 89.82/100, top 10%).</li>
      <li><strong>B.E. in Electrical Engineering</strong>, Chengdu Technological University, Sept 2017–Jun 2021 (GPA 3.72/4.0, top 1%).</li>
    </ul>
  </section>

  <section id="skills">
    <h3 class="section-title">Skills</h3>
    <ul class="simple-list">
      <li><strong>Programming:</strong> C, C++, Python, MATLAB, Linux.</li>
      <li><strong>Frameworks:</strong> PyTorch, TensorFlow.</li>
      <li><strong>Tools:</strong> Visual Studio, PyCharm, Microsoft Office, CAD, Visio.</li>
      <li><strong>Languages:</strong> Chinese (native), English.</li>
    </ul>
  </section>

  <section id="publications-full">
    <h3 class="section-title">Publications (Full)</h3>
    {% assign publications_page = site.pages | where: "url", "/publications/" | first %}
    {% if publications_page %}
      {{ publications_page.content }}
    {% endif %}
  </section>

  <section id="talks">
    <h3 class="section-title">Talks</h3>
    {% assign talks_page = site.pages | where: "url", "/talks/" | first %}
    {% if talks_page %}
      {{ talks_page.content }}
    {% endif %}
  </section>

  <section id="teaching">
    <h3 class="section-title">Teaching</h3>
    {% assign teaching_page = site.pages | where: "url", "/teaching/" | first %}
    {% if teaching_page %}
      {{ teaching_page.content }}
    {% endif %}
  </section>

  <section id="portfolio">
    <h3 class="section-title">Portfolio</h3>
    {% assign portfolio_page = site.pages | where: "url", "/portfolio/" | first %}
    {% if portfolio_page %}
      {{ portfolio_page.content }}
    {% endif %}
  </section>

  <section id="blog-posts">
    <h3 class="section-title">Blog Posts</h3>
    {% assign posts_page = site.pages | where: "url", "/year-archive/" | first %}
    {% if posts_page %}
      {{ posts_page.content }}
    {% endif %}
  </section>

  <section id="cv">
    <h3 class="section-title">CV</h3>
    {% assign cv_page = site.pages | where: "url", "/cv/" | first %}
    {% if cv_page %}
      {{ cv_page.content }}
    {% endif %}
  </section>

  <section id="guide">
    <h3 class="section-title">Guide</h3>
    {% assign guide_page = site.pages | where: "url", "/markdown/" | first %}
    {% if guide_page %}
      {{ guide_page.content }}
    {% endif %}
  </section>

  <section id="contact">
    <h3 class="section-title">Contact</h3>
    <div>Email: <a href="mailto:Haiqing.Li1998@outlook.com">Haiqing.Li1998@outlook.com</a></div>
    <div>GitHub: <a href="https://github.com/lhqqq">github.com/lhqqq</a></div>
    <div>Google Scholar: <a href="https://scholar.google.com/citations?user=Rc0GsFAAAAAJ&hl=zh-CN">Scholar profile</a></div>
  </section>
</div>
