var game = new Phaser.Game(800, 600, Phaser.WEBGL, '#game');

//plugins
reg.modal = new gameModal(game);

var levelNumber;

game.state.add('gameState1', gameState1);
game.state.add('gameState2', gameState2);
game.state.add('gameState3', gameState3);

game.state.add('preloadState', preloadState);
game.state.add('bootState', bootState);
game.state.add('startState', startState);
game.state.add('levelState', levelState);

//define estado inicial
game.state.start('bootState');



function gameOver() {
    game.paused = true;
    mutacoesCriadas = mutacoesCriadas.toString();
    mutacoesReparadas = mutacoesReparadas.toString();
    reg.modal.updateModalValue(mutacoesReparadas, 'gameOverModal', 1 );
    reg.modal.updateModalValue(mutacoesCriadas, 'gameOverModal', 2 );
    showGameOverModal();
}

function levelSuccess() {
    game.paused = true;
    var starsSpritesheetIndex;
    //estrelas
    if (starsArray[levelNumber - 1] < 3) {
        if (mutacoesCriadas == 0) {
            starsArray[levelNumber - 1] = 3;
            starsSpritesheetIndex = 2;

        } else if (mutacoesCriadas <= 3) {
            starsArray[levelNumber - 1] = 2;
            starsSpritesheetIndex = 1;

        } else {
            starsArray[levelNumber - 1] = 1;
            starsSpritesheetIndex = 0;
            
        }
        localStorage.setItem('starsArray',JSON.stringify(starsArray));
    }

    mutacoesCriadas = mutacoesCriadas.toString();
    mutacoesReparadas = mutacoesReparadas.toString();
    reg.modal.updateModalValue(mutacoesReparadas, 'gameSucessModal', 1 );
    reg.modal.updateModalValue(mutacoesCriadas, 'gameSucessModal', 2 );
    reg.modal.updateModalValue(starsSpritesheetIndex, 'gameSucessModal', 5 );
    showGameSucessModal();
}