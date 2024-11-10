// Sets the initial colors of the three elements on page load
document.getElementById("blue").style.color = "blue";
document.getElementById("green").style.color = "green";
document.getElementById("red").style.color = "red";

// A function to change colors of elements when called
function mix() {
    var first = "blue";
    var second = "green";
    var third = "red";  

    // Correcting the assignment of color styles
    document.getElementById("blue").style.color = first;
    document.getElementById("green").style.color = second;
    document.getElementById("red").style.color = third;
}
