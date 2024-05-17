interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher1: Teacher = {
    firstName: 'Ruth',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'New York'
};

const teacher2: Teacher = {
    firstName: 'Jane',
    lastName: 'Anan',
    fullTimeEmployee: false,
    yearsOfExperience: 5,
    location: 'Los Angeles'
};

const teachersList: Teacher[] = [teacher1, teacher2];

const table = document.createElement('table');
teachersList.forEach(teacher => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.textContent = teacher.firstName;
    cell2.textContent = teacher.location;
});

document.body.appendChild(table);
