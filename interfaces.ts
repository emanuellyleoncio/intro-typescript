interface UserInterface {
    firstName: string;
    lastName: string;
    age: number;

    getFullName(): string
}


const getUser = (user: UserInterface): string => {
    return `${user.firstName} ${user.lastName}, age ${user.age}`;
}

/* let user = {
    firstName: 'Maria',
    lastName: 'Silva',
    age: 35,
}

console.log(getUser(user)); */

class Person implements UserInterface {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age:number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person('Ana', 'Pereira', 25);
console.log(getUser(person));