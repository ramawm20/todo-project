'use strict';
  console.log("helllo");

  
 var userName =prompt(" Enter your name please ");
console.log("userName= "+userName);

var gender =prompt(" Enter your gender please ");
if (gender === "female" || gender === "male"){
    console.log("gender= "+gender);
    
}
else {
    gender = prompt("Please enter your gender (either female or male)")
   
   console.log("gender= "+gender);

}
 

 var age=prompt("Enter your age please ")
if (age <= 0){
    alert("your age is "+ age +" ?????????????")
    age=prompt("Re Enter your age please ")
   
   console.log("age = "+age )
}
else {
   
    console.log("age = "+age)
} 

var welcome= confirm ("Do you want to skip the welcomming message??")
console.log("",welcome)
if (welcome === false){
   if (gender === "female") {
    alert("Welcome to our website Ms "+userName)
   }
   else if (gender === "male"){
    alert("Welcome to our website Mr "+userName)
   }
   else {
    alert("Welcome to our website "+userName)
   }
}
else {
    console.log("no welcomming message ")
}
 
   

//---------------------------------------------------------------------------------------------
//lab 06

console.log("-----------------------------------------------------------------");
console.log("Today's lab (Tuesday) ,Welcome");
let information = [];

//print answers from previous lab
putAnswerInArray(userName);
putAnswerInArray(gender);
putAnswerInArray(age);


//new questions
let feelingOkay=prompt("Are you feeling good today?");
putAnswerInArray((inValidString(feelingOkay)));


let working=prompt("Are you currently working?");
putAnswerInArray((inValidString(working)));

let beenInLtuc=prompt("Have you been to Luminous College before?")
putAnswerInArray((inValidString(beenInLtuc))); 



//print array's element
console.log("Array's Element :::");
printArray(information);





//functions
//function1  If the input was empty the answer will be "invalid" string.
function inValidString(input){
    if (input == ""){
        return "invalid"
    }
    else 
    {
        return input;
    }
  
}
//function 2 putting the answer of the questions in array
function putAnswerInArray(input){
    information.push(input)
}



//function 3 printing array's element
 function printArray() {
    for (let i = 0; i < information.length; i++){
        console.log(information[i]);
    }
}
 