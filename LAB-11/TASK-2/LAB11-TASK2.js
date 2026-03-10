function findTime() {
    var time = document.getElementById("time").value;
    var count = document.getElementById("count").value;
    if ((time >= 7AM && time <= 10AM) || (time >= 5PM && time <= 8PM)) {
        if (count < 50) {
            document.getElementById("req").innerHTML = "60";
        }
        else {
        document.getElementById("req").innerHTML = "80";
        }
    }
    else if (time > 12 || time < 0) {
        document.getElementById("output").innerHTML = "Invalid time input!";
        return;
    }
    else {
        if (count < 50) {
            document.getElementById("req").innerHTML = "30";
        }
        else {
            document.getElementById("req").innerHTML = "50";
        }
    }
}