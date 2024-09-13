import students from "./data/students.js";
import { renderStudent } from "./utils/renderStudent.js";
import { orderByName } from "./utils/orderByName.js";
import { organizeByCourse } from "./utils/organizeByCourse.js";
import { calculateMeanGrade } from "./utils/calculateMeanGrade.js";
import { filterHighGrade } from "./utils/filterHighGrade.js";


const sortedStudents = orderByName(students); 
const filteredAndSortedStudents = filterHighGrade(students);
const calculateMeanGradeStudents = calculateMeanGrade(students);
const organizeByCourseStudents = organizeByCourse(students); 



const container = document.querySelector('.app');



// Renderizar estudiantes organizados por orden alfábetico
const studentsOrderByNameTitle = document.createElement('h1');
studentsOrderByNameTitle.textContent = 'List Students: ';
container.appendChild(studentsOrderByNameTitle);

sortedStudents.forEach((student) => {
    const studentCard = document.createElement('div');
    studentCard.classList.add('name-card');
    
    const studentName = document.createElement('p');
    studentName.textContent = student.name; 
    studentCard.appendChild(studentName);

    container.appendChild(studentCard);
});





// Renderizar estudiantes organizados por curso
const mainTitle = document.createElement('h1');
mainTitle.textContent = 'COURSES ';
container.appendChild(mainTitle);

Object.keys(organizeByCourseStudents).forEach((course) => {
    const courseTitle = document.createElement('h2');
    courseTitle.classList.add('course-title');
    courseTitle.textContent = course;
    container.appendChild(courseTitle);

    organizeByCourseStudents[course].forEach((student) => {
        const studentCard = renderStudent(student);
        container.appendChild(studentCard);
    });
});






// Renderizar nota promedio estudiantes
const meanGradeTitle = document.createElement('h1');
meanGradeTitle.textContent = 'Grade point average: ' + calculateMeanGradeStudents.toFixed(2);
container.appendChild(meanGradeTitle);






// Renderizar nota superior a 80 estudiantes
const filterHighGradeTitle = document.createElement('h1');
filterHighGradeTitle.textContent = 'Students with the highest grades';
container.appendChild(filterHighGradeTitle);

filteredAndSortedStudents.forEach((student) => {
    const studentCard = document.createElement('div');
    studentCard.classList.add('grade-card');
    studentCard.textContent = `${student.name} - Grade: ${student.grade}`;
    container.appendChild(studentCard);
});

