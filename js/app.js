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




