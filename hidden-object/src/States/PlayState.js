var PlayState = new Kiwi.State('PlayState');

PlayState.create = function () {


    //Create our Hidden Object Arrays, This will store all of our hidden objects.
    this.hiddenObjects = [];
    this.gameComplete = false;

    //Add bg
    this.bg = new Kiwi.GameObjects.Sprite(PlayState, PlayState.textures.bg, 0, 0);
    this.addChild(this.bg);

    //Add close
    this.close = new Kiwi.GameObjects.Sprite(PlayState, PlayState.textures.UI_close, 1030, 610);
    this.close.input.onDown.add(function(){
      var frameElement = window.parent.document.querySelector('.game-frame');
      frameElement.parentNode.removeChild(frameElement);
    },this);
    this.addChild(this.close);


    //Add all the hidden objects and their corresponding UI preview images. Give the item random coordinates but inside of the game space.
    this.addHiddenObject('1', 426, 152); //box
    this.addHiddenObject('2', 1280, 100); //bunny
    this.addHiddenObject('3', 670, 290); //mug
    this.addHiddenObject('4', 803, 250); //pieter
    this.addHiddenObject('5', 1149, 350); //wesley

    // Create sounds
    this.soundFound = new Kiwi.Sound.Audio(this.game, 'found', 1, false);
    this.soundWin = new Kiwi.Sound.Audio(this.game, 'winning', 1, false);
    this.music = new Kiwi.Sound.Audio(this.game, 'music', 0.2, true);

    this.music.play();
}

PlayState.addHiddenObject = function (objName, objX, objY) {

    //Object hidden on the stage
    this['hiddenObject' + objName] = new Kiwi.GameObjects.Sprite(PlayState, PlayState.textures['hidden_' + objName], objX, objY);
    this['hiddenObject' + objName].objName = objName;
    this['hiddenObject' + objName].input.onDown.add(this.clickObject, this);
    this.addChild(this['hiddenObject' + objName]);

    //UI preview image
    this['UIButton' + objName] = new Kiwi.GameObjects.Sprite(PlayState, PlayState.textures['UI_' + objName], 180 * this.hiddenObjects.length + 100, 570);
    this.addChild(this['UIButton' + objName]);

    this.hiddenObjects.push(this['hiddenObject' + objName]);
}

PlayState.clickObject = function (hiddenObj) {
    if (!hiddenObj.visible) {
      return;
    }

    //remove object and associated UI btn
    hiddenObj.visible = false;
    this['UIButton' + hiddenObj.objName].visible = false;

    //check completion
    var allFound = true;
    for (var i in this.hiddenObjects) {
        if (this.hiddenObjects[i].visible) {
            allFound = false;
        }
    }

    //completion
    if (allFound) {
        this.gameComplete = true;
        setTimeout((function(){
          this.fireworks = new Kiwi.GameObjects.Sprite(PlayState, PlayState.textures.fireworks, 0, 0);
          this.fireworks.alpha = 0.5;
          this.fireworks.input.onDown.add(function(){
            this.music.stop();
            this.game.states.switchState('LoadingState');
          }, this);
          this.addChild(this.fireworks);
        }).bind(this),100);
        this.soundWin.play();
    } else {
        this.soundFound.stop();
        this.soundFound.play();
    }
}
