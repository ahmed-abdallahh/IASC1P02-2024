// Function to handle addition
function addNumbers() {
    // Get the input values
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    // Check for valid numbers
    if (isNaN(number1) || isNaN(number2)) {
        alert('Please enter valid numbers.');
        return;
    }

    // Calculate the sum
    const sum = number1 + number2;

    // Display the result
    document.getElementById('result').textContent = `Result: ${sum}`;
}

// Attach the function to the button click
document.getElementById('addButton').addEventListener('click', addNumbers);
