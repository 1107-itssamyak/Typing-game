const body = document.querySelector("body");
const button = document.getElementById('img-button');
const svg = document.querySelectorAll('svg path');
let d = 0;
let mode_switch = true;

//* light and dark mode switch enabler
button.addEventListener('click', () => {
    mode_enabler();

    d += 180;
    button.style.transform = `rotate(${d}deg)`;

    if (d % 360 === 0) {
        light_svg();
    } else {
        dark_svg();
    }
})

function mode_enabler() {
    mode_switch = !mode_switch;
    if (mode_switch) {
        body.classList.add('light_mode');
        body.classList.remove('dark_mode');
    } else {
        body.classList.remove('light_mode');
        body.classList.add('dark_mode');
    }
}

function dark_svg() {
    svg[0].style.fill = `rgba(187, 187, 187, 0.58)`;
    svg[1].style.fill = `#AFA0A0`;
}

function light_svg() {
    svg[0].style.fill = `#20DF7F`;
    svg[1].style.fill = `#224957`;
}