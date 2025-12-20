//getting date  
const date = new Date();
const days = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

// list of all the emojis that can be ornaments
const ornamentEmojis = ["🔴", "🔵", "🟡", "🟢", "🟣", "🟠", "✨", "🎁", "🍬", "❄️", "🔔", "🎶", "🕯️", "🍪"];
const stars = ["⭐", "💫", "💖", "🎄", "🏴‍☠️", "👾"];

function changeStar() {
    let randomIndex = Math.floor(Math.random() * stars.length);
    document.getElementById("star").innerText = stars[randomIndex];
}

// checks if the HTML elements have loaded before doing anything
document.addEventListener('DOMContentLoaded', () => {
    // sets the elements with the IDs to variables for easy access!
    const decorations = document.getElementById("decorations");
    const dateText = document.getElementById("date");
    const star = document.getElementById("star");

    // sets the text inside dateText to DD/MM/YY (the superior format)
    dateText.innerText = days + "/" + month + "/" + year;

    // Create background stars
    createBackgroundStars();

    // Start shooting stars
    setInterval(createShootingStar, 4000);

    // Start snow
    setInterval(createSnowflake, 200);

    // checks if the month is december
    if (month === 12) {
        // More ornaments! 
        let ornamentCount = Math.max((25 - days) * 2, 10);

        // for each day til christmas; it adds another ornament to the christmas tree
        for (let i = 0; i < ornamentCount; i++) {
            const randomEmoji = ornamentEmojis[Math.floor(Math.random() * ornamentEmojis.length)];
            const span = document.createElement('span');
            span.className = 'ornament';
            span.id = "ornament" + i;
            span.innerText = randomEmoji;

            // Positioning logic:
            const top = (Math.random() * 75 + 10); // 10% to 85% from top
            const maxWidth = (top - 5) * 0.8;
            const left = 50 + (Math.random() - 0.5) * maxWidth;

            span.style.top = top + "%";
            span.style.left = left + "%";
            // Randomize individual ornament glow timing
            span.style.animationDelay = Math.random() * 2 + "s";

            decorations.appendChild(span);
        }
    }

    star.addEventListener('click', changeStar);
});

function createBackgroundStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'bg-star';
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
        document.body.appendChild(star);
    }
}

function createShootingStar() {
    const s = document.createElement('div');
    s.className = 'shooting-star';
    s.style.left = Math.random() * 80 + 'vw';
    s.style.top = Math.random() * 50 + 'vh';
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 2500);
}

function createSnowflake() {
    const snow = document.createElement('div');
    snow.className = 'snowflake';
    const size = Math.random() * 5 + 2;
    snow.style.width = size + 'px';
    snow.style.height = size + 'px';
    snow.style.left = Math.random() * 100 + 'vw';
    const duration = Math.random() * 3 + 4;
    snow.style.animationDuration = duration + 's';
    snow.style.opacity = Math.random();
    document.body.appendChild(snow);
    setTimeout(() => snow.remove(), duration * 1000);
}