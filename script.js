// 初始化轮播图
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'creative',
    creativeEffect: {
        prev: {
            translate: [0, 0, -400],
        },
        next: {
            translate: ['100%', 0, 0],
        },
    },
});

// 初始化AOS动画
AOS.init({
    duration: 1000,
    once: true,
    mirror: true,
});

// 暗色模式切换
const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;
let isDark = false;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
        root.style.setProperty('--bg', '#2C3333');
        root.style.setProperty('--text', '#FFF8EA');
        themeToggle.innerHTML = '<i class="ri-moon-line"></i>';
        document.body.classList.add('dark-mode');
    } else {
        root.style.setProperty('--bg', '#FFF8EA');
        root.style.setProperty('--text', '#2C3333');
        themeToggle.innerHTML = '<i class="ri-sun-line"></i>';
        document.body.classList.remove('dark-mode');
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 视差滚动效果
const hero = document.querySelector('.hero');
const mountainImg = document.querySelector('.mountain-img');
const floatingImages = document.querySelectorAll('.float-img');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;
    
    // 添加视差类
    if (scrolled > 0) {
        hero.classList.add('parallax-scroll');
    } else {
        hero.classList.remove('parallax-scroll');
    }
    
    // 设置滚动偏移量
    root.style.setProperty('--scroll-offset', `${rate}px`);
    
    // 为每个浮动图片设置不同的速度
    floatingImages.forEach(img => {
        const speed = img.getAttribute('data-speed');
        root.style.setProperty('--speed', speed);
    });
});

// 创建3D装饰元素
function createDecorationElements() {
    const decoration = document.querySelector('.about-decoration');
    const colors = ['var(--yellow)', 'var(--blue)', 'var(--red)'];
    
    for (let i = 0; i < 5; i++) {
        const element = document.createElement('div');
        element.className = 'decoration-element';
        element.style.width = Math.random() * 100 + 50 + 'px';
        element.style.height = Math.random() * 100 + 50 + 'px';
        element.style.left = Math.random() * 80 + 10 + '%';
        element.style.top = Math.random() * 80 + 10 + '%';
        element.style.background = colors[Math.floor(Math.random() * colors.length)];
        element.style.animationDelay = Math.random() * 2 + 's';
        decoration.appendChild(element);
    }
}

// 创建浮动元素
function createFloatingElements() {
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        for (let i = 0; i < 3; i++) {
            const element = document.createElement('div');
            element.className = 'floating-element';
            element.style.width = Math.random() * 100 + 20 + 'px';
            element.style.height = element.style.width;
            element.style.left = Math.random() * 90 + 5 + '%';
            element.style.top = Math.random() * 90 + 5 + '%';
            element.style.animationDelay = Math.random() * 2 + 's';
            section.appendChild(element);
        }
    });
}

