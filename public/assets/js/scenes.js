var uiScene = new Phaser.Class({
    
    Extends: Phaser.Scene,

    initialize:

    function uiScene ()
    {
        Phaser.Scene.call(this, { key: 'uiScene' });
    },
    preload: function ()
    {
        this.load.path = 'assets/';

        this.load.image('p1healthbar', 'game-art/userinterface/playerHealthbar.png');
        this.load.image('p2healthbar', 'game-art/userinterface/enemyHealthbar.png');
        this.load.image('hud', 'game-art/userinterface/hud.png');
        
    },
    create: function ()
    {
        //this.cameras.main.flash(300);
        this.scene.bringToTop();

        var hud = this.add.image(260, 515, 'hud');

        var atkBtn = this.add.text(50, 480, 'Attack');
        atkBtn.setScale(1.4);
        atkBtn.setInteractive();
        atkBtn.on('pointerout', function() {
            this.scene.scene.start('attackScene');
            //priority()
        })

        var playerHpDisplay = this.add.text(200, 480, player.name + "'s HP:" + playerHP);
        playerHpDisplay.setScale(1.4);
        var enemyHpDisplay = this.add.text(200, 500, enemyName + "'s HP:" + enemyHP);
        enemyHpDisplay.setScale(1.4);
         if(enemyHP <= 0 && enemyName == "Druid"){
            window.playerHP = player.hp;
            this.scene.launch('zombieScene');
         }else if (enemyHP <=0 && enemyName == "Zombie"){
            window.playerHP = player.hp;
            this.scene.launch('skeletonScene');
         }else if (enemyHP <=0 && enemyName == "Skeleton"){
            window.playerHP = player.hp;
            this.scene.launch('sorcererScene');
         }else if (enemyHP <=0 && enemyName == "Sorcereress"){
            {window.location.replace("/home");};
         }
    }
});

