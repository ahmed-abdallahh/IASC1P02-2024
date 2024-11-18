// Record the time the page loads
const startTime = new Date();

// Function to calculate and display the elapsed time
function stopTime() {
    const stopTime = new Date(); // Time when the button is clicked
    const elapsedTime = (stopTime.getTime() - startTime.getTime()) / 1000; // Calculate seconds
    alert(`You have been on the page for: ${elapsedTime.toFixed(3)} seconds`);
}

// Attach the stopTime function to the button
document.getElementById("stopTimeButton").addEventListener("click", stopTime);
