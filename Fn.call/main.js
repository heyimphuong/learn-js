"use strict"
function  Name (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}



function showFullName(firstName, lastName) {
    Name.call(this, firstName, lastName)
}
const student = new showFullName('ho', 'phuong') 
console.log(student)
console.log(`${student.firstName} ${student.lastName}`)