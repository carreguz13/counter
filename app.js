//set initial count
var number = 0;


//select value and buttons 
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function (e) {
const styles = e.currentTarget.classList;
if(styles.contains("decrease")){
    number--;
}
else if (styles.contains("increase")){
number++;
}
else if (styles.contains("reset")){
number = 0;
}
if(number < 0){
    value.style.color = "red";
}
else if(number > 0){
    value.style.color = "green";
}
else if(number === 0){
value.style.color = "#102A42";
}
value.textContent = number;

    });
});