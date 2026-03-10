let currentPatient = 1;
let totalToProcess = 0;
let criticalCount = 0;
let report = "--- HOSPITAL EMERGENCY REPORT ---\n\n";

function initializeSystem() {
    totalToProcess = parseInt(document.getElementById('patientTotal').value);
    if (totalToProcess > 0) {
        document.getElementById('setupStep').classList.add('hidden');
        document.getElementById('inputStep').classList.remove('hidden');
        updateCounter();
    }
}

function updateCounter() {
    document.getElementById('patientCounter').innerText = "PATIENT " + currentPatient + " OF " + totalToProcess;
}

function processPatient() {
    const age = parseInt(document.getElementById('age').value);
    const oxygen = parseInt(document.getElementById('oxygen').value);
    const conscious = document.getElementById('consciousness').value;
    const injury = document.getElementById('injuryType').value;
    let priority = "Low";
    let dept = "General Medicine";
    let wait = "2 Hours";
    if (oxygen < 90 || conscious === "unconscious") {
        priority = "Critical";
        dept = "ICU";
        wait = "Immediate";
        criticalCount++;
    } else if (injury === "accident" || injury === "burn") {
        priority = "High";
        dept = "Emergency Trauma";
        wait = "15 Mins";
    } else if (injury === "fracture") {
        priority = "Moderate";
        dept = "Orthopedics";
        wait = "45 Mins";
    }
    if ((age > 65 || age < 5) && priority !== "Critical") {
        priority = "High (Upgraded)";
        wait = "10 Mins";
    }
    report += `Patient ${currentPatient}: [${priority}] -> ${dept} (Wait: ${wait})\n`;
    if (currentPatient < totalToProcess) {
        currentPatient++;
        updateCounter();
        clearForm();
    } else {
        showFinalReport();
    }
}

function clearForm() {
    document.getElementById('age').value = "";
    document.getElementById('oxygen').value = "";
}

function showFinalReport() {
    document.getElementById('inputStep').classList.add('hidden');
    document.getElementById('reportStep').classList.remove('hidden');
    let criticalPercent = (criticalCount / totalToProcess) * 100;
    report += `\nStatistics: ${criticalPercent.toFixed(1)}% Critical cases.`;
    document.getElementById('resultDisplay').innerText = report;
    if (criticalPercent >= 30) {
        document.getElementById('emergencyAlert').classList.remove('hidden');
    }
}   