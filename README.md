## Description

A lightweight JavaScript calculator that performs basic arithmetic operations (addition, subtraction, multiplication, and division) and maintains a comprehensive log of all calculations performed.

## Features

- **Basic Arithmetic**: Supports `add`, `subtract`, `multiply`, and `divide` functions.
- **History Tracking**: Automatically logs every successful operation, including the operands, operator, and result.
- **History Display**: Neatly outputs the stored history of calculations directly to the console.
- **Error Handling**: Safely handles edge cases like division by zero by logging an error and returning `null`.

## Usage

This script is written in vanilla JavaScript with no external dependencies. It can be executed in any standard JavaScript environment, such as a web browser's Developer Console or Node.js.

### 1. Operations

Each arithmetic function takes two numbers as arguments and returns the result.

### 2. Viewing History

To view the log of your calculations, simply call the display function: displayHistory();

**Example Output:**

--- Calculation History ---

1. 10 + 5 = 15
2. 20 - 8 = 12
3. 7 \* 6 = 42
4. 144 / 12 = 12

### 3. Internal Architecture

- **calculationHistory:** The core array that stores calculation objects.

- **addToHistory(operand1, operator, operand2, result):** An internal helper function triggered automatically by the math functions to log operations.

- **add(), subtract(), multiply(), divide():** The main executable math functions.

- **displayHistory():** Iterates through calculationHistory and prints formatted strings.

## 4. Maintenance & Version Control Lifecycle

#### To maintain this codebase effectively and align with standard backend engineering practices:

- **Version Control (Git):** Initialize a repository (git init). Commit this initial version with a descriptive message (e.g., git commit -m "feat: core calculator with history logging"). Create new branches when experimenting with new features.

- **Modularization:** As the project scales, consider exporting these functions as a standard Node.js module (using module.exports) to separate the core math logic from the history management or UI.

- **Automated Testing:** To ensure long-term accuracy, transition the manual console.log tests from the index.js into a formal testing framework (like Jest) to automate the verification of your math logic.

- **Persistent Storage:** Currently, the calculationHistory array resets when the program stops. Future updates could involve tying this to a backend environment, saving the calculation objects to a structured database like PostgreSQL instead of storing them purely in memory.
