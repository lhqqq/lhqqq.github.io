(() => {
  const header = document.querySelector('.site-header');
  const links = [...document.querySelectorAll('[data-section]')];
  const sections = links.map(link => document.getElementById(link.dataset.section)).filter(Boolean);

  const updateNavigation = () => {
    if (!sections.length) return;
    const offset = header.getBoundingClientRect().height + 60;
    let current = sections[0].id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= offset) current = section.id;
    }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      current = sections[sections.length - 1].id;
    }
    for (const link of links) {
      if (link.dataset.section === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  };

  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(() => { updateNavigation(); scheduled = false; });
  }, { passive: true });
  window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
    updateNavigation();
  });
  document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
  updateNavigation();
})();
