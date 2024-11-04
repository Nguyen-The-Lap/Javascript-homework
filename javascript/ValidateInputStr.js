function validateInput() {
    const input = document.getElementById("inputString").value;
    if (input.length > 50) {
        alert("Input exceeds the maximum length of 50 characters.");
    } else {
        alert("Input is valid.");
    }
}
