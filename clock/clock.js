setInterval(function () {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();
    var period = "AM";

    if (hours >= 12) {
        period = "PM"
    }
    if (hours < 12) {
        hours = hours - 12;

    }
    if (second < 10) {
        second = "0" + second;

    }
    if (minute < 10) {
        minute = "0" + minute;

    }
    var clockTime = hours + ":" + minute + ":" + second + "" + period;

    var clock = document.getElementById('clock');
    clock.innerHTML = clockTime;

}, 1000);