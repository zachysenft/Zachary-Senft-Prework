// Activity 3: JavaScript Arrays and Loops

const studentNames = ['Zachary', 'Fred', 'Kathryn'];

for (let i = 0; i < 3; i++) {
    studentNames.push(prompt('Please enter another student name'));
}

for (let i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i]);
}