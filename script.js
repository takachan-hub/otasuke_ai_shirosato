const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'メニューを開く');
    });
  });
}

const revealTargets = document.querySelectorAll('[data-reveal]');

if ('IntersectionObserver' in window && revealTargets.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}

const copyButton = document.querySelector('[data-copy-template]');
const templateText = document.querySelector('#contact-template-text');

if (copyButton && templateText) {
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(templateText.textContent.trim());
      const originalLabel = copyButton.textContent;
      copyButton.textContent = 'コピーしました';
      setTimeout(() => {
        copyButton.textContent = originalLabel;
      }, 1600);
    } catch (error) {
      console.error('テンプレートのコピーに失敗しました', error);
      window.alert('コピーできませんでした。手動で選択してコピーしてください。');
    }
  });
}

const yearEl = document.querySelector('#current-year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
