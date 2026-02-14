// テンプレートコピー機能
function copyTemplate() {
    const template = `【お名前】：
【ご連絡方法】電話 / メール：
【場所（町名・番地など）】：
【困っていること】：
【希望日時】：
【補足】：`;
    
    navigator.clipboard.writeText(template).then(() => {
        alert('テンプレートをコピーしました！');
    }).catch(err => {
        console.error('コピーに失敗しました', err);
    });
}

// スクロールアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // セクションにアニメーションを適用
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // モバイルメニュートグル
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

        // ナビゲーションリンクをクリックしたらメニューを閉じる
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    }
});
