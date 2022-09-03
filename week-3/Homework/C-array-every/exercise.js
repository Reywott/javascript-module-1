/*
   This program should check if the array `group` contains only students
*/

const students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
const group = ["Austine", "Dany", "Swathi", "Daniel" ];

const OnlyStudents = group.filter(student => students.includes(student)) 

let groupIsOnlyStudents = group.length == OnlyStudents.length

// groupIsOnlyStudents = group.every(e => students.includes(e))

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
