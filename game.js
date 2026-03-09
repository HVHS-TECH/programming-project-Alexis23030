/*******************************************************/
// game.js
// Main Game Function
// Alexis Hood
/*******************************************************/

let timerScore = 0;
let maxLives = 20;
let lives = maxLives;
let gameMode = 1;
let width = 600;
let height = 600;
let buttonAnimation = "small";

/*******************************************************/
// preload()
/*******************************************************/
function preload() {
    console.log("Preload");
    player1img = loadImage('images/player1.png');
    player2img = loadImage('images/player2.png');
    greenButton = loadImage('images/greenButton.png')
    redButton = loadImage('images/redButton.png')
}


/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    console.log("Setup");
    let cnv = createCanvas(width, height + 50);
    cnv.position((windowWidth / 2) - (width / 2), (windowHeight / 2) - (height / 2))

    //Start Screen Setup:
    console.log("Start Screen")
    startButton = new Sprite(width / 2, height / 2, 1200, 300, 'k');
    startButton.image = (greenButton);
    startButton.scale = 0.25;
    startButton.text = "START \u25B6";
    startButton.textColor = "#4b965b";
    startButton.textSize = 30;

    gameName1 = new Sprite(-100, 100, 1200, 300, 'k');
    gameName1.image = (greenButton);
    gameName1.scale = 0.25;
    gameName1.text = 'JET';
    gameName1.textColor = "#4b965b";
    gameName1.textSize = 30;

    gameName2 = new Sprite(700, 200, 1200, 300, 'k');
    gameName2.image = (greenButton);
    gameName2.scale = 0.25;
    gameName2.text = 'FIGHTERS';
    gameName2.textColor = "#4b965b";
    gameName2.textSize = 30;

    instructions = new Sprite(width/2, 400, 1200, 1200)
    instructions.scale = 0.25;
    instructions.text = 'FIGHTERS';
    instructions.textColor = "#4b965b";
    instructions.textSize = 30;
    //Keybinds / instructions
}

/*******************************************************/
// gameSetup()
/*******************************************************/
function gameSetup() {
    console.log("Game Setup")
    allSprites.remove()
    livesBar = new Sprite(width / 4, 25, width / 2, 50, 'n')
    livesBar.color = 'black';
    livesBar.layer = 10;
    timerBar = new Sprite((width / 4) + (width / 2), 25, width / 2, 50, 'n')
    timerBar.color = 'black';
    timerBar.layer = 10;
    timerBar.text = "0";
    lives = maxLives;
    createPlayer1();
    createPlayer2();
    projectileGroup = new Group();
    frameRate(60);
    startFrame = frameCount / 60
}

/*******************************************************/
// gameOverSetup()
/*******************************************************/
function gameOverSetup(_isAlive) {
    console.log("Game Over Screen")
    allSprites.remove()
    buttonAnimation = "small"
    if (_isAlive == "dead") {
        deadMessage = new Sprite((width / 2) - 100, 100, 1200, 300, 'n');
        deadMessage.image = (redButton);
        deadMessage.scale = 0.25;
        deadMessage.text = 'Player 1 Loses!';
        deadMessage.textColor = "#fdeeee";
        deadMessage.textSize = 30;

        deadMessage2 = new Sprite((width / 2), 200, 1200, 300, 'n');
        deadMessage2.image = (redButton);
        deadMessage2.scale = 0.25;
        deadMessage2.text = 'You Crashed';
        deadMessage2.textColor = "#fdeeee";
        deadMessage2.textSize = 30;
        
        restartButton = new Sprite((width / 2) - 100, (height / 2), 1200, 300, 'k');
        restartButton.image = (greenButton);
        restartButton.scale = 0.25;
        restartButton.text = "REPLAY \u25B6";
        restartButton.textColor = "#4b965b";
        restartButton.textSize = 30;
    } else if (_isAlive == "alive") {
        aliveMessage = new Sprite((width / 2) - 100, 100, 1200, 300, 'n');
        aliveMessage.image = (redButton);
        aliveMessage.scale = 0.25;
        aliveMessage.text = 'It took you:';
        aliveMessage.textColor = "#fdeeee";
        aliveMessage.textSize = 30;
        aliveMessage2 = new Sprite((width / 2), 200, 1200, 300, 'n');
        aliveMessage2.image = (redButton);
        aliveMessage2.scale = 0.25;
        aliveMessage2.text = timerScore + ' secs';
        aliveMessage2.textColor = "#fdeeee";
        aliveMessage2.textSize = 30;
        aliveMessage3 = new Sprite((width / 2) + 100, 300, 1200, 300, 'n');
        aliveMessage3.image = (redButton);
        aliveMessage3.scale = 0.25;
        aliveMessage3.text = 'To eliminate player 2!';
        aliveMessage3.textColor = "#fdeeee";
        aliveMessage3.textSize = 30;
        restartButton = new Sprite((width / 2) - 100, (height / 2) + 100, 1200, 300, 'k');
        restartButton.image = (greenButton);
        restartButton.scale = 0.25;
        restartButton.text = "REPLAY \u25B6";
        restartButton.textColor = "#4b965b";
        restartButton.textSize = 30;
    }

}

/*******************************************************/
// createPlayer1()
/*******************************************************/
function createPlayer1() {
    console.log("createPlayer1");
    player1 = new Sprite(width - 100, height - 100, 30, 30, 'd')
    player1.image = (player1img);
    player1.scale = 50 / player1img.width;
    player1.direction = -90;
    player1.rotation = 0;
    player1.collider = 'd'
    player1.w = 30;
    player1.h = 30;
    player1.layer = 5;
}


