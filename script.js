(() => {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  let savedTheme;
  try { savedTheme = localStorage.getItem('xyd-theme'); } catch (_) {}
  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    themeButton.setAttribute('aria-label', theme === 'dark' ? '切换至浅色主题' : '切换至深色主题');
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#101823' : '#f8fafc';
  };
  applyTheme(savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'light');
  themeButton.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
    try { localStorage.setItem('xyd-theme', theme); } catch (_) {}
  });

  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const closeMenu = () => { mobileNav.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); };
  menuButton.addEventListener('click', () => {
    mobileNav.hidden = !mobileNav.hidden;
    menuButton.setAttribute('aria-expanded', String(!mobileNav.hidden));
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuButton.focus(); } });
  window.matchMedia('(min-width: 601px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

  document.querySelector('.copy-email').addEventListener('click', async (event) => {
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText(event.currentTarget.dataset.email);
      status.textContent = '邮箱已复制';
    } catch (_) {
      status.textContent = '请长按或选中上方邮箱复制';
    }
  });

  if ('IntersectionObserver' in window) {
    const navLinks = document.querySelectorAll('.desktop-nav a');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            const active = link.getAttribute('href') === '#' + entry.target.id;
            link.classList.toggle('active', active);
            if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
          });
        }
      });
    }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
    document.querySelectorAll('#about, #experience, #contact').forEach(section => observer.observe(section));
  }
})();
