// const User = {
//     name: "hitesh",
//     email: "hitesh@lco.dev",
//     isAvtive: true
// }
// function createUser({name: string, isPaid: boolean}){}
// let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}
// createUser(newUser)  //wrong but no error, its odd behavior of ts
// function returns object  
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createUser(user) {
    return { name: "", email: "", isActive: true };
}
createUser({ name: "", email: "", isActive: true });
var myUser = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false
};
myUser.email = "h@gmail.com";
// myUser._id = "asa"
