let count = 0;
let totalClicks = 0;

let plus = document.getElementById("plus"); 
let minus = document.getElementById("minus"); 
let reset = document.getElementById("reset"); 
let plus5 = document.getElementById("plus5");
let minus5 = document.getElementById("minus5");
let double = document.getElementById("double");
let counter = document.getElementById("count"); 
let message = document.getElementById("message");  
let clicks = document.getElementById("clicks"); 

function updateCounter(){
    counter.innerText = count;

    clicks.innerText = "Button Clicks: "+ totalClicks;

    if(count > 0){
        counter.style.color = "green";
        message.innerText = "😊Positive Score";
        document.body.style.backgroundColor = "#d4edda";
    }

    else if(count<0){
        counter.style.color = "red"; 
        message.innerText = "😢Negative Score";
        document.body.style.backgroundColor = "#f8d7da";
    }

    else{
        counter.style.color = "black";
        message.innerText = "😐Counter is Zero"; 
        document.body.style.backgroundColor = "white"; 
    }

    if(count == 10){

        alert("🎉Congratulations! Your reached 10.");
        plus.Disabled = true;
    }

    if(count == -5){
        alert("⚠ Too Low!"); 
    }

    if (count >= 20) {
        message.innerText = "🎉 You Win!";
    }

}

plus.addEventListener("click", function(){
    count++;
    totalClicks++;
    updateCounter();
});

minus.addEventListener("click",function(){
    count--;
    totalClicks++;
    updateCounter();
});

reset.addEventListener("click",function(){
    count = 0 ;
    totalClicks = 0;
    plus.disabled = false;
    updateCounter();
});

plus5.addEventListener("click", function() {
    count += 5;
    totalClicks++;
    updateCounter();
});

minus5.addEventListener("click", function() {
    count -= 5;
    totalClicks++;
    updateCounter();
});

double.addEventListener("click", function() {
    count *= 2;
    totalClicks++;
    updateCounter();
});

updateCounter();