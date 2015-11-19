
var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()
document.write("<b>" + "Current Date & Time: " + month + "/" + day + "/" + year + "</b>" + "  ")


var currentTime = new Date()
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()

if (minutes < 10)
    minutes = "0" + minutes

var suffix = "AM";
if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
}
if (hours == 0) {
    hours = 12;
}

document.write("<b>" + hours + ":" + minutes + " " + suffix + "</b>")