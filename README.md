**Project Title: Math Operations Web Application**

**Description:**
This project implements a web application that performs mathematical operations and maintains a history of the last 20 operations.

**Usage:**

1. Clone the Repository:
   ```
   git clone https://github.com/your-username/math-operations-web-app.git
   cd math-operations-web-app
   ```

2. Run the Backend Server:
   ```
   node app.js
   ```

3. Open the Frontend:
   Open `index.html` in a web browser to use the math operations calculator.

**Files and Their Use:**

1. **app.js** - Backend Server (Express.js)
   - This file defines the backend server using the Express.js framework.
   - It handles mathematical operations sent via URL and maintains a history of operations in a SQLite database.
   - Defines routes for performing calculations and retrieving history.

2. **frontend.js** - Frontend JavaScript
   - This file contains the client-side JavaScript code for interacting with the frontend.
   - Handles user input, makes requests to the backend API, and updates the frontend interface.

3. **index.html** - Frontend HTML
   - This file contains the structure and content of the frontend interface.
   - Provides input fields for mathematical expressions and displays results and history.

4. **styles.css** - Frontend CSS
   - This file contains the styles for styling the frontend interface.
   - Defines the layout, colors, and typography for the calculator and history sections.

**Usage Instructions:**

1. Calculator:
   - Enter a mathematical expression in the input field (e.g., `3+5`, `10*2+7`).
   - Click the "Calculate" button to see the result displayed below.
   - The result will show the question (expression) and the answer.

2. History:
   - The history section displays the last 20 calculations performed on the server.
   - The history list shows each calculation's question (expression) and answer.


**Note:**
- This is a basic implementation of a math operations web application.
- The code provided is for educational purposes and may require further optimization and security considerations for production use.

Feel free to customize this README according to your preferences and add any additional information that might be relevant to your project.
