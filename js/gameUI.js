var textHp, textMutacoesReparadas, textMutacoesCriadas, stateProgressBar, scoreMutacoes
function gameUI(){
    var topStatistics = game.add.sprite(400, 0,'topStatistics');
    topStatistics.anchor.x = 0.5;

    stateProgressBar = game.add.sprite(348.5, 64.5,'stateProgressBar');
    stateProgressBar.anchor.setTo(0,1);
    stateProgressBar.scale.setTo(0, 1);

    var pauseBtn = game.add.button(285,15,'btnPause');
    pauseBtn.inputEnabled = true;
    pauseBtn.events.onInputDown.add(showPausedModal, this);

    textHp = game.add.text(365, 10, dnaPolimerase.element.hp,{ font: "12px Komika", fill: "#ff0044", align: "center" });
    textMutacoesReparadas = game.add.text(422, 10,0,{ font: "12px Komika", fill: "#663300", align: "center" });
    textMutacoesCriadas = game.add.text(472, 10, 0,{ font: "12px Komika", fill: "#663300", align: "center" });

}