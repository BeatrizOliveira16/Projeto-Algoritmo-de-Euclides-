class Info2Scene extends Phaser.Scene{
    constructor ()
    {
        super('Info2Scene');
    }

    preload() 
    {
        this.load.image('InfoBoard', 'assets/InfoBoard.png');
        this.load.image('btfechar','assets/btfechar.png');
    }

    create() {   
        this.aGrid = new AlignGrid({scene:this, rows:12,cols:12});

        this.InfoBoard = this.add.image(game.config.width / 2, game.config.height / 2, 'InfoBoard');
        this.InfoBoard.setScale(1.93);
        this.aGrid.placeAtIndex(77.5, this.InfoBoard);
        this.InfoBoard.setOrigin(0.5, 0.544);

   
        this.btfechar = this.add.sprite(0,0,'btfechar');
        Align.scaleToGameW(this.btfechar, 0.05);
        this.aGrid.placeAtIndex(11,this.btfechar);
        this.btfechar.setOrigin(0.8, 0.2);

        this.btfechar.setInteractive({ useHandCursor: true });
        this.btfechar.on('pointerdown', function (){
            game.scene.stop('Info2Scene');
            game.scene.resume('PracticeScene');
            document.getElementById('row-principal').style.visibility = "visible";
            document.getElementById('rf').style.visibility = "visible";
        }, this);

        this.btfechar.on('pointerover', function(){
            this.btfechar.displayHeight += 5;
            this.btfechar.displayWidth += 5;
        },this);
        this.btfechar.on('pointerout', function(){
            this.btfechar.displayHeight -= 5;
            this.btfechar.displayWidth -= 5;
        },this);

    }
    update () {}
}
