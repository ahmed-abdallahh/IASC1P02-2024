// Clear the input field when clicked
function clearField(id) {
    var field = document.getElementById(id);
    if (field.value === "First Number" || field.value === "Second Number") {
        field.value = "";
    }
}

// Perform the calculation
function calculate(operation) {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    // Handle default values
    if (num1 === "First Number" || num2 === "Second Number" || num1 === "" || num2 === "") {
        document.getElementById("output").innerHTML = "Please enter both numbers.";
        return;
    }

    // Convert inputs to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("output").innerHTML = "Invalid input. Enter numbers only.";
        return;
    }

    var result;

    // Perform calculation
    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        if (num2 === 0) {
            document.getElementById("output").innerHTML = "Cannot divide by zero.";
            return;
        }
        result = num1 / num2;
    }

    // Display the result
    document.getElementById("output").innerHTML = "Result: " + result;
}
