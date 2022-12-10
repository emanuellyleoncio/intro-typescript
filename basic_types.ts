//numbers
let name_var: number = 123;
name_var = 1.5;
console.log(name_var);

//boolean
let active: boolean = true

//string
let cidade: string = 'Cuiaba'

//Enums
enum ROLES {
    MANAGER, ADMIN, CEO, CTO
};
function setRole(role: ROLES): void {

};
setRole(ROLES.ADMIN);

// arrays
let names = ['Carlos', 'Maria', true, 1];
let names1: string[] = ['Carlos', 'Maria', 'João'];
let names2: Array<string> = ['Carlos', 'Maria', 'João'];