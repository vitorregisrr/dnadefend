var textHp, textMutacoesReparadas, textMutacoesCriadas, stateProgressBar, scoreMutacoes
function gameUI(){
    var topStatistics = game.add.sprite(400, 0,'topStatistics');
    topStatistics.anchor.x = 0.5;
    topStatistics.fixedToCamera = true;

    stateProgressBar = game.add.sprite(348.5, 64.5,'stateProgressBar');
    stateProgressBar.anchor.setTo(0,1);
    stateProgressBar.scale.setTo(0, 1);
    stateProgressBar.fixedToCamera = true;

    var pauseBtn = game.add.button(285,15,'btnPause');
    pauseBtn.inputEnabled = true;
    pauseBtn.events.onInputDown.add(showPausedModal, this);
    pauseBtn.fixedToCamera = true;

    textHp = game.add.text(365, 10, dnaPolimerase.element.hp,{ font: "12px Komika", fill: "#ff0044", align: "center" });
    textMutacoesReparadas = game.add.text(422, 10,0,{ font: "12px Komika", fill: "#663300", align: "center" });
    textMutacoesCriadas = game.add.text(472, 10, 0,{ font: "12px Komika", fill: "#663300", align: "center" });

    textHp.fixedToCamera = true;
    textMutacoesCriadas.fixedToCamera = true;
    textMutacoesReparadas.fixedToCamera = true;

    joystick = game.add.sprite(game.world.centerX + 260, 520, '');
    joystick.fixedToCamera = true;
    joystick.visible = false;
    joystick.scale.setTo(1,1);
    joystick.alpha = 0.7;

    moveLeftBtn = game.add.button(-70, 0, 'moveLeft');
    moveLeftBtn.onInputDown.add(function() { moveLeftBtn.isDown = true;}, this);
    moveLeftBtn.onInputUp.add(function() { moveLeftBtn.isDown = false;}, this);
    joystick.addChild(moveLeftBtn);

    moveRightBtn = game.add.button(70, 0, 'moveRight');
    moveRightBtn.onInputDown.add(function() { moveRightBtn.isDown = true;}, this);
    moveRightBtn.onInputUp.add(function() { moveRightBtn.isDown = false;}, this);
    joystick.addChild(moveRightBtn);

    moveUpBtn = game.add.button(0, -70, 'moveUp');
    moveUpBtn.onInputDown.add(function() { moveUpBtn.isDown = true;}, this);
    moveUpBtn.onInputUp.add(function() { moveUpBtn.isDown = false;}, this);
    joystick.addChild(moveUpBtn);

    moveDownBtn = game.add.button(0, 0, 'moveDown');
    moveDownBtn.onInputDown.add(function() { moveDownBtn.isDown = true;}, this);
    moveDownBtn.onInputUp.add(function() { moveDownBtn.isDown = false;}, this);
    joystick.addChild(moveDownBtn);
    
    sounds.play('ambiente');
    soundLoop = setInterval(function () {
        sounds.play('ambiente');
    }, 40000);

    if (mobileAndTabletcheck()) {
        joystick.visible = true;
    }

    joystick.bringToTop();

}