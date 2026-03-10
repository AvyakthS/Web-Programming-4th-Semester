function selectPrice() {
    var dropdown = document.getElementById("fruit-selection");
    var selectedFruit = dropdown.value; 
    var display = document.querySelector(".para");
    if (selectedFruit === "apple") {
        display.innerHTML = "Price of Apple is 100 Rs/kg";
    } else if (selectedFruit === "banana") {
        display.innerHTML = "Price of Banana is 50 Rs/kg";
    } else if (selectedFruit === "orange") {
        display.innerHTML = "Price of Orange is 70 Rs/kg";
    } else if (selectedFruit === "grapes") {
        display.innerHTML = "Price of Grapes is 120 Rs/kg";
    } else {
        display.innerHTML = "Please select a fruit.";
    }
}