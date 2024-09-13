export const calculateMeanGrade = (students) =>  {
    let resultGrade = 0;
    students.forEach(student => {
        resultGrade = resultGrade + student.grade
    });
    return resultGrade/students.length
};
