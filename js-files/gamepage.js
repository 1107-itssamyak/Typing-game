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
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
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
    text.style.display = "block";
    small.style.display = "block";
    text.focus();
    start.style.display = "none";

    const words = [
        'sigh',
        'tense',
        'airplane',
        'ball',
        'pies',
        'juice',
        'warlike',
        'bad',
        'north',
        'dependent',
        'steer',
        'silver',
        'highfalutin',
        'superficial',
        'quince',
        'eight',
        'feeble',
        'admit',
        'drag',
        'loving'
    ];

    // Init word
    let randomWord;

    // Init score
    let score = 0;

    // Init time
    let time = 4;

    // Generate random word from array
    function getRandomWord() {
        return words[Math.floor(Math.random() * words.length)];
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
        <button onclick="location.reload()">Reload</button>
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
            difficultySelect.style.display = "none";
            addWordToDOM();
            updateScore();

            // Clear
            e.target.value = '';

            if (difficulty === 'hard') {
                time += 0;
            } else if (difficulty === 'medium') {
                time += 2;
            } else {
                time += 3;
            }

            updateTime();
        }
    });
})