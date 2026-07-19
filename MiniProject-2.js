function SayHello() {
    alert("Hello!");
}




document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("text").innerText = "Hello Students";
});




let count = 0;
document.getElementById("plus")
.addEventListener("click", function(){
count++;
document.getElementById("count").innerText = count;
});




document.getElementById("show")
.addEventListener("click", function(){
let pass = document.getElementById("pass");
if(pass.type=="password")
pass.type="text";
else
pass.type="password";});


