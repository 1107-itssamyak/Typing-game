const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

const small = document.getElementById("small");
const body = document.querySelector("body");
const button = document.getElementById("img-button");
let d = 0;
let mode_switch = true;

//* light and dark mode switch enabler
button.addEventListener('click', () => {
    mode_enabler();
    d += 180;
    button.style.transform = `rotate(${d}deg)`;
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

// Set difficulty to value in ls or medium
let difficulty =
    localStorage.getItem('difficulty') !== null
        ? localStorage.getItem('difficulty')
        : 'medium';

// Set difficulty select value
difficultySelect.value =
    localStorage.getItem('difficulty') !== null
        ? localStorage.getItem('difficulty')
        : 'medium';

// Settings btn click
settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));

// Settings select
settingsForm.addEventListener('change', e => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
});

// start game trigger call
const start = document.getElementById("start-game")

start.addEventListener('click', () => {
    difficultySelect.style.display = "none";
    text.style.display = "block";
    small.style.display = "block";
    text.focus();
    start.style.display = "none";

    const words = [
        'Irregardless',
        'Nonplussed',
        'airplane',
        'Enormity',
        'pies',
        'juice',
        'warlike',
        'investment',
        'north',
        'dependent',
        'steer',
        'silver',
        'highfalutin',
        'superficial',
        'quince',
        'Lieutenant',
        'feeble',
        'campaign',
        'circumstances',
        'loving',
        'campaign',
        'defendant',
        'Environmental',
        'significant',
        'Complications',
    ];

    // Init word
    let randomWord;

    // Init score
    let score = 0;

    // Init time
    let time = 10;

    // Generate random word from array
    function getRandomWord() {
        return words[Math.floor(Math.random() * words.length) + 1];
    }

    // Add word to DOM
    function addWordToDOM() {
        randomWord = getRandomWord();
        word.innerHTML = randomWord;
    }

    // Update score
    function updateScore() {
        score++;
        scoreEl.innerHTML = score;
    }

    // Update time
    function updateTime() {
        time--;
        timeEl.innerHTML = time + 's';

        if (time === 0) {
            clearInterval(timeInterval);
            // end game
            gameOver();
        }
    }

    // Game over, show end screen
    function gameOver() {
        const heading = document.getElementById("heading");
        const small = document.getElementById("small");
        // word
        const ti = document.querySelector(".time-container");
        const sc = document.querySelector(".score-container");

        difficultySelect.style.display = "block";
        heading.style.opacity = 0;
        small.style.opacity = 0;
        word.style.opacity = 0;
        ti.style.opacity = 0;
        sc.style.opacity = 0;
        text.style.display = 'none';

        endgameEl.innerHTML = `
        <h1>Time ran out</h1>
        <p>Your final score is ${score}</p>
        <button onclick="location.reload()" class="reload-button">Reload</button>
      `;

        endgameEl.style.display = 'flex';
    }

    // Focus on text on start
    text.focus();

    //TODO Start counting down
    const timeInterval = setInterval(updateTime, 1000);

    addWordToDOM();

    text.addEventListener('input', e => {
        const insertedText = e.target.value;

        if (insertedText === randomWord) {
            addWordToDOM();
            updateScore();

            // Clear
            e.target.value = '';

            if (difficulty === 'hard') {
                time += 2;
            } else if (difficulty === 'medium') {
                time += 3;
            } else {
                time += 5;
            }

            updateTime();
        }
    });
})