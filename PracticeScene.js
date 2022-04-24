let x, cont = 1;
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
        this.load.image('backl','assets/backl.png',37,40,18);

        var url;
    
        url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexgridtableplugin.min.js';
        this.load.plugin('rexgridtableplugin', url, true);
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
        this.aGrid.placeAtIndex(58,this.mais);
        Align.scaleToGameW(this.mais, 0.03);

        this.menos = this.add.sprite(0,0,'menos');
        this.aGrid.placeAtIndex(85,this.menos);
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

        this.backl = this.add.sprite(0,0,'backl');
        this.aGrid.placeAtIndex(12.5,this.backl);
        Align.scaleToGameW(this.backl, 0.07);

        
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
            
            this.aGrid.placeAtIndex(38, mdc1);
            mdc1.setOrigin(-0.05, 0.5);
            //mdc1.setActive(false).setVisible(false);
        

        
        },this);
        

        this.infog2.setInteractive({useHandCursor: true});
        this.infog2.on('pointerdown', function () {
            
        }, this);

        this.backl.setInteractive({useHandCursor: true});
        this.backl.on('pointerdown', function () {

            this.scene.start('FirstScene');
            cont=1; 
        }, this);

 

        this.paint.setInteractive({useHandCursor: true});
        this.paint.on('pointerdown', function () {
            
        }, this);

        this.limpar.setInteractive({useHandCursor: true});
        this.limpar.on('pointerdown', function () {
            
        }, this);

        this.mais.setInteractive({useHandCursor: true});
        this.mais.on('pointerdown', function () {
            cont+=1;
           
            this.addCol();
            
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
        this.aGrid.placeAtIndex(38, mdc);
        mdc.setOrigin(-0.05, 0.5);

        this.corrigir.setInteractive({useHandCursor: true});
        this.corrigir.on('pointerdown', function () {
            
        }, this);

        //Table
        var newCellObject = function (scene, cell) {
            //cell.height = (cellIdx % 2) ? 40 : 80;  // se height of visible cell
            //Colours
            var cellBg = 0xFFFFFF;
            var bg = scene.add.graphics()
                .fillStyle(cellBg)
                .fillRect(2, 2, cell.width - 5 , cell.height - 5 );
    
             
             
             
            //var txt = scene.add.text(5, 5, cell.index);
            if (cell.index == 0) var txt = "Dividendo"; 
            if (cell.index == 2) var txt = "Divisor"; 
            if (cell.index == 4) var txt = "Resto"; 
            if (cell.index == 6) var txt = "Quociente"; 
            var txt = scene.add.text(5,5, txt,  { 
                fontFamily: 'myfont4', 
                fontSize: 40, 
                color: "#403217"
            });
            var container = scene.add.container(0,0, [bg, txt]);
            return container;
        }

        var onCellVisible = function (cell) {
            cell.setContainer(newCellObject(this, cell));
             //console.log('Cell ' + cellIdx + ' visible');
            };
            //table.setOrigin(0.5);
            var table = this.add.rexGridTable(950, 700, 250, 400, {
                cellWidth: 200,
                cellHeight: 60,
                cellsCount: 8,
                columns: 2,
                cellVisibleCallback: onCellVisible.bind(this),
               
                
            });
            x = table.x;
            

         
            table.updateTable(true);  // refresh visible cells
            // linha de fora
          /* this.add.graphics()
             .lineStyle(3, 0xff0000)
             .strokeRectShape(table.getBounds());
       */
           // drag table content
            table.setInteractive();
            table.on('pointermove', function (pointer) {
                if (!pointer.isDown) {
                    return;
                }
            var dx = pointer.x - pointer.prevPosition.x;
            var dy = pointer.y - pointer.prevPosition.y;
            table.addTableOXY(dx, dy).updateTable();
            });
           // text 

           var textEntry = this.add.text(10, 50, '', { font: '32px Courier', fill: '#ffff00' });
           

           this.input.keyboard.on('keydown', function (event) {
       
                if (event.keyCode === 8 && textEntry.text.length > 0)
                {
                    textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
                }
                else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90))
                {
                    textEntry.text += event.key;
                }
       
            });
    }

  
  
    update (){

        
    }
    addCol(){
        
        var y = 200*cont + x ;

        var newCellObject = function (scene, cell) {
            var cellIdx = cell.index;
            //cell.height = (cellIdx % 2) ? 40 : 80;  // se height of visible cell
            //Colours
            var cellBg = 0xFFFFFF;
            var bg = scene.add.graphics()
                .fillStyle(cellBg)
                .fillRect(2, 2, cell.width - 5, cell.height - 5);
             
            
         
            
           
            
            var container = scene.add.container(0, 0, [bg]);
            return container;
        }
       
        var onCellVisible = function (cell) {
            cell.setContainer(newCellObject(this, cell));
             //console.log('Cell ' + cellIdx + ' visible');
            };
            var table = this.add.rexGridTable(y, 700, 250, 400, {
                cellWidth: 200,
                cellHeight: 60,
                cellsCount: 4,
                columns: 1,
                cellVisibleCallback: onCellVisible.bind(this),

            });
       

         
            table.updateTable(true);  // refresh visible cells
            // linha de fora
          /* this.add.graphics()
             .lineStyle(3, 0xff0000)
             .strokeRectShape(table.getBounds());
       */
           // drag table content
            table.setInteractive();
            table.on('pointermove', function (pointer) {
                if (!pointer.isDown) {
                    return;
                }
            var dx = pointer.x - pointer.prevPosition.x;
            var dy = pointer.y - pointer.prevPosition.y;
            table.addTableOXY(dx, dy).updateTable();
            });
        }   
      
 
    
   
}
   
