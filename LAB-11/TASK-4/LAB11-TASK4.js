function calculatePrice() {
    const age = parseInt(document.getElementById('age').value);
    const time = parseInt(document.getElementById('time').value);
    const resultDiv = document.getElementById('result');
    let price = 0;
    if (age < 12) {
        price = 100;
    } else if (age >= 60) {
        price = 120;
    } else {
        price = 200;
    }
    if (time < 17) {
        price = price * 0.5;
    }
    if (isNaN(age) || isNaN(time)) {
        resultDiv.innerText = "Please enter valid numbers.";
    } else {
        resultDiv.innerText = `Final Ticket Price: ₹${price}`;
    }
}