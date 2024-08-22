const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const introScreen = document.getElementById('introScreen');
const gameOverScreen = document.getElementById('gameOverScreen');
const scoreElement = document.getElementById('score');
const livesElement = document.getElementById('lives');

let snake = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }, { x: 7, y: 10 }];
let food = { x: 5, y: 5 };
let direction = 'RIGHT';
let gameOver = false;
let gamePaused = false;
let gameStarted = false;
let lives = 3;
let score = 0;
const gridSize = 20;
const tileCount = canvas.width / gridSize;
const initialSpeed = 160;
let speed = initialSpeed;
let lastTime = 0;

function gameLoop(timestamp) {
    if (gamePaused) {
        requestAnimationFrame(gameLoop);
        return;
    }

    if (gameOver) {
        gameOverScreen.classList.remove('hidden');
        return;
    }

    if (timestamp - lastTime >= speed) {
        lastTime = timestamp;
        moveSnake();
        checkCollision();
        drawCanvas();
    }

    requestAnimationFrame(gameLoop);
}

function moveSnake() {
    let head = { x: snake[0].x, y: snake[0].y };

    switch (direction) {
        case 'UP':
            head.y--;
            break;
        case 'DOWN':
            head.y++;
            break;
        case 'LEFT':
            head.x--;
            break;
        case 'RIGHT':
            head.x++;
            break;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score += 10; // Add 10 points for each food
        updateScore();
        generateFood();
    } else {
        snake.pop();
    }
}

function checkCollision() {
    let head = snake[0];

    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount || snakeCollision(head)) {
        lives--;
        updateLives(); // Update lives on screen

        if (lives > 0) {
            resetSnake();
        } else {
            gameOver = true; // Set gameOver flag
        }
    }
}

function snakeCollision(head) {
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            return true;
        }
    }
    return false;
}

function generateFood() {
    food = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
    };
}

function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'blue'; // Head color
    ctx.fillRect(snake[0].x * gridSize, snake[0].y * gridSize, gridSize, gridSize);

    ctx.fillStyle = 'green'; // Body color
    for (let i = 1; i < snake.length; i++) {
        ctx.fillRect(snake[i].x * gridSize, snake[i].y * gridSize, gridSize, gridSize);
    }

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(food.x * gridSize + gridSize / 2, food.y * gridSize + gridSize / 2, gridSize / 2, 0, 2 * Math.PI);
    ctx.fill();
}

function resetSnake() {
    snake = [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 },
        { x: 7, y: 10 }
    ];
    direction = 'RIGHT';
}

function resetGame() {
    resetSnake();
    generateFood();
    gameOver = false;
    gameStarted = true;
    lives = 3;
    score = 0;
    speed = initialSpeed; // Reset speed
    updateScore();
    updateLives();
    gameOverScreen.classList.add('hidden');
    introScreen.classList.add('hidden');
    requestAnimationFrame(gameLoop);
}

function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}

function updateLives() {
    livesElement.textContent = `Lives: ${lives}`;
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !gameStarted) {
        introScreen.classList.add('hidden'); // Hide intro screen
        resetGame(); // Start the game
    } else if (!gameOver && !gamePaused) {
        switch (event.key) {
            case 'ArrowUp':
                if (direction !== 'DOWN') direction = 'UP';
                break;
            case 'ArrowDown':
                if (direction !== 'UP') direction = 'DOWN';
                break;
            case 'ArrowLeft':
                if (direction !== 'RIGHT') direction = 'LEFT';
                break;
            case 'ArrowRight':
                if (direction !== 'LEFT') direction = 'RIGHT';
                break;
        }
    }
});

document.getElementById('pauseGameButton').addEventListener('click', () => {
    gamePaused = true;
    document.getElementById('pauseGameButton').classList.add('hidden');
    document.getElementById('resumeGameButton').classList.remove('hidden');
});

document.getElementById('resumeGameButton').addEventListener('click', () => {
    gamePaused = false;
    document.getElementById('resumeGameButton').classList.add('hidden');
    document.getElementById('pauseGameButton').classList.remove('hidden');
    requestAnimationFrame(gameLoop);
});

document.getElementById('restartGameButton').addEventListener('click', () => {
    resetGame();
});
