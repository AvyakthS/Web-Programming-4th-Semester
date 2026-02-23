(function () {
    const form = document.getElementById('loanForm');
    const resultEl = document.getElementById('result');
    const resetBtn = document.getElementById('resetBtn');

    function getAge(dobStr) {
        if (!dobStr) return NaN;
        const dob = new Date(dobStr);
        const now = new Date();
        let age = now.getFullYear() - dob.getFullYear();
        const m = now.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) age--;
        return age;
    }

    function showResult(message, ok) {
        resultEl.textContent = message;
        resultEl.classList.toggle('success', ok);
        resultEl.classList.toggle('error', !ok);
    }

    function validateAndDecide(data) {
        const reasons = [];
        if (!data.name) reasons.push('Name is required.');
        if (!data.dob) reasons.push('Date of birth is required.');
        if (isNaN(data.age)) reasons.push('Invalid date of birth.');
        if (isNaN(data.income) || data.income < 0) reasons.push('Invalid income.');
        if (isNaN(data.creditScore) || data.creditScore < 300 || data.creditScore > 850) reasons.push('Credit score must be between 300 and 850.');
        if (isNaN(data.loanAmount) || data.loanAmount <= 0) reasons.push('Loan amount must be greater than 0.');
        if (isNaN(data.tenure) || data.tenure < 1) reasons.push('Loan tenure must be at least 1 year.');
        if (!data.employment) reasons.push('Employment status required.');

        if (reasons.length) return { approved: false, reasons };

        if (data.age < 18) reasons.push('Applicant must be at least 18 years old.');
        if (data.age > 65) reasons.push('Applicant age exceeds maximum allowed (65).');
        if (data.income < 25000) reasons.push('Annual income below minimum required (USD 25,000).');
        if (data.creditScore < 700) reasons.push('Credit score below minimum required (700).');
        if (data.employment === 'unemployed') reasons.push('Unemployed applicants are not eligible.');

        if (data.loanAmount > data.income * 5) reasons.push('Requested loan exceeds 5x annual income (affordability limit).');

        const approved = reasons.length === 0;
        return { approved, reasons };
    }

    function saveToStorage(data) {
        try {
            localStorage.setItem('lastApplication', JSON.stringify(data));
        } catch (e) {}
    }

    function loadFromStorage() {
        try {
            const raw = localStorage.getItem('lastApplication');
            return raw ? JSON.parse(raw) : null;
        } catch {
            return null;
        }
    }

    function populateFromStorage() {
        const last = loadFromStorage();
        if (!last) return;
        if (last.name) document.getElementById('name').value = last.name;
        if (last.dob) document.getElementById('dob').value = last.dob;
        if (last.income) document.getElementById('income').value = last.income;
        if (last.creditScore) document.getElementById('creditScore').value = last.creditScore;
        if (last.loanAmount) document.getElementById('loanAmount').value = last.loanAmount;
        if (last.tenure) document.getElementById('tenure').value = last.tenure;
        if (last.employment) document.getElementById('employment').value = last.employment;
    }

    const dobEl = document.getElementById('dob');
    const ageHint = document.createElement('div');
    ageHint.className = 'small-note';
    dobEl.insertAdjacentElement('afterend', ageHint);

    function updateAgeHint() {
        const age = getAge(dobEl.value);
        if (!dobEl.value) {
            ageHint.textContent = '';
            return;
        }
        if (isNaN(age)) {
            ageHint.textContent = 'Invalid date.';
        } else {
            ageHint.textContent = `Applicant age: ${age} years.`;
        }
    }
    dobEl.addEventListener('input', updateAgeHint);

    populateFromStorage();
    updateAgeHint();

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const data = {
            name: document.getElementById('name').value.trim(),
            dob: document.getElementById('dob').value,
            age: getAge(document.getElementById('dob').value),
            income: parseFloat(document.getElementById('income').value),
            creditScore: parseInt(document.getElementById('creditScore').value, 10),
            loanAmount: parseFloat(document.getElementById('loanAmount').value),
            tenure: parseInt(document.getElementById('tenure').value, 10),
            employment: document.getElementById('employment').value
        };

        const decision = validateAndDecide(data);

        if (decision.approved) {
            showResult(`Congratulations ${data.name || 'Applicant'}, your loan has been approved.`, true);
            saveToStorage(data);
        } else {
            const message = `Application rejected. Reasons:\n- ${decision.reasons.join('\n- ')}`;
            showResult(message, false);
        }
    });

    resetBtn.addEventListener('click', function () {
        resultEl.textContent = '';
        resultEl.classList.remove('success', 'error');
        ageHint.textContent = '';
        try { localStorage.removeItem('lastApplication'); } catch {}
    });
})();