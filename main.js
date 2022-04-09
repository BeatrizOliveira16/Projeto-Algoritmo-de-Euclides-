const config = {
  type: Phaser.AUTO,
  scale: {
     mode: Phaser.Scale.ScaleModes.FIT,
     autoCenter: Phaser.Scale.CENTER_BOTH,
     width: 2048,
     height: 1200
    },
  backgroundColor : "#a9e6ff;",
  parent : 'game',
};

var game = new Phaser.Game(config);
game.scene.add('FirstScene', new FirstScene());
game.scene.start('FirstScene');