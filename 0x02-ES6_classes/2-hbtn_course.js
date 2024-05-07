export default class HolbertonCourse {
  constructor(name, length, students) {
    /*     if (typeof (name) !== 'string') { throw TypeError('Name must be a string'); }
    if (typeof (length) !== 'number') { throw TypeError('Length must be a number'); }
    if (!Array.isArray(students)) { throw TypeError('students must be an Array'); } else {
      students.forEach((item) => { if (typeof item !== 'string') {
         throw TypeError('students must contain string'); } return true; });
    } */
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // setter for name
  set name(value) {
    if (typeof (value) !== 'string') { throw TypeError('Name must be a string'); }
    this._name = value;
  }

  // getter for length
  get length() {
    return this._length;
  }

  // setter for length
  set length(value) {
    if (typeof (value) !== 'number') { throw TypeError('Length must be a number'); }
    this._length = value;
  }

  // getter for students
  get students() {
    return this._students;
  }

  // setter for students
  set students(value) {
    if (!Array.isArray(value)) { throw TypeError('students must be an Array'); } else {
      value.forEach((item) => { if (typeof item !== 'string') { throw TypeError('students must contain string'); } return true; });
    }
    this._students = value;
  }
}
