export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Get and Set name field
  get name() {
    return this._name;
  }

  set name(nick) {
    if (typeof nick === 'string') {
      this._name = nick;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Get and Set Length field
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // Get and Set Length field
  get students() {
    return this._students;
  }

  set students(value) {
    if (value instanceof Array) {
      if (value.every((student) => typeof student === 'string')) {
        this._students = value;
      } else {
        throw new TypeError('Students must be an array of strings');
      }
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
