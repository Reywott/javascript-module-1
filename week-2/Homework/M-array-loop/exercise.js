/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];


function startsWithT(arr){
  let nameArray = []
  for(i=0; i < arr.length; i++){
    if(arr[i][0] == "T"){
      nameArray.push(arr[i])
    }

  }
  return nameArray
}

console.log(startsWithT(daysOfWeek));
