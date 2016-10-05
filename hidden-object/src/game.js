
/**
* The core CoolblueHiddenObjects game file.
*
* This file is only used to initalise (start-up) the main Kiwi Game
* and add all of the relevant states to that Game.
*
*/


//Initialise the Kiwi Game.
var game = new Kiwi.Game('content', 'CoolblueHiddenObjects', null, {
  renderer: Kiwi.RENDERER_CANVAS,
  debug: Kiwi.DEBUG_OFF,
  width: 1334,
  height: 750,
  log: {
    enabled: false
  }
});

//Add all the States we are going to use.
game.states.addState(LoadingState);
game.states.addState(PlayState);

//Switch to/use the Preloader state.
game.states.switchState("LoadingState");
