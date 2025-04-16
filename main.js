// Optimized cursor animation
const cursorMain = document.querySelector('.cursor-main');
const cursorTrail = document.querySelector('.cursor-trail');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let trailX = 0, trailY = 0;
let speed = 0.15;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateCursor() {
    // Main cursor with physics
    let dx = mouseX - cursorX;
    let dy = mouseY - cursorY;
    cursorX += dx * speed;
    cursorY += dy * speed;
    cursorMain.style.transform = `translate3d(${cursorX - 4}px, ${cursorY - 4}px, 0)`;

    // Trail cursor with delayed following
    let trailDx = mouseX - trailX;
    let trailDy = mouseY - trailY;
    trailX += trailDx * (speed * 0.5);
    trailY += trailDy * (speed * 0.5);
    cursorTrail.style.transform = `translate3d(${trailX - 12}px, ${trailY - 12}px, 0)`;

    requestAnimationFrame(updateCursor);
}
updateCursor();

// Enhanced hover effects
document.querySelectorAll('a, .feature, .download-button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        anime({
            targets: '.cursor-trail',
            scale: 1.5,
            duration: 600,
            easing: 'spring(1, 80, 10, 0)'
        });
    });

    el.addEventListener('mouseleave', () => {
        anime({
            targets: '.cursor-trail',
            scale: 1,
            duration: 600,
            easing: 'spring(1, 80, 10, 0)'
        });
    });
});

// SVG Morphing Animation with multiple paths
const morphPaths = document.querySelectorAll('.morph-path');
morphPaths.forEach((path, index) => {
    anime({
        targets: path,
        d: [
            { value: 'M10,50 Q50,10 90,50 T90,50' },
            { value: 'M10,50 Q50,90 90,50 T90,50' },
            { value: 'M10,50 Q50,50 90,50 T90,50' }
        ],
        duration: 8000,
        delay: index * 200,
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate'
    });
});

// Enhanced timeline animations
const mainTimeline = anime.timeline({
    easing: 'easeOutExpo'
});

mainTimeline
    .add({
        targets: '.hero h1',
        opacity: [0, 1],
        filter: ['blur(10px)', 'blur(0)'],
        scale: [0.8, 1],
        duration: 2000,
        delay: 300
    })
    .add({
        targets: '.hero .subtitle',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1200,
        offset: '-=1800'
    })
    .add({
        targets: '.download-button',
        opacity: [0, 1],
        translateY: [30, 0],
        scale: [0.9, 1],
        duration: 1200,
        offset: '-=1000'
    })
    .add({
        targets: '.security-notice',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        offset: '-=800'
    });

// Feature cards with physics-based animations
const features = document.querySelectorAll('.feature');
features.forEach((feature, index) => {
    anime({
        targets: feature,
        translateY: [100, 0],
        opacity: [0, 1],
        scale: [0.8, 1],
        delay: 1000 + (index * 200),
        duration: 1500,
        easing: 'spring(1, 80, 10, 0)'
    });

    // Interactive tilt effect with physics
    feature.addEventListener('mousemove', (e) => {
        const rect = feature.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        anime({
            targets: feature,
            rotateX: rotateX,
            rotateY: rotateY,
            translateZ: 50,
            duration: 50,
            easing: 'linear'
        });
    });

    feature.addEventListener('mouseleave', () => {
        anime({
            targets: feature,
            rotateX: 0,
            rotateY: 0,
            translateZ: 0,
            duration: 1000,
            easing: 'spring(1, 80, 10, 0)'
        });
    });
});

// Download button effects
const downloadButton = document.querySelector('.download-button');
downloadButton.addEventListener('mouseenter', () => {
    anime({
        targets: downloadButton,
        scale: 1.05,
        duration: 500,
        easing: 'spring(1, 80, 10, 0)'
    });
});

downloadButton.addEventListener('mouseleave', () => {
    anime({
        targets: downloadButton,
        scale: 1,
        duration: 500,
        easing: 'spring(1, 80, 10, 0)'
    });
});

// Background gradient animation
anime({
    targets: '.hero::before',
    translateX: [-25, 25],
    translateY: [-25, 25],
    duration: 10000,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad'
});

// GitHub section animation
anime({
    targets: '.github-section',
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 1000,
    easing: 'spring(1, 80, 10, 0)',
    delay: 1200
});

// Fetch GitHub stars count
async function updateStarCount() {
    try {
        const response = await fetch('https://api.github.com/repos/StarKnightt/CleanType');
        const data = await response.json();
        const starCount = document.querySelector('.star-count');
        if (starCount && data.stargazers_count !== undefined) {
            starCount.textContent = `⭐ ${data.stargazers_count}`;
        }
    } catch (error) {
        console.log('Error fetching star count:', error);
    }
}
updateStarCount();

// Add hover effect for GitHub button
const githubButton = document.querySelector('.github-button');
githubButton.addEventListener('mouseenter', () => {
    anime({
        targets: '.github-button svg',
        rotate: 360,
        scale: 1.1,
        duration: 600,
        easing: 'spring(1, 80, 10, 0)'
    });
});

githubButton.addEventListener('mouseleave', () => {
    anime({
        targets: '.github-button svg',
        rotate: 0,
        scale: 1,
        duration: 600,
        easing: 'spring(1, 80, 10, 0)'
    });
});