let currentCount = 1;
let maxVehicles = 0;
let totalTax = 0;
let log = "Log:\n";

function startCollection() {
    maxVehicles = parseInt(document.getElementById('totalVehicles').value);
    if (maxVehicles > 0) {
        document.getElementById('setupStep').classList.add('hidden');
        document.getElementById('inputStep').classList.remove('hidden');
        updateLabel();
    }
}

function updateLabel() {
    document.getElementById('currentVehicleLabel').innerText = "Vehicle " + currentCount + " of " + maxVehicles;
}

function processNext() {
    const type = document.getElementById('vType').value;
    const isVIP = document.getElementById('isVIP').checked;
    let fee = 0;
    if (!isVIP) {
        if (type === "car") fee = 50;
        else if (type === "truck") fee = 100;
        else if (type === "bike") fee = 30;
    }
    totalTax += fee;
    log += "Vehicle " + currentCount + " (" + type + "): ₹" + fee + (isVIP ? " [VIP]" : "") + "\n";
    if (currentCount < maxVehicles) {
        currentCount++;
        updateLabel();
        document.getElementById('isVIP').checked = false; // Reset checkbox for next
    } else {
        finishCollection();
    }
}

function finishCollection() {
    document.getElementById('inputStep').classList.add('hidden');
    log += "----------------\nTotal Collected: ₹" + totalTax;
    document.getElementById('resultDisplay').innerText = log;
}