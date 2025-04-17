// Cursor animation setup
const cursorMain = document.querySelector('.cursor-main');
const cursorTrail = document.querySelector('.cursor-trail');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let trailX = 0, trailY = 0;
let speed = 0.15;

// Cursor movement handler
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

// Main animation timeline
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
    })
    .add({
        targets: '.github-section',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        easing: 'spring(1, 80, 10, 0)'
    })
    .add({
        targets: '.motivation-text',
        opacity: [0, 0.8],
        translateY: [10, 0],
        scale: [0.9, 1],
        duration: 800,
        easing: 'spring(1, 80, 10, 0)'
    })
    .add({
        targets: '.recommended-tag',
        opacity: [0, 1],
        translateY: [-20, 0],
        scale: [0.5, 1],
        duration: 800,
        delay: 200,
        easing: 'spring(1, 90, 10, 0)'
    });

// Feature animations
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
});

// Interactive hover effects for features
features.forEach(feature => {
    feature.addEventListener('mouseenter', () => {
        anime({
            targets: feature,
            scale: 1.02,
            translateY: -10,
            duration: 800,
            easing: 'spring(1, 90, 11, 0)'
        });
    });

    feature.addEventListener('mouseleave', () => {
        anime({
            targets: feature,
            scale: 1,
            translateY: 0,
            duration: 600,
            easing: 'spring(1, 80, 10, 0)'
        });
    });
});

// Download button hover effects
document.querySelectorAll('.download-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        anime({
            targets: button,
            scale: 1.05,
            translateY: -5,
            boxShadow: '0 15px 30px rgba(59, 130, 246, 0.3)',
            duration: 500,
            easing: 'spring(1, 80, 10, 0)'
        });
    });

    button.addEventListener('mouseleave', () => {
        anime({
            targets: button,
            scale: 1,
            translateY: 0,
            boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2)',
            duration: 500,
            easing: 'spring(1, 80, 10, 0)'
        });
    });
});

// GitHub button effects
const githubButton = document.querySelector('.github-button');
githubButton.addEventListener('mouseenter', () => {
    anime({
        targets: '.github-button svg',
        rotate: 360,
        scale: 1.1,
        duration: 800,
        easing: 'spring(1, 90, 10, 0)'
    });
    
    anime({
        targets: '.motivation-text',
        scale: 1.05,
        translateY: -5,
        opacity: 1,
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
    
    anime({
        targets: '.motivation-text',
        scale: 1,
        translateY: 0,
        opacity: 0.8,
        duration: 500,
        easing: 'spring(1, 80, 10, 0)'
    });
});

// Fetch GitHub stars
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