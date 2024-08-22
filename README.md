# Snake Game

The Snake Game is a classic arcade game implemented with Flask for the backend and JavaScript for the game logic. Players control a snake to collect food and avoid collisions. The game features an intro screen, score tracking, pause and resume functionality, and a game over screen.
![image](https://github.com/user-attachments/assets/46447fa8-3ba0-4959-a2ce-7f01279d0d22) ![image](https://github.com/user-attachments/assets/61f083b5-19e7-4098-92f5-66e1a05f9f69)





## Features

- **Intro Screen**: Displays a start screen with a prompt to press Space to start.
- **Game Play**: Play the Snake game with arrow keys to control the snake's direction.
- **Score Tracking**: Shows the current score and number of lives remaining.
- **Pause and Resume**: Buttons to pause and resume the game.
- **Game Over**: A screen that appears when the game is over with an option to restart.

## Prerequisites

Ensure you have the following installed:

- Python 3.6 or later
- Flask

## Getting Started

Follow these steps to get the Snake Game up and running on your local machine.

### 1. Clone the Repository

### 2. Set Up a Virtual Environment

### 3. Install Dependencies: pip install Flask

### 4. Run the Application: Start the Flask development server - python app.py

### 5. Access the Game
Open your web browser and go to http://localhost:5000 to play the game.

## File Structure
- app.py: The main Flask application file that serves the game page.
- templates/index.html: The HTML template for the game interface.
- static/js/javascript.js: JavaScript file containing the game logic.
- static/css/styles.css: CSS file for styling the game page.


## Troubleshooting
- Game Not Starting: Ensure JavaScript and CSS files are correctly linked in index.html and check the browser console for errors.
- Responsive Issues: Ensure your browser window is resized correctly. Adjust CSS as needed for better responsiveness.
