//complete this code
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}

class Student extends Person {
    study() {
        console.log(`${this._name} is studying.`);
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this._name} is teaching.`);
    }
}
const john = new Person('John', 25);
console.log(john.name); // Output: John
john.age = 30;
console.log(john.age); // Output: 30

const alice = new Student('Alice', 20);
alice.study(); // Output: Alice is studying.

const mrSmith = new Teacher('Mr. Smith', 35);
mrSmith.teach(); // Output: Mr. Smith is teaching.
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;