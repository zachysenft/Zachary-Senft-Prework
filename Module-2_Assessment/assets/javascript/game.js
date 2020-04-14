let randTeam = "";
let characters = []
let blanks = 0;
let autofillin = [];
let wrong = [];
let wins = 0;
let losses = 0;
let guessLeft = 7;

const teams = [
    'tottenham',
    'liverpool',
    'chelsea',
    'manchesterunited',
    'manchestercity',
    'everton',
    'astonvilla',
    'newcastle'
]

function Game() {
    randTeam = teams[Math.floor(Math.random() * teams.length)];
    characters = randTeam.split("");
    blanks = characters.length;
    for (var i = 0; i < blanks; i++) {
        autofillin.push("_ ");
    }

    document.getElementById("word").innerHTML = " " + autofillin.join(" ");
    console.log(characters)
}

function checkLetters(letter) {
    var lettercheck = false;
    for (var i = 0; i < blanks; i++) {
        if (randTeam[i] == letter) {
            lettercheck = true;
        }
    }

    if (lettercheck) {
        for (var i = 0; i < blanks; i++) {
            if (randTeam[i] == letter) {
                autofillin[i] = letter;
            }
        }
    }

    else {
        wrong.push(letter);
        guessLeft--;
    }
    console.log(autofillin);
}

function reset() {
    autofillin = [];
    wrong = [];
    guessLeft = 7;
    Game()
}

function finish() {
    if (characters.toString() == autofillin.toString()) {
        wins++;
        document.getElementById("wins").innerHTML = " " + wins;
        reset()
    } 
    else if (guessLeft === 0) {
        losses++;
        reset()
        document.getElementById("losses").innerHTML = " " + losses;
    }
    document.getElementById("word").innerHTML = " " + autofillin.join(" ");
    document.getElementById("guessleft").innerHTML = " " + guessLeft;
}

Game()

document.onkeyup = function (event) {
    let guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses)
    console.log(guesses);
    finish();
    
    document.getElementById("guess").innerHTML = "  " + wrong.join(" ").toUpperCase();
}