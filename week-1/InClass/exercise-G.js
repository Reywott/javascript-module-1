const students = 15
const mentors = 8

const sum = students + mentors

const percentage1 = (students / sum) * 100
const percentage2 = (mentors / sum) * 100

console.log(percentage1)
console.log(percentage2)

const roughPercentage1 = `Percentage students: ${Math.round(percentage1)}`
const roughPercentage2 = `Percentage mentors: ${Math.round(percentage2)}`


console.log(roughPercentage1,"%")
console.log(roughPercentage2,"%")