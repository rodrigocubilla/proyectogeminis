class Scene2 extends Phaser.Scene {
    constructor() {
      super('nivel1');
    }

    create ()
    {
        // Cámara

        camera = this.cameras.main; 
        
        this.cameras.main.setBounds(0, 0, 815, 1800)

        // Background 

        this.add.image(400, 300, 'bg');
        
        platforms = this.physics.add.staticGroup();

        platforms.create(400, 1200, 'ground').refreshBody();

        // 

        game.world.setBounds(0, 0, 815, 1800);

        // Player 

        player = this.physics.add.sprite(100, 450, 'still');

        player.setScale(0.7);

        this.physics.add.collider(player, platforms);

        player.setCollideWorldBounds(false);
    
        if (cursors =! undefined){
            
            cursors = this.input.keyboard.createCursorKeys();

        }

        // Lightning 

        rayo = this.physics.add.group({

            key: 'rayoide',

            repeat: 4, 

            setXY: {x: 100, y: 20, stepX: 120, stepY: 50},

        });

        this.physics.add.collider(rayo, platforms);

        this.physics.add.overlap(player, rayo, this.recorayo, null, this);

        ray = this.add.image(16, 25, 'rayoide')

        ray.scrollFactorX = 0

        ray.scrollFactorY = 0

        rayoText = this.add.text(40, 16, ':', { fontSize: '30px', fill: '#FFFFFF' });

        rayoText.scrollFactorX = 0

        rayoText.scrollFactorY = 0

        rayoScore = 0;

        gameOver = false;

        this.jumps = 0;

        // Timer settings

        initialTime = 120

        timedEvent = this.time.addEvent({ delay: 1000, callback: this.timer, callbackScope: this, loop: true });

        timeText = this.add.text(700, 16, '', { fontSize: '30px', fill: '#FFFFFF' });

        timeText.scrollFactorX = 0

        timeText.scrollFactorY = 0

        clok = this.add.image(685, 27, 'cloc');

        clok.scrollFactorX = 0

        clok.scrollFactorY = 0

        // Red apples 

        //redapple = this.physics.add.group();

    }

    update ()
    {
        camera.centerOn(player.x, player.y);

        if (gameOver) {      

            return

        }
        
        
        if (cursors.left.isDown) {

            player.setVelocityX(-160);

            player.anims.play('left', true);
        }

        else if (cursors.right.isDown) {

            player.setVelocityX(160);

            player.anims.play('right', true);
        }

        else {

            player.setVelocityX(0);

            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down) {

            player.setVelocityY(-330);

        }
    }

    recorayo(player, rayo){

        rayo.disableBody(true, true);

        rayoScore += 1

        rayoText.setText(':' + rayoScore)

    }

    gameOver() {        

        gameOver = true;

        this.physics.pause();

        player.setTint(0xff0000);
    }
    
    timer() {

        if (! gameOver) {    

            initialTime = initialTime - 1; 

            timeText.setText(':' + initialTime);

        if (initialTime == 0) {

            timedEvent.paused = true;

            this.gameOver()

            }            
        }
    }
    
}