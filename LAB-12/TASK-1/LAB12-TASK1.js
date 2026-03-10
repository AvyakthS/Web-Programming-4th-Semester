const success = () => {
    var subjects = document.querySelectorAll("input[name='subject']:checked");
    let result = [];
    for (let i = 0; i < subjects.length; i++) {
        result.push(subjects[i].value);
    }
    document.getElementById("para").innerHTML = "Selected Subjects: " + result.join(", ");
}