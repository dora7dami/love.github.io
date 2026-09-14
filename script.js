// script.js
// 页面切换功能
function showPage(pageId) {
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // 显示目标页面
    document.getElementById(pageId).classList.add('active');
    
    // 特殊处理
    if (pageId === 'letter') {
        setCurrentDate();
        createHearts(); // 创建爱心背景
    }
}

// 设置当前日期
function setCurrentDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = now.toLocaleDateString('zh-CN', options);
}

// "再考虑一下" 按钮移动效果
function moveNoButton() {
    const noBtn = document.querySelector('.no-btn');
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 100);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
    noBtn.style.transition = 'all 0.3s ease';
}

// 响应选择
function showResponse(response) {
    if (response === 'yes') {
        showPage('yes-response');
        // 庆祝效果
        celebrate();
    }
}

// 庆祝效果
function celebrate() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 100);
    }
}

// 创建漂浮爱心
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.zIndex = '1000';
    heart.style.animation = `floatUp ${Math.random() * 3 + 2}s linear forwards`;
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// 创建爱心背景
function createHearts() {
    const heartsBg = document.querySelector('.hearts-background');
    heartsBg.innerHTML = '';
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = i % 2 === 0 ? '💖' : '💕';
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animation = `fall ${Math.random() * 10 + 5}s linear infinite ${Math.random() * 5}s`;
        heartsBg.appendChild(heart);
    }
}

// 音乐控制
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicBtn.innerHTML = '🎵 停止音乐';
        musicBtn.style.background = '#e91e63';
        musicBtn.style.color = 'white';
    } else {
        music.pause();
        musicBtn.innerHTML = '🎵 播放音乐';
        musicBtn.style.background = 'rgba(255, 255, 255, 0.9)';
        musicBtn.style.color = '#e91e63';
    }
}

// 添加漂浮动画
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 页面加载完成
window.addEventListener('load', function() {
    setCurrentDate();
    createHearts();
    
    // 预加载音乐（如果需要）
    music.load();
    
    console.log('💖 表白网站加载完成！');
});

// 键盘控制
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        showPage('home');
    }
});
const photos = document.querySelectorAll('.photo');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');

  photos.forEach(p => {
    p.addEventListener('click', () => {
      lightboxImg.src = p.querySelector('img').src;
      lightbox.classList.add('show');
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
  });
