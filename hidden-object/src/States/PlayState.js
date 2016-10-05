var PlayState = new Kiwi.State('PlayState');

PlayState.create = function () {


    //Create our Hidden Object Arrays, This will store all of our hidden objects.
    this.hiddenObjects = [];
    this.gameComplete = false;


    //Add bg
    this.bg = new Kiwi.GameObjects.Sprite(PlayState, PlayState.textures.bg, 0, 0);
    this.addChild(this.bg);


    //Add all the hidden objects and their corresponding UI preview images. Give the item random coordinates but inside of the game space.
    this.addHiddenObject('1', 426, 152); //box
    this.addHiddenObject('2', 1280, 100); //bunny
    this.addHiddenObject('3', 670, 290); //mug
    this.addHiddenObject('4', 803, 250); //pieter
    this.addHiddenObject('5', 1149, 350); //wesley
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
    }
}
