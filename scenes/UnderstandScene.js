class UnderstandScene extends Phaser.Scene{
    constructor ()
    {
        super('UnderstandScene');
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
        this.load.image('backl','assets/backl.png');
        this.load.image('backr','assets/backr.png');

        
    }

    create() 
    {
        let i = 0;

        this.aGrid = new AlignGrid({scene:this, rows:12,cols:12});
        this.comp1 = this.add.image(game.config.width / 2, game.config.height / 2, 'comp1');
        this.aGrid.placeAtIndex(77.5, this.comp1);
        this.comp1.setScale(1.92);
        this.comp1.setOrigin(0.5, 0.544);
       
            
        this.bthome = this.add.sprite(0,0,'bthome');
        this.aGrid.placeAtIndex(120.3,this.bthome);
        Align.scaleToGameW(this.bthome, 0.07);

        this.backl = this.add.sprite(0,0,'backl');
        this.aGrid.placeAtIndex(129.5,this.backl);
        Align.scaleToGameW(this.backl, 0.07);


        this.backr = this.add.sprite(0,0,'backr');
        this.aGrid.placeAtIndex(130.5,this.backr);
        Align.scaleToGameW(this.backr, 0.07); 


     
        this.backl.setInteractive({useHandCursor: true});
        this.backl.on('pointerdown', function () {
            if (i>0) i--; 
            console.log(i);
            if (i==0){
                this.comp1 = this.add.image(game.config.width / 2, game.config.height / 2, 'comp1');
                this.aGrid.placeAtIndex(77.5, this.comp1);
                this.comp1.setScale(1.92);
                this.comp1.setOrigin(0.5, 0.544);

                     
                this.bthome = this.add.sprite(0,0,'bthome');
                this.aGrid.placeAtIndex(120.3,this.bthome);
                Align.scaleToGameW(this.bthome, 0.07);

                this.backl = this.add.sprite(0,0,'backl');
                this.aGrid.placeAtIndex(129.5,this.backl);
                Align.scaleToGameW(this.backl, 0.07);


                this.backr = this.add.sprite(0,0,'backr');
                this.aGrid.placeAtIndex(130.5,this.backr);
                Align.scaleToGameW(this.backr, 0.07); 
            }
            if (i==1){
                this.comp2 = this.add.image(game.config.width / 2, game.config.height / 2, 'comp2');
                this.aGrid.placeAtIndex(77.5, this.comp2);
                this.comp2.setScale(1.92);
                this.comp2.setOrigin(0.5, 0.544);

                     
                this.bthome = this.add.sprite(0,0,'bthome');
                this.aGrid.placeAtIndex(120.3,this.bthome);
                Align.scaleToGameW(this.bthome, 0.07);

                this.backl = this.add.sprite(0,0,'backl');
                this.aGrid.placeAtIndex(129.5,this.backl);
                Align.scaleToGameW(this.backl, 0.07);


                this.backr = this.add.sprite(0,0,'backr');
                this.aGrid.placeAtIndex(130.5,this.backr);
                Align.scaleToGameW(this.backr, 0.07); 
            }
            if (i==2){
                this.comp3 = this.add.image(game.config.width / 2, game.config.height / 2, 'comp3');
                this.aGrid.placeAtIndex(77.5, this.comp3);
                this.comp3.setScale(1.92);
                this.comp3.setOrigin(0.5, 0.544);

                     
                this.bthome = this.add.sprite(0,0,'bthome');
                this.aGrid.placeAtIndex(120.3,this.bthome);
                Align.scaleToGameW(this.bthome, 0.07);

                this.backl = this.add.sprite(0,0,'backl');
                this.aGrid.placeAtIndex(129.5,this.backl);
                Align.scaleToGameW(this.backl, 0.07);


                this.backr = this.add.sprite(0,0,'backr');
                this.aGrid.placeAtIndex(130.5,this.backr);
                Align.scaleToGameW(this.backr, 0.07); 
            }
            if (i==3){
                this.comp4 = this.add.image(game.config.width / 2, game.config.height / 2, 'comp4');
                this.aGrid.placeAtIndex(77.5, this.comp4);
                this.comp4.setScale(1.92);
                this.comp4.setOrigin(0.5, 0.544);

                     
                this.bthome = this.add.sprite(0,0,'bthome');
                this.aGrid.placeAtIndex(120.3,this.bthome);
                Align.scaleToGameW(this.bthome, 0.07);

                this.backl = this.add.sprite(0,0,'backl');
                this.aGrid.placeAtIndex(129.5,this.backl);
                Align.scaleToGameW(this.backl, 0.07);


                this.backr = this.add.sprite(0,0,'backr');
                this.aGrid.placeAtIndex(130.5,this.backr);
                Align.scaleToGameW(this.backr, 0.07); 
            }
            if (i==4){
                this.comp5 = this.add.image(game.config.width / 2, game.config.height / 2, 'comp5');
                this.aGrid.placeAtIndex(77.5, this.comp5);
                this.comp5.setScale(1.92);
                this.comp5.setOrigin(0.5, 0.544);

                     
                this.bthome = this.add.sprite(0,0,'bthome');
                this.aGrid.placeAtIndex(120.3,this.bthome);
                Align.scaleToGameW(this.bthome, 0.07);

                this.backl = this.add.sprite(0,0,'backl');
                this.aGrid.placeAtIndex(129.5,this.backl);
                Align.scaleToGameW(this.backl, 0.07);


                this.backr = this.add.sprite(0,0,'backr');
                this.aGrid.placeAtIndex(130.5,this.backr);
                Align.scaleToGameW(this.backr, 0.07); 
            }
            if (i==5){
                this.comp6 = this.add.image(game.config.width / 2, game.config.height / 2, 'comp6');
                this.aGrid.placeAtIndex(77.5, this.comp6);
                this.comp6.setScale(1.92);
                this.comp6.setOrigin(0.5, 0.544);

                     
                this.bthome = this.add.sprite(0,0,'bthome');
                this.aGrid.placeAtIndex(120.3,this.bthome);
                Align.scaleToGameW(this.bthome, 0.07);

                this.backl = this.add.sprite(0,0,'backl');
                this.aGrid.placeAtIndex(129.5,this.backl);
                Align.scaleToGameW(this.backl, 0.07);


                this.backr = this.add.sprite(0,0,'backr');
                this.aGrid.placeAtIndex(130.5,this.backr);
                Align.scaleToGameW(this.backr, 0.07); 
            }
            if (i==6){
                this.comp7 = this.add.image(game.config.width / 2, game.config.height / 2, 'comp7');
                this.aGrid.placeAtIndex(77.5, this.comp7);
                this.comp7.setScale(1.92);
                this.comp7.setOrigin(0.5, 0.544);

                     
                this.bthome = this.add.sprite(0,0,'bthome');
                this.aGrid.placeAtIndex(120.3,this.bthome);
                Align.scaleToGameW(this.bthome, 0.07);

                this.backl = this.add.sprite(0,0,'backl');
                this.aGrid.placeAtIndex(129.5,this.backl);
                Align.scaleToGameW(this.backl, 0.07);


                this.backr = this.add.sprite(0,0,'backr');
                this.aGrid.placeAtIndex(130.5,this.backr);
                Align.scaleToGameW(this.backr, 0.07); 
            }
            if (i==7){
                this.comp8 = this.add.image(game.config.width / 2, game.config.height / 2, 'comp8');
                this.aGrid.placeAtIndex(77.5, this.comp8);
                this.comp8.setScale(1.92);
                this.comp8.setOrigin(0.5, 0.544);

                     
                this.bthome = this.add.sprite(0,0,'bthome');
                this.aGrid.placeAtIndex(120.3,this.bthome);
                Align.scaleToGameW(this.bthome, 0.07);

                this.backl = this.add.sprite(0,0,'backl');
                this.aGrid.placeAtIndex(129.5,this.backl);
                Align.scaleToGameW(this.backl, 0.07);


                this.backr = this.add.sprite(0,0,'backr');
                this.aGrid.placeAtIndex(130.5,this.backr);
                Align.scaleToGameW(this.backr, 0.07); 
            }
            if (i==8){
                this.comp9 = this.add.image(game.config.width / 2, game.config.height / 2, 'comp9');
                this.aGrid.placeAtIndex(77.5, this.comp9);
                this.comp9.setScale(1.92);
                this.comp9.setOrigin(0.5, 0.544);

                     
                this.bthome = this.add.sprite(0,0,'bthome');
                this.aGrid.placeAtIndex(120.3,this.bthome);
                Align.scaleToGameW(this.bthome, 0.07);

                this.backl = this.add.sprite(0,0,'backl');
                this.aGrid.placeAtIndex(129.5,this.backl);
                Align.scaleToGameW(this.backl, 0.07);


                this.backr = this.add.sprite(0,0,'backr');
                this.aGrid.placeAtIndex(130.5,this.backr);
                Align.scaleToGameW(this.backr, 0.07); 
            }
        }, this);
        this.backl.on('pointerover', function(){
            this.backl.displayHeight += 5;
            this.backl.displayWidth += 5;
        }, this);
        this.backl.on('pointerout', function(){
            this.backl.displayHeight -= 5;
            this.backl.displayWidth -= 5;
        }, this);
        
      
        console.log(i);
        this.backr.setInteractive({useHandCursor: true});
        this.backr.on('pointerdown', function () {
            this.backr.displayHeight -= 5;
            this.backr.displayWidth -= 5;
            if(i<8)i++;
            
            console.log(i);
            if (i==0){
                this.comp1 = this.add.image(game.config.width / 2, game.config.height / 2, 'comp1');
                this.aGrid.placeAtIndex(77.5, this.comp1);
                this.comp1.setScale(1.92);
                this.comp1.setOrigin(0.5, 0.544);

                     
                this.bthome = this.add.sprite(0,0,'bthome');
                this.aGrid.placeAtIndex(120.3,this.bthome);
                Align.scaleToGameW(this.bthome, 0.07);

                this.backl = this.add.sprite(0,0,'backl');
                this.aGrid.placeAtIndex(129.5,this.backl);
                Align.scaleToGameW(this.backl, 0.07);


                this.backr = this.add.sprite(0,0,'backr');
                this.aGrid.placeAtIndex(130.5,this.backr);
                Align.scaleToGameW(this.backr, 0.07); 
            }
            if (i==1){
                this.comp2 = this.add.image(game.config.width / 2, game.config.height / 2, 'comp2');
                this.aGrid.placeAtIndex(77.5, this.comp2);
                this.comp2.setScale(1.92);
                this.comp2.setOrigin(0.5, 0.544);

                     
                this.bthome = this.add.sprite(0,0,'bthome');
                this.aGrid.placeAtIndex(120.3,this.bthome);
                Align.scaleToGameW(this.bthome, 0.07);

                this.backl = this.add.sprite(0,0,'backl');
                this.aGrid.placeAtIndex(129.5,this.backl);
                Align.scaleToGameW(this.backl, 0.07);


                this.backr = this.add.sprite(0,0,'backr');
                this.aGrid.placeAtIndex(130.5,this.backr);
                Align.scaleToGameW(this.backr, 0.07); 
            }
            if (i==2){
                this.comp3 = this.add.image(game.config.width / 2, game.config.height / 2, 'comp3');
                this.aGrid.placeAtIndex(77.5, this.comp3);
                this.comp3.setScale(1.92);
                this.comp3.setOrigin(0.5, 0.544);

                     
                this.bthome = this.add.sprite(0,0,'bthome');
                this.aGrid.placeAtIndex(120.3,this.bthome);
                Align.scaleToGameW(this.bthome, 0.07);

                this.backl = this.add.sprite(0,0,'backl');
                this.aGrid.placeAtIndex(129.5,this.backl);
                Align.scaleToGameW(this.backl, 0.07);


                this.backr = this.add.sprite(0,0,'backr');
                this.aGrid.placeAtIndex(130.5,this.backr);
                Align.scaleToGameW(this.backr, 0.07); 
            }
            if (i==3){
                this.comp4 = this.add.image(game.config.width / 2, game.config.height / 2, 'comp4');
                this.aGrid.placeAtIndex(77.5, this.comp4);
                this.comp4.setScale(1.92);
                this.comp4.setOrigin(0.5, 0.544);

                     
                this.bthome = this.add.sprite(0,0,'bthome');
                this.aGrid.placeAtIndex(120.3,this.bthome);
                Align.scaleToGameW(this.bthome, 0.07);

                this.backl = this.add.sprite(0,0,'backl');
                this.aGrid.placeAtIndex(129.5,this.backl);
                Align.scaleToGameW(this.backl, 0.07);


                this.backr = this.add.sprite(0,0,'backr');
                this.aGrid.placeAtIndex(130.5,this.backr);
                Align.scaleToGameW(this.backr, 0.07); 
            }
            if (i==4){
                this.comp5 = this.add.image(game.config.width / 2, game.config.height / 2, 'comp5');
                this.aGrid.placeAtIndex(77.5, this.comp5);
                this.comp5.setScale(1.92);
                this.comp5.setOrigin(0.5, 0.544);

                     
                this.bthome = this.add.sprite(0,0,'bthome');
                this.aGrid.placeAtIndex(120.3,this.bthome);
                Align.scaleToGameW(this.bthome, 0.07);

                this.backl = this.add.sprite(0,0,'backl');
                this.aGrid.placeAtIndex(129.5,this.backl);
                Align.scaleToGameW(this.backl, 0.07);


                this.backr = this.add.sprite(0,0,'backr');
                this.aGrid.placeAtIndex(130.5,this.backr);
                Align.scaleToGameW(this.backr, 0.07); 
            }
            if (i==5){
                this.comp6 = this.add.image(game.config.width / 2, game.config.height / 2, 'comp6');
                this.aGrid.placeAtIndex(77.5, this.comp6);
                this.comp6.setScale(1.92);
                this.comp6.setOrigin(0.5, 0.544);

                     
                this.bthome = this.add.sprite(0,0,'bthome');
                this.aGrid.placeAtIndex(120.3,this.bthome);
                Align.scaleToGameW(this.bthome, 0.07);

                this.backl = this.add.sprite(0,0,'backl');
                this.aGrid.placeAtIndex(129.5,this.backl);
                Align.scaleToGameW(this.backl, 0.07);


                this.backr = this.add.sprite(0,0,'backr');
                this.aGrid.placeAtIndex(130.5,this.backr);
                Align.scaleToGameW(this.backr, 0.07); 
            }
            if (i==6){
                this.comp7 = this.add.image(game.config.width / 2, game.config.height / 2, 'comp7');
                this.aGrid.placeAtIndex(77.5, this.comp7);
                this.comp7.setScale(1.92);
                this.comp7.setOrigin(0.5, 0.544);

                     
                this.bthome = this.add.sprite(0,0,'bthome');
                this.aGrid.placeAtIndex(120.3,this.bthome);
                Align.scaleToGameW(this.bthome, 0.07);

                this.backl = this.add.sprite(0,0,'backl');
                this.aGrid.placeAtIndex(129.5,this.backl);
                Align.scaleToGameW(this.backl, 0.07);


                this.backr = this.add.sprite(0,0,'backr');
                this.aGrid.placeAtIndex(130.5,this.backr);
                Align.scaleToGameW(this.backr, 0.07); 
            }
            if (i==7){
                this.comp8 = this.add.image(game.config.width / 2, game.config.height / 2, 'comp8');
                this.aGrid.placeAtIndex(77.5, this.comp8);
                this.comp8.setScale(1.92);
                this.comp8.setOrigin(0.5, 0.544);

                     
                this.bthome = this.add.sprite(0,0,'bthome');
                this.aGrid.placeAtIndex(120.3,this.bthome);
                Align.scaleToGameW(this.bthome, 0.07);

                this.backl = this.add.sprite(0,0,'backl');
                this.aGrid.placeAtIndex(129.5,this.backl);
                Align.scaleToGameW(this.backl, 0.07);


                this.backr = this.add.sprite(0,0,'backr');
                this.aGrid.placeAtIndex(130.5,this.backr);
                Align.scaleToGameW(this.backr, 0.07); 
            }
            if (i==8){
                this.comp9 = this.add.image(game.config.width / 2, game.config.height / 2, 'comp9');
                this.aGrid.placeAtIndex(77.5, this.comp9);
                this.comp9.setScale(1.92);
                this.comp9.setOrigin(0.5, 0.544);

                     
                this.bthome = this.add.sprite(0,0,'bthome');
                this.aGrid.placeAtIndex(120.3,this.bthome);
                Align.scaleToGameW(this.bthome, 0.07);

                this.backl = this.add.sprite(0,0,'backl');
                this.aGrid.placeAtIndex(129.5,this.backl);
                Align.scaleToGameW(this.backl, 0.07);


                this.backr = this.add.sprite(0,0,'backr');
                this.aGrid.placeAtIndex(130.5,this.backr);
                Align.scaleToGameW(this.backr, 0.07); 
            }


        }, this);
        this.backr.on('pointerover', function(){
            this.backr.displayHeight += 5;
            this.backr.displayWidth += 5;

            

           
        }, this);
        this.backr.on('pointerout', function(){
            this.backr.displayHeight -= 5;
            this.backr.displayWidth -= 5;
        }, this);



        this.bthome.setInteractive({useHandCursor: true});
        this.bthome.on('pointerdown', function () {
            this.scene.start('FirstScene');
            cont=1; 
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