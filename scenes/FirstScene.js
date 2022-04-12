class FirstScene extends Phaser.Scene{
    constructor ()
    {
        super();
    }

    preload ()
    {
        //Carregar as imagens
        this.load.image('background', 'assets/background.png');
        this.load.image('button1', 'assets/bt1.png', 37, 40, 18);
        this.load.image('button2','assets/bt2.png', 37, 40, 18);
        this.load.image('titulo','assets/titulo2.png');
        this.load.image('creditos','assets/btcreditos.png',37,40,18);
        this.load.image('info','assets/btinfo.png',37,40,18);
    }

    create ()
    {
        //Adicionar as imagens
        this.background = this.add.image(game.config.width / 2, game.config.height / 2, 'background');
        this.button1 = this.add.sprite(0,0,'button1');
        this.button2 = this.add.sprite(0,0,'button2');
        this.titulo = this.add.image(0,0,'titulo');
        this.creditos = this.add.sprite(0,0,'creditos');
        this.info = this.add.sprite(0,0,'info');

        //Criação de uma grelha de forma a que os objetos mantenham-se no mesmo sítio apesar das variações dos tamamhos do ecrã
        this.aGrid = new AlignGrid({scene:this, rows:12,cols:12});
        //this.aGrid.showNumbers();

        //Aumentar o fundo para a janela
        this.background.setScale(2);

        //Colocar os objetos numa posição da matriz/grelha
        this.aGrid.placeAtIndex(77, this.background);
        this.aGrid.placeAtIndex(17.5, this.titulo);
        this.aGrid.placeAtIndex(65.5, this.button1);
        this.aGrid.placeAtIndex(101.5, this.button2);
        this.aGrid.placeAtIndex(106.5,this.creditos);
        this.aGrid.placeAtIndex(130.5,this.info);

        //Escalar o tamanho dos botões 
        Align.scaleToGameW(this.titulo,0.75);
        Align.scaleToGameW(this.button1,0.35);
        Align.scaleToGameW(this.button2,0.35);
        Align.scaleToGameW(this.creditos,0.07);
        Align.scaleToGameW(this.info,0.07);

        this.button1.setOrigin(0.5, 0.70);
        this.button2.setOrigin(0.5, 0.3);

        //Tornar os botões interativos, e as respetivas funções para o clique do utilizador
        this.button1.setInteractive({useHandCursor: true});
        this.button1.on('pointerdown', function () {
            game.scene.add('UnderstandScene', new UnderstandScene());
            game.scene.start('UnderstandScene');
        }, this);

        this.button2.setInteractive({useHandCursor: true});
        this.button2.on('pointerdown', function () {
            game.scene.add('PracticeScene', new PracticeScene());
            game.scene.start('PracticeScene');
        }, this);

        this.creditos.setInteractive({useHandCursor: true});
        this.creditos.on('pointerdown', function () {
            game.scene.stop();
            game.scene.add('CreditsScene', new CreditsScene());
            game.scene.start('CreditsScene');
        }, this);

        this.info.setInteractive({useHandCursor: true});
        this.info.on('pointerdown', function () {
            game.scene.stop();
            game.scene.add('InfoScene', new InfoScene());
            game.scene.start('InfoScene');
        }, this);
    //scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    }

    update()
    {

    
    }
}