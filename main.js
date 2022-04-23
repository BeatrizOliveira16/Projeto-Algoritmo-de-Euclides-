let scenes = []
scenes.push(FirstScene);
scenes.push(CreditsScene);
scenes.push(InfoScene);
scenes.push(PracticeScene);
scenes.push(UnderstandScene);

const config = {
  type: Phaser.AUTO,
  scale: {
     mode: Phaser.Scale.ScaleModes.FIT,
     autoCenter: Phaser.Scale.CENTER_BOTH,
     width: 2048, 
     height: 1190
    },
  backgroundColor : "#ffffff",
  parent : 'game',
  scene : scenes
};

var game = new Phaser.Game(config);
