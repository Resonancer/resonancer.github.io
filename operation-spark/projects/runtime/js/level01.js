var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                //{type: 'sawblade',x:400,y:groundY},
                //{type: 'sawblade',x:600,y:groundY},
                //{type: 'sawblade',x:900,y:groundY},
                //{type: 'box',x:2000,y:400},
                //{type: 'enemy',x:400,y:groundY - 50},
                //{type: 'reward',x:1000,y:300}
                {type: 'sawblade',x:400,y:groundY - 115},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:800,y:groundY - 115},
                {type: 'sawblade',x:1000,y:groundY},
                {type: 'sawblade',x:1150,y:groundY},
                {type: 'sawblade',x:1300,y:groundY},
                {type: 'box',x:1500,y:groundY - 115},
                {type: 'box',x:1650,y:groundY},
                {type: 'enemy',x:400,y:groundY - 50},
                {type: 'enemy',x:800,y:groundY - 50},
                {type: 'enemy',x:1200,y:groundY - 50},
                {type: 'reward',x:1900,y:groundY - 160},
                
                {type: 'sawblade',x:2050,y:groundY},
                {type: 'sawblade',x:2200,y:groundY},
                {type: 'sawblade',x:2400,y:groundY - 115},
                {type: 'sawblade',x:2600,y:groundY},
                {type: 'sawblade',x:2750,y:groundY - 115},
                {type: 'sawblade',x:2900,y:groundY},
                {type: 'box',x:3200,y:groundY},
                {type: 'box',x:3350,y:groundY - 115},
                {type: 'box',x:3500,y:groundY},
                {type: 'reward',x:3000,y:groundY - 160},

            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
//console.log(levelData.gameItems[0].x);

function createSawBlade(x,y) {
    var hitZoneSize = 25;
var damageFromObstacle = 10;
var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
myObstacle.x = x;     //400
myObstacle.y = y;     //360
game.addGameItem(myObstacle);

var obstacleImage = draw.bitmap('img/sawblade.png');
myObstacle.addChild(obstacleImage);
obstacleImage.x = -25;
obstacleImage.y = -25;
}  
for (var i = 0; i < levelData.gameItems.length; i++) {
    var gameItemX = levelData.gameItems[i].x;
    var gameItemY = levelData.gameItems[i].y;
    if (levelData.gameItems[i].type === "sawblade") {
        createSawBlade(gameItemX, gameItemY);    
    }
    if (levelData.gameItems[i].type === "box") {
        createBox(gameItemX, gameItemY);
    }
    if (levelData.gameItems[i].type === "enemy") {
        createEnemy(gameItemX, gameItemY);
    }
    if (levelData.gameItems[i].type === "reward") {
        createReward(gameItemX, gameItemY);
    }
    
    
    // Create a sawblade using the .x and .y property of each game item object
}
//createSawBlade(400,360);
//createSawBlade(900,420);

function createBox(x,y) {
    var hitZoneSizeBox = 25;
var damageFromObstacleBox = 10;

//myObstacleBox.addChild(draw.bitmap('img/box.png'));
var myObstacleBox = game.createObstacle(hitZoneSizeBox,damageFromObstacleBox);
myObstacleBox.x = x;     //400
myObstacleBox.y = y;     //360
game.addGameItem(myObstacleBox);

var obstacleImageBox = draw.bitmap('img/box.png');
myObstacleBox.addChild(obstacleImageBox);
obstacleImageBox.x = -25;
obstacleImageBox.y = -25;
}






function createEnemy(x, y) {
    
var enemy =  game.createGameItem('enemy',25);
var redSquare = draw.rect(50,50,'red');
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = x; // 400
enemy.y = y; // groundY-50
game.addGameItem(enemy);
enemy.velocityX = -1;
enemy.rotationalVelocity = 20;

enemy.onPlayerCollision = function() {
    console.log('The enemy has hit Halle');
    game.changeIntegrity(-10);
};

enemy.onProjectileCollision = function() {
    console.log('The enemy has hit Halle');
    game.increaseScore(100);

enemy.fadeOut();

};
}





function createReward(x, y) {
    
var reward =  game.createGameItem('reward',25);
var blueSquare = draw.rect(50,50,'blue');
blueSquare.x = -25;
blueSquare.y = -25;
reward.addChild(blueSquare);
reward.x = x; // 400
reward.y = y; // groundY-50
game.addGameItem(reward);
reward.velocityX = -1;
reward.rotationalVelocity = 20;

reward.onPlayerCollision = function() {
    console.log('The reward has hit Halle');
    //game.changeIntegrity(100);
    game.increaseScore(1000);
    reward.fadeOut();
};


    
}





    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}