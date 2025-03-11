class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name(): string {
    return this._name;
  }

  // Getter for age
  get age(): number {
    return this._age;
  }

  // Setter for age
  set age(age: number) {
    this._age = age;
  }
}

class Student extends Person {
  // Method to log that the student is studying
  study(): void {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  // Method to log that the teacher is teaching
  teach(): void {
    console.log(`${this.name} is teaching`);
  }
}

// Attach classes to the window object (required for Cypress tests)
(window as any).Person = Person;
(window as any).Student = Student;
(window as any).Teacher = Teacher;
