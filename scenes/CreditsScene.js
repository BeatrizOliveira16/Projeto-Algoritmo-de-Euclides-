class CreditsScene extends Phaser.Scene{
    constructor ()
    {
        super('CreditsScene');
    }
    preload() {
        this.load.image('quadCreditos','assets/quadroCreditos.png');
        this.load.image('trevo','assets/bttrevo.png');
        this.load.image('fechar', 'assets/btfechar.png',37,40,18);
    }

    create() 
    {
        this.aGrid = new AlignGrid({scene:this, rows:12,cols:12});

        this.quadCreditos = this.add.image(game.config.width / 2, game.config.height / 2, 'quadCreditos');
        this.quadCreditos.setScale(1.4);
        this.aGrid.placeAtIndex(77.5, this.quadCreditos);

        this.trevo = this.add.image(0,0,'trevo');
        Align.scaleToGameW(this.trevo, 0.085);
        this.aGrid.placeAtIndex(44,this.trevo);
        this.trevo.setOrigin(0.4, 0.6);

        this.fechar = this.add.sprite(0,0,'fechar');
        Align.scaleToGameW(this.fechar, 0.056);
        this.aGrid.placeAtIndex(44,this.fechar);
        this.fechar.setOrigin(0.5, 0.6);

        this.fechar.setInteractive({ useHandCursor: true });
        this.fechar.on('pointerdown', function (){
            game.scene.stop();
            game.scene.resume('FirstScene');
        }, this);


    }

    update () {}

}