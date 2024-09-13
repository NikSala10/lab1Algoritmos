
export const orderByName = (students) => {
    return students.sort((a, b) => a.name.localeCompare(b.name));
};

