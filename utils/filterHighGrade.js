export const filterHighGrade = (students) => { 
    return students
        .filter(student => student.grade > 80)  
        .sort((a, b) => b.grade - a.grade); 
};
