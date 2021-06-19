var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: false
        }
    },
    scene: [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9]
};

var game = new Phaser.Game(config);

var score;
var gameOver;
var camera;
var boundaries;

var player;
var rayo;
var flechas;
var platforms;
var cursors;
var scoreText;
var rayoText;
var rayoScore;
var ray;
var clok; 

var timedEvent;
var initialTime;
var timeText;

var level = 0;