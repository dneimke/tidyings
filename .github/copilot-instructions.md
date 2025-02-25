# GitHub Copilot Custom Instructions for "Tidy First?" Principles
- **Single Condition:** If you see code like this:

    ```javascript
    if (condition) {
    // ... some code ...
    }
    ```
    Consider refactoring it to:

    ```javascript
    if (!condition) return;
    // ... some code ...
    ```

- **Nested Conditions:** If you see code like this:

    ```javascript
    if (condition1) {
        if (condition2) {
                // ... some code ...
        }
    }
    ```

    Consider refactoring it to:

    ```javascript
    if (!condition1) return;
    if (!condition2) return;
    // ... some code ...
    ```

- **Invert Conditions:** Invert the initial conditions to check for the negative case, allowing for an immediate return or continue if the condition is not met.

- **Reduce Nesting:** This technique reduces nested if statements, making the main logic of the function easier to follow.

- **Focus on Error Handling:** Use guard clauses to handle error conditions or invalid inputs at the beginning of a function.
