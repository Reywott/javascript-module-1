/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here
function findLongNameThatStartsWithA(arr){
  //return arr.find((el) => el[0] == "A" && el.length > 7)
  return arr.find(function(name){
     return name[0] == "A" && name.length > 7})
}
const names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

const longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"


// another solution return arr.find(function(name)){ return name[0] == "A" && name.length > 7}