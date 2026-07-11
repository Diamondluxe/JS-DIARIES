const prompt = require("prompt-sync")();

//Example 1
let signal = prompt("Enter the traffic signal color:").toLowerCase();
if (signal == "green") {
    console.log("Go");
}
else if (signal == "yellow") {
    console.log("Wait");
}
else if (signal == "red") {
    console.log("Stop");
}
else {
    console.log("Invalid signal color");
}

//Example 2
let marks = 75;

if(marks>=90){
    console.log("Grade A");
}
else if(marks>=80){
    console.log("Grade B");
}
else if(marks>=70){
    console.log("Grade C");
}
else {
    console.log("Fail");
}

