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
    globalThis.width = 600;
    globalThis.height = 600;
    let cnv = createCanvas(width, height);
    cnv.position((windowWidth / 2) - (width / 2), (windowHeight / 2) - (height / 2))
    createPlayer1();
    createPlayer2();
    projectileGroup = new Group();

}

/*******************************************************/
// createPlayer1()
/*******************************************************/
function createPlayer1() {
    player1 = new Sprite(width - 100, height - 100, 30, 30, 'd')
    player1.image = (player1img);
    player1.scale = 50 / player1img.width;
    player1.direction = -90;
    player1.collider = 'd'
    player1.w = 30;
    player1.h = 30;
}


/*******************************************************/
// createPlayer2()
/*******************************************************/
function createPlayer2() {
    player2 = new Sprite(100, 100, 30, 30, 'd')
    player2.image = (player2img);
    player2.scale = 50 / player2img.width;
    player2.direction = -90;
    player2.w = 30;
    player2.h = 30;
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
// createProjectile()
/*******************************************************/
async function createProjectile(_repeats) {
    for (i = 0; i < _repeats; i++) {
        projectile = new Sprite(player1.x, player1.y, 2, 4, 'd')
        projectile.direction = player1.direction
        projectile.rotation = player1.rotation
        projectile.speed = 8;
        projectile.color = 'black';
        projectileGroup.add(projectile);
        if (_repeats > 1) {
            await delay(random(10, 100));
        }
    }

}

/*******************************************************/
// removeProjectile()
/*******************************************************/
function removeProjectile(_projectile) {
    console.log("blah")
    _projectile.remove()
}



/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    background('white');
    player1Movement();
    player2Movement();

    if (kb.pressed('space')) {
        createProjectile(1);
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

    projectileGroup.collides(player2, removeProjectile);
}


/*******************************************************/
//  END OF game.js
/*******************************************************/