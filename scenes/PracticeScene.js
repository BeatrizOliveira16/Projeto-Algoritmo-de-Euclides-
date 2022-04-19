
class PracticeScene extends Phaser.Scene{
    constructor ()
    {
        super('PracticeScene');
    }
    preload() {
        this.load.image('paint','assets/btpaint.png',37,40,18);
        this.load.image('refresh','assets/btrefresh.png',37,40,18);
        this.load.image('verificar','assets/btverificar.png',37,40,18);
        this.load.image('menos','assets/btmenos.png',37,40,18);
        this.load.image('mais','assets/btmais.png',37,40,18);
        this.load.image('limpar','assets/btlimpar.png',37,40,18);
        this.load.image('infog2','assets/btinfog2.png',37,40,18);
        this.load.image('corrigir','assets/btcorrigir.png',37,40,18);
        this.load.image('barrainfo1','assets/barrainfo1.png'); //Devemos considerar como um botão???
        this.load.image('barrainfo2','assets/barrainfo2.png',37,40,18);//Devemos considerar como um botão???
    }
     
    create() 
    {    



        var grelhaConfig = {scene:this, rows:12,cols:12};
        this.aGrid = new AlignGrid(grelhaConfig);
        //this.aGrid.showNumbers();

        this.background = this.add.image(game.config.width / 2, game.config.height / 2, 'background');
        this.background.setScale(2);
        this.aGrid.placeAtIndex(77, this.background);

        this.titulo = this.add.image(0,0,'titulo');
        this.aGrid.placeAtIndex(17.5, this.titulo);
        Align.scaleToGameW(this.titulo,0.75);
        
        this.barrainfo1 = this.add.sprite(0,0,'barrainfo1');
        this.aGrid.placeAtIndex(41.5,this.barrainfo1);
        Align.scaleToGameW(this.barrainfo1, 0.60);
        
        this.refresh = this.add.sprite(0,0,'refresh');
        this.aGrid.placeAtIndex(45.7,this.refresh);
        Align.scaleToGameW(this.refresh, 0.07);

        this.infog2 = this.add.sprite(0,0,'infog2');
        this.aGrid.placeAtIndex(64,this.infog2);
        Align.scaleToGameW(this.infog2, 0.04);

        this.paint = this.add.sprite(0,0,'paint');
        this.aGrid.placeAtIndex(76,this.paint);
        Align.scaleToGameW(this.paint, 0.04);

        this.limpar = this.add.sprite(0,0,'limpar');
        this.aGrid.placeAtIndex(88,this.limpar);
        Align.scaleToGameW(this.limpar, 0.05);

        this.mais = this.add.sprite(0,0,'mais');
        this.aGrid.placeAtIndex(66,this.mais);
        Align.scaleToGameW(this.mais, 0.03);

        this.menos = this.add.sprite(0,0,'menos');
        this.aGrid.placeAtIndex(78,this.menos);
        Align.scaleToGameW(this.menos, 0.03);

        this.barrainfo2 = this.add.sprite(0,0,'barrainfo2');
        this.aGrid.placeAtIndex(125.5,this.barrainfo2);
        Align.scaleToGameW(this.barrainfo2, 0.65);

        this.verificar = this.add.sprite(0,0,'verificar');
        this.aGrid.placeAtIndex(139,this.verificar);
        Align.scaleToGameW(this.verificar, 0.1);

        this.corrigir = this.add.sprite(0,0,'corrigir');
        this.aGrid.placeAtIndex(140.5,this.corrigir);
        Align.scaleToGameW(this.corrigir, 0.1);

        
        this.refresh.setInteractive({useHandCursor: true});
        this.refresh.on('pointerdown', function()
        {
            //mdc.setActive(false).setVisible(false);
            this.barrainfo1 = this.add.sprite(0,0,'barrainfo1');
            this.aGrid.placeAtIndex(41.5,this.barrainfo1);
            Align.scaleToGameW(this.barrainfo1, 0.60);

            
            var primeiroNumero1 = Phaser.Math.Between(0,10000);
            var segundoNumero1 = Phaser.Math.Between(0,10000);
            
            var mdc1 = this.add.text(0, 0, 'Calcula o m.d.c entre: ' + primeiroNumero1 + '  e  ' + segundoNumero1, { fontFamily: 'myfont4', fontSize: 70, color: '#403217' }).setVisible(true);
            mdc1.setOrigin(0.3, 1.7);
            this.aGrid.placeAtIndex(52, mdc1);
            //mdc1.setActive(false).setVisible(false);
        

        
        },this);
        

        this.infog2.setInteractive({useHandCursor: true});
        this.infog2.on('pointerdown', function () {
            
        }, this);

        this.paint.setInteractive({useHandCursor: true});
        this.paint.on('pointerdown', function () {
            
        }, this);

        this.limpar.setInteractive({useHandCursor: true});
        this.limpar.on('pointerdown', function () {
            
        }, this);

        this.mais.setInteractive({useHandCursor: true});
        this.mais.on('pointerdown', function () {
            
        }, this);

        this.menos.setInteractive({useHandCursor: true});
        this.menos.on('pointerdown', function () {
            
        }, this);

        this.barrainfo2.setInteractive({useHandCursor: true});
        this.barrainfo2.on('pointerdown', function () {
            
        }, this);

        this.verificar.setInteractive({useHandCursor: true});
        this.verificar.on('pointerdown', function () {
            
        }, this);

       // gerar 2 numeros 
        var primeiroNumero = Phaser.Math.Between(0,10000);
        var segundoNumero = Phaser.Math.Between(0,10000);
        
        
        var mdc = this.add.text(0, 0, 'Calcula o m.d.c entre: ' + primeiroNumero + '  e  ' + segundoNumero, { fontFamily: 'myfont4', fontSize: 70, color: '#403217' }).setVisible(true);
        mdc.setOrigin(0.3, 1.7);
        this.aGrid.placeAtIndex(52, mdc);

        this.corrigir.setInteractive({useHandCursor: true});
        this.corrigir.on('pointerdown', function () {
            
        }, this);
    }

  
  
    update (){

        
    }
    
   
}