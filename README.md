# E-commerce Amazon Clone

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

A functional e-commerce demonstration website, replicating key features of Amazon, built with vanilla JavaScript, HTML, and CSS. This project focuses on building a clean and intuitive user interface with a robust and modular codebase.

## Features ✨

* **Product Listings:** Dynamically fetches and displays a list of products from an external server.
* **Shopping Cart Functionality:** Users can add and remove products from a shopping cart.
* **Order and Delivery Tracking:** Calculates order totals, delivery costs, and estimated delivery dates.
* **Responsive Design:** The layout is optimized to provide a seamless user experience on both desktop and mobile devices.

## Technologies Used 🚀

* **HTML5:** For the structural markup of the application.
* **CSS3:** For styling and layout, ensuring a visually appealing and responsive design.
* **JavaScript (ES6+):** The core logic of the application, including DOM manipulation, event handling, and data management.
* **Object-Oriented Programming (OOP):** The codebase is structured using classes to encapsulate logic, making the code modular, reusable, and easier to maintain.
* **Fetch API:** Used to asynchronously retrieve product data from a mock server.
* **Day.js:** A lightweight JavaScript library used to manage and format dates for delivery calculations.
* **Jasmine:** A Behavior-Driven Development (BDD) framework used for testing the JavaScript codebase to ensure reliability and functionality.

## Code Structure 📂

The project follows a modular structure to keep the code organized and easy to navigate:

* **`index.html`**: The main entry point of the application.
* **`styles/`**: Contains the CSS files for styling the website.
* **`scripts/`**: Houses all the JavaScript logic.
    * `data/`: Contains product data or mock data.
    * `utils/`: Utility functions, such as date formatting with Day.js.
    * `oop_classes/`: JavaScript classes built using OOP principles (e.g., a `Product` class, `Cart` class, etc.).
    * `main.js`: The main application logic that brings all the components together.

## Getting Started 💻

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd your-repo-name
    ```
3.  **Open `index.html` in your browser.**
    * Simply double-click the `index.html` file or use a live server extension in your code editor.

## Testing 🧪

This project uses **Jasmine** for unit testing. To run the tests:

1.  Open the `tests/` directory.
2.  Open `tests.html` in your browser. This will display the test suite results, showing which tests passed and which failed.

## Acknowledgements 🙏

* The project was inspired by the Amazon e-commerce platform.
* Thanks to the creators of **Day.js** and **Jasmine** for their excellent tools.
