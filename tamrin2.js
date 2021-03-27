let student = {};
getInput('ehsan bahari', 123, ['riazi','fizik'], [12, 15]);
console.log(student);

function getInput(name, id, courses, marks) {
    student.name = name;
    student.id = id;
    student.courses = courses;
    student.marks = {};
    for (let key in student.courses) {
        student.marks[student.courses[key]] = marks[key];
    }
}