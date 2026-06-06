// 1. Initialize an empty array to store the history of calculations
const calculationHistory = [];

// 2. Function to add to the history
function addToHistory(operand1, operator, operand2, result) {
  const calculationObj = {
    operand1: operand1,
    operator: operator,
    operand2: operand2,
    result: result,
  };
  calculationHistory.push(calculationObj);
}

// 3. Simple Operation Functions
function addition(a, b) {
  const result = a + b;
  addToHistory(a, "+", b, result);
  return result;
}

function subtraction(a, b) {
  const result = a - b;
  addToHistory(a, "-", b, result);
  return result;
}

function multiplication(a, b) {
  const result = a * b;
  addToHistory(a, "*", b, result);
  return result;
}

function division(a, b) {
  // Edge case: Prevent division by zero
  if (b === 0) {
    console.error(`Error: Cannot divide ${a} by zero.`);
    return null;
  }
  const result = a / b;
  addToHistory(a, "/", b, result);
  return result;
}

// 4. Function to display the history
function displayHistory() {
  console.log("\n--- Calculation History ---");

  // Check if the history array is empty
  if (calculationHistory.length === 0) {
    console.log("No calculations stored");
  } else {
    // Iterate through the array and format the output
    calculationHistory.forEach((calc, index) => {
      console.log(
        `${index + 1}. ${calc.operand1} ${calc.operator} ${calc.operand2} = ${calc.result}`,
      );
    });
  }
  console.log("---------------------\n");
}

// --- TESTING THE PROGRAM ---
// Uncommit the code below to test the program

// // Test 1: Checking history when it is empty
// displayHistory();

// // Test 2: Performing basic operations
// console.log("Adding 10 + 5 =", addition(10, 5));
// console.log("Subtracting 20 - 8 =", subtraction(20, 8));
// console.log("Multiplying 7 * 6 =", multiplication(7, 6));
// console.log("Dividing 144 / 12 =", division(144, 12));

// // Test 3: Testing the divide by zero edge-case
// console.log("Dividing 5 / 0 =", division(5, 0));

// // Test 4: Displaying the populated history
// displayHistory();
