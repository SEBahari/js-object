let students = {};

getInput('ehsan bahari', 123, 88, ['riazi', 'fizik'], [12, 15]);
getInput('ali alavi', 456, 98, ['farsi', 'honar'], [20, 18]);
getInput('hossein yari', 789, 98, ['farsi', 'honar'], [20, 18]);

console.log(students);

function getInput(name, id, year, courses, marks) {
    let std = {};
    std.name = name;
    std.id = id;
    std.courses = courses;
    std.marks = {};
    for (let key in std.courses) {
        std.marks[std.courses[key]] = marks[key];
    }
    if (Array.isArray(students[year])) {
        students[year].push(std);
    } else {
        students[year] = [];
        students[year].push(std);
    }
}