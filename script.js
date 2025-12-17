// お助けAI城里センター - script
(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  if (toggle && mobileNav) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      mobileNav.hidden = !open;
      toggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    };
    setOpen(false);

    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      setOpen(open);
    });

    mobileNav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => setOpen(false));
    });
  }

  // Copy template
  const copyBtn = document.getElementById("copyBtn");
  const template = document.querySelector(".template");
  const status = document.getElementById("copyStatus");

  if (copyBtn && template) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(template.value);
        if (status) status.textContent = "コピーしました。メールに貼り付けてお使いください。";
      } catch (e) {
        if (status) status.textContent = "コピーできませんでした。手動で選択してコピーしてください。";
      }
    });
  }
})();
