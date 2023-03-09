"use strict";
exports.__esModule = true;
// string type
var greetings = "Hello Rahul"; // syntax to define a variable of type string
console.log(greetings);
// number type
var rollNo = 7; // floats are also comes in number type. so we can define 7.7 or 7.7777 in number type 
// we can avoid writting type for each time by using toFixed method for e.g.
var myRollNo = 7;
myRollNo.toFixed();
// boolean type
var flag = true;
// any type
var name; // it will be assigned to (any) type
function getName() {
    return "rahul";
}
name = getName(); // (name) can be assigned to any type
