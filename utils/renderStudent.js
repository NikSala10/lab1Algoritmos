export const renderStudent = ({ id, name, age, grade, course }) => {

	const card = document.createElement('div');
	card.classList.add('student-card');

    const nameH2 = document.createElement('h3');
    const idP = document.createElement('p');
	const ageP = document.createElement('p');
    const gradeP = document.createElement('p');
    const courseP = document.createElement('p');
    
    nameH2.textContent = 'Name: '+ name;
    idP.textContent = 'Id: ' + id;
    ageP.textContent = 'Age: ' + age;
    gradeP.textContent = 'Grade: ' + grade;
    courseP.textContent = 'Course: ' + course;

	card.appendChild(nameH2);
    card.appendChild(idP);
	card.appendChild(ageP);
	card.appendChild(gradeP);
	card.appendChild(courseP);
	
	return card;
};