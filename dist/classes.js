"use strict";
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
//let user = new User('Carlos', 'Silva', 30);
//console.log(user.getFullName());
class Admin extends User {
    getFullName() {
        return `Dr. ${this.firstName} ${this.lastName}`;
    }
}
let admin = new Admin('Maria', 'Pereira', 26);
console.log(admin.getFullName());
