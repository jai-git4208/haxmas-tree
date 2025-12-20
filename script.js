const now = new Date();
const currentDay = now.getDate();
const currentMonth = now.getMonth() + 1;
const currentYear = now.getFullYear();

const baubleColors = ["bauble-red", "bauble-blue", "bauble-gold", "bauble-purple", "bauble-green"];
const treeTops = ["⭐", "💫", "💖", "🎄", "🏴‍☠️", "👾"];

function changeStar() {
    const starElement = document.getElementById("star");
    const nextStar = treeTops[Math.floor(Math.random() * treeTops.length)];
    starElement.innerText = nextStar;
}

document.addEventListener('DOMContentLoaded', () => {
    const decorationsContainer = document.getElementById("decorations");
    const dateLabel = document.getElementById("date");
    const topStar = document.getElementById("star");

    dateLabel.innerText = `${currentDay}/${currentMonth}/${currentYear}`;

    initBackground();

    setInterval(spawnShootingStar, 4000);
    setInterval(spawnSnowflake, 100);

    if (currentMonth === 12) {
        decorateTree(decorationsContainer);
    }

    topStar.addEventListener('click', changeStar);
});

function initBackground() {
    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'bg-star';
        const size = Math.random() * 2 + 1;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);

        document.body.appendChild(star);
    }

    const land = document.getElementById('land');
    for (let i = 0; i < 40; i++) {
        const tree = document.createElement('div');
        tree.className = 'bg-tree';
        const height = Math.random() * 3 + 2;
        const width = height * 0.6;

        tree.style.left = `${Math.random() * 100}%`;
        tree.style.borderLeftWidth = `${width}rem`;
        tree.style.borderRightWidth = `${width}rem`;
        tree.style.borderBottomWidth = `${height}rem`;

        const shade = 10 + Math.floor(Math.random() * 10);
        tree.style.borderBottomColor = `rgb(${shade}, ${shade + 5}, ${shade})`;

        land.appendChild(tree);
    }
}

function decorateTree(container) {
    const count = Math.max((25 - currentDay) * 4, 30);

    for (let i = 0; i < count; i++) {
        const colorClass = baubleColors[Math.floor(Math.random() * baubleColors.length)];
        const bauble = document.createElement('span');

        bauble.className = `ornament ${colorClass}`;
        bauble.id = `ornament-${i}`;

        const size = Math.random() * 0.8 + 1.2;
        bauble.style.width = `${size}rem`;
        bauble.style.height = `${size}rem`;

        const topPos = Math.random() * 70 + 10;
        const spread = (topPos - 5) * 0.9;
        const leftPos = 50 + (Math.random() - 0.5) * spread;

        bauble.style.top = `${topPos}%`;
        bauble.style.left = `${leftPos}%`;
        bauble.style.animationDelay = `${Math.random() * 2}s`;

        container.appendChild(bauble);
    }
}

function spawnShootingStar() {
    const shooter = document.createElement('div');
    shooter.className = 'shooting-star';
    shooter.style.left = `${Math.random() * 80}vw`;
    shooter.style.top = `${Math.random() * 50}vh`;

    document.body.appendChild(shooter);
    setTimeout(() => shooter.remove(), 2500);
}

function spawnSnowflake() {
    const flake = document.createElement('div');
    flake.className = 'snowflake';
    const size = Math.random() * 5 + 2;
    const duration = Math.random() * 3 + 4;

    flake.style.width = `${size}px`;
    flake.style.height = `${size}px`;
    flake.style.left = `${Math.random() * 100}vw`;
    flake.style.animationDuration = `${duration}s`;
    flake.style.opacity = Math.random();

    document.body.appendChild(flake);
    setTimeout(() => flake.remove(), duration * 1000);
}