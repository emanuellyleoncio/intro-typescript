"use strict";
//numbers
let name_var = 123;
name_var = 1.5;
console.log(name_var);
//boolean
let active = true;
//string
let cidade = 'Cuiaba';
//Enums
var ROLES;
(function (ROLES) {
    ROLES[ROLES["MANAGER"] = 0] = "MANAGER";
    ROLES[ROLES["ADMIN"] = 1] = "ADMIN";
    ROLES[ROLES["CEO"] = 2] = "CEO";
    ROLES[ROLES["CTO"] = 3] = "CTO";
})(ROLES || (ROLES = {}));
;
function setRole(role) {
}
;
setRole(ROLES.ADMIN);
// arrays
let names = ['Carlos', 'Maria', true, 1];
let names1 = ['Carlos', 'Maria', 'João'];
let names2 = ['Carlos', 'Maria', 'João'];
