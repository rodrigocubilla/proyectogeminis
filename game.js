var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9]
};

var game = new Phaser.Game(config);

var score;
var gameOver;

var player;
var stars;
var bombs;
var platforms;
var cursors;
var scoreText;

var timedEvent;
var initialTime;
var timeText;

var level = 0;