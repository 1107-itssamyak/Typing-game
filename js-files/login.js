const body = document.querySelector("body");
const button = document.getElementById('img-button');
const svg = document.querySelectorAll('svg path');
let d = 0;
let mode_switch = true;

//setting mode in local storage
const theme = localStorage.getItem('mode');
if (theme === "dark-mode") {
    mode_switch = !mode_switch;

    body.classList.add(theme);
    body.classList.remove("light-mode");
    d += 180;
    button.style.transform = `rotate(180deg)`;
} else {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
}

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
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');

        localStorage.setItem('mode', 'light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');

        localStorage.setItem('mode', 'dark-mode');
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