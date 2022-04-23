class UnderstandScene extends Phaser.Scene{
    constructor ()
    {
        super('UnderstandScene');
    }
    preload() {
        this.load.image('backl','assets/backl.png',37,40,18);
    }

    create() 
    {
        this.aGrid = new AlignGrid({scene:this, rows:12,cols:12});
        
        this.background = this.add.image(game.config.width / 2, game.config.height / 2, 'background');
        this.aGrid.placeAtIndex(77.5, this.background);
        this.background.setScale(1.44);
        this.background.setOrigin(0.5, 0.544);


        this.backl = this.add.sprite(0,0,'backl');
        this.aGrid.placeAtIndex(12.25,this.backl);
        Align.scaleToGameW(this.backl, 0.07);


        this.backl.setInteractive({useHandCursor: true});
        this.backl.on('pointerdown', function () {
            this.scene.start('FirstScene');
        }, this);

    }

    update () {}
}