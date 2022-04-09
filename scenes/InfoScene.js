class InfoScene extends Phaser.Scene{
    constructor ()
    {
        super('InfoScene');
    }
    preload() {}

    create() 
    {   
        this.aGrid = new AlignGrid({scene:this, rows:12,cols:12});
        
        this.background = this.add.image(game.config.width / 2, game.config.height / 2, 'background');
        this.background.setScale(2);
        this.aGrid.placeAtIndex(77, this.background);

    }

    update () {}
}
