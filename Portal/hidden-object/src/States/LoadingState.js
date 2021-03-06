/**
* The Loading State is going to be used to load in all of the in-game assets that we need in game.
*
* Because in this blueprint there is only a single "hidden object" section we are going to load in all of
* the asset's at this point.
*
* If you have multiple states however, I would recommend have loading the other graphics as they are required by their states,
* Otherwise the loading times maybe a bit long and it is not the most optimal solution.
*
*/

var LoadingState = new Kiwi.State('LoadingState');

LoadingState.preload = function () {
    this.addImage('bg', 'assets/img/game-assets--background.jpg');
    this.addImage('fireworks', 'assets/img/fireworks.jpg');
    this.addImage('hidden_1', 'assets/img/item-box.png');
    this.addImage('hidden_2', 'assets/img/item-bunny.png');
    this.addImage('hidden_3', 'assets/img/item-mug.png');
    this.addImage('hidden_4', 'assets/img/item-pieter.png');
    this.addImage('hidden_5', 'assets/img/item-wesley.png');
    this.addImage('UI_1', 'assets/img/tile-box.png');
    this.addImage('UI_2', 'assets/img/tile-bunny.png');
    this.addImage('UI_3', 'assets/img/tile-mug.png');
    this.addImage('UI_4', 'assets/img/tile-pieter.png');
    this.addImage('UI_5', 'assets/img/tile-wesley.png');
    this.addImage('UI_close', 'assets/img/tile-sluit.png');

    this.addAudio('found', 'assets/audio/found.mp3');
    this.addAudio('winning', 'assets/audio/winning.mp3');
    this.addAudio('music', 'assets/audio/background-music.mp3');
};

LoadingState.create = function(){
    this.game.states.switchState('PlayState');
}
