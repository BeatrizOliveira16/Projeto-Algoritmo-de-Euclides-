let x, col,primeiroNumero, segundoNumero,r,mdc, y, cont = 1;

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
        this.load.image('barrainfo1','assets/barrainfo1.png'); 
        this.load.image('barrainfo2','assets/barrainfo2.png',37,40,18); 
        this.load.image('backl','assets/backl.png',37,40,18);
        this.load.html('tableform', 'assets/tableform.html');
        this.load.html('tcolform', 'assets/tcolform.html');
        this.load.html('resultadofinal', 'assets/resultadofinal.html');
    }
     
    create() 
    {    
        var grelhaConfig = {scene:this, rows:12,cols:12};
        this.aGrid = new AlignGrid(grelhaConfig);
        //this.aGrid.showNumbers();

        this.background = this.add.image(game.config.width / 2, game.config.height / 2, 'background');
        this.aGrid.placeAtIndex(77.5, this.background);
        this.background.setScale(1.44);
        this.background.setOrigin(0.5, 0.544);
        

        this.titulo = this.add.image(0,0,'titulo');
        this.aGrid.placeAtIndex(17.7, this.titulo);
        Align.scaleToGameW(this.titulo,0.77);
        
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
        this.aGrid.placeAtIndex(67,this.mais);
        Align.scaleToGameW(this.mais, 0.04);
        this.mais.setOrigin(0.1, 0.5);

        this.menos = this.add.sprite(0,0,'menos');
        this.aGrid.placeAtIndex(79,this.menos);
        Align.scaleToGameW(this.menos, 0.04);
        this.menos.setOrigin(0.1, 0.5);

        this.barrainfo2 = this.add.sprite(0,0,'barrainfo2');
        this.aGrid.placeAtIndex(125.5,this.barrainfo2);
        Align.scaleToGameW(this.barrainfo2, 0.65);

        this.verificar = this.add.sprite(0,0,'verificar');
        this.aGrid.placeAtIndex(139,this.verificar);
        Align.scaleToGameW(this.verificar, 0.1);

        this.corrigir = this.add.sprite(0,0,'corrigir');
        this.aGrid.placeAtIndex(140.5,this.corrigir);
        Align.scaleToGameW(this.corrigir, 0.1);

        this.backl = this.add.sprite(0,0,'backl');
        this.aGrid.placeAtIndex(12.5,this.backl);
        Align.scaleToGameW(this.backl, 0.07);

        this.refresh.setInteractive({useHandCursor: true});
        this.refresh.on('pointerdown', function(){
            //atualizar inf da barra info1
            this.barrainfo1 = this.add.sprite(0,0,'barrainfo1');
            this.aGrid.placeAtIndex(41.5,this.barrainfo1);
            Align.scaleToGameW(this.barrainfo1, 0.60);
            this.barrainf1();
            //atualizar inf da barra info2
            r.setText('m.d.c. (' + primeiroNumero + ' , ' + segundoNumero +')  = ', { fontFamily: 'myfont4', fontSize: 70, color: '#403217' }).setVisible(true);
        },this);
        this.refresh.on('pointerover', function(){
            this.refresh.displayHeight += 5;
            this.refresh.displayWidth += 5;
        }, this);
        this.refresh.on('pointerout', function(){
            this.refresh.displayHeight -= 5;
            this.refresh.displayWidth -= 5;
        }, this);

        this.infog2.setInteractive({useHandCursor: true});
        this.infog2.on('pointerdown', function () {
            
        }, this);
        this.infog2.on('pointerover', function(){
            this.infog2.displayHeight += 5;
            this.infog2.displayWidth += 5;
            // Se o cursor estiver por cima deste botão, tem de aparecer acima da tabela "Clica aqui para obteres uma informação detalhada do procedimento."
            this.tinfo = this.add.text(0, 0, 'Clica aqui para obteres uma informação detalhada do procedimento.', { fontFamily: 'myfont4', fontSize: 25, color: '#0000000' })
            this.tinfo.setVisible(true);
            this.aGrid.placeAtIndex(51.7,this.tinfo);
        }, this);
        this.infog2.on('pointerout', function(){
            this.infog2.displayHeight -= 5;
            this.infog2.displayWidth -= 5;
            this.tinfo.setVisible(false);
        }, this);

        this.backl.setInteractive({useHandCursor: true});
        this.backl.on('pointerdown', function () {
            this.scene.start('FirstScene');
            cont=1; 
        }, this);
        this.backl.on('pointerover', function(){
            this.backl.displayHeight += 5;
            this.backl.displayWidth += 5;
        }, this);
        this.backl.on('pointerout', function(){
            this.backl.displayHeight -= 5;
            this.backl.displayWidth -= 5;
        }, this);

        this.paint.setInteractive({useHandCursor: true});
        this.paint.on('pointerdown', function () {
            //Se clicarmos um número par de vezes neste botão, temos que ter diferentes cores para as três primeiras células
            //Senão, as três primeiras células ficam a branco 
            //Isto não afeta a primeira coluna("onde diz dividendo...")
            
        }, this);
        this.paint.on('pointerover', function(){
            this.paint.displayHeight += 5;
            this.paint.displayWidth += 5;
            //Se o cursor estiver por cima deste botão, tem de aparecer acima da tabela "Adiciona/remove cores da tabela"
            this.tpaint = this.add.text(0, 0, 'Adiciona/remove cores da tabela.', { fontFamily: 'myfont4', fontSize: 25, color: '#0000000' })
            this.tpaint.setVisible(true);
            this.aGrid.placeAtIndex(52.7,this.tpaint);
        },this);
        this.paint.on('pointerout', function(){
            this.paint.displayHeight -= 5;
            this.paint.displayWidth -= 5;
            this.tpaint.setVisible(false);
        }, this);

        this.limpar.setInteractive({useHandCursor: true});
        this.limpar.on('pointerdown', function () {
            
        }, this);

        this.mais.setInteractive({useHandCursor: true});
        this.mais.on('pointerdown', function () {
            if (cont==1){
                y = 250*cont + x +20 ;
            }else {
                y = y + 165;
            }
            cont+=1;
            
            //var y = 168*cont + x ;
            col = this.add.dom( y,628).createFromCache('tcolform');
            col.addListener('click');
        }, this);
        this.mais.on('pointerover', function(){
            this.mais.displayHeight += 5;
            this.mais.displayWidth += 5;
            this.tmais = this.add.text(0, 0, 'Adicionar coluna.', { fontFamily: 'myfont4', fontSize: 25, color: '#0000000' })
            this.tmais.setVisible(true);
            this.aGrid.placeAtIndex(53,this.tmais);
        }, this);
        this.mais.on('pointerout', function(){
            this.mais.displayHeight -= 5;
            this.mais.displayWidth -= 5;
            this.tmais.setVisible(false);
        }, this);

        this.menos.setInteractive({useHandCursor: true});
        this.menos.on('pointerdown', function () {
            col.setActive(false).setVisible(false);
        }, this);
        this.menos.on('pointerover', function(){
            this.menos.displayHeight += 5;
            this.menos.displayWidth += 5;
            this.tmenos = this.add.text(0, 0, 'Apagar coluna.', { fontFamily: 'myfont4', fontSize: 25, color: '#0000000' })
            this.tmenos.setVisible(true);
            this.aGrid.placeAtIndex(53,this.tmenos);
        }, this);
        this.menos.on('pointerout', function(){
            this.menos.displayHeight -= 5;
            this.menos.displayWidth -= 5;
            this.tmenos.setVisible(false);
        }, this);

        this.verificar.setInteractive({useHandCursor: true});
        this.verificar.on('pointerdown', function () {
        }, this);


        this.barrainf1();
        this.barrainf2();
        //input table
        var element = this.add.dom(1050,630).createFromCache('tableform');
        x=element.x;
        element.addListener('click');
        
        //input resultado final
        var resultadofinal = this.add.dom(1250,1038).createFromCache('resultadofinal');
        resultadofinal.addListener('click');
    }

    update (){}
    
    //conteudo da barra1
    barrainf1(){
        primeiroNumero = Phaser.Math.Between(0,10000);
        segundoNumero = Phaser.Math.Between(0,10000);
        
        mdc = this.add.text(0, 0, 'Calcula o  m.d.c. entre: ' + primeiroNumero + '  e  ' + segundoNumero, { fontFamily: 'myfont4', fontSize: 70, color: '#0d0d0d' }).setVisible(true);
        this.aGrid.placeAtIndex(38, mdc);
        mdc.setOrigin(-0.05, 0.5);
    
    }
        
    //conteudo da barra 2
    barrainf2(){
        r = this.add.text(0, 0, 'm.d.c. (' + primeiroNumero + ' , ' + segundoNumero +')  = ', { fontFamily: 'myfont4', fontSize: 70, color: '#0d0d0d' }).setVisible(true);
        this.aGrid.placeAtIndex(122, r);
        r.setOrigin(-0.05, 0.5);
    }

}