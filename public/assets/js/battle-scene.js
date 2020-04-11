var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    //this.load.setBaseURL('http://labs.phaser.io');
    this.load.path = 'assets/';

    this.load.image('background', 'bg/battleback1.png');
    this.load.image('druid', 'sprites/enemies/druid.png');
    this.load.image('player', 'sprites/player/herobase.png');
}

function create ()
{
    this.add.image(400, 300, 'background');
    this.add.image(600, 200, 'druid');
    this.add.image(200, 400, 'player');
}