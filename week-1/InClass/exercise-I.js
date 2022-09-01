let now = new Date()
const currentYear = now.getFullYear() 
function getBirthDate(age) {
    return currentYear - age
}

console.log(getBirthDate(25))

function greetNameAge(name, age) {
    const currentAge = getBirthDate(age)
    const mssg = "My name is " + name + " and I was born in " + currentAge + ""
    return mssg
}


console.log(greetNameAge("Rewat", 35))