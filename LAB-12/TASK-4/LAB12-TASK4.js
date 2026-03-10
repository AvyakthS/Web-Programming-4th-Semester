function reverse(){
    var textInput = document.getElementById("text-area").value;
    var display = document.querySelector(".para");
    var reversedText = textInput.split("").reverse().join("");
    display.innerHTML = "Reversed Text: " + reversedText;
}
function checklengreatthan10(){
    var textInput = document.getElementById("text-area").value;
    var display = document.querySelector(".para");
    if(textInput.trim().length <10){
        display.innerHTML = "Error: Input must be at least 10 characters long.";
    }else{
        display.innerHTML = "Input is valid.";
    }
}
function uppercase(){
    var textInput = document.getElementById("text-area").value;
    var display = document.querySelector(".para");
    var uppercaseText = textInput.toUpperCase();
    display.innerHTML = "Uppercase Text: " + uppercaseText;
}