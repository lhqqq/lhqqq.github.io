---
layout: academic
permalink: /
title: "Haiqing Li"
excerpt: "Haiqing Li is a PhD student at the University of Texas at Arlington, researching LLM rule-following, medical image analysis, and biometrics."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section id="about" class="about-section" aria-labelledby="about-title">
  <div class="about-intro">
    <div class="about-copy">
      <p class="eyebrow">Ph.D. Student · Computer Science</p>
      <h1 id="about-title">Haiqing Li</h1>
      <p class="affiliation">SMILE Lab <span aria-hidden="true">/</span> University of Texas at Arlington</p>
      <p>I am a Ph.D. student in Computer Science at the <strong>University of Texas at Arlington</strong>, advised by <a href="http://ranger.uta.edu/~huang/">Prof. Junzhou Huang</a>. My research focuses on <strong>LLM rule-following</strong>, <strong>medical image analysis</strong>, and <strong>biometrics</strong>.</p>
      <p>Previously, I received my master’s degree from Beijing University of Civil Engineering and Architecture, advised by <a href="https://academia.caiyong.wang/">Prof. Caiyong Wang</a>, and worked as a research intern at the Institute of Automation, Chinese Academy of Sciences.</p>
      <div class="profile-links" aria-label="Contact and profiles">
        <a class="contact-link" href="mailto:{{ site.author.email }}">Email</a>
        <a href="{{ site.author.googlescholar }}">Google Scholar</a>
        <a href="https://github.com/{{ site.author.github }}">GitHub</a>
      </div>
    </div>
    <figure class="portrait">
      <img src="{{ '/images/profile.jpg' | relative_url }}" width="240" height="280" alt="Haiqing Li" fetchpriority="high">
      <figcaption>Arlington, Texas</figcaption>
    </figure>
  </div>
  <div class="research-interests" aria-label="Research interests">
    {% for area in site.data.homepage.research %}
    <div class="research-interest">
      <h2>{{ area.title }}</h2>
      <p>{{ area.description }}</p>
    </div>
    {% endfor %}
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

<section id="news" class="content-section" aria-labelledby="news-title">
  <div class="section-heading"><h2 id="news-title">News</h2></div>
  <ul class="news-list">
    {% for item in site.data.homepage.news %}
    <li><time datetime="{{ item.date }}">{{ item.date | append: '-01' | date: '%b %Y' }}</time><div>{{ item.text }}</div></li>
    {% endfor %}
  </ul>
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
  <details class="background-details">
    <summary>Teaching at UT Arlington</summary>
    <div class="background-content">
      <ul>
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
