"use strict";
const getUser = (user) => {
    return `${user.firstName} ${user.lastName}, age ${user.age}`;
};
/* let user = {
    firstName: 'Maria',
    lastName: 'Silva',
    age: 35,
}

console.log(getUser(user)); */
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person('Ana', 'Pereira', 25);
console.log(getUser(person));
