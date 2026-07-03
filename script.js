/**
 * TO THE WOMAN WHO GAVE ME EVERYTHING - Script Controller
 */

let audioStarted = false;
const audioPlayer = document.getElementById('bgMusic');

function transitionToPage(pageNum) {
    // Start background melody on mother's first click
    if (!audioStarted && audioPlayer) {
        audioPlayer.play().catch(e => console.log("Audio activation awaiting gesture context"));
        audioStarted = true;
    }

    // Handle Page Displacements Safely
    const currentActive = document.querySelector('.page.active');
    if (currentActive) currentActive.classList.remove('active');

    const nextTarget = document.getElementById(`page${pageNum}`);
    if (nextTarget) {
        nextTarget.classList.add('active');

        // Page Trigger Allocations
        if (pageNum === 2) { triggerMomLetter(); }
        if (pageNum === 3) { revealLoveCards(); }
        if (pageNum === 6) { shiftToStarrySky(); }
    }
}

// Global Falling Flower Petal Stream Generation Engine
function spawnPetalSystem(count = 15) {
    const space = document.getElementById('petalVoid');
    for (let i = 0; i < count; i++) {
        createIndividualPetal(space);
    }
}

function createIndividualPetal(container) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    
    // Randomize Petal Structures
    const size = Math.random() * 14 + 8;
    petal.style.width = `${size}px`;
    petal.style.height = `${size + 4}px`;
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.top = `-${size}px`;
    petal.style.background = Math.random() > 0.5 ? '#f2d1d7' : '#f7e1e5';
    
    container.appendChild(petal);

    // Flawless Path Animation Logic
    gsap.to(petal, {
        y: '105vh',
        x: `+=${Math.random() * 160 - 80}`,
        rotation: Math.random() * 360,
        duration: Math.random() * 5 + 4,
        ease: 'none',
        onComplete: () => {
            petal.remove();
            // Maintain ambient stream continuous flow
            createIndividualPetal(container);
        }
    });
}

// Launch Ambient Petals on Initial App Startup Setup
spawnPetalSystem(12);

// Page 2: Letter Typewriter Trigger System
function triggerMomLetter() {
    new Typed('#letterTyped', {
        strings: ["Mom,<br><br>You gave me life, protected me when I was weak, believed in me when I doubted myself, and sacrificed so much without ever asking for anything in return.<br><br>Every step I take today is because you held my hand yesterday."],
        typeSpeed: 50,
        showCursor: false,
        onComplete: () => {
            const nextBtn = document.getElementById('btnPage2');
            nextBtn.classList.remove('hidden');
            gsap.fromTo(nextBtn, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 });
        }
    });
}

// Page 3: Sequence Card Display Cascade
function revealLoveCards() {
    gsap.to('#card1', { opacity: 1, y: 0, duration: 0.6, delay: 0.2 });
    gsap.to('#card2', { opacity: 1, y: 0, duration: 0.6, delay: 0.6 });
    gsap.to('#card3', { opacity: 1, y: 0, duration: 0.6, delay: 1.0 });
}

// Page 6: Deep Cosmic Shift Setup Sequence
function shiftToStarrySky() {
    document.body.classList.add('dark-mode');
    document.getElementById('starsLayer').classList.remove('hidden');

    // Intensify falling flower petal streams for the grand climax
    spawnPetalSystem(20);

    new Typed('#finalVows', {
        strings: ["Thank you for every sacrifice... Every sleepless night... Every prayer... Every hug...<br><br>I promise that one day all your struggles will become your pride.<br><br>I will always love you.<br><br><span style='color:#f2d1d7; font-family:var(--font-cursive); font-size:2.2rem;'>❤️ Your Son</span>"],
        typeSpeed: 55,
        showCursor: false,
        onComplete: () => {
            const hugBtn = document.getElementById('hugBtn');
            hugBtn.classList.remove('hidden');
            gsap.fromTo(hugBtn, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6 });
        }
    });
}

// Hug Confirmation Banner Reveal Function
function revealHugMessage() {
    const alertBox = document.getElementById('hugAlert');
    alertBox.classList.remove('hidden');
}
