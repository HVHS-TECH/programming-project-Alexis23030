/*******************************************************/
// game.js
// Main Game Function
// Alexis Hood
/*******************************************************/





//preload func


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
    player1 = new Sprite(200, 200, 100, 100, 'd')
    player1.image = (player1.png);
    // x, y, w, h, phys.

}


/*******************************************************/
// createPlayer2()
/*******************************************************/
function createPlayer2() {
    //stuff
}


/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    background('white');
}


/*******************************************************/
//  END OF game.js
/*******************************************************/