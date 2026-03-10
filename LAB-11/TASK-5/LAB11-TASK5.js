function generatePyramid() {
    const n = parseInt(document.getElementById('levels').value);
    let currentNumber = 1;
    let output = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            output += currentNumber + " ";
            currentNumber++;
        }
        output += "\n";
    }
    document.getElementById('pyramidResult').innerText = output;
}