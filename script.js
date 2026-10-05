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

// 折りたたみ（details）の中や details 自体へのリンクで移動したときは、開いて見せる
const openDetailsFor = (hash) => {
  if (!hash || hash.length < 2) return;
  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!target) return;
  let details = target.tagName === 'DETAILS' ? target : target.closest('details');
  while (details) {
    details.open = true;
    details = details.parentElement ? details.parentElement.closest('details') : null;
  }
};
openDetailsFor(window.location.hash);
window.addEventListener('hashchange', () => openDetailsFor(window.location.hash));

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

// GA4 行動計測: 電話・LINE・Googleマップ・Instagram のリンククリックを専用イベントで送信
// - 仕様の正本は月次Webレポート docs/GA4_SETUP.md 6章（羊二HPの実装と同じ）
// - イベントの種類はリンク先（href）で判定。押された場所は各リンクの data-ga-location
// - 電話番号は送らない（tel の link_url は送信せず、番号の文字は「電話番号」に置き換え）
// - link_url はクエリ文字列を除いた「オリジン＋パス」
(() => {
  const MAX_PARAM_LENGTH = 100; // GA4 のイベントパラメータ値の上限
  const LINK_EVENTS = [
    { eventName: 'tel_click', matches: (url) => url.protocol === 'tel:' },
    { eventName: 'line_click', matches: (url) => ['line.me', 'lin.ee'].includes(url.hostname) },
    { eventName: 'map_click', matches: (url) => /(^|\.)google\.[a-z.]+$/.test(url.hostname) && url.pathname.startsWith('/maps') },
    { eventName: 'instagram_click', matches: (url) => /(^|\.)instagram\.com$/.test(url.hostname) },
  ];

  const linkText = (link) => {
    const clone = link.cloneNode(true);
    clone.querySelectorAll('.sr-only').forEach((el) => el.remove());
    const text = clone.textContent.replace(/\s+/g, ' ').trim();
    if (text) return text;
    const img = link.querySelector('img[alt]');
    return img ? img.alt.trim() : '';
  };

  const buildParams = (link, url, eventName) => {
    const text = linkText(link);
    const isTel = eventName === 'tel_click';
    return {
      link_location: link.dataset.gaLocation || 'other',
      link_text: (isTel && /\d/.test(text) ? '電話番号' : text).slice(0, MAX_PARAM_LENGTH),
      ...(isTel ? {} : { link_url: `${url.origin}${url.pathname}`.slice(0, MAX_PARAM_LENGTH) }),
    };
  };

  document.addEventListener('click', (event) => {
    if (typeof window.gtag !== 'function') return;
    const link = event.target.closest('a[href]');
    if (!link) return;
    let url;
    try {
      url = new URL(link.href);
    } catch (error) {
      return;
    }
    const match = LINK_EVENTS.find((item) => item.matches(url));
    if (!match) return;
    window.gtag('event', match.eventName, buildParams(link, url, match.eventName));
  });
})();
