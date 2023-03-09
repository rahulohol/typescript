"use strict";
exports.__esModule = true;
function addNum(num) {
    // num.toLowerCase()  //error
    return num + 2;
}
addNum(5);
function getUpperCase(val) {
    return val.toUpperCase();
}
//   getUpperCase(6) //error
getUpperCase("rahul"); //correct
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
signUpUser("Rahul", "rahul@gmail.com", false);
loginUser("h", "h@h.com");
// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
// void type to not return anything
function consoleError(errmsg) {
    console.log(errmsg);
}
// never type to handle errors
function handleError(errmsg) {
    throw new Error(errmsg);
}
