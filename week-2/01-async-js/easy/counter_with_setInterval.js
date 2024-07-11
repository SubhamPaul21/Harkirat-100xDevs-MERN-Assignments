// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second


function counter() {
    seconds++;

    // Minutes logic handling
    if (seconds < 10) {
        displayed_seconds = "0" + seconds.toString();
    } else if (seconds >= 60) {
        seconds = 0;
        displayed_seconds = "00";
        minutes++;
    } else {
        displayed_seconds = seconds.toString();
    }

    // Minutes logic handling
    if (minutes < 10) {
        displayed_minutes = "0" + minutes.toString();
    } else if (minutes >= 60) {
        minutes = 0;
        displayed_minutes = "00";
        hours++;
    } else {
        displayed_minutes = minutes.toString();
    }

    // Hours logic handling
    if (hours < 10) {
        displayed_hours = "0" + hours.toString();
    } else if (hours > 24) {
        hours = 0;
        displayed_hours = "00";
    } else {
        displayed_hours = hours.toString();
    }

    console.log(`${displayed_hours}:${displayed_minutes}:${displayed_seconds}`);
}

let hours = 0;
let displayed_hours = "00";
let minutes = 0;
let displayed_minutes = "00";
let seconds = 0;
let displayed_seconds = "00";

setInterval(counter, 1000);