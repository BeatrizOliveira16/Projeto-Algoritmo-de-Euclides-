class UnderstandScene7 extends Phaser.Scene{
    constructor ()
    {
        super('UnderstandScene7');
    }
    preload() {
        this.load.image('backl','assets/backl.png',37,40,18);
        this.load.image('comp1','assets/compreeender1.png');
        this.load.image('comp2','assets/compreeender2.png');
        this.load.image('comp3','assets/compreeender3.png');
        this.load.image('comp4','assets/compreeender4.png');
        this.load.image('comp5','assets/compreeender5.png');
        this.load.image('comp6','assets/compreeender6.png');
        this.load.image('comp7','assets/compreeender7.png');
        this.load.image('comp8','assets/compreeender8.png');
        this.load.image('comp9','assets/compreeender9.png');
        this.load.image('bthome','assets/bthome.png');
        this.load.image('backl','assets/backl.png',{ frameWidth: 32, frameHeight: 48 });
        this.load.image('backr','assets/backr.png');

        
    }

    create() 
    {
        
        this.aGrid = new AlignGrid({scene:this, rows:12,cols:12});
        this.comp8 = this.add.image(game.config.width / 2, game.config.height / 2, 'comp8');
        this.aGrid.placeAtIndex(77.5, this.comp8);
        this.comp8.setScale(1.92);
        this.comp8.setOrigin(0.5, 0.544);
       
                
        this.bthome = this.add.sprite(120,1079,'bthome');
        Align.scaleToGameW(this.bthome, 0.062);

        this.backl = this.add.sprite(1740,1093,'backl');
        Align.scaleToGameW(this.backl, 0.06);

        this.backr = this.add.sprite(1900,1093,'backr');
        Align.scaleToGameW(this.backr, 0.06);

        this.backr.setInteractive({useHandCursor: true});
        this.backr.on('pointerdown', function () {
            game.scene.stop('UnderstandScene7');
            game.scene.start('UnderstandScene8');
            this.backr.displayHeight -= 5;
            this.backr.displayWidth -= 5;
           
        }, this);
        this.backr.on('pointerover', function(){
            this.backr.displayHeight += 5;
            this.backr.displayWidth += 5;

        }, this);
        this.backr.on('pointerout', function(){
            this.backr.displayHeight -= 5;
            this.backr.displayWidth -= 5;
        }, this);

        this.backl.setInteractive({useHandCursor: true});
        this.backl.on('pointerdown', function () {
            game.scene.stop('UnderstandScene7');
            game.scene.start('UnderstandScene6');
            this.backl.displayHeight -= 5;
            this.backl.displayWidth -= 5;
           
        }, this);
        this.backl.on('pointerover', function(){
            this.backl.displayHeight += 5;
            this.backl.displayWidth += 5;

        }, this);
        this.backl.on('pointerout', function(){
            this.backl.displayHeight -= 5;
            this.backl.displayWidth -= 5;
        }, this);



        this.bthome.setInteractive({useHandCursor: true});
        this.bthome.on('pointerdown', function () {
            this.scene.start('FirstScene');
            //cont=1; 
        }, this);
        this.bthome.on('pointerover', function(){
            this.bthome.displayHeight += 5;
            this.bthome.displayWidth += 5;
        }, this);
        this.bthome.on('pointerout', function(){
            this.bthome.displayHeight -= 5;
            this.bthome.displayWidth -= 5;
        }, this);
    }
    update () {}
}