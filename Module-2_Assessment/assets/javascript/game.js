let characters = []
let wrong = [];
wins = 0;

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
    guessLeft = 7;
    autofillin = [];
    characters = randTeam.split("");
    blanks = characters.length;
    for (var i = 0; i < blanks; i++) {

        autofillin.push("_ ");

    }

    document.getElementById("word").innerHTML = " " + autofillin.join(" ");
    console.log(characters)
}

function checker(input) {
    let lettercheck = false;
    for (var i = 0; i < blanks; i++) {
        if (randTeam[i] == input) {
            lettercheck = true;
        }
    }

    for (let j = 0; j < wrong.length; j++) {
        if (wrong[i] == input) {
            lettercheck = false;
        }
    }

    if (lettercheck === false) {
        wrong.push(input);
        guessLeft--;
    }

    if (lettercheck === true) {
        for (let i = 0; i < blanks; i++) {
            if (randTeam[i] == input) {
                autofillin[i] = input;
            }
        }
    }

    if(guessLeft == 0) {
        randTeam = teams[Math.floor(Math.random() * teams.length)];
        autofillin = [];
        characters = [];
        wins--;
    }
    console.log(autofillin);
}


function reset() {
    autofillin = [];
    wrong = [];
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
    document.getElementById("guessleft").innerHTML = " " + guessLeft;

    document.getElementById("word").innerHTML = " " + autofillin.join(" ");
}

document.onkeyup = function (event) {
    let guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checker(guesses)
    console.log(guesses);
    finish();
    
    document.getElementById("guess").innerHTML = "  " + wrong.join(" ").toLowerCase();
}

Game()