// 语言配置
const i18n = {
    cn: {
        'nav.home': '首页',
        'nav.about': '关于',
        'nav.works': '作品',
        'nav.contact': '联系',
        'about.title': '关于我',
        'about.description': '一个崇尚长期成长、富有激情的AI开发者和设计爱好者。我热衷于洞察生活小事，研究心理学、经济学、历史和将创意想法转化为现实，专注于创建美观且实用的数字体验。',
        'about.skills': '我的技能组合：',
        'works.title': '作品展示',
        'works.design.title': '潮流设计',
        'works.design.desc': '探索现代设计美学与创新表达',
        'works.brand.title': '品牌塑造',
        'works.brand.desc': '打造独特的品牌视觉识别系统',
        'works.ui.title': '交互设计',
        'works.ui.desc': '创造流畅的用户体验与界面设计',
        'contact.title': '联系我',
        'contact.name': '你的名字',
        'contact.email': '邮箱地址',
        'contact.message': '留言内容',
        'contact.submit': '发送消息'
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.works': 'Works',
        'nav.contact': 'Contact',
        'about.title': 'About Me',
        'about.description': 'A passionate AI developer and design enthusiast who values long-term growth. I am dedicated to observing life\'s details, studying psychology, economics, history, and transforming creative ideas into reality, focusing on creating beautiful and practical digital experiences.',
        'about.skills': 'My Skill Set:',
        'works.title': 'Portfolio',
        'works.design.title': 'Trending Design',
        'works.design.desc': 'Exploring modern design aesthetics and innovative expression',
        'works.brand.title': 'Brand Identity',
        'works.brand.desc': 'Creating unique brand visual identity systems',
        'works.ui.title': 'UI/UX Design',
        'works.ui.desc': 'Crafting smooth user experiences and interface designs',
        'contact.title': 'Contact Me',
        'contact.name': 'Your Name',
        'contact.email': 'Email Address',
        'contact.message': 'Your Message',
        'contact.submit': 'Send Message'
    }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化AOS动画库
    AOS.init({
        duration: 1000,
        once: true
    });

    // 控制主标题文字逐个显示
    const mainTextLines = document.querySelectorAll('.text-reveal .reveal-line');
    mainTextLines.forEach((line, index) => {
        setTimeout(() => {
            line.classList.add('visible');
        }, (index + 1) * 1200); // 增加了动画间隔时间
    });

    // 语言切换功能
    const langBtns = document.querySelectorAll('.lang-btn');
    let currentLang = 'cn';

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (i18n[lang][key]) {
                element.textContent = i18n[lang][key];
            }
        });

        // 更新输入框占位符
        document.querySelector('input[placeholder]').placeholder = i18n[lang]['contact.name'];
        document.querySelector('input[type="email"]').placeholder = i18n[lang]['contact.email'];
        document.querySelector('textarea').placeholder = i18n[lang]['contact.message'];
        document.querySelector('.submit-btn').textContent = i18n[lang]['contact.submit'];

        // 更新导航链接
        document.querySelectorAll('.nav a').forEach(link => {
            const key = link.getAttribute('href').replace('#', 'nav.');
            if (i18n[lang][key]) {
                link.textContent = i18n[lang][key];
            }
        });
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLang) {
                currentLang = lang;
                langBtns.forEach(b => b.classList.toggle('active'));
                updateLanguage(lang);
            }
        });
    });

    // 监听滚动事件
    const handleScroll = () => {
        const scrolled = window.scrollY;
        const viewportHeight = window.innerHeight;
        
        // 控制关键词区域显示
        const keywordsSection = document.querySelector('.keywords-section');
        const keywordsSectionTop = keywordsSection.getBoundingClientRect().top;
        
        if (keywordsSectionTop < viewportHeight * 0.8) {
            keywordsSection.classList.add('visible');
            // 控制关键词逐个显示
            document.querySelectorAll('.keywords-section .reveal-line.keyword').forEach((keyword, index) => {
                setTimeout(() => {
                    keyword.style.animation = `revealKeyword 0.8s ease forwards`;
                }, index * 200);
            });
        }

        // 控制浮动图片显示
        document.querySelectorAll('.float-img').forEach((img, index) => {
            const imgTop = img.getBoundingClientRect().top;
            if (imgTop < viewportHeight * 0.8) {
                setTimeout(() => {
                    img.classList.add('visible');
                }, index * 300);
            }
        });

        // 视差滚动效果
        document.querySelectorAll('.float-img').forEach(img => {
            const speed = img.getAttribute('data-speed');
            const yPos = -(scrolled * speed);
            img.style.transform = `translateY(${yPos}px) scale(${1 + Math.abs(yPos) * 0.001})`;
        });

        // 作品卡片悬浮效果
        document.querySelectorAll('.work-card').forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const cardCenter = cardTop + card.offsetHeight / 2;
            const distance = (viewportHeight / 2 - cardCenter) * 0.1;
            card.style.transform = `translateY(${distance}px) scale(${1 + Math.abs(distance) * 0.001})`;
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始调用一次

    // 创建3D装饰元素
    createDecorationElements();
}); 