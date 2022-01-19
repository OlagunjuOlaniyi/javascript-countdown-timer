const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");

const eidKabir = '20 July 2021';

function countDown() {
    const eidKabirDate = new Date(eidKabir);
    const currentDate = new Date();
    
    const totalSeconds = (eidKabirDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);

    const hours = Math.floor(totalSeconds / 3600) % 24;

    const mins = Math.floor(totalSeconds / 60) % 60;

    const secs = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secsEl.innerHTML = formatTime(secs);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

// call the function

countDown();

setInterval(countDown, 1000);