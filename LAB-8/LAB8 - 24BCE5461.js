// TASK 1: Student Eligibility Logic

function analyzeEligibility() {

    const cgpa = parseFloat(document.getElementById('cgpa').value);
    const arrears = parseInt(document.getElementById('arrears').value);
    const internship = document.getElementById('internship').value;
    const resultDiv = document.getElementById('eligibilityResult');

    resultDiv.className = "result-box";

    if (isNaN(cgpa) || isNaN(arrears)) {
        resultDiv.innerHTML = "Please enter valid numbers.";
        return;
    }

    if (cgpa >= 7.5 && arrears === 0 && internship === "yes") {
        resultDiv.innerHTML = "Status: Eligible for Placements";
        resultDiv.classList.add("eligible");
    }

    else if (cgpa >= 6.5 && arrears <= 2) {
        resultDiv.innerHTML = "Status: Eligible with Conditions";
        resultDiv.classList.add("conditional");
    }

    else {
        resultDiv.innerHTML = "Status: Not Eligible for Placements";
        resultDiv.classList.add("not-eligible");
    }

}



// TASK 2: Profile Picture Toggle Logic

function toggleProfile() {

    const img = document.getElementById('profilePic');
    const status = document.getElementById('profileStatus');
    const btn = document.getElementById('toggleBtn');

    const profileA = {
        src: "Profile A.jpeg",
        alt: "Student A's Profile Picture",
        status: "Logged into Student A's Profile",
        btnText: "Switch to Student B's Profile",
        id: 'A'
    };

    const profileB = {
        src: "Profile B.jpeg",
        alt: "Student B's Profile Picture",
        status: "Logged into Student B's Profile",
        btnText: "Switch to Student A's Profile",
        id: 'B'
    };

    const currentId = img.dataset.profile || 'A';
    const isA = currentId === 'A';
    const next = isA ? profileB : profileA;

    img.src = next.src;
    img.alt = next.alt;
    img.dataset.profile = next.id;
    status.innerText = next.status;
    btn.innerText = next.btnText;
}
