/*******************************************************/
// game.js
// Main Game Function
// Alexis Hood
/*******************************************************/


/*******************************************************/
// preload()
/*******************************************************/
function preload() {
    player1img = loadImage('../images/player1.png');
    player2img = loadImage('../images/player2.png');
}


/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    globalThis.width = windowWidth / 2;
    globalThis.height = windowWidth / 2;
    let cnv = createCanvas(width, height);
    cnv.position((windowWidth / 2) - (width / 2), (windowHeight / 2) - (height / 2))
    //windowDraw();
    createPlayer1();
    createPlayer2();
}


/*******************************************************/
// windowDraw()
/*******************************************************/
function windowDraw() {
    let wallLH = new Sprite(0, height / 2, 8, height, 'k');
    wallLH.color = 'black';
    let wallRH = new Sprite(width, height / 2, 8, height, 'k');
    wallRH.color = 'black';

    let wallTop = new Sprite(width / 2, 0, width, 8, 'k');
    wallTop.color = 'black';
    let wallBot = new Sprite(width / 2, height, width, 8, 'k');
    wallBot.color = 'black';
}


/*******************************************************/
// createPlayer1()
/*******************************************************/
function createPlayer1() {
    player1 = new Sprite(width - 100, height - 100, 50, 50, 'k')
    player1.image = (player1img);
    player1.scale = 50 / player1img.width;
    player1.direction = -90;
}


/*******************************************************/
// createPlayer2()
/*******************************************************/
function createPlayer2() {
    player2 = new Sprite(100, 100, 50, 50, 'k')
    player2.image = (player2img);
    player2.scale = 50 / player2img.width;
    player2.direction = -90;
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

    //Wrapping Code
    if (player1.x < 0) {
        player1.x = width;
    } else if (player1.x > width) {
        player1.x = 0;
    } else if (player1.y < 0) {
        player1.y = height;
    } else if (player1.y > height) {
        player1.y = 0;
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

    //Wrapping Code
    if (player2.x < 0) {
        player2.x = width;
    } else if (player2.x > width) {
        player2.x = 0;
    } else if (player2.y < 0) {
        player2.y = height;
    } else if (player2.y > height) {
        player2.y = 0;
    }
}



/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    background('white');
    player1Movement();
    player2Movement();

}


/*******************************************************/
//  END OF game.js
/*******************************************************/