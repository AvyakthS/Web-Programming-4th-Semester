function findPrice() {
    const month = document.getElementById("month").value;
    const room = document.getElementById("roomType").value;
    const output = document.getElementById("output");
    let price = 0;
    if (month === "june" || month === "july" || month === "august" || month === "december") {
        if (room === "standard") price = 5000;
        else if (room === "deluxe") price = 8000;
        else if (room === "suite") price = 12000;
    } 
    else {
        if (room === "standard") price = 3000;
        else if (room === "deluxe") price = 5000;
        else if (room === "suite") price = 8000;
    }
    output.innerHTML = "The room price per day is: ₹" + price;
}