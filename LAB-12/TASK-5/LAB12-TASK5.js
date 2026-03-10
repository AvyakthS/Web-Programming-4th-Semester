function calculateTotal() {
    const selectedOptions = document.querySelectorAll('#fruit-selection option:checked');
    const display = document.getElementById("result");
    
    let total = 0;
    let names = [];

    const prices = {
        apple: 100,
        banana: 50,
        orange: 70,
        grapes: 120
    };

    selectedOptions.forEach(option => {
        names.push(option.text.split(" -")[0]);
        total += prices[option.value];
    });

    if (names.length > 0) {
        display.innerHTML = "Selected: " + names.join(", ") + "<br>Total Price: " + total + " Rs";
    } else {
        display.innerHTML = "Please select at least one fruit.";
    }
}