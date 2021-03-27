let students = {};
let counter = 0;
getInput('ehsan bahari', 123,88,  ['riazi','fizik'], [12, 15]);
getInput('ali alavi', 456,98,  ['farsi','honar'], [20, 18]);
showStudentsInYear(88);
// console.log(students);

function getInput(name, id, year, courses, marks) {
    let std = {};
    std.name = name;
    std.id = id;
    std.year = year;
    std.courses = courses;
    std.marks = {};
    for (let key in std.courses) {
        std.marks[std.courses[key]] = marks[key];
    }
    students[counter++] = std;
}
function showStudentsInYear(year){
    for(let key in students){
        if (students[key].year === year) console.log(students[key]);
    }
}