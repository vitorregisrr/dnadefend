var startState = { create:criarStart}


function criarStart(){
    //createModals();
    //showGameOverModal();
    game.add.sprite(0,0,'background1');

    var logo = game.add.sprite(game.world.centerX , game.world.centerY - 120 , 'logo');
    logo.enableBody = true;
    logo.anchor.x = 0.5;
    logo.anchor.y = 0.5;
    logo.scale.setTo(0.8, 0.8);

    game.world.setBounds(0, 0, 800, 600);    
    createModals();

    var btnPlay = game.add.button(game.world.centerX , game.world.centerY + 100 , 'btnPlay');
    btnPlay.enableBody = true;
    btnPlay.anchor.x = 0.5;
    btnPlay.anchor.y = 0.5;
    btnPlay.inputEnabled = true;
    btnPlay.scale.setTo(0.8, 0.8);
    btnPlay.events.onInputDown.add(start, this);

}

function start(){
    game.state.start('levelState');
}