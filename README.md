# Snake Game

The Snake Game is a classic arcade game implemented with Flask for the backend and JavaScript for the game logic. Players control a snake to collect food and avoid collisions. The game features an intro screen, score tracking, pause and resume functionality, and a game over screen.
![image](https://github.com/user-attachments/assets/46447fa8-3ba0-4959-a2ce-7f01279d0d22) ![image](https://github.com/user-attachments/assets/45155935-155a-45da-a23d-d2603705b3c9)


A short video of the game

https://github.com/user-attachments/assets/eb3a5492-50e1-42c2-8cd7-38045379ad79



## Snake Game: Logic and Code Overview
### Objective
Control a snake that moves around the screen, eating food to grow longer. Avoid crashing into walls or the snake's own body. The game ends when the snake loses all its lives or collides with an obstacle.

### Key Components
1. Snake: Represented by an array of segments, each with x and y coordinates. The snake moves by updating the position of its head and shifting the rest of its body.

2. Food: A single object with x and y coordinates. When the snake's head overlaps with the food, the snake grows, and the food is placed randomly elsewhere.

3. Grid: The game is played on a grid, defined by the dimensions of the canvas. Each movement of the snake is a shift of its head to an adjacent cell.

### Code Overview
#### HTML (index.html):

- Sets up the game structure, including the canvas for rendering the game, score/lives display, and control buttons (pause/resume).
#### JavaScript (javascript.js):

- Game Loop: Continuously runs, moving the snake and checking for collisions.
- Movement: Handles user input (arrow keys) to change the snake's direction.
- Collision Detection: Checks if the snake hits a wall, itself, or eats food.
- Score/Lives: Updates the score when food is eaten and reduces lives on collisions.

#### CSS (styles.css):

- Styles the game interface, ensuring the canvas and buttons are well-positioned and visually appealing.

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
