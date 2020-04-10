// Activity 2: JavaScript Variables, Alerts, Prompts, and Conditionals

const userInput = prompt('Enter your name, please.');
const string = userInput.length;
const goodMessage = 'Your name is longer than four characters!';
const badMessage = 'Your name is less than four characters. :(';

if (string > 4) {
    alert(goodMessage);
}

else {
    alert(badMessage);
}