let scenes = []

scenes.push(FirstScene);
scenes.push(CreditsScene);
scenes.push(InfoScene);
scenes.push(PracticeScene);
scenes.push(UnderstandScene);
scenes.push(UnderstandScene1);
scenes.push(UnderstandScene2);
scenes.push(UnderstandScene3);
scenes.push(UnderstandScene4);
scenes.push(UnderstandScene5);
scenes.push(UnderstandScene6);
scenes.push(UnderstandScene7);
scenes.push(UnderstandScene8);

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.ScaleModes.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 2048, 
    height: 1190
  },
  backgroundColor : "#ffffff",
  dom: {
    createContainer: true
  },
  parent : 'game',
  scene : scenes
};

var game = new Phaser.Game(config);
