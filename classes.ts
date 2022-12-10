class User {
    protected firstName: string;
    protected lastName: string;
    protected age: number;

    constructor(firstName: string, lastName: string, age:number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//let user = new User('Carlos', 'Silva', 30);
//console.log(user.getFullName());

class Admin extends User {

    public getFullName() {
        return `Dr. ${this.firstName} ${this.lastName}`;
    }
}

let admin = new Admin('Maria', 'Pereira', 26);
console.log(admin.getFullName());