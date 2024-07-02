function updateClock() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
}

function initClock() {
    updateClock();
    setInterval(updateClock, 1000);
}
