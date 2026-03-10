function findPrice() {
    const month = document.querySelector('input[name="month"]:checked')?.value;
    const room = document.querySelector('input[name="room"]:checked')?.value;
    const output = document.getElementById("output");
    if (!month || !room) {
        output.innerHTML = "Please select both a month and a room type.";
        return;
    }
    let price = 0;
    if (month === "june" || month === "july" || month === "august" || month === "december") {
        if (room === "standard") {
            price = 5000;
        } else if (room === "deluxe") {
            price = 8000;
        } else {
            price = 12000;
        }
    }
    else {
        if (room === "standard") {
            price = 3000;
        } else if (room === "deluxe") {
            price = 5000;
        } else {
            price = 8000;
        }
    }
    output.innerHTML = `The room price per day is: ${price}`;
}
