let button = document.getElementById("btn");

button.addEventListener("click" , function(){
    let username = document.getElementById("name").value;

    if(username == ""){
        alert("Please Enter Your Name!");
        return
    }

    document.getElementById("result").innerText = "Welcome " + username + "!";


    document.getElementById("result").style.color = "white";

    document.getElementById("result").style.fontSize = "40px";

    document.body.style.backgroundColor = "#e62552";

    button.style.backgroundColor = "white";
    button.style.color = "#e62552";

    document.querySelector("h1").innerText = "JavaScript DOM Project";

    document.getElementById("name").value = "";

});