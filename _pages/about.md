---
permalink: /
title: "Home"
excerpt: "PhD student focused on biometric image analysis, deepfake detection, and medical image analysis."
author_profile: false
classes: wide
redirect_from:
  - /about/
  - /about.html
---

<div class="onepage">
  <section class="hero reveal" id="top">
    <div class="hero-grid">
      <div>
        <div class="chip-row">
          <span class="chip">PhD Student</span>
          <span class="chip">SMILE Lab @ UTA</span>
          <span class="chip">Biometrics + Medical Imaging</span>
        </div>
        <h1>Haiqing Li</h1>
        <p class="subtitle">
          I study biometric image analysis (iris/sclera), deepfake detection, and medical image analysis.
          I am a first-year PhD student in Computer Science at the University of Texas at Arlington,
          advised by Prof. Junzhou Huang.
        </p>
        <div class="hero-actions">
          <a class="op-btn primary" href="mailto:Haiqing.Li1998@outlook.com">Email</a>
          <a class="op-btn" href="https://github.com/lhqqq">GitHub</a>
          <a class="op-btn" href="https://scholar.google.com/citations?user=Rc0GsFAAAAAJ&hl=zh-CN">Google Scholar</a>
        </div>
        <div class="chip-row">
          <span class="chip">Iris &amp; Sclera Recognition</span>
          <span class="chip">Deepfake &amp; PAD</span>
          <span class="chip">Multi-modal Learning</span>
        </div>
      </div>
      <div class="hero-card">
        <img src="/images/profile.png" alt="Portrait of Haiqing Li">
        <div class="card-meta">
          <div><strong>Affiliation</strong> SMILE Lab, UT Arlington</div>
          <div><strong>Location</strong> Arlington, TX, USA</div>
          <div><strong>Awards</strong> IJCB 2023 Best Student Paper</div>
        </div>
      </div>
    </div>
  </section>

  <section id="research" class="reveal delay-1">
    <h2 class="section-title">Research Focus</h2>
    <div class="grid">
      <div class="panel">
        <strong>Biometrics</strong>
        Iris and sclera recognition for robust identity verification in unconstrained settings.
      </div>
      <div class="panel">
        <strong>Deepfake &amp; PAD</strong>
        Detection of presentation attacks with CNN/Transformer models.
      </div>
      <div class="panel">
        <strong>Medical Imaging</strong>
        Segmentation and recognition for medical image analysis.
      </div>
      <div class="panel">
        <strong>Competitions</strong>
        Winner, 8th Sclera Segmentation and Recognition Benchmarking Competition (IJCB 2023).
      </div>
    </div>
  </section>

  <section id="publications" class="reveal delay-2">
    <h2 class="section-title">Selected Publications</h2>
    <div class="pub-list">
      <div class="pub">
        C. Wang, <strong>H. Li</strong> (corresponding), G. Zhao, Z. He, Y. Wang, Z. Sun.
        “Sclera-TransFuse: Fusing Swin Transformer and CNN for Accurate Sclera Segmentation and Recognition.”
        IEEE TBIOM, 2024.
      </div>
      <div class="pub">
        <strong>H. Li</strong>, C. Wang, G. Zhao, Z. He, Y. Wang, Z. Sun.
        “Sclera-TransFuse: Fusing Swin Transformer and CNN for Accurate Sclera Segmentation.”
        IJCB 2023. Best Student Paper Award.
      </div>
      <div class="pub">
        C. Wang, <strong>H. Li</strong> (co-first), W. Ma, G. Zhao, Z. He.
        “MetaScleraSeg: An Effective Meta Learning Framework for Generalized Sclera Segmentation.”
        Neural Computing and Applications, 2023.
      </div>
      <div class="pub">
        A. Das, S. Atreya, A. Mukherjee, M. Vitek, <strong>H. Li</strong>, et al.
        “Sclera Segmentation and Joint Recognition Benchmarking Competition: SSRBC 2023.”
        IJCB 2023.
      </div>
    </div>
  </section>

  <section id="experience" class="reveal delay-3">
    <h2 class="section-title">Research &amp; Work Experience</h2>
    <div class="timeline">
      <div class="timeline-item">
        <span>Jan 2021–Present</span>
        <div>BUCEA: Ocular biometrics in unconstrained scenarios; meta-learning and Transformer + CNN for sclera segmentation/recognition (NSFC Grant No. 62106015).</div>
      </div>
      <div class="timeline-item">
        <span>Mar 2023–Jul 2023</span>
        <div>CASIA: Multi-modal ocular recognition across iris, sclera, and periocular signals.</div>
      </div>
      <div class="timeline-item">
        <span>Jun 2020–May 2021</span>
        <div>CDTU: UAV-based insulator crack detection system with deep learning.</div>
      </div>
      <div class="timeline-item">
        <span>Jul 2021–Sep 2021</span>
        <div>CASIA: Face presentation attack detection with CNN/Transformer on CASIA-SURF-CeFA.</div>
      </div>
    </div>
  </section>

  <section class="reveal delay-3">
    <h2 class="section-title">Education</h2>
    <div class="grid">
      <div class="panel">
        <strong>Ph.D. in Computer Science</strong>
        University of Texas at Arlington, Sept 2024–present
      </div>
      <div class="panel">
        <strong>M.Eng. in Mechanical Engineering</strong>
        BUCEA, Sept 2021–Jun 2024 (GPA 89.82/100, top 10%)
      </div>
      <div class="panel">
        <strong>B.E. in Electrical Engineering</strong>
        Chengdu Technological University, Sept 2017–Jun 2021 (GPA 3.72/4.0, top 1%)
      </div>
    </div>
  </section>

  <section class="reveal delay-3">
    <h2 class="section-title">Skills</h2>
    <div class="grid">
      <div class="panel">
        <strong>Programming</strong>
        C, C++, Python, MATLAB, Linux
      </div>
      <div class="panel">
        <strong>Frameworks</strong>
        PyTorch, TensorFlow
      </div>
      <div class="panel">
        <strong>Tools</strong>
        Visual Studio, PyCharm, Microsoft Office, CAD, Visio
      </div>
      <div class="panel">
        <strong>Languages</strong>
        Chinese (native), English
      </div>
    </div>
  </section>

  <section id="publications-full" class="reveal delay-3">
    <h2 class="section-title">Publications (Full)</h2>
    {% assign publications_page = site.pages | where: "url", "/publications/" | first %}
    {% if publications_page %}
      {{ publications_page.content }}
    {% endif %}
  </section>

  <section id="talks" class="reveal delay-3">
    <h2 class="section-title">Talks</h2>
    {% assign talks_page = site.pages | where: "url", "/talks/" | first %}
    {% if talks_page %}
      {{ talks_page.content }}
    {% endif %}
  </section>

  <section id="teaching" class="reveal delay-3">
    <h2 class="section-title">Teaching</h2>
    {% assign teaching_page = site.pages | where: "url", "/teaching/" | first %}
    {% if teaching_page %}
      {{ teaching_page.content }}
    {% endif %}
  </section>

  <section id="portfolio" class="reveal delay-3">
    <h2 class="section-title">Portfolio</h2>
    {% assign portfolio_page = site.pages | where: "url", "/portfolio/" | first %}
    {% if portfolio_page %}
      {{ portfolio_page.content }}
    {% endif %}
  </section>

  <section id="blog-posts" class="reveal delay-3">
    <h2 class="section-title">Blog Posts</h2>
    {% assign posts_page = site.pages | where: "url", "/year-archive/" | first %}
    {% if posts_page %}
      {{ posts_page.content }}
    {% endif %}
  </section>

  <section id="cv" class="reveal delay-3">
    <h2 class="section-title">CV</h2>
    {% assign cv_page = site.pages | where: "url", "/cv/" | first %}
    {% if cv_page %}
      {{ cv_page.content }}
    {% endif %}
  </section>

  <section id="guide" class="reveal delay-3">
    <h2 class="section-title">Guide</h2>
    {% assign guide_page = site.pages | where: "url", "/markdown/" | first %}
    {% if guide_page %}
      {{ guide_page.content }}
    {% endif %}
  </section>

  <section id="contact" class="reveal delay-3">
    <div class="contact-card">
      <h2 class="section-title">Contact</h2>
      <div>Email: <a href="mailto:Haiqing.Li1998@outlook.com">Haiqing.Li1998@outlook.com</a></div>
      <div>GitHub: <a href="https://github.com/lhqqq">github.com/lhqqq</a></div>
      <div>Google Scholar: <a href="https://scholar.google.com/citations?user=Rc0GsFAAAAAJ&hl=zh-CN">Scholar profile</a></div>
    </div>
  </section>
</div>
