var bootState = { create:criarBoot, preload: precarregarBoot}

function precarregarBoot() {
    //UI elements
    game.load.image('background1','assets/backgrounds/background1.png');
    game.load.image('preloadBarBg', 'assets/ui/preloadBarBg.png');
    game.load.image('preloadBar', 'assets/ui/preloadBar.png');
    game.load.image('logo', 'assets/logo.png');

}

function criarBoot(){
    game.state.start('preloadState');
}
