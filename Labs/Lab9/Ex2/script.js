// Prompt the user to enter their age
const age = prompt("What is your age?");

// Validate the input to ensure it is a number
if (isNaN(age) || age === null || age.trim() === "") {
    alert("Invalid input. Please refresh and enter a valid number.");
} else {
    // Convert the age to a number
    const ageNumber = Number(age);

    // Get the current year
    const currentYear = new Date().getFullYear();

    // Calculate the birth year
    const birthYear = currentYear - ageNumber;

    // Display the birth year on the screen
    document.getElementById("birthYear").textContent = birthYear;
}
