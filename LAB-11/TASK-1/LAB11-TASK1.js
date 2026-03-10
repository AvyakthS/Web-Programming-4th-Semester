function submitted() {
    var age = Number(document.getElementById("age").value);
    var salary = Number(document.getElementById("salary").value);
    var Cred = Number(document.getElementById("credit-score").value);
    var inputs = document.querySelectorAll(".num");
    if (age < 21 || age > 60) {
        document.getElementById("error").innerHTML = "The age must be between 21 and 60";
        return;
    }
    else if (salary < 50000) {
        document.getElementById("error").innerHTML = "The salary must be greater than 50,000";
        return;
    }
    else if (Cred < 700 && salary < 100000) {
        document.getElementById("error").innerHTML = "Either the salary must be greater than 100000 or the Credit score of the customer must be greater than 700";
        return;
    }
    else {
        document.getElementById("error").innerHTML = "Document submitted Successfully!";
    }
    for (let input of inputs) {
        if(isNaN(input.value)) {
            document.getElementById("error").innerHTML =`${input.id} must be a number`;
            return;
        }
    }
}