// string type
let greetings: string = "Hello Rahul"; // syntax to define a variable of type string

console.log(greetings);

// number type
let rollNo:number = 7; // floats are also comes in number type. so we can define 7.7 or 7.7777 in number type 

// we can avoid writting type for each time by using toFixed method for e.g.
 let myRollNo = 7;
 myRollNo.toFixed();

// boolean type
 let flag:boolean = true;
  
// any type
 let name; // it will be assigned to (any) type
 function getName(){ 
    return "rahul"
}
name = getName(); // (name) can be assigned to any type

export {};