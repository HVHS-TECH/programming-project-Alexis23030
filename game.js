/*******************************************************/
// game.js
// Main Game Function
// Alexis Hood
/*******************************************************/
let width = 800
let height = 800
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    let cnv = createCanvas(width, height);
    cnv.position((windowWidth / 2) - 400, (windowHeight / 2) - 400)
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
    //stuff
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