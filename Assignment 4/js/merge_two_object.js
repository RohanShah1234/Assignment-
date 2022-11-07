/*Object1*/
const person = {
    name:"Rohan",
    age: 23
}
/*Object 2*/

const Employee = {
    id:26
}
/* Merging two object*/
const obj = {...person, ...Employee};
console.log(obj);