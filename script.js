// Person class
class Person {
    // Private fields for name and age
    #name;
    #age;

    // Constructor to initialize name and age
    constructor(name, age) {
        if (!name || typeof name !== 'string') {
            throw new Error("Name must be a non-empty string");
        }
        if (!Number.isInteger(age) || age <= 0) {
            throw new Error("Age must be a positive integer");
        }
        this.#name = name;
        this.#age = age;
    }

    // Getter for name
    get name() {
        return this.#name;
    }

    // Getter for age
    get age() {
        return this.#age;
    }

    // Setter for age
    set age(age) {
        if (!Number.isInteger(age) || age <= 0) {
            throw new Error("Age must be a positive integer");
        }
        this.#age = age;
    }
}

// Student class inheriting from Person
class Student extends Person {
    // Method to log studying message
    study() {
        console.log(`${this.name} is studying`);
    }
}

// Teacher class inheriting from Person
class Teacher extends Person {
    // Method to log teaching message
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Attach classes to the window object (required for Cypress tests)
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
// Person class
class Person {
    // Private fields for name and age
    #name;
    #age;

    // Constructor to initialize name and age
    constructor(name, age) {
        if (!name || typeof name !== 'string') {
            throw new Error("Name must be a non-empty string");
        }
        if (!Number.isInteger(age) || age <= 0) {
            throw new Error("Age must be a positive integer");
        }
        this.#name = name;
        this.#age = age;
    }

    // Getter for name
    get name() {
        return this.#name;
    }

    // Getter for age
    get age() {
        return this.#age;
    }

    // Setter for age
    set age(age) {
        if (!Number.isInteger(age) || age <= 0) {
            throw new Error("Age must be a positive integer");
        }
        this.#age = age;
    }
}

// Student class inheriting from Person
class Student extends Person {
    // Method to log studying message
    study() {
        console.log(`${this.name} is studying`);
    }
}

// Teacher class inheriting from Person
class Teacher extends Person {
    // Method to log teaching message
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Attach classes to the window object (required for Cypress tests)
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
// Person class
class Person {
    // Private fields for name and age
    #name;
    #age;

    // Constructor to initialize name and age
    constructor(name, age) {
        if (!name || typeof name !== 'string') {
            throw new Error("Name must be a non-empty string");
        }
        if (!Number.isInteger(age) || age <= 0) {
            throw new Error("Age must be a positive integer");
        }
        this.#name = name;
        this.#age = age;
    }

    // Getter for name
    get name() {
        return this.#name;
    }

    // Getter for age
    get age() {
        return this.#age;
    }

    // Setter for age
    set age(age) {
        if (!Number.isInteger(age) || age <= 0) {
            throw new Error("Age must be a positive integer");
        }
        this.#age = age;
    }
}

// Student class inheriting from Person
class Student extends Person {
    // Method to log studying message
    study() {
        console.log(`${this.name} is studying`);
    }
}

// Teacher class inheriting from Person
class Teacher extends Person {
    // Method to log teaching message
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Attach classes to the window object (required for Cypress tests)
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
