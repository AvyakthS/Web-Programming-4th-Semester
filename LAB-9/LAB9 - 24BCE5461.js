window.alert("Hello, Welcome to the website");
var name = prompt("Please enter your Name:")
document.getElementById("name").innerHTML = name;

function obj1() {
    var id1 = document.getElementById("id1").value ;
    var name1 = document.getElementById("name1").value;
    emp = {id:id1,name:name1}
    document.getElementById("para1").innerHTML = "empId: "+emp.id+" empName: "+emp.name;
}

function obj2(id2,name2) {
    var emp2 = new Object();
    emp2.id = id2;
    emp2.name = name2;
    document.getElementById("para2").innerHTML = "empId: "+emp2.id+" empName: "+emp2.name;
}

function obj3(){
    var id3 = document.getElementById("id3").value ;
    var name3 = document.getElementById("name3").value;
    function obj3(id,name) {
        this.id = id;
        this.name = name;
    }
    e = new obj3(id3,name3);
    document.getElementById("para3").innerHTML = "empId: "+e.id+" empName: "+e.name;
}

function calculate() {
    var str = prompt("Enter a string: ");
    var concatStr = prompt("Enter a string to concatenate: ");
    var substring_st_idx= parseInt(prompt("Enter the starting index for substring: "));
    var substring_end_idx= parseInt(prompt("Enter the ending index for substring: "));
    var includesChar = prompt("Enter a character to check if it is included in the string: ");
    document.getElementById("length").innerHTML = "Length: " + str.length;
    document.getElementById("reverse").innerHTML = "Reverse: " + str.split("").reverse().join("");
    document.getElementById("conc").innerHTML = "Concatenation: " + str.concat(concatStr);
    document.getElementById("subs").innerHTML = "Substring: " + str.substring(substring_st_idx, substring_end_idx);
    document.getElementById("includes").innerHTML = "Includes '" + includesChar + "': " + str.includes(includesChar);
    document.getElementById("copy").innerHTML = "Copy: " + str.slice(0);
    document.getElementById("casecon").innerHTML = "Case Conversion: " + str.toUpperCase();
}

function calculateMath() {
    var num = parseFloat(prompt("Enter a number: "));
    document.getElementById("math-pi").innerHTML = "Math.PI: " + Math.PI;
    document.getElementById("math-sqrt").innerHTML = "Square Root: " + Math.sqrt(num);
    document.getElementById("math-pow").innerHTML = "Power (num^2): " + Math.pow(num, 2);
    document.getElementById("math-round").innerHTML = "Rounded Value: " + Math.round(num);
    document.getElementById("math-floor").innerHTML = "Floor Value: " + Math.floor(num);
    document.getElementById("math-ceil").innerHTML = "Ceiling Value: " + Math.ceil(num);
}

function calculateArray() {
    var arr = prompt("Enter an array of numbers (comma separated): ").split(",").map(Number);
    document.getElementById("array-length").innerHTML = "Array Length: " + arr.length;
    document.getElementById("array-reverse").innerHTML = "Reversed Array: " + arr.reverse().join(", ");
    document.getElementById("array-sorted").innerHTML = "Sorted Array: " + arr.sort((a, b) => a - b).join(", ");
    document.getElementById("array-sum").innerHTML = "Sum of Array: " + arr.reduce((sum, num) => sum + num, 0);
    document.getElementById("array-max").innerHTML = "Max Value: " + Math.max(...arr);
    document.getElementById("array-min").innerHTML = "Min Value: " + Math.min(...arr);
    var i = parseInt(prompt("Enter the index of the element you want to retrieve: "));
    document.getElementById("ith element").innerHTML = "Ith Element: " + arr[i];
}

function sub() {
    if (document.getElementById("userName").value == "") {
        alert("Please enter your name");
    } else if (isNaN(document.getElementById("age").value) || document.getElementById("age").value == "") {
        alert("Please enter a valid age");
    } else if (document.getElementById("confirm").value != document.getElementById("password").value) {
        alert("Passwords do not match");
    } else if (document.getElementById("Address").value == "") {
        alert("Please enter your address");
    } else {
        alert("Form submitted successfully!");
    }
}

function validateLoginForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
    if (username == "" || password == "") {
        alert("Please fill in all fields");
        return false;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }
    alert("Login successful!");
    return true;
}

function onlyLetters(event) {
    var key = event.key;
    var regex = /[a-zA-Z]/;
    if (!regex.test(key)) {
        event.preventDefault();
        alert("Only letters are allowed");
    }
}