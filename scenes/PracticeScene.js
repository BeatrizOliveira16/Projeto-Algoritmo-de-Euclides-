
let primeiroNumero, segundoNumero; // valores aleatorios
let rf; // valor colocado pela pessoa 
let dividendoC, divisorC, restoC, quocienteC, resultado; // valores corretos de cada coluna
let tcolv, trfc, trfe;// texto caso os valores estejam corretos ou errados
let mdc, r;  // texto da barra 1 e 2 
let resultadofinal, element; // assets
let dividendoUti, divisorUti, restoUti, quocienteUti; // valores inseridos pelo utilizador 1 coluna 
let dividendoUti1,divisorUti1,restoUti1,quocienteUti1, nRow, row, table;
let _dividendo, _divisor, _resto, _quociente;

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
        this.load.image('backl','assets/backl.png',37,40,18);
        this.load.html('tableform', 'assets/tableform.html');
        this.load.html('resultadofinal', 'assets/resultadofinal.html');
    }
     
    create() {   
        let  cont =0;  // ncliks no mais
        let whitecolor = false;  
        primeiroNumero = Phaser.Math.Between(0,10000);
        segundoNumero = Phaser.Math.Between(0,10000);
         
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
        Align.scaleToGameW(this.mais, 0.035);
        

        this.menos = this.add.sprite(0,0,'menos');
        this.aGrid.placeAtIndex(91,this.menos);
        Align.scaleToGameW(this.menos, 0.035);

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
        
        //this.calculaMDC();

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

        this.corrigir.setInteractive({useHandCursor: true});
        this.corrigir.on('pointerdown', function () {
            this.calculaMDC();
            //console.log(nlinhas);
            this.corrigir.setVisible(false);
            this.verificar.setVisible(false);
            trfc.setText( '', { fontFamily: 'myfont4', fontSize: 50, color: '#0000000' });
      
            
            
            rf = resultadofinal.getChildByName("rf").value;
           
            document.getElementById("rf-input").value = resultado;
            trfe.setText( 'Devias ter tentado resolver por ti próprio!', { fontFamily: 'myfont4', fontSize: 50, color: '#0000000' });
            
            this.calculaMDC1coluna();
            console.log(restoC);

            var tableCorrigida = document.getElementById('row-principal');
            _dividendo=  `<input id="dividendoc" type="number"  name="dividendoc" disabled style="font-size: 40px;width: 151.18px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':'#2ECCFA'};">`;
            _divisor= `<input id="divisorc" type="number"  name="divisorc" disabled style="font-size: 40px;width: 151.18px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':'#FE2E2E'};">`;
            _resto = `<input id="restoc" type="number"  name="restoc"  disabled style="font-size: 40px;width: 151.18px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':'#80FF00'};">`;
            _quociente = `<input id="quocientec" type="number"  name="quocientec" disabled  style="font-size: 40px;width: 151.18px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':'#E6E6E6'};">`;

            nRow = `
                <div style="display: flex; flex-direction: column; border-width:1mm; border-color:#000000"">
                    ${_dividendo}    
                    ${_divisor}
                    ${_resto}
                    ${_quociente}
                </div>
            `; 
            while(restoC > 0){
                if (tableCorrigida.children.length ==2){
                    document.getElementById("dividendo").value = dividendoC;
                    document.getElementById("divisor").value = divisorC;
                    document.getElementById("resto").value = restoC;
                    document.getElementById("quociente").value = quocienteC;
                    //add a 3 coluna
                    document.getElementById("row-principal").insertAdjacentHTML('beforeend', nRow); 

                } else if (tableCorrigida.children.length >2 ){
                    this.calculaMDCcol()
                    //console.log(DividendoC)
                    tableCorrigida.lastElementChild.querySelector('input[name="dividendoc"]').value = dividendoC;
                    tableCorrigida.lastElementChild.querySelector('input[name="divisorc"]').value = divisorC;
                    tableCorrigida.lastElementChild.querySelector('input[name="restoc"]').value = restoC;
                    tableCorrigida.lastElementChild.querySelector('input[name="quocientec"]').value = quocienteC;

                    if (restoC>0) document.getElementById("row-principal").insertAdjacentHTML('beforeend', nRow); 
                }     
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
            
        }, this);

        this.infog2.on('pointerover', function(){
            this.infog2.displayHeight += 5;
            this.infog2.displayWidth += 5;
            // Se o cursor estiver por cima deste botão, tem de aparecer acima da tabela "Clica aqui para obteres uma informação detalhada do procedimento."
            this.tinfo = this.add.text(0, 0, 'Clica aqui para obteres uma informação detalhada do procedimento.', { fontFamily: 'myfont4', fontSize: 25, color: '#0000000' });
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
            if (table.lastElementChild.querySelector('input[name="dividendo"]').value !='' &&
            table.lastElementChild.querySelector('input[name="divisor"]').value != '' &&
            table.lastElementChild.querySelector('input[name="resto"]').value != '' &&
            table.lastElementChild.querySelector('input[name="quociente"]').value != ''){          
                table.lastElementChild.querySelector('input[name="dividendo"]').value = '';
                table.lastElementChild.querySelector('input[name="divisor"]').value = '';
                table.lastElementChild.querySelector('input[name="resto"]').value = '';
                table.lastElementChild.querySelector('input[name="quociente"]').value = '';
            } else{
                this.textlimpar = this.add.text(12, 18, ' gjksdjkf', { fontFamily: 'myfont4', fontSize: 25, color: '#0000000' });
                //this.tweens.add({targets: this.textlimpar ,duration: 0.01 ,ease: 'Power3'});
                console.log("a");
            } 
        }, this);

        this.limpar.on('pointerover', function () {
            this.limpar.setTint(0x0000ff);           
        }, this);

        this.limpar.on('pointerout', function () {
            this.limpar.setTint();
        }, this);

        this.mais.setInteractive({useHandCursor: true});
        this.mais.on('pointerdown', function () {        
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
            trfe.setActive(false).setVisible(false);

            if (cont==0){
                this.calculaMDC1coluna();
                console.log(cont);
                if(restoC > 0){
                    //console.log(restoUti)
                    if ( dividendoUti == dividendoC &&  divisorUti == divisorC && restoUti ==restoC && quocienteUti==quocienteC && 
                    dividendoUti != '' &&  divisorUti != '' && restoUti !='' && quocienteUti!='' ){
                        //table = document.getElementById('row-principal')
                        
                        tcolv.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
                        console.log("certo");

                        //console.log(colorwhite);
                        _dividendo =  `<input id="dividendoc" type="number"  name="dividendo" style="font-size: 40px;width: 151.18px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':'#2ECCFA'};">`;
                        _divisor = `<input id="divisorc" type="number"  name="divisor" style="font-size: 40px;width: 151.18px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':'#FE2E2E'};">`;
                        _resto = `<input id="restoc" type="number"  name="resto" style="font-size: 40px;width: 151.18px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':'#80FF00'};">`;
                        _quociente = `<input id="quocientec" type="number"  name="quociente" style="font-size: 40px;width: 151.18px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':'#E6E6E6'};">`;
                              
                        nRow = `
                            <div style="display: flex; flex-direction: column; border-width:1mm; border-color:#000000"">
                                ${_dividendo}    
                                ${_divisor}
                                ${_resto}
                                ${_quociente}
                            </div>
                        `; 
                            //document.getElementById("row-principal").innerHTML += nRow;   
                            document.getElementById("row-principal").insertAdjacentHTML('beforeend', nRow); 
                            cont++;
                            //console.log(cont);
                            this.tweens.add({targets: this.paint,x: '-=103',duration: 0.01 ,ease: 'Power3'});
                            this.tweens.add({targets: this.limpar,x: '-=103',duration: 0.01 ,ease: 'Power3'});
                            this.tweens.add({targets: this.infog2,x: '-=103',duration: 0.01 ,ease: 'Power3'});
                            this.tweens.add({targets: this.tinfo, x: '-=103',duration: 0.01 ,ease: 'Power3'});
                            this.tweens.add({targets: this.tpaint,x: '-=103',duration: 0.01 ,ease: 'Power3'});
                            this.tweens.add({targets: this.mais,x: '+=150',duration: 0.01 ,ease: 'Power3'});
                            this.tweens.add({targets: this.menos,x: '+=150',duration: 0.01 ,ease: 'Power3'});
                            this.tweens.add({targets: table,x: '+=150',duration: 0.01 ,ease: 'Power3'});

                            this.calculaMDCcol();
                    } else {
                        tcolv.setText('Valores inseridos estão incorretos', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
                        console.log("errado");
                        console.log(dividendoC);
                        console.log(divisorC);
                        console.log(restoC);
                        console.log(quocienteC); 
                    }   
                } else if(restoUti == ""){
                    tcolv.setText('Valores inseridos estão incorretos', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
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
                        nRow = nRow.replace('#E6E6E6', '#FFF');
                    }else{
                        nRow = nRow.replace('#FFF','#2ECCFA');
                        nRow = nRow.replace('#FFF','#FE2E2E');
                        nRow = nRow.replace( '#FFF','#80FF00');
                        nRow = nRow.replace( '#FFF','#E6E6E6');
                    }
                    //console.log(cont);
                    if(restoC > 0){
                        if ( dividendoUti1 == dividendoC &&  divisorUti1 == divisorC && restoUti1 ==restoC && quocienteUti1==quocienteC && 
                            divisorUti1 != '' &&  dividendoUti1 != '' && restoUti != '' && quocienteUti1 != ''){
                            tcolv.setText('', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
                            this.tweens.add({targets: this.paint,x: '-=103',duration: 0.01 ,ease: 'Power3'});
                            this.tweens.add({targets: this.limpar,x: '-=103',duration: 0.01 ,ease: 'Power3'});
                            this.tweens.add({targets: this.infog2,x: '-=103',duration: 0.01 ,ease: 'Power3'});
                            this.tweens.add({targets: this.tinfo, x: '-=103',duration: 0.01 ,ease: 'Power3'});
                            this.tweens.add({targets: this.tpaint,x: '-=103',duration: 0.01 ,ease: 'Power3'});
                            this.tweens.add({targets: this.mais,x: '+=150',duration: 0.01 ,ease: 'Power3'});
                            this.tweens.add({targets: this.menos,x: '+=150',duration: 0.01 ,ease: 'Power3'});

                            //col.addListener('click');
                            console.log("certo");
                            document.getElementById("row-principal").insertAdjacentHTML('beforeend', nRow); 

                            this.calculaMDCcol();
                        } else {
                            tcolv.setText('Valores inseridos estão incorretos', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
                            console.log("errado");
                            console.log(dividendoC);
                            console.log(divisorC);
                            console.log(restoC);
                            console.log(quocienteC); 
                        }
                    } else if(restoUti1 == ""){
                        tcolv.setText('Valores inseridos estão incorretos', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
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
            //debugger
            //console.log(table.children.length);
            table = document.getElementById('row-principal');
            //console.log(table.children.length);
            if(table.children.length == 3) {
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
                console.log(dividendoC);
                console.log(divisorC);
                console.log(restoC);
                console.log(quocienteC); 
            }else {
                //quocienteC = so deus sabe 
                /*
                restoC= divisorC
                divisorC= dividendoC 
                dividendoC= dividendoC =divisorC * quocienteC +restoC
               
                console.log(dividendoC);
                console.log(divisorC);
                console.log(restoC);
                console.log(quocienteC);
                */
            }
            //table = document.getElementById('row-principal');
            if (table.children.length > 2){  
                table.removeChild(table.lastElementChild);
                this.tweens.add({targets: this.paint,x: '+=103',duration: 0.01 ,ease: 'Power3'});
                this.tweens.add({targets: this.limpar,x: '+=103',duration: 0.01 ,ease: 'Power3'});
                this.tweens.add({targets: this.infog2,x: '+=103',duration: 0.01 ,ease: 'Power3'});
                this.tweens.add({targets: this.tinfo, x: '+=103',duration: 0.01 ,ease: 'Power3'});
                this.tweens.add({targets: this.tpaint,x: '+=103',duration: 0.01 ,ease: 'Power3'});
                this.tweens.add({targets: this.mais,x: '-=150',duration: 0.01 ,ease: 'Power3'});
                this.tweens.add({targets: this.menos,x: '-=150',duration: 0.01 ,ease: 'Power3'});
            }else if (table.children.length ==2){
                table.lastElementChild.querySelector('input[name="dividendo"]').value = '';
                table.lastElementChild.querySelector('input[name="divisor"]').value = '';
                table.lastElementChild.querySelector('input[name="resto"]').value = '';
                table.lastElementChild.querySelector('input[name="quociente"]').value = '';
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
            var rp = document.getElementById('row-principal')
            var rpNumberOfChildren = rp.children.length;
            if(whitecolor==false){
                if (rpNumberOfChildren > 1) {
                    for (let i = 1; i < rpNumberOfChildren; i++) {
                        var columnNumberOfChildren = rp.children[i].children.length;

                        for (let z = 0; z < columnNumberOfChildren; z++) {
                            rp.children[i].children[z].style.backgroundColor = 'white';
                        }
                    }
                }
                whitecolor = true;
            }else{
                if (rpNumberOfChildren > 1) {
                    for (let i = 1; i < rpNumberOfChildren; i++) {
                        var columnNumberOfChildren = rp.children[i].children.length;
                        for (let z = 0; z < columnNumberOfChildren; z++) {
                            if (z==0) rp.children[i].children[z].style.backgroundColor = '#2ECCFA';
                            if (z==1) rp.children[i].children[z].style.backgroundColor = '#FE2E2E';
                            if (z==2) rp.children[i].children[z].style.backgroundColor = '#80FF00';
                            if (z==3) rp.children[i].children[z].style.backgroundColor = '#E6E6E6';
                        }
                    }
                }
                whitecolor = false;
            }
            //this.openExternalLink();
        }, this);

        this.paint.on('pointerover', function(){
            this.paint.displayHeight += 5;
            this.paint.displayWidth += 5;
            //Se o cursor estiver por cima deste botão, tem de aparecer acima da tabela "Adiciona/remove cores da tabela"
            this.tpaint = this.add.text(0, 0, 'Adiciona/remove cores da tabela.', { fontFamily: 'myfont4', fontSize: 25, color: '#0000000' });
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
            cont= 0;  // colocar o nº de cliques do mais = 0 para recomeçar a fazer o mdc
            primeiroNumero = Phaser.Math.Between(0,10000);
            segundoNumero = Phaser.Math.Between(0,10000);
            //atualizar inf da barra info1
            this.barrainfo1 = this.add.sprite(0,0,'barrainfo1');
            this.aGrid.placeAtIndex(41.5,this.barrainfo1);
            Align.scaleToGameW(this.barrainfo1, 0.60);
            this.barrainf1();
            

            //atualizar inf da barra info2
            r.setText('m.d.c. (' + primeiroNumero + ' , ' + segundoNumero +')  = ', { fontFamily: 'myfont4', fontSize: 70, color: '#403217' }).setVisible(true);
            trfc.setActive(false).setVisible(false);
            trfe.setActive(false).setVisible(false);
            tcolv.setActive(false).setVisible(false);
            
       
            resultadofinal.getChildByName("rf").value = '';
            table = document.getElementById('row-principal');
            
            while (table.children.length > 2) {
                table.removeChild(table.lastElementChild);
            }
            
            this.aGrid.placeAtIndex(64,this.infog2);
            this.aGrid.placeAtIndex(76,this.paint);
            this.aGrid.placeAtIndex(88,this.limpar);
            this.aGrid.placeAtIndex(67,this.mais);
            this.aGrid.placeAtIndex(91,this.menos);
           
            if(table.children.length ==2){
                table.lastElementChild.querySelector('input[name="dividendo"]').value = '';
                table.lastElementChild.querySelector('input[name="divisor"]').value = '';
                table.lastElementChild.querySelector('input[name="resto"]').value = '';
                table.lastElementChild.querySelector('input[name="quociente"]').value = '';
            }
            this.corrigir.setVisible(true);
            this.verificar.setVisible(true);
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
            trfc.setVisible(true);
            trfe.setVisible(true);
            tcolv.setVisible(false);
            //console.log(cont)
            this.calculaMDC();
            
            rf = resultadofinal.getChildByName("rf").value;
            console.log(resultado);          // valor calculado plea funçao calculamdc
            console.log(rf);                //valor colocado pela pessoa

            if (rf == resultado ){
                document.getElementById("rf-input").value = resultado;
                trfe.setText( 'Parabéns. Com trabalho os bons resultados  aparecerão. ', { fontFamily: 'myfont4', fontSize: 50, color: '#0000000' });
                //'Parabéns. Com trabalho e dedicação os bons resultados  aparecerão. '

                this.calculaMDC1coluna();
                console.log(restoC);

                var tableCorrigida = document.getElementById('row-principal');
                _dividendo=  `<input id="dividendoc" type="number"  name="dividendoc"  disabled style="font-size: 40px;width: 151.18px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':'#2ECCFA'};">`;
                _divisor= `<input id="divisorc" type="number"  name="divisorc" disabled style="font-size: 40px;width: 151.18px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':'#FE2E2E'};">`;
                _resto = `<input id="restoc" type="number"  name="restoc" disabled style="font-size: 40px;width: 151.18px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':'#80FF00'};">`;
                _quociente = `<input id="quocientec" type="number"  name="quocientec" disabled style="font-size: 40px;width: 151.18px;height: 63.496px; text-align:center;background-color:${whitecolor?'#FFF':'#E6E6E6'};">`;

                nRow = `
                    <div style="display: flex; flex-direction: column; border-width:1mm; border-color:#000000"">
                        ${_dividendo}    
                        ${_divisor}
                        ${_resto}
                        ${_quociente}
                    </div>
                `; 
                while(restoC > 0){
                    if (tableCorrigida.children.length ==2){
                        document.getElementById("dividendo").value = dividendoC;
                        document.getElementById("divisor").value = divisorC;
                        document.getElementById("resto").value = restoC;
                        document.getElementById("quociente").value = quocienteC;
                        //add a 3 coluna
                        document.getElementById("row-principal").insertAdjacentHTML('beforeend', nRow); 

                    } else if (tableCorrigida.children.length > 2){
                        this.calculaMDCcol()
                        //console.log(DividendoC)
                        tableCorrigida.lastElementChild.querySelector('input[name="dividendoc"]').value = dividendoC;
                        tableCorrigida.lastElementChild.querySelector('input[name="divisorc"]').value = divisorC;
                        tableCorrigida.lastElementChild.querySelector('input[name="restoc"]').value = restoC;
                        tableCorrigida.lastElementChild.querySelector('input[name="quocientec"]').value = quocienteC;

                        if (restoC>0) document.getElementById("row-principal").insertAdjacentHTML('beforeend', nRow); 
                    }
                    this.corrigir.setActive(false).setVisible(false);
                    this.verificar.setActive(false).setVisible(false);
                }
            }else {
                trfc.setActive(false).setVisible(false);
                trfe.setText( 'Deves ter cometido algum erro! Tenta outra vez!', { fontFamily: 'myfont4', fontSize: 100, color: '#0000000' });
            }
        }, this);
        
        //gerar 2 numeros aleatorios
       
        this.calculaMDC1coluna();
        this.barrainf1();
        this.barrainf2();
        this.tableinput();
        trfc = this.add.text(550, 820, ' ', { fontFamily: 'myfont4', fontSize: 70, color: '#403217' }).setVisible(true);
        trfe = this.add.text(400, 820, ' ', { fontFamily: 'myfont4', fontSize: 70, color: '#403217' }).setVisible(true);
        tcolv = this.add.text(550, 820, ' ', { fontFamily: 'myfont4', fontSize: 70, color: '#403217' }).setVisible(true);

        //input resultado final
        resultadofinal = this.add.dom(1250,1050).createFromCache('resultadofinal');
        resultadofinal.addListener('click');
    }
    
    //conteudo da barra1
    barrainf1(){
        mdc = this.add.text(0, 0, 'Calcula o  m.d.c. entre: ' + primeiroNumero + '  e  ' + segundoNumero, { fontFamily: 'myfont4', fontSize: 70, color: '#403217' }).setVisible(true);
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
        //console.log(nlinhas);
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
        var url = 'https://www.google.com/';
        var s = window.open(url, '_blank');
    }

    update (){}
}