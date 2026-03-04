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
    globalThis.width = windowWidth/2;
    globalThis.height = windowWidth/2;
    let cnv = createCanvas(width, height);
    cnv.position((windowWidth / 2) - (width/2), (windowHeight / 2) - (height/2))
    windowDraw();
    createPlayer1();
    createPlayer2();
}


/*******************************************************/
// windowDraw()
/*******************************************************/
function windowDraw() {
    let wallLH  = new Sprite(0, height/2, 8, height, 'k');
	wallLH.color = 'black';
	let wallRH  = new Sprite(width, height/2, 8, height, 'k');
	wallRH.color = 'black';
	let wallTop = new Sprite(width/2, 0, width, 8, 'k');
	wallTop.color = 'black';
	let wallBot = new Sprite(width/2, height, width, 8, 'k');
	wallBot.color = 'black';
}


/*******************************************************/
// createPlayer1()
/*******************************************************/
function createPlayer1() {
    player1 = new Sprite(width-100, height-100, 50, 50, 'd')
    player1.image = (player1img);
    player1.scale = 50 / player1img.width;
    player1.direction = -90;
}


/*******************************************************/
// createPlayer2()
/*******************************************************/
function createPlayer2() {
    player2 = new Sprite(100, 100, 50, 50, 'd')
    player2.image = (player2img);
    player2.scale = 50 / player2img.width;
    player2.direction = -90;
}


/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    background('white');

    if (kb.pressing('up')){
        player1.speed = 4
    }
    //if (kb.pressing('down')){
     //   player1.speed = -4
   // }
    if (kb.pressing('left')){
        player1.direction = player1.direction - 2
            player1.rotation = player1.rotation - 2
    }   
    if (kb.pressing('right')){
        player1.direction = player1.direction + 2
        player1.rotation = player1.rotation + 2
    }   
}


/*******************************************************/
//  END OF game.js
/*******************************************************/