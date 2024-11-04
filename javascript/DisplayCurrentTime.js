function displayCurrentTime() {
    const currentTime = new Date().toLocaleTimeString();
    alert("Current Time: " + currentTime);
    // Alternatively, to display in the HTML body:
    document.getElementById("timeDisplay").innerText = "Current Time: " + currentTime;
}
