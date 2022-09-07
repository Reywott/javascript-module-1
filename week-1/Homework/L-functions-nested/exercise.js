var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

/*function shoutyGreeting() {
    const greeting = "HELLO"
    console.log(greeting, mentor1.toUpperCase());
    console.log(greeting, mentor2.toUpperCase());
    console.log(greeting, mentor3.toUpperCase());
    console.log(greeting, mentor4.toUpperCase());
    console.log(greeting, mentor5.toUpperCase()); 
    
}                              

shoutyGreeting();  */   //first solution


function logElement(mentor){
    console.log("HELLO", mentor.toUpperCase());
}




function toGreet(){
    const mentors = [mentor1, mentor2, mentor3, mentor4, mentor5];
    const greeting = "HELLO"
    //mentors.forEach(mentor => console.log(greeting, mentor.toUpperCase()));   //alternate solution
    mentors.forEach(logElement);
}
toGreet();