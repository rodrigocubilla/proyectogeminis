class Scene1 extends Phaser.Scene {
    constructor() {
      super('inicio');
    }

    preload ()
    {
      this.load.spritesheet('Left', 'assets/Left.png', { frameWidth: 68, frameHeight: 96 });    
      this.load.spritesheet('Right', 'assets/Right.png', { frameWidth: 68, frameHeight: 96 }); 
      this.load.image('still', 'assets/tipardo.png'); 
      this.load.image('menuone', 'assets/menu principal.png');
      this.load.image('jugar', 'assets/jugar.png');
      this.load.image('creditos', 'assets/creditos.png');
      this.load.image('ayuda', 'assets/ayuda.png')
    }

    create() {

      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('Left', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: 'turn',
        frames: [ { key: 'still', frame: 4 } ],
        frameRate: 20
      });

      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('Right', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      });

      this.add.image(400, 300, 'menuone'); 

      var start = this.add.image(500, 420, 'jugar')
      start.setInteractive()
      start.on('pointerdown', () => this.scene.start('historia1') );

      var creds = this.add.image(475, 470, 'creditos')
      creds.setInteractive()
      creds.on('pointerdown', () => this.scene.start('creditos') );

      var help = this.add.image(500, 520, 'ayuda')
      help.setInteractive()
      help.on('pointerdown', () => this.scene.start('ayuda') );


      // Funcion FLECHA
      // (param1, param2, …, paramN) => { sentencias }
      // (param1, param2, …, paramN) => expresion
      // Equivalente a: () => { return expresion; }
    }
}
