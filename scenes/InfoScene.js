class InfoScene extends Phaser.Scene{
    constructor ()
    {
        super('InfoScene');
    }

    preload() {
        this.load.image('quadroInfo', 'assets/info001.png');
        this.load.image('quadroInfo2', 'assets/info002.png');
        this.load.image('quadroInfo3', 'assets/info003.png');
        this.load.image('quadroInfo4', 'assets/plusinfo.png');
        this.load.image('btfechar','assets/btfechar.png');
        this.load.image('trevo', 'assets/bttrevo.png');
        this.load.image('plusinfo', 'assets/plusinfo.png');
    }

    create() 
    {   
        this.aGrid = new AlignGrid({scene:this, rows:12,cols:12});

        this.quadroInfo = this.add.image(game.config.width / 2, game.config.height / 2, 'quadroInfo');
        this.quadroInfo.setScale(1.4);
        this.aGrid.placeAtIndex(77.5, this.quadroInfo);

        this.trevo = this.add.image(0,0,'trevo');
        Align.scaleToGameW(this.trevo, 0.085);
        this.aGrid.placeAtIndex(44,this.trevo);
        this.trevo.setOrigin(0.4, 0.6);

        this.btfechar = this.add.sprite(0,0,'btfechar');
        Align.scaleToGameW(this.btfechar, 0.056);
        this.aGrid.placeAtIndex(44,this.btfechar);
        this.btfechar.setOrigin(0.5, 0.6);

        this.btfechar.setInteractive({ useHandCursor: true });
        this.btfechar.on('pointerdown', function (){
            game.scene.stop();
            game.scene.resume('FirstScene');
        }, this);

        this.plusinfo = this.add.sprite(0,0,'plusinfo');
        Align.scaleToGameW(this.plusinfo, 0.024);
        this.aGrid.placeAtIndex(55,this.plusinfo);
        this.plusinfo.setOrigin(1.55, 1.25);

        this.plusinfo.setInteractive({ useHandCursor: true });
        this.plusinfo.once('pointerdown', function () {
            this.quadroInfo2 = this.add.image(game.config.width / 2, game.config.height / 2, 'quadroInfo2');
            this.quadroInfo2.setScale(1.4);
            this.aGrid.placeAtIndex(77.5, this.quadroInfo2);
            this.quadroInfo2.setOrigin(0.5, 0.3);

            this.trevo1 = this.add.image(0,0,'trevo');
            Align.scaleToGameW(this.trevo1, 0.085);
            this.aGrid.placeAtIndex(44,this.trevo1);
            this.trevo1.setOrigin(-0.4, -0.3);

            this.btfechar1 = this.add.sprite(0,0,'btfechar');
            Align.scaleToGameW(this.btfechar1, 0.056);
            this.aGrid.placeAtIndex(44,this.btfechar1);
            this.btfechar1.setOrigin(-0.7, -0.75);

            this.btfechar1.setInteractive({ useHandCursor: true });
            this.btfechar1.once('pointerdown', function (){
                quadroInfo2.setActive(false).setVisible(false);
                btfechar1.setActive(false).setVisible(false);
                trevo1.setActive(false).setVisible(false);
            }, this);
        }, this);

        this.plusinfo1 = this.add.sprite(0,0,'plusinfo');
        Align.scaleToGameW(this.plusinfo1, 0.024);
        this.aGrid.placeAtIndex(65,this.plusinfo1);
        this.plusinfo1.setOrigin(0.3, 0.9);

        this.plusinfo1.setInteractive({ useHandCursor: true });
        this.plusinfo1.once('pointerdown', function () {
            this.quadroInfo3 = this.add.image(game.config.width / 2, game.config.height / 2, 'quadroInfo3');
            this.quadroInfo3.setScale(1.4);
            this.aGrid.placeAtIndex(77.5, this.quadroInfo3);
            this.quadroInfo3.setOrigin(0.5, 0.3);

            this.trevo2 = this.add.image(0,0,'trevo');
            Align.scaleToGameW(this.trevo2, 0.085);
            this.aGrid.placeAtIndex(44,this.trevo2);
            this.trevo2.setOrigin(-0.4, -0.3);

            this.btfechar2 = this.add.sprite(0,0,'btfechar');
            Align.scaleToGameW(this.btfechar2, 0.056);
            this.aGrid.placeAtIndex(44,this.btfechar2);
            this.btfechar2.setOrigin(-0.7, -0.75);

            this.btfechar2.setInteractive({ useHandCursor: true });
            this.btfechar2.once('pointerdown', function (){
                quadroInfo3.setActive(false).setVisible(false);
                btfechar2.setActive(false).setVisible(false);
                trevo2.setActive(false).setVisible(false);
            }, this);
        }, this);

        this.plusinfo2 = this.add.sprite(0,0,'plusinfo');
        Align.scaleToGameW(this.plusinfo2, 0.024);
        this.aGrid.placeAtIndex(103,this.plusinfo2);
        this.plusinfo2.setOrigin(0.9, 1.15);

        this.plusinfo2.setInteractive({ useHandCursor: true });
        this.plusinfo2.once('pointerdown', function () {
            this.quadroInfo4 = this.add.image(game.config.width / 2, game.config.height / 2, 'quadroInfo4');
            this.quadroInfo4.setScale(1.4);
            this.aGrid.placeAtIndex(77.5, this.quadroInfo4);
            this.quadroInfo4.setOrigin(0.5, 0.3);

            this.trevo3 = this.add.image(0,0,'trevo');
            Align.scaleToGameW(this.trevo3, 0.085);
            this.aGrid.placeAtIndex(44,this.trevo3);
            this.trevo3.setOrigin(-0.4, -0.3);

            this.btfechar3 = this.add.sprite(0,0,'btfechar');
            Align.scaleToGameW(this.btfechar3, 0.056);
            this.aGrid.placeAtIndex(44,this.btfechar3);
            this.btfechar3.setOrigin(-0.7, -0.75);

            this.btfechar3.setInteractive({ useHandCursor: true });
            this.btfechar3.once('pointerdown', function (){
                quadroInfo4.setActive(false).setVisible(false);
                btfechar3.setActive(false).setVisible(false);
                trevo3.setActive(false).setVisible(false);
            }, this);
        }, this);

    }

    update () {}
}
