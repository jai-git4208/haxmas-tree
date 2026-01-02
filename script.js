//getting date  
const date = new Date();
const days = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

//list of all the images in img/ornaments and a list of emojis the top decoration thing can be  
const ornamentImg = ["🔴", "🟠", "🟡", "🟢", "🔵", "🟣", "⚪", "🟤", "🔔", "🎀", "🎁", "❄️", "🍬", "🕯️", "🧦", "🦌"];
const stars = ["⭐", "💫", "💖", "🎄", "🏴‍☠️", "👾"];

function changeStar() {
    let randomIndex = Math.floor(Math.random() * 6);
    const starElement = document.getElementById("star");
    starElement.style.transform = "translateX(-50%) rotate(360deg) scale(1.3)";
    setTimeout(() => {
        starElement.innerText = stars[randomIndex];
        starElement.style.transform = "translateX(-50%) rotate(0deg) scale(1)";
    }, 150);
}

//checks if the HTML elements have loaded before doing anything  
document.addEventListener('click', function musicPlay() {
    const audio = document.querySelector("audio");
    if (audio.paused) {
        audio.play();
        document.removeEventListener('click', musicPlay);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    //sets the elements with the IDs to variables for easy access!  
    const decorations = document.getElementById("decorations");
    const dateText = document.getElementById("date");
    const star = document.getElementById("star");

    //sets the text inside dateText to DD/MM/YY (the superior format)  
    dateText.innerText = days + "/" + month + "/" + year;

    //checks if the month is december  
    if (true) {
        let daysTilChristmas = 25;

        //for each day til christmas; it adds another ornament to the christmas tree  
        for (let i = 0; i < daysTilChristmas; i++) {
            const randomImg = ornamentImg[Math.floor(Math.random() * ornamentImg.length)]
            const ornament = document.createElement("div");
            ornament.className = "ornament";
            ornament.id = "ornament" + i;
            ornament.innerText = randomImg;
            decorations.appendChild(ornament);

            const leftPos = Math.random() * 70 + 15;
            const topPos = Math.random() * 70 + 15;
            ornament.style.left = leftPos + "%";
            ornament.style.top = topPos + "%";
            ornament.style.animationDelay = (i * 0.1) + "s";
        }
    }

    star.addEventListener('click', changeStar);
})