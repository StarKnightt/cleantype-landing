// Cursor animation setup
const cursorMain = document.querySelector('.cursor-main');
const cursorTrail = document.querySelector('.cursor-trail');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let trailX = 0, trailY = 0;
let speed = 0.15;

// Particles setup
const colors = ['#3b82f6', '#8b5cf6', '#60a5fa'];
const numParticles = 25;
const particlesContainer = document.createElement('div');
particlesContainer.className = 'particles-container';
document.body.appendChild(particlesContainer);

// Create and animate particles
for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particlesContainer.appendChild(particle);
    
    const randomX = anime.random(-window.innerWidth/2, window.innerWidth/2);
    const randomY = anime.random(-window.innerHeight/2, window.innerHeight/2);
    const randomScale = anime.random(0.2, 1);
    const randomDuration = anime.random(3000, 8000);
    const randomDelay = anime.random(0, 2000);
    
    anime({
        targets: particle,
        translateX: [
            { value: randomX, duration: randomDuration },
            { value: -randomX, duration: randomDuration }
        ],
        translateY: [
            { value: randomY, duration: randomDuration },
            { value: -randomY, duration: randomDuration }
        ],
        scale: [
            { value: randomScale, duration: randomDuration },
            { value: randomScale * 0.5, duration: randomDuration }
        ],
        backgroundColor: {
            value: colors,
            duration: randomDuration * 2,
            easing: 'linear'
        },
        opacity: {
            value: [0.1, 0.3],
            duration: randomDuration,
            easing: 'easeInOutSine'
        },
        delay: randomDelay,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine'
    });
}

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

// SVG Morphing Animation
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
        targets: '.recommended-tag',
        opacity: [0, 1],
        translateY: [-20, 0],
        scale: [0.5, 1],
        duration: 800,
        delay: 500,
        endDelay: 0,
        easing: 'spring(1, 90, 10, 0)'
    })
    .add({
        targets: '.motivation-text',
        opacity: [0, 0.8],
        translateY: [10, 0],
        scale: [0.9, 1],
        duration: 800,
        easing: 'spring(1, 80, 10, 0)',
        delay: 200
    });

// Feature animations
const features = document.querySelectorAll('.feature');
features.forEach((feature, index) => {
    // Initial animation
    anime({
        targets: feature,
        translateY: [100, 0],
        opacity: [0, 1],
        scale: [0.8, 1],
        delay: 1000 + (index * 200),
        duration: 1500,
        easing: 'spring(1, 80, 10, 0)'
    });

    // Hover animations
    feature.addEventListener('mouseenter', () => {
        anime({
            targets: feature,
            scale: 1.02,
            translateY: -10,
            rotateX: 10,
            rotateY: 10,
            duration: 800,
            easing: 'spring(1, 90, 11, 0)'
        });
    });

    feature.addEventListener('mouseleave', () => {
        anime({
            targets: feature,
            scale: 1,
            translateY: 0,
            rotateX: 0,
            rotateY: 0,
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

// Background animations
anime({
    targets: '.hero-svg',
    translateY: [-20, 20],
    rotate: ['-60deg', '-55deg'],
    duration: 8000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutQuad',
    delay: (el, i) => i * 100
});

anime({
    targets: '.hero::before',
    opacity: [0.1, 0.3],
    scale: [1, 1.2],
    duration: 4000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutQuad'
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
    
    // Animate motivation text on hover
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
    
    // Reset motivation text
    anime({
        targets: '.motivation-text',
        scale: 1,
        translateY: 0,
        opacity: 0.8,
        duration: 500,
        easing: 'spring(1, 80, 10, 0)'
    });
});

// Add sparkle animation to the motivation text emoji
function createSparkle() {
    const sparkle = document.createElement('span');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.pointerEvents = 'none';
    document.body.appendChild(sparkle);

    const startX = motivationText.getBoundingClientRect().right - 20;
    const startY = motivationText.getBoundingClientRect().top;

    sparkle.style.left = startX + 'px';
    sparkle.style.top = startY + 'px';

    anime({
        targets: sparkle,
        translateY: -40,
        translateX: anime.random(-20, 20),
        scale: [1, 0],
        opacity: [1, 0],
        duration: 1000,
        easing: 'easeOutCubic',
        complete: () => sparkle.remove()
    });
}

// Create sparkles periodically
setInterval(createSparkle, 2000);

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