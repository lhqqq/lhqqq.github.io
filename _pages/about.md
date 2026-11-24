---
layout: academic
permalink: /
title: "Haiqing Li"
excerpt: "Haiqing Li is a PhD student at the University of Texas at Arlington, researching LLM rule-following, medical image analysis, biometrics, and protein design and fitness extrapolation."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section id="about" class="about-section" aria-labelledby="about-title">
  <div class="section-heading"><h2 id="about-title">About Me</h2></div>
  <div class="about-copy">
      <p>I am a Ph.D. student in Computer Science at the <strong>University of Texas at Arlington</strong>, advised by <a href="http://ranger.uta.edu/~huang/">Prof. Junzhou Huang</a>. My research focuses on <strong>LLM rule-following</strong>, <strong>medical image analysis</strong>, <strong>biometrics</strong>, and <strong>protein design and fitness extrapolation</strong>.</p>
      <p>Previously, I received my master’s degree from Beijing University of Civil Engineering and Architecture, advised by <a href="https://academia.caiyong.wang/">Prof. Caiyong Wang</a>, and worked as a research intern at the Institute of Automation, Chinese Academy of Sciences.</p>
  </div>
  <details class="background-details">
    <summary>Education &amp; research experience</summary>
    <div class="background-content">
      <h3>Education</h3>
      <ul>
        <li><strong>Ph.D. in Computer Science</strong> · University of Texas at Arlington · 2024–present</li>
        <li><strong>M.Eng. in Mechanical Engineering</strong> · Beijing University of Civil Engineering and Architecture · 2021–2024</li>
        <li><strong>B.E. in Electrical Engineering and Automation</strong> · Chengdu Technological University · 2017–2021</li>
      </ul>
      <h3>Research internships</h3>
      <ul>
        <li><strong>CASIA</strong> · Multimodal ocular recognition, advised by <a href="https://wylcasia.github.io/">Prof. Yunlong Wang</a> · Mar–Jul 2023</li>
        <li><strong>CASIA</strong> · Face presentation attack detection, advised by <a href="https://xiangyuzhu-open.github.io/homepage/">Prof. Xiangyu Zhu</a> · Jul–Sep 2021</li>
      </ul>
    </div>
  </details>
</section>

<section id="research" class="content-section" aria-labelledby="research-title">
  <div class="section-heading"><h2 id="research-title">Research</h2></div>
  <p>My research spans language models, medical imaging, biometric analysis, and protein design. I work on the following directions:</p>
  <ul class="research-list">
    {% for area in site.data.homepage.research %}
    <li><strong>{{ area.title }}</strong><span>{{ area.description }}</span></li>
    {% endfor %}
  </ul>
</section>


<section id="news" class="content-section" aria-labelledby="news-title">
  <div class="section-heading"><h2 id="news-title">News</h2></div>
  <aside class="news-highlight" aria-label="Internship opportunities">
    <p class="news-highlight-label">Seeking Internship Opportunities</p>
    <p>I am actively seeking research internships in <strong>LLM rule-following</strong>, <strong>medical image analysis</strong>, and <strong>biometrics</strong>. Please feel free to <a href="mailto:{{ site.author.email }}">contact me</a>.</p>
  </aside>
  <div class="news-panel" role="region" aria-labelledby="news-title" tabindex="0">
    <ul class="news-list">
    {% for item in site.data.homepage.news %}
    <li><time datetime="{{ item.date }}">[{{ item.date | append: '-01' | date: '%b. %Y' }}]</time> <span>{{ item.text }}</span></li>
    {% endfor %}
    </ul>
  </div>
</section>

<section id="publications" class="content-section" aria-labelledby="publications-title">
  <div class="section-heading">
    <h2 id="publications-title">Selected Publications</h2>
    <a class="section-link" href="{{ '/publications/' | relative_url }}">All publications</a>
  </div>
  <div class="publication-list">
    {% for paper in site.data.selected_publications %}
    {% include selected-publication.html paper=paper %}
    {% endfor %}
  </div>
</section>

<section id="service" class="content-section" aria-labelledby="service-title">
  <div class="section-heading"><h2 id="service-title">Academic Service</h2></div>
  <dl class="service-list">
    <div><dt>Conference Reviewer</dt><dd>{{ site.data.homepage.conference_service }}</dd></div>
    <div><dt>Journal Reviewer</dt><dd>{{ site.data.homepage.journal_service }}</dd></div>
  </dl>
  <details class="background-details" open>
    <summary>Teaching Assistant at UT Arlington</summary>
    <div class="background-content">
      <ul>
        <li><strong>CSE 5311</strong> · Design and Analysis of Algorithms · Fall 2026</li>
        <li><strong>CSE 1106</strong> · Introduction to Computer Science &amp; Engineering · Spring 2026, Fall 2025</li>
        <li><strong>CSE 3310</strong> · Fundamentals of Software Engineering · Summer 2025</li>
        <li><strong>CSE 4322</strong> · Software Project Management · Spring 2025</li>
      </ul>
    </div>
  </details>
</section>

<section id="awards" class="content-section awards-section" aria-labelledby="awards-title">
  <div class="section-heading"><h2 id="awards-title">Honors &amp; Awards</h2></div>
  <ul class="awards-list">
    {% for award in site.data.homepage.awards %}
    <li{% if award.featured %} class="award-featured"{% endif %}>
      <span class="award-year">{{ award.year }}</span>
      <div><strong>{% if award.url %}<a href="{{ award.url }}">{{ award.title }}</a>{% else %}{{ award.title }}{% endif %}</strong><span class="award-organization">{{ award.organization }}</span></div>
    </li>
    {% endfor %}
  </ul>
</section>

<!-- Preserve the original MapMyVisitors identifier when updating this widget. -->
<div class="visitor-map">
  <a href="https://mapmyvisitors.com" target="_blank" rel="noopener" aria-label="View visitor map (opens in a new tab)">
    <img src="https://mapmyvisitors.com/map.png?d=EkH5u6DzAVe2dAf0ph3ygYjMhrE1Q0UsUmaOQrVlDx8&amp;cl=ffffff&amp;w=520&amp;t=tt" alt="Visitor Map" loading="lazy" decoding="async">
  </a>
</div>
