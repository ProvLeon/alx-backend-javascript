const createIteratorObject = (report) => {
  let employees = [];
  for (const department of Object.values(report.allEmployees)) {
    employees = employees.concat(department);
  };

  return {
      *[Symbol.iterator]() {
        for (const employee of employees) {
          yield employee;
        };
      },
  };
}

export default createIteratorObject;
