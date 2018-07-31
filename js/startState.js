var startState = { create:criarStart}


function criarStart(){
    //createModals();
    //showGameOverModal();
    game.add.sprite(0,0,'background1');
    /*var logo = game.add.sprite(game.world.centerX , game.world.centerY - 120 , 'logo');
    logo.enableBody = true;
    logo.anchor.x = 0.5;
    logo.anchor.y = 0.5;*/

    createModals();

    var btnPlay = game.add.button(game.world.centerX , game.world.centerY  , 'btnPlay');
    btnPlay.enableBody = true;
    btnPlay.anchor.x = 0.5;
    btnPlay.anchor.y = 0.5;
    btnPlay.inputEnabled = true;
    btnPlay.events.onInputDown.add(start, this);

    var btnSettings = game.add.button(720, 70 , 'btnSettings');
    btnSettings.enableBody = true;
    btnSettings.anchor.x = 0.5;
    btnSettings.anchor.y = 0.5;
    btnSettings.inputEnabled = true;
    btnSettings.events.onInputDown.add(function(){
        starsArray = [0, 4, 4];
	    localStorage.setItem('starsArray',JSON.stringify(starsArray));
    }, this);

}

function start(){
    game.state.start('levelState');
}