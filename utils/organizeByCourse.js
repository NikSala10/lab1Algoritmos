export const organizeByCourse = (students) =>  {

    const accumulator = {};
    students.forEach(student => {
        if (accumulator[student.course]) {
            accumulator[student.course].push(student);
        } else {
            accumulator[student.course] = [student]; 
        }
    });
    return accumulator;
};

