function createNewPerson(name) {
    const obj = {
        name: name,
        greeting: function() {
            console.log("Hi! I'm "+ this.name)
        }
    }
    return obj
}
const person1 = createNewPerson("Thien")
console.log(person1.name);
person1.greeting();

person1.age = 20;
person1.hello = function() {
    console.log(person1.name + " hello");
    
}
console.log(person1.age);
person1.hello();
console.log("--------------------------");

//
function Person(name) {
    var _name = name;
    this.name = name;
    this.greeting = function() {
        console.log("Hello! I'm " + this.name);
        console.log("_name", _name);
        
    }
    this.getName = function() {
        return _name;
    }
}
Person.prototype.age = 20;
let person2 = new Person("Bob")
console.log("person2", person2);
for(i in person2) {
    console.log("i", i);
    
}
console.log("person2.age", person2.age);

/**
 * Lập trình hướng đối tượng trong js
 * - Tính đóng gói (Encapsulation)
 */
let person3 = new Person("Phuc")
console.log("person3._name", person3._name); //undefined
console.log("this.getName", this.getName); //"Phuc"

console.log("------------------------");
//- Tính kế thừa

// call() method
let person4 = new Person("Thu");
person2.greeting.call(person4);

console.log("-------------------------");

//Class
class PersonClass {
    constructor(age) {
        this.age = age;
    }
    go = () => {
        console.log("PersonClass age", this.age);
        
    }
}
class StudentClass extends PersonClass {
    constructor(name, age) {
        super(age)
        this.name = name;
    }
    goToSchool = () => {
        console.log("Go to school "+ this.name);
    }
}
let myStudent = new StudentClass("Ngan", 20);
myStudent.goToSchool();
myStudent.go();