
let primeiroNumero, segundoNumero; // valores aleatorios
let rf; // valor colocado pela pessoa 
let dividendoC, divisorC, restoC, quocienteC, resultado; // valores corretos de cada coluna
let tcolv, trfc, trfe, tlimpar,ttabelavazia, tcorrigir;// texto caso os valores estejam corretos ou errados
let mdc, r;  // texto da barra 1 e 2 
let resultadofinal, element; // assets
let dividendoUti, divisorUti, restoUti, quocienteUti; // valores inseridos pelo utilizador 1 coluna 
let dividendoUti1,divisorUti1,restoUti1,quocienteUti1, row,  table;
let _dividendo, _divisor, _resto, _quociente;
let c1, c2, nRow, nRow1;

class PracticeScene extends Phaser.Scene{

    constructor () {
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
        this.load.image('home','assets/bthome.png',37,40,18);
        this.load.image('linkd','assets/btlinkdivision.png',37,40,18);
        this.load.html('tableform', 'assets/tableform.html');
        this.load.html('resultadofinal', 'assets/resultadofinal.html');
    }
     
    create() {   
        let index=0, cont=0;  // index -> posiçao do array das cores,  cont -> ncliks no mais
        let whitecolor = false;
        let nverificar = 0; 
        let savedColors = [];
        
    

        primeiroNumero = Phaser.Math.Between(1,9999);
        segundoNumero = Phaser.Math.Between(1,9999);
       /*
        this.mais = this.add.sprite(1240,580,'mais');
        Align.scaleToGameW(this.mais, 0.04);
    
        this.menos = this.add.sprite(1240,700,'menos');
        Align.scaleToGameW(this.menos, 0.04);

         /*
        if (primeiroNumero > segundoNumero){
        
            if ((primeiroNumero % segundoNumero) == 0 ){
                console.log("bruh")
                this.mais.setActive(false).setVisible(false);
                this.menos.setActive(false).setVisible(false);
            }

        } else {
            if ((segundoNumero % primeiroNumero) == 0 ){
                this.mais.setActive(false).setVisible(false);
                this.menos.setActive(false).setVisible(false);
            }
           
        }
        */
        var grelhaConfig = {scene:this, rows:12,cols:12};
        this.aGrid = new AlignGrid(grelhaConfig);
       
  



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
        
        
        this.mais = this.add.sprite(1240,580,'mais');
        Align.scaleToGameW(this.mais, 0.04);
    
        this.menos = this.add.sprite(1240,700,'menos');
        Align.scaleToGameW(this.menos, 0.04);
        
        this.refresh = this.add.sprite(0,0,'refresh');
        this.aGrid.placeAtIndex(45.7,this.refresh);
        Align.scaleToGameW(this.refresh, 0.07);

        this.infog2 = this.add.sprite(800,560,'infog2');
        Align.scaleToGameW(this.infog2, 0.04);

        this.linkd = this.add.sprite(1900,345,'linkd');
        Align.scaleToGameW(this.linkd, 0.07);

        this.paint = this.add.sprite(800,660,'paint');
        Align.scaleToGameW(this.paint, 0.04);

        this.limpar = this.add.sprite(800,740,'limpar');
        Align.scaleToGameW(this.limpar, 0.05);

       
        this.barrainfo2 = this.add.sprite(0,0,'barrainfo2');
        this.aGrid.placeAtIndex(125.5,this.barrainfo2);
        Align.scaleToGameW(this.barrainfo2, 0.65);

        this.verificar = this.add.sprite(0,0,'verificar');
        this.aGrid.placeAtIndex(139,this.verificar);
        Align.scaleToGameW(this.verificar, 0.1);

        this.corrigir = this.add.sprite(0,0,'corrigir');
        this.corrigir.setActive('false').setVisible('false');
        this.aGrid.placeAtIndex(140.5,this.corrigir);
        Align.scaleToGameW(this.corrigir, 0.1);

        this.home = this.add.sprite(200,1043,'home');
        Align.scaleToGameW(this.home, 0.07);
        
        //this.calculaMDC();

        this.home.setInteractive({useHandCursor: true});
        this.home.on('pointerdown', function () {
            this.scene.start('FirstScene');
            cont=1;
        }, this);

        this.home.on('pointerover', function(){
            this.home.displayHeight += 5;
            this.home.displayWidth += 5;
        }, this);

        this.home.on('pointerout', function(){
            this.home.displayHeight -= 5;
            this.home.displayWidth -= 5;
        }, this);

        this.corrigir.setInteractive({useHandCursor: true});
        this.corrigir.on('pointerdown', function () {  
           
            if ( nverificar > 3){
                savedColors = [['#2ECCFA','#FE2E2E','#80FF00', '#DCDCDC']]
                tcolv.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
                tlimpar.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
                trfe.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
                ttabelavazia.setText( '', { fontFamily: 'myfont4', fontSize: 50, color: '#0000000' });
                
                this.calculaMDC();
                
                this.corrigir.setVisible(false);
                this.verificar.setVisible(false);
                trfc.setText( '', { fontFamily: 'myfont4', fontSize: 50, color: '#0000000' });
            
                rf = resultadofinal.getChildByName("rf").value;
                document.getElementById("rf-input").value = resultado;
                document.getElementById("rf-input").disabled = true;
                document.getElementById('rf-input').style.color= 'black';

                tcorrigir.setText( 'Devias ter tentado resolver por ti próprio!', { fontFamily: 'myfont4', fontSize: 50, color: '#0000000' });

                this.calculaMDC1coluna();
                
                table = document.getElementById('row-principal')
                while (table.children.length>2 ){
                    table.removeChild(table.lastElementChild);

                    var elements = document.getElementById('row-principal');
                    var  marginLeft = 0;
                    marginLeft += parseInt(window.getComputedStyle(elements).marginLeft, 10) + 57;
                    elements.style.marginLeft = marginLeft + 'px';

                    this.paint.setPosition(800,660);
                    
                }
                document.getElementById("row-principal").disabled = true;
               
                var tableCorrigida = document.getElementById('row-principal');
                if(restoC==0 ){
                    if (tableCorrigida.children.length ==2){
                        document.getElementById("dividendo").value = dividendoC;
                        document.getElementById("dividendo").disabled = true;
                        document.getElementById("divisor").value = divisorC;
                        document.getElementById("divisor").disabled = true;
                        document.getElementById("resto").value = restoC;
                        document.getElementById("resto").disabled = true;
                        document.getElementById("quociente").value = quocienteC;
                        document.getElementById("quociente").disabled = true;

                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="dividendo"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="dividendo"]').style.border = '1.5px solid black'
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisor"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisor"]').style.border= '1.5px solid black'
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="resto"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="resto"]').style.border= '1.5px solid black'
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="quociente"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="quociente"]').style.border= '1.5px solid black'
                    
                    }
                }
                index = 0;
                while(restoC > 0){
                    if (tableCorrigida.children.length ==2){
                        document.getElementById("dividendo").value = dividendoC;
                        document.getElementById("dividendo").disabled = true;
                        document.getElementById("divisor").value = divisorC;
                        document.getElementById("divisor").disabled = true;
                        document.getElementById("resto").value = restoC;
                        document.getElementById("resto").disabled = true;
                        document.getElementById("quociente").value = quocienteC;
                        document.getElementById("quociente").disabled = true;

                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="dividendo"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="dividendo"]').style.border = '1.5px solid black'
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisor"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisor"]').style.border= '1.5px solid black'
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="resto"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="resto"]').style.border= '1.5px solid black'
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="quociente"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="quociente"]').style.border= '1.5px solid black'

                        _dividendo =  `<input id="dividendoc" type="number"   name="dividendoc" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':'#FE2E2E'};">`;
                        _divisor = `<input id="divisorc" type="number"  name="divisorc" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':'#80FF00'};">`;
                        _resto = `<input id="restoc" type="number"  name="restoc" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':'#99CC13'};">`;
                        _quociente = `<input id="quocientec" type="number"  name="quocientec" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#DCDCDC':'#DCDCDC'};">`;


                        var nRowC = `
                            <div style="display: flex; flex-direction: column; border-width:1mm; border-color:#000000"">
                                ${_dividendo}    
                                ${_divisor}
                                ${_resto}
                                ${_quociente}
                            </div>
                        `;
                        
                        savedColors.push(['#FE2E2E', '#80FF00','#99CC13', '#DCDCDC'])            

                        //add a 3 coluna
                        document.getElementById("row-principal").insertAdjacentHTML('beforeend', nRowC); 

                    } else if (tableCorrigida.children.length > 2){
                        var elements = document.getElementById('row-principal');
                        var  marginLeft = 0;
                        marginLeft += parseInt(window.getComputedStyle(elements).marginLeft, 10) - 57;
                        elements.style.marginLeft = marginLeft + 'px';

                        this.calculaMDCcol()
                    
                        tableCorrigida.lastElementChild.querySelector('input[name="dividendoc"]').value = dividendoC;
                        tableCorrigida.lastElementChild.querySelector('input[name="divisorc"]').value = divisorC;
                        tableCorrigida.lastElementChild.querySelector('input[name="restoc"]').value = restoC;
                        tableCorrigida.lastElementChild.querySelector('input[name="quocientec"]').value = quocienteC;
                        tableCorrigida.lastElementChild.querySelector('input[name="dividendoc"]').disabled = true;
                        tableCorrigida.lastElementChild.querySelector('input[name="divisorc"]').disabled = true;
                        tableCorrigida.lastElementChild.querySelector('input[name="restoc"]').disabled = true;
                        tableCorrigida.lastElementChild.querySelector('input[name="quocientec"]').disabled = true;

                        
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="dividendoc"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="dividendoc"]').style.border = '1.5px solid black'
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisorc"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisorc"]').style.border= '1.5px solid black'
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="restoc"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="restoc"]').style.border= '1.5px solid black'
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="quocientec"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="quocientec"]').style.border= '1.5px solid black'

                        c1= tableCorrigida.lastElementChild.querySelector('input[name="divisorc"]').style.backgroundColor;
                        c2 = tableCorrigida.lastElementChild.querySelector('input[name="restoc"]').style.backgroundColor;
                        
                        const colors = ['#6666CC', '#CE68F9', '#D1672C', '#7FF23A', '#DE4066', '#479A9A', '#7FF217', '#EA6297', '#999919', '#FDF731'];

                        _dividendo =  `<input id="dividendoc" type="number"   name="dividendoc" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':c1};">`;
                        _divisor = `<input id="divisorc" type="number"  name="divisorc" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':c2};">`;
                        _resto = `<input id="restoc" type="number"  name="restoc" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':colors[index]};">`;
                        _quociente = `<input id="quocientec" type="number"  name="quocientec" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#DCDCDC':'#DCDCDC'};">`;

                        var nRowCcol = `
                            <div style="display: flex; flex-direction: column; border-width:1mm; border-color:#000000"">
                                ${_dividendo}    
                                ${_divisor}
                                ${_resto}
                                ${_quociente}
                            </div>
                        `;
                        
                        console.log(savedColors)

                        savedColors.push([savedColors[index+1][1], savedColors[index+1][2],colors[index], '#DCDCDC'])
                        

                        index++;
                        if (restoC>0) document.getElementById("row-principal").insertAdjacentHTML('beforeend', nRowCcol); 

                        this.paint.x -= 57
                    }  
                }
                console.log(restoC) 
                this.corrigir.setActive(false).setVisible(false);
                this.verificar.setActive(false).setVisible(false);
                this.mais.setActive(false).setVisible(false);
                this.menos.setActive(false).setVisible(false);
                this.limpar.setActive(false).setVisible(false);
                this.infog2.setActive(false).setVisible(false);
            
            }    
        }, this);

        this.corrigir.on('pointerover', function(){
            this.corrigir.setTint(0x0000ff);
        }, this);

        this.corrigir.on('pointerout', function(){
            this.corrigir.setTint();
        }, this);

        this.infog2.setInteractive({useHandCursor: true});
        this.infog2.on('pointerdown', function () {
            document.getElementById('row-principal').style.visibility = "hidden";
            document.getElementById('rf').style.visibility = "hidden";
            game.scene.pause('PracticeScene');
            game.scene.start('Info2Scene');
            tlimpar.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
        }, this);

        this.infog2.on('pointerover', function(){
            this.infog2.displayHeight += 5;
            this.infog2.displayWidth += 5;
            // Se o cursor estiver por cima deste botão, tem de aparecer acima da tabela "Clica aqui para obteres uma informação detalhada do procedimento."
            this.tinfo = this.add.text(0, 0, 'Clica aqui para obteres uma informação detalhada do procedimento.', { fontFamily: 'myfont4', fontSize: 25, color: '#0000000' });
            this.tinfo.setOrigin(0.04, 0.1)

            this.tinfo.setVisible(true);
            this.aGrid.placeAtIndex(51.7,this.tinfo);
        }, this);

        this.infog2.on('pointerout', function(){
            this.infog2.displayHeight -= 5;
            this.infog2.displayWidth -= 5;
            this.tinfo.setVisible(false);
        }, this);

        this.limpar.setInteractive({useHandCursor: true});
        this.limpar.on('pointerdown', function () {
            trfe.setText( '', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });

            tcolv.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
            ttabelavazia.setText( '', { fontFamily: 'myfont4', fontSize: 50, color: '#0000000' });


            table = document.getElementById('row-principal')
            if (table.lastElementChild.querySelector('input[name="dividendo"]').value !='' ||
            table.lastElementChild.querySelector('input[name="divisor"]').value != '' ||
            table.lastElementChild.querySelector('input[name="resto"]').value != '' ||
            table.lastElementChild.querySelector('input[name="quociente"]').value != ''){  
                tlimpar.setText(' ', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
        
                table.lastElementChild.querySelector('input[name="dividendo"]').value = '';
                table.lastElementChild.querySelector('input[name="divisor"]').value = '';
                table.lastElementChild.querySelector('input[name="resto"]').value = '';
                table.lastElementChild.querySelector('input[name="quociente"]').value = '';
            } else{
                tlimpar.setText(' A coluna já se encontra vazia. ', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });

            } 
        }, this);

        this.limpar.on('pointerover', function () {
            this.limpar.setTint(0x0000ff);           
        }, this);

        this.limpar.on('pointerout', function () {
            this.limpar.setTint();
        }, this);


        this.linkd.setInteractive({useHandCursor: true});
        this.linkd.on('pointerdown', function () {
            this.openExternalLink();
        }, this);

        this.linkd.on('pointerover', function(){
            this.linkd.displayHeight += 5;
            this.linkd.displayWidth += 5;
        }, this);

        this.linkd.on('pointerout', function(){
            this.linkd.displayHeight -= 5;
            this.linkd.displayWidth -= 5;
        }, this);

        this.mais.setInteractive({useHandCursor: true});
        this.mais.on('pointerdown', function () {
            tlimpar.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
            ttabelavazia.setText( '', { fontFamily: 'myfont4', fontSize: 50, color: '#0000000' });


            // valores inseridos pelo utilizador da 2º coluna pra a frente 
            dividendoUti1 = document.getElementById('row-principal').lastElementChild.querySelector('input[name="dividendo"]').value;
            divisorUti1 = document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisor"]').value;
            restoUti1 = document.getElementById('row-principal').lastElementChild.querySelector('input[name="resto"]').value;
            quocienteUti1 = document.getElementById('row-principal').lastElementChild.querySelector('input[name="quociente"]').value;
            
           
            // valores inseridos pelo utilizador da 1 coluna 
            dividendoUti = element.getChildByName("dividendo").value;
            divisorUti = element.getChildByName("divisor").value;
            quocienteUti = element.getChildByName("quociente").value;
            restoUti = element.getChildByName("resto").value;
            
            trfe.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
            console.log(cont);

            if (savedColors.length == 0 ){
                savedColors.push(['#2ECCFA','#FE2E2E','#80FF00', '#DCDCDC' ])
            }
        
            if (cont==0){
                this.calculaMDC1coluna();
                //console.log(cont);
                if(restoUti > 0){
                    //console.log(restoUti)
                    if ( dividendoUti == dividendoC &&  divisorUti == divisorC && restoUti ==restoC && quocienteUti==quocienteC && 
                    dividendoUti != '' &&  divisorUti != '' && restoUti !='' && quocienteUti !='' ){
                       
                        
                        tcolv.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
                        console.log("certo");
                      
                    
                        //console.log(colorwhite);
                        _dividendo =  `<input id="dividendoc" type="number"   name="dividendo" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':'#FE2E2E'};">`;
                        _divisor = `<input id="divisorc" type="number"  name="divisor" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':'#80FF00'};">`;
                        _resto = `<input id="restoc" type="number"  name="resto" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':'#99CC13'};">`;
                        _quociente = `<input id="quocientec" type="number"  name="quociente" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#DCDCDC':'#DCDCDC'};">`;
                              
                        nRow = `
                            <div style="display: flex; flex-direction: column; border-width:1mm; border-color:#000000"">
                                ${_dividendo}    
                                ${_divisor}
                                ${_resto}
                                ${_quociente}
                            </div>
                        `; 
                            
                            savedColors.push(['#FE2E2E', '#80FF00','#99CC13', '#DCDCDC'])
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="dividendo"]').disabled = true ;
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisor"]').disabled = true ;
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="resto"]').disabled = true ;
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="quociente"]').disabled = true ;

                            
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="dividendo"]').style.color= 'black';
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="dividendo"]').style.border = '1.5px solid black'
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisor"]').style.color= 'black';
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisor"]').style.border= '1.5px solid black'
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="resto"]').style.color= 'black';
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="resto"]').style.border= '1.5px solid black'
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="quociente"]').style.color= 'black';
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="quociente"]').style.border= '1.5px solid black'

                            
                            cont++;
                            console.log(cont)
                            //table = document.getElementById('row-principal')
                            this.tweens.add({targets: this.paint,x: '-=59',duration: 0.01 ,ease: 'Power3'});
                            this.tweens.add({targets: this.limpar,x: '-=59',duration: 0.01 ,ease: 'Power3'});
                            this.tweens.add({targets: this.infog2,x: '-=59',duration: 0.01 ,ease: 'Power3'});
                            this.tweens.add({targets: this.mais,x: '+=59',duration: 0.01 ,ease: 'Power3'});
                            this.tweens.add({targets: this.menos,x: '+=59',duration: 0.01 ,ease: 'Power3'});

                            document.getElementById('row-principal').insertAdjacentHTML('beforeend', nRow);
                          
                            console.log(divisorC)
                            if ((divisorC% restoC )==0){
                                this.mais.setActive(false).setVisible(false);
                                this.menos.setActive(false).setVisible(false);
                                console.log(dividendoC)
                            } 

                            var elements = document.getElementById('row-principal');
                            var  marginLeft = 0;

                            marginLeft += parseInt(window.getComputedStyle(elements).marginLeft, 10) - 57;
                            elements.style.marginLeft = marginLeft + 'px';

                            this.calculaMDCcol();
                    } else {
                        tcolv.setText('Os valores inseridos estão incorretos.', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
                        console.log("errado");
                        console.log(dividendoC);
                        console.log(divisorC);
                        console.log(restoC);
                        console.log(quocienteC); 
                    }   
                } else if(restoUti == ""){
                    tcolv.setText('Os valores inseridos estão incorretos.', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
                    console.log("errado");
                    console.log(dividendoC);
                    console.log(divisorC);
                    console.log(restoC);
                    console.log(quocienteC);
                }
            } else if (cont>0){
                    //console.log(cont);
                    //console.log(whitecolor);
                    if (whitecolor){
                        nRow = nRow.replace('#2ECCFA', '#FFF');
                        nRow = nRow.replace('#FE2E2E', '#FFF');
                        nRow = nRow.replace('#80FF00', '#FFF');
                        
                    }else{  
                        nRow = nRow.replace('#FFF','#2ECCFA');
                        nRow = nRow.replace('#FFF','#FE2E2E');
                        nRow = nRow.replace( '#FFF','#80FF00');
                    }
                    console.log(cont);
                    if(restoUti1 > 0){
                        if ( dividendoUti1 == dividendoC &&  divisorUti1 == divisorC && restoUti1 ==restoC && quocienteUti1==quocienteC && 
                            divisorUti1 != '' &&  dividendoUti1 != '' && restoUti != '' && quocienteUti1 != ''){
                            
                            c1= document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisor"]').style.backgroundColor;
                            c2 = document.getElementById('row-principal').lastElementChild.querySelector('input[name="resto"]').style.backgroundColor;
                         
                            const colors = ['#6666CC', '#CE68F9', '#D1672C', '#7FF23A', '#DE4066', '#479A9A', '#7FF217', '#EA6297', '#999919', '#FDF731'];
                            
                            _dividendo =  `<input id="dividendoc" type="number"   name="dividendo" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':c1};">`;
                            _divisor = `<input id="divisorc" type="number"  name="divisor" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':c2};">`;
                            _resto = `<input id="restoc" type="number"  name="resto" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':colors[index]};">`;
                            _quociente = `<input id="quocientec" type="number"  name="quociente" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#DCDCDC':'#DCDCDC'};">`;
                            
                         
                            
                            nRow1 = `
                                <div style="display: flex; flex-direction: column; border-width:1mm; border-color:#000000"">
                                    ${_dividendo}    
                                    ${_divisor}
                                    ${_resto}
                                    ${_quociente}
                                </div>
                            `; 
                            console.log(savedColors)
                            console.log("index " +index)
                         
                            savedColors.push([savedColors[index+1][1], savedColors[index+1][2],colors[index], '#DCDCDC'])
                           
                            index++;
                            this.tweens.add({targets: this.paint,x: '-=59',duration: 0.01 ,ease: 'Power3'});
                            this.tweens.add({targets: this.limpar,x: '-=59',duration: 0.01 ,ease: 'Power3'});
                            this.tweens.add({targets: this.infog2,x: '-=59',duration: 0.01 ,ease: 'Power3'});
                            this.tweens.add({targets: this.mais,x: '+=59',duration: 0.01 ,ease: 'Power3'});
                            this.tweens.add({targets: this.menos,x: '+=59',duration: 0.01 ,ease: 'Power3'});
                            tcolv.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });

                            
                            console.log("certo");
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="dividendo"]').disabled = true;
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisor"]').disabled = true;
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="resto"]').disabled = true;
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="quociente"]').disabled = true;
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="dividendo"]').style.color= 'black';
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="dividendo"]').style.border = '1.5px solid black'
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisor"]').style.color= 'black';
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisor"]').style.border= '1.5px solid black'
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="resto"]').style.color= 'black';
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="resto"]').style.border= '1.5px solid black'
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="quociente"]').style.color= 'black';
                            document.getElementById('row-principal').lastElementChild.querySelector('input[name="quociente"]').style.border= '1.5px solid black'

                            c1 = document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisor"]').style.backgroundColor;
                            console.log(c1)
                            c2 = document.getElementById('row-principal').lastElementChild.querySelector('input[name="resto"]').style.backgroundColor;

                            
                            if ((divisorC% restoC )==0){
                                this.mais.setActive(false).setVisible(false);
                                this.menos.setActive(false).setVisible(false);
                                console.log(dividendoC)
                            } 
                            document.getElementById('row-principal').insertAdjacentHTML('beforeend', nRow1); 
                          
                            var elements = document.getElementById('row-principal');
                            var marginLeft = 0; 
                                
                            marginLeft += parseInt(window.getComputedStyle(elements).marginLeft, 10) - 57;
                            elements.style.marginLeft = marginLeft + 'px';


                            this.calculaMDCcol();
                        } else {
                            tcolv.setText('Os valores inseridos estão incorretos.', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
                            console.log("errado");
                            console.log(dividendoC);
                            console.log(divisorC);
                            console.log(restoC);
                            console.log(quocienteC); 
                        }
                    }
                   
                 
                    else if(restoUti1 == ""){
                        tcolv.setText('Os valores inseridos estão incorretos.', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
                        console.log("errado");
                        console.log(dividendoC);
                        console.log(divisorC);
                        console.log(restoC);
                        console.log(quocienteC); 
                    }                    
            }
           
        }, this);

      


        this.mais.on('pointerover', function(){
            this.mais.displayHeight += 5;
            this.mais.displayWidth += 5;
            this.tmais = this.add.text(0, 0, 'Adicionar coluna.', { fontFamily: 'myfont4', fontSize: 25, color: '#0000000' });
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
            if (savedColors.length) {
                savedColors.pop()
            }

            trfe.setText( '', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });

            tlimpar.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
            tcolv.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
            ttabelavazia.setText( '', { fontFamily: 'myfont4', fontSize: 50, color: '#0000000' });

           
            table = document.getElementById('row-principal');
            if (table.children.length > 2){  
                table.removeChild(table.lastElementChild);
                document.getElementById('row-principal').lastElementChild.querySelector('input[name="dividendo"]').disabled = false;
                document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisor"]').disabled = false;
                document.getElementById('row-principal').lastElementChild.querySelector('input[name="resto"]').disabled = false;
                document.getElementById('row-principal').lastElementChild.querySelector('input[name="quociente"]').disabled = false;
                this.tweens.add({targets: this.paint,x: '+=59',duration: 0.01 ,ease: 'Power3'});
                this.tweens.add({targets: this.limpar,x: '+=59',duration: 0.01 ,ease: 'Power3'});
                this.tweens.add({targets: this.infog2,x: '+=59',duration: 0.01 ,ease: 'Power3'});
                this.tweens.add({targets: this.tinfo, x: '+=103',duration: 0.01 ,ease: 'Power3'});
                this.tweens.add({targets: this.tpaint,x: '+=103',duration: 0.01 ,ease: 'Power3'});
                this.tweens.add({targets: this.mais,x: '-=59',duration: 0.01 ,ease: 'Power3'});
                this.tweens.add({targets: this.menos,x: '-=59',duration: 0.01 ,ease: 'Power3'});

                var elements = document.getElementById('row-principal');
                var  marginLeft = 0;

                marginLeft += parseInt(window.getComputedStyle(elements).marginLeft, 10) + 57;
                elements.style.marginLeft = marginLeft + 'px';
                c1 = document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisor"]').style.backgroundColor;
                c2 = document.getElementById('row-principal').lastElementChild.querySelector('input[name="resto"]').style.backgroundColor;
                if (index>0){
                    index--;
                }
                console.log(table.children.length)
                if (table.children.length ==2){
                    cont=0;
                }
               
                
            }else if (table.children.length == 2){

                tlimpar.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
                ttabelavazia.setText('A tabela já se encontra no seu estado inicial.', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });

                
                if (table.lastElementChild.querySelector('input[name="dividendo"]').value !='' ||
                table.lastElementChild.querySelector('input[name="divisor"]').value != '' ||
                table.lastElementChild.querySelector('input[name="resto"]').value != '' ||
                table.lastElementChild.querySelector('input[name="quociente"]').value != ''){
                    table.lastElementChild.querySelector('input[name="dividendo"]').value = '';
                    table.lastElementChild.querySelector('input[name="divisor"]').value = '';
                    table.lastElementChild.querySelector('input[name="resto"]').value = '';
                    table.lastElementChild.querySelector('input[name="quociente"]').value = '';
                    
                    tlimpar.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
                
                }
                console.log(cont);
                table.lastElementChild.querySelector('input[name="dividendo"]').disabled = false;
                table.lastElementChild.querySelector('input[name="divisor"]').disabled = false;
                table.lastElementChild.querySelector('input[name="resto"]').disabled = false;
                table.lastElementChild.querySelector('input[name="quociente"]').disabled = false;
                
            }

            if(table.children.length == 2) {
                this.calculaMDC1coluna();
                console.log(dividendoC);
                console.log(divisorC);
                console.log(restoC);
                console.log(quocienteC); 
            }else {
                this.calculaMDC1coluna();
                
                for ( var j = 1; j<(table.children.length) - 1 ;j++){
                    this.calculaMDCcol();
                }
                console.log(dividendoC);
                console.log(divisorC);
                console.log(restoC);
                console.log(quocienteC); 
            }

        }, this);

        this.menos.on('pointerover', function(){
            this.menos.displayHeight += 5;
            this.menos.displayWidth += 5;
            this.tmenos = this.add.text(0, 0, 'Apagar coluna.', { fontFamily: 'myfont4', fontSize: 25, color: '#0000000' });
            this.tmenos.setVisible(true);
            this.aGrid.placeAtIndex(53,this.tmenos);
        }, this);

        this.menos.on('pointerout', function(){
            this.menos.displayHeight -= 5;
            this.menos.displayWidth -= 5;
            this.tmenos.setVisible(false);
        }, this);

        

        this.paint.setInteractive({useHandCursor: true});
        this.paint.on('pointerdown', function () {
           
            tlimpar.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
            ttabelavazia.setText( '', { fontFamily: 'myfont4', fontSize: 50, color: '#0000000' });


            var rp = document.getElementById('row-principal')
            var rpNumberOfChildren = rp.children.length;


            if(whitecolor==false){
                if (rpNumberOfChildren > 1) {
                    savedColors = [];
                    for (let i = 1; i < rpNumberOfChildren; i++) {  // nr de colunas
                        var columnNumberOfChildren = rp.children[i].children.length;
                        // guardar as cores
                        let columnColors = [];
                        for (let z = 0; z < (columnNumberOfChildren - 1); z++) { // nr de linhas
                            columnColors.push(rp.children[i].children[z].style.backgroundColor)
                        }
                        savedColors.push(columnColors)
                    }
                    
                    for (let i = 1; i < rpNumberOfChildren; i++) {  // nr de colunas
                        var columnNumberOfChildren = rp.children[i].children.length;
                        for (let z = 0; z < (columnNumberOfChildren - 1); z++) { // nr de linhas
                            rp.children[i].children[z].style.backgroundColor = 'white'
                        }
                    }
                }

                whitecolor = true;
                console.log( "whitecolor = true")
                console.log(savedColors)
            }else{
                console.log( "whitecolor = false")
                console.log(savedColors)
                if (rpNumberOfChildren == 2) {
                    var columnNumberOfChildren = rp.children[1].children.length;
                    var initialColors = ['#2ECCFA','#FE2E2E','#80FF00', '#DCDCDC']

                    for (let z = 0; z < columnNumberOfChildren; z++) {
                        rp.children[1].children[z].style.backgroundColor = initialColors[z]
                        
                    }
                }
                else if (rpNumberOfChildren > 2) {
                    for (let i = 1; i < rpNumberOfChildren; i++) {

                        var columnNumberOfChildren = rp.children[i].children.length;
                        
                        for (let z = 0; z < columnNumberOfChildren; z++) {
                            rp.children[i].children[z].style.backgroundColor = savedColors[i - 1][z];
                        }
                    }
                }

                whitecolor = false;
            }
        
        }, this);
        
       

        this.paint.on('pointerover', function(){
            this.paint.displayHeight += 5;
            this.paint.displayWidth += 5;
            //Se o cursor estiver por cima deste botão, tem de aparecer acima da tabela "Adiciona/remove cores da tabela"
            this.tpaint = this.add.text(0,0,'Adiciona/remove cores da tabela.', { fontFamily: 'myfont4', fontSize: 25, color: '#0000000' });
            this.tpaint.setOrigin(0.08, 0.1)

            this.tpaint.setVisible(true);
            this.aGrid.placeAtIndex(52.7,this.tpaint); 
        },this);

        this.paint.on('pointerout', function(){
            this.paint.displayHeight -= 5;
            this.paint.displayWidth -= 5;
            this.tpaint.setVisible(false);
        }, this);
                
        this.refresh.setInteractive({useHandCursor: true});
        this.refresh.on('pointerdown', function(){
            this.mais.setVisible(true);
            this.menos.setVisible(true);
            savedColors = []
            nverificar=0;
            ttabelavazia.setText( '', { fontFamily: 'myfont4', fontSize: 50, color: '#0000000' });
            tlimpar.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
            index =0;
            cont= 0;  // colocar o nº de cliques do mais = 0 para recomeçar a fazer o mdc
            primeiroNumero = Phaser.Math.Between(1,9999);
            segundoNumero = Phaser.Math.Between(1,9999) ;

            //atualizar inf da barra info1
            this.barrainfo1 = this.add.sprite(0,0,'barrainfo1');
            this.aGrid.placeAtIndex(41.5,this.barrainfo1);
            Align.scaleToGameW(this.barrainfo1, 0.60);
            this.barrainf1();
            

            //atualizar inf da barra info2
            r.setText('m.d.c. (' + primeiroNumero + ' , ' + segundoNumero +')  = ', { fontFamily: 'myfont4', fontSize: 70, color: '#403217' }).setVisible(true);
            trfc.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
            trfe.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
            tcolv.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
            tcorrigir.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });


            resultadofinal.getChildByName("rf").value = '';
            table = document.getElementById('row-principal');
            
            
            while (table.children.length > 2) {
                table.removeChild(table.lastElementChild);
                var elements = document.getElementById('row-principal');
                var  marginLeft = 0;
                marginLeft += parseInt(window.getComputedStyle(elements).marginLeft, 10) + 57;
                elements.style.marginLeft = marginLeft + 'px';

            }

            this.infog2.setPosition(800,560);
            this.paint.setPosition(800,660);
            this.limpar.setPosition(800,740);
            this.mais.setPosition(1240,580);
            this.menos.setPosition(1240,700);
       
            if(table.children.length ==2){

                //table = table.replace('#FFF','#2ECCFA')
                table.lastElementChild.querySelector('input[name="dividendo"]').value = '';
                table.lastElementChild.querySelector('input[name="divisor"]').value = '';
                table.lastElementChild.querySelector('input[name="resto"]').value = '';
                table.lastElementChild.querySelector('input[name="quociente"]').value = '';
                document.getElementById('row-principal').lastElementChild.querySelector('input[name="dividendo"]').disabled = false;
                document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisor"]').disabled = false ;
                document.getElementById('row-principal').lastElementChild.querySelector('input[name="resto"]').disabled = false ;
                document.getElementById('row-principal').lastElementChild.querySelector('input[name="quociente"]').disabled = false;
                document.getElementById("rf-input").disabled = false;
              
            }
            this.corrigir.setVisible(true);
            this.verificar.setVisible(true);
            this.mais.setVisible(true);
            this.menos.setVisible(true);
            this.limpar.setVisible(true);
            this.infog2.setVisible(true);
            //this.calculaMDCcol();
            
        },this);

        this.refresh.on('pointerover', function(){
            this.refresh.displayHeight += 5;
            this.refresh.displayWidth += 5;
        }, this);
        this.refresh.on('pointerout', function(){
            this.refresh.displayHeight -= 5;
            this.refresh.displayWidth -= 5;
        }, this);
 
        this.verificar.setInteractive({useHandCursor: true});
        this.verificar.on('pointerover', function(){
            this.verificar.setTint(0x0000ff);
        }, this);

        this.verificar.on('pointerout', function(){
            this.verificar.setTint();
        }, this);

        this.verificar.on('pointerdown', function () {
            //index=0;
            nverificar++;
            console.log(nverificar)
            tlimpar.setText( ' ', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
            ttabelavazia.setText( ' ', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });


            trfc.setVisible(true);
            trfe.setText( 'Deves ter cometido algum erro! Tenta outra vez!', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
            tcolv.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
            this.calculaMDC();

            //acho que nao é preciso esta condição
            if ( dividendoUti1 != dividendoC && divisorUti1 != divisorC && restoUti1 !=restoC && quocienteUti1!=quocienteC) {
                trfe.setText( 'Deves ter cometido algum erro! Tenta outra vez!', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
            }

            rf = resultadofinal.getChildByName("rf").value;
            console.log(resultado);                             // resultado -> valor calculado plea funçao calculamdc
            console.log(rf);                                    // rf -> valor colocado pela pessoa
            
            
            table = document.getElementById('row-principal')
            if (table.children.length == 2 ){
                if ( dividendoUti != dividendoC && divisorUti != divisorC && restoUti !=restoC && quocienteUti !=quocienteC) {
                    trfe.setText( 'Deves ter cometido algum erro! Tenta outra vez!', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
                }
            } else if (table.children.length > 2){
                if ( dividendoUti1 != dividendoC && divisorUti1 != divisorC && restoUti1 !=restoC && quocienteUti1!=quocienteC) {
                    trfe.setText( 'Deves ter cometido algum erro! Tenta outra vez!', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
                }
            }
            
            if (rf == resultado ){
                index = 0;
                savedColors = [['#2ECCFA','#FE2E2E','#80FF00', '#DCDCDC']]
                
                document.getElementById("rf-input").disabled = true;
                this.corrigir.setActive(false).setVisible(false);
                this.verificar.setActive(false).setVisible(false);
                this.mais.setActive(false).setVisible(false);
                this.menos.setActive(false).setVisible(false);
                this.limpar.setActive(false).setVisible(false);
                this.infog2.setActive(false).setVisible(false);


                document.getElementById("rf-input").value = resultado;
                document.getElementById('rf-input').style.color= 'black';

                trfc.setText( 'Parabéns! Com trabalho os bons resultados aparecerão. ', { fontFamily: 'myfont4', fontSize: 50, color: '#0000000' });
                trfe.setText( '', { fontFamily: 'myfont4', fontSize: 50, color: '#0000000' });

                this.calculaMDC1coluna();
                table = document.getElementById('row-principal')
                
                table = document.getElementById('row-principal')
                while (table.children.length>2 ){
                    table.removeChild(table.lastElementChild);

                    var elements = document.getElementById('row-principal');
                    var  marginLeft = 0;
                    marginLeft += parseInt(window.getComputedStyle(elements).marginLeft, 10) + 57;
                    elements.style.marginLeft = marginLeft + 'px';

                    this.paint.setPosition(800,660);
                    
                }
                document.getElementById("row-principal").disabled = true;
               
                var tableCorrigida = document.getElementById('row-principal');
                if(restoC==0 ){
                    if (tableCorrigida.children.length ==2){
                        document.getElementById("dividendo").value = dividendoC;
                        document.getElementById("dividendo").disabled = true;
                        document.getElementById("divisor").value = divisorC;
                        document.getElementById("divisor").disabled = true;
                        document.getElementById("resto").value = restoC;
                        document.getElementById("resto").disabled = true;
                        document.getElementById("quociente").value = quocienteC;
                        document.getElementById("quociente").disabled = true;

                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="dividendo"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="dividendo"]').style.border = '1.5px solid black'
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisor"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisor"]').style.border= '1.5px solid black'
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="resto"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="resto"]').style.border= '1.5px solid black'
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="quociente"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="quociente"]').style.border= '1.5px solid black'
                    }
                }
                index = 0;

                while(restoC > 0){
                    if (tableCorrigida.children.length ==2){
                        document.getElementById("dividendo").value = dividendoC;
                        document.getElementById("dividendo").disabled = true;
                        document.getElementById("divisor").value = divisorC;
                        document.getElementById("divisor").disabled = true;
                        document.getElementById("resto").value = restoC;
                        document.getElementById("resto").disabled = true;
                        document.getElementById("quociente").value = quocienteC;
                        document.getElementById("quociente").disabled = true;

                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="dividendo"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="dividendo"]').style.border = '1.5px solid black'
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisor"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisor"]').style.border= '1.5px solid black'
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="resto"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="resto"]').style.border= '1.5px solid black'
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="quociente"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="quociente"]').style.border= '1.5px solid black'

                        _dividendo =  `<input id="dividendoc" type="number"   name="dividendoc" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':'#FE2E2E'};">`;
                        _divisor = `<input id="divisorc" type="number"  name="divisorc" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':'#80FF00'};">`;
                        _resto = `<input id="restoc" type="number"  name="restoc" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':'#99CC13'};">`;
                        _quociente = `<input id="quocientec" type="number"  name="quocientec" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#DCDCDC':'#DCDCDC'};">`;


                        var nRowC = `
                            <div style="display: flex; flex-direction: column; border-width:1mm; border-color:#000000"">
                                ${_dividendo}    
                                ${_divisor}
                                ${_resto}
                                ${_quociente}
                            </div>
                        `;
                        
                        savedColors.push(['#FE2E2E', '#80FF00','#99CC13', '#DCDCDC'])            

                        //add a 3 coluna
                        document.getElementById("row-principal").insertAdjacentHTML('beforeend', nRowC); 

                    } else if (tableCorrigida.children.length > 2){
                        var elements = document.getElementById('row-principal');
                        var  marginLeft = 0;
                        marginLeft += parseInt(window.getComputedStyle(elements).marginLeft, 10) - 57;
                        elements.style.marginLeft = marginLeft + 'px';

                        this.calculaMDCcol()
                    
                        tableCorrigida.lastElementChild.querySelector('input[name="dividendoc"]').value = dividendoC;
                        tableCorrigida.lastElementChild.querySelector('input[name="divisorc"]').value = divisorC;
                        tableCorrigida.lastElementChild.querySelector('input[name="restoc"]').value = restoC;
                        tableCorrigida.lastElementChild.querySelector('input[name="quocientec"]').value = quocienteC;
                        tableCorrigida.lastElementChild.querySelector('input[name="dividendoc"]').disabled = true;
                        tableCorrigida.lastElementChild.querySelector('input[name="divisorc"]').disabled = true;
                        tableCorrigida.lastElementChild.querySelector('input[name="restoc"]').disabled = true;
                        tableCorrigida.lastElementChild.querySelector('input[name="quocientec"]').disabled = true;

                        
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="dividendoc"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="dividendoc"]').style.border = '1.5px solid black'
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisorc"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="divisorc"]').style.border= '1.5px solid black'
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="restoc"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="restoc"]').style.border= '1.5px solid black'
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="quocientec"]').style.color= 'black';
                        document.getElementById('row-principal').lastElementChild.querySelector('input[name="quocientec"]').style.border= '1.5px solid black'

                        c1= tableCorrigida.lastElementChild.querySelector('input[name="divisorc"]').style.backgroundColor;
                        c2 = tableCorrigida.lastElementChild.querySelector('input[name="restoc"]').style.backgroundColor;
                        
                        const colors = ['#6666CC', '#CE68F9', '#D1672C', '#7FF23A', '#DE4066', '#479A9A', '#7FF217', '#EA6297', '#999919', '#FDF731'];

                        _dividendo =  `<input id="dividendoc" type="number"   name="dividendoc" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':c1};">`;
                        _divisor = `<input id="divisorc" type="number"  name="divisorc" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':c2};">`;
                        _resto = `<input id="restoc" type="number"  name="restoc" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':colors[index]};">`;
                        _quociente = `<input id="quocientec" type="number"  name="quocientec" style="font-size: 40px;border: 1.5px solid black;width: 108px;height: 63.496px; text-align:center;background-color:${whitecolor?'#DCDCDC':'#DCDCDC'};">`;

                        var nRowCcol = `
                            <div style="display: flex; flex-direction: column; border-width:1mm; border-color:#000000"">
                                ${_dividendo}    
                                ${_divisor}
                                ${_resto}
                                ${_quociente}
                            </div>
                        `;
                        
                        console.log(savedColors)

                        savedColors.push([savedColors[index+1][1], savedColors[index+1][2],colors[index], '#DCDCDC'])
                        

                        index++;
                        if (restoC>0) document.getElementById("row-principal").insertAdjacentHTML('beforeend', nRowCcol); 

                        this.paint.x -= 57
                    }  
                }
                console.log(restoC) 
                this.corrigir.setActive(false).setVisible(false);
                this.verificar.setActive(false).setVisible(false);
                this.mais.setActive(false).setVisible(false);
                this.menos.setActive(false).setVisible(false);
                this.limpar.setActive(false).setVisible(false);
                this.infog2.setActive(false).setVisible(false);
            
            }    
        }, this);
        
        
       
        this.calculaMDC1coluna();
        this.barrainf1();
        this.barrainf2();
        this.tableinput();
        trfc = this.add.text(275, 820, ' ', { fontFamily: 'myfont4', fontSize: 70, color: '#403217' }).setVisible(true);
        trfe = this.add.text(353, 820, ' ', { fontFamily: 'myfont4', fontSize: 70, color: '#403217' }).setVisible(true);
        tlimpar = this.add.text(583, 820, ' ', { fontFamily: 'myfont4', fontSize: 70, color: '#403217' }).setVisible(true);
        tcolv = this.add.text(500, 820, ' ', { fontFamily: 'myfont4', fontSize: 70, color: '#403217' }).setVisible(true);
        tcorrigir = this.add.text(460, 820, ' ', { fontFamily: 'myfont4', fontSize: 70, color: '#403217' }).setVisible(true);
        ttabelavazia = this.add.text(410, 820, ' ', { fontFamily: 'myfont4', fontSize: 70, color: '#403217' }).setVisible(true);

        //input resultado final
        resultadofinal = this.add.dom(1250,1050).createFromCache('resultadofinal');
        resultadofinal.addListener('click');
    }
    
    //conteudo da barra1
    barrainf1(){
        mdc = this.add.text(0, 0, 'Calcula o m.d.c. de ' + primeiroNumero + '  e  ' + segundoNumero, { fontFamily: 'myfont4', fontSize: 70, color: '#403217' }).setVisible(true);
        this.aGrid.placeAtIndex(38, mdc);
        mdc.setOrigin(-0.05, 0.5);
    
    }
    
    //conteudo da barra 2
    barrainf2(){
        r = this.add.text(0, 0, 'm.d.c. (' + primeiroNumero + ' , ' + segundoNumero +')  = ', { fontFamily: 'myfont4', fontSize: 70, color: '#403217' }).setVisible(true);
        this.aGrid.placeAtIndex(122, r);
        r.setOrigin(-0.05, 0.5);
    }
     
    //estrutura inicial da tabela
    tableinput(){
        element = this.add.dom("", "").createFromCache('tableform');
        this.aGrid.placeAtIndex(77.5, element);
        element.addListener('click');
    }

    // valor do mdc correto dos valores aleatorios 
    calculaMDC(){
        
        var primeiroNumero1= primeiroNumero;
        var segundoNumero1= segundoNumero;
        
        while(primeiroNumero1 != 0 & segundoNumero1 != 0){
            //nlinhas++;
           if(primeiroNumero1 > segundoNumero1){
                var resto = primeiroNumero1 % segundoNumero1;
                primeiroNumero1 = segundoNumero1;
                segundoNumero1 = resto;
            }else{
                resto = segundoNumero1 % primeiroNumero1;
                segundoNumero1 = primeiroNumero1;
                primeiroNumero1 = resto;
            }
        }
        if (primeiroNumero1 == 0) {
            resultado = segundoNumero1;
        }
        else {
            resultado = primeiroNumero1;
        }
   
    }

    // mdc somente da 1 ªcolunas 
    calculaMDC1coluna(){
        

        if (primeiroNumero > segundoNumero){
            dividendoC = primeiroNumero;
            divisorC = segundoNumero;
        } else {
            divisorC = primeiroNumero;
            dividendoC = segundoNumero;
        }
        if(dividendoC > divisorC){
            restoC = dividendoC % divisorC;
            quocienteC = Math.floor( dividendoC / divisorC);
        } else { 
            restoC = divisorC % dividendoC;
            quocienteC = Math.floor( divisorC / dividendoC);
        }
        

    }
    
    // mdc das colunas s/ 1º coluna
    calculaMDCcol(){
        dividendoC= divisorC;
        divisorC = restoC;
        restoC = dividendoC % divisorC;
        quocienteC = Math.floor( dividendoC / divisorC);  
    }
    
    openExternalLink (){
        var url = 'https://www.hypatiamat.com/divisao/alg/divisaoAlgoritmvhtml.html';
        var s = window.open(url, '_blank');
    }    

    update (){}
}