/*******************************************************/
// createPlayer2()
/*******************************************************/
function createPlayer2() {
    console.log("createPlayer2");
    player2 = new Sprite(100, 150, 30, 30, 'd')
    player2.image = (player2img);
    player2.scale = 50 / player2img.width;
    player2.direction = -90;
    player2.rotation = 0;
    player2.collider = 'd'
    player2.w = 30;
    player2.h = 30;
    player2.layer = 5;
}


/*******************************************************/
// player1Movement()
/*******************************************************/
function player1Movement() {
    if (kb.pressed('arrowUp')) {
        player1.speed = 3
    } else if (kb.pressing('arrowLeft')) {
        player1.direction = player1.direction - 2
        player1.rotation = player1.rotation - 2
    } else if (kb.pressing('arrowRight')) {
        player1.direction = player1.direction + 2
        player1.rotation = player1.rotation + 2
    }

    //Wraps the player if they go off screen
    if (player1.x < 0) {
        player1.x = width;
    } else if (player1.x > width) {
        player1.x = 0;
    } else if (player1.y < 50) {
        player1.y = height;
    } else if (player1.y > height) {
        player1.y = 50;
    }
}

/*******************************************************/
// player2Movement()
/*******************************************************/
function player2Movement() {
    if (kb.pressed('w')) {
        player2.speed = 3
    } else if (kb.pressing('a')) {
        player2.direction = player2.direction - 2
        player2.rotation = player2.rotation - 2
    } else if (kb.pressing('d')) {
        player2.direction = player2.direction + 2
        player2.rotation = player2.rotation + 2
    }

    //Wraps the player if they go off screen
    if (player2.x < 0) {
        player2.x = width;
    } else if (player2.x > width) {
        player2.x = 0;
    } else if (player2.y < 50) {
        player2.y = height;
    } else if (player2.y > height) {
        player2.y = 50;
    }
}

/*******************************************************/
// createProjectile()
/*******************************************************/
function createProjectile() {
    let projectile = new Sprite(player1.x, player1.y, 2, 4, 'd')
    projectile.direction = player1.direction
    projectile.rotation = player1.rotation
    projectile.speed = 8;
    projectile.color = 'black';
    projectile.layer = 2;
    projectileGroup.add(projectile);
}

/*******************************************************/
// removeProjectile()
/*******************************************************/
function removeProjectile(_projectile) {
    lives = lives - 1
    console.log("lives: " + lives)
    _projectile.remove()
}

/*******************************************************/
// livesDisplay()
/*******************************************************/
function livesDisplay() {
    livesBar.text = "Lives: " + lives;
    livesBar.textColor = 'white';
    livesBar.textSize = 20;
    timerScore = Math.floor((frameCount / 60) - startFrame)
    timerBar.text = 'Time: ' + timerScore;
    timerBar.textColor = "White";
    timerBar.textSize = 20;
}


/*******************************************************/
// gameLoop()
/*******************************************************/
function gameLoop() {

    background('white');
    player1Movement();
    player2Movement();

    if (kb.pressed('space')) {
        createProjectile();
    }

    projectileGroup.forEach(sprite => {
        if (sprite.x < 0) {
            sprite.remove()
        } else if (sprite.x > width) {
            sprite.remove()
        } else if (sprite.y < 0) {
            sprite.remove()
        } else if (sprite.y > height) {
            sprite.remove()
        }
    });

    projectileGroup.overlaps(player2, removeProjectile);
    projectileGroup.overlaps(player1);

    if (player1.collides(player2)) {
        gameOverSetup("dead");
        gameMode = 3;
        return
    }
    livesDisplay();

    if (lives <= 0) {
        console.log("GAME OVER")
        gameOverSetup("alive");
        gameMode = 3;
        return
    }

}

/*******************************************************/
// startScreen()
/*******************************************************/
function startScreen() {
    background('white');
    if (startButton.mouse.pressed()) {
        console.log("Game Starting");
        gameSetup();
        gameMode = 2;
        return
    }

    // Name Animation
    if (gameName1.x < 100) {
        gameName1.x = gameName1.x + 4;
    }
    if (gameName2.x > 200) {
        gameName2.x = gameName2.x - 10;
    }
    if (startButton.scale < 0.28 && buttonAnimation == "small") {
        startButton.scale = startButton.scale + 0.0006
        //Start Button - pulsating startButton
    } else if (startButton.scale > 0.25) {
        startButton.scale = startButton.scale - 0.0006
        buttonAnimation = "big"
    } else {
        buttonAnimation = "small";
    }
}


/*******************************************************/
// gameOver()
/*******************************************************/
function gameOver() {
    background('white');
    if (restartButton.mouse.pressed()) {
        console.log("Game Restarting");
        gameSetup(maxLives);
        gameMode = 2;
        return
    }
    // Restart Animation
    if (restartButton.scale < 0.28 && buttonAnimation == "small") {
        restartButton.scale = restartButton.scale + 0.0006
        //Start Button - pulsating startButton
    } else if (restartButton.scale > 0.25) {
        restartButton.scale = restartButton.scale - 0.0006
        buttonAnimation = "big"
    } else {
        buttonAnimation = "small";
    }
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    if (gameMode == 1) {
        startScreen();
    } else if (gameMode == 2) {
        gameLoop();
    } else if (gameMode == 3) {
        gameOver();
    }

}


/*
TO DO:
ADD INSTRUCTIONS
ADD NICE EXPLOSIONS
RESTART FROM GAMESCREEN
*/




/*******************************************************/
//  END OF game.js
/*******************************************************/