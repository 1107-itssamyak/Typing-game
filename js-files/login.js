const body = document.querySelector("body");
const button = document.getElementById('img-button');
const svg = document.querySelectorAll('svg path');
let d = 0;

//* light and dark mode switch enabler
button.addEventListener('click', () => {
    body.classList.toggle('light_mode');
    body.classList.toggle('dark_mode');

    d += 180;
    button.style.transform = `rotate(${d}deg)`;

    if (d % 360 === 0) {
        light_svg();
    } else {
        dark_svg();
    }
})

function dark_svg() {
    svg[0].style.fill = `#3fea956e`;
    svg[1].style.fill = `#AFA0A0`;
}

function light_svg() {
    svg[0].style.fill = `#20DF7F`;
    svg[1].style.fill = `#224957`;
}