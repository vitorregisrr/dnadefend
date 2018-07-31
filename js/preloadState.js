var preloadState = { create:criarPreload, preload: precarregarPreload}

function precarregarPreload() {

    /*var logo = game.add.sprite(game.world.centerX , game.world.centerY - 120 , 'logo');
    logo.enableBody = true;
    logo.anchor.x = 0.5;
    logo.anchor.y = 0.5;*/

    game.add.sprite(0,0,'background1');

    var preloadBarBg = game.add.sprite(game.world.centerX, game.world.centerY +60, 'preloadBarBg');
    preloadBarBg.enableBody = true;
    preloadBarBg.anchor.x = 0.5;
    preloadBarBg.anchor.y = 0.5;


    preloadBar = game.add.sprite(150, 345, 'preloadBar');
    this.load.setPreloadSprite(preloadBar);
    
    //caracteres
    
    //UI elements
    game.load.image('btnPlay', 'assets/ui/btnPlay.png');
    game.load.image('btnSettings', 'assets/ui/btnSettings.png');
    game.load.image('btnFacebook', 'assets/ui/btnFacebook.png');
    game.load.image('btnPlay', 'assets/ui/btnPlay.png');
    game.load.image('btnSettings', 'assets/ui/btnSettings.png');
    game.load.image('btnFacebook', 'assets/ui/btnFacebook.png');
    //game.load.image('btnMusic', 'assets/ui/btnMusic.png');
    //game.load.image('btnSound', 'assets/ui/btnSound.png');
    game.load.image('levelFailed', 'assets/ui/levelFailed.png');
    game.load.image('levelSuccess', 'assets/ui/levelSuccess.png');
    game.load.image('btnRestart', 'assets/ui/btnRestart.png');
    game.load.image('btnLeft', 'assets/ui/btnLeft.png');
    game.load.image('btnRight', 'assets/ui/btnRight.png');
    game.load.image('btnPause', 'assets/ui/btnPause.png');
    game.load.image('btnClose', 'assets/ui/btnClose.png');
    game.load.image('topStatistics', 'assets/ui/topStatistics.png');
    game.load.image('stateProgressBar', 'assets/ui/stateProgressBar.png');
    game.load.spritesheet("levels", "assets/ui/levels.png", 64, 64);
    game.load.spritesheet("level_arrows", "assets/ui/level_arrows.png", 48, 48);
    game.load.spritesheet("starsSpritesheet", "assets/ui/starsSpritesheet.png", 183, 77);
    game.load.image("pausedModal", "assets/ui/pausedModal.png");

    
    
    //pares transcricao
    game.load.spritesheet('parT-g', 'assets/paresTranscricao/g.png', 50, 48, 3);
    game.load.spritesheet('parT-c', 'assets/paresTranscricao/c.png', 50, 48, 3);
    game.load.spritesheet('parT-t', 'assets/paresTranscricao/t.png', 50, 48, 3);
    game.load.spritesheet('parT-a', 'assets/paresTranscricao/a.png', 50, 48, 3);
    game.load.spritesheet('parT-u', 'assets/paresTranscricao/u.png', 50, 48, 3);
    game.load.spritesheet('parT-conector', 'assets/paresTranscricao/traco.png',6,190);


    //pares replicacao
    game.load.image('g-c', 'assets/pares/g-c.png');
    game.load.image('g-g', 'assets/pares/g-g.png');
    game.load.image('c-g', 'assets/pares/c-g.png');
    game.load.image('c-c', 'assets/pares/c-c.png');
    game.load.image('t-a', 'assets/pares/t-a.png');
    game.load.image('a-t', 'assets/pares/a-t.png');
    game.load.image('a-a', 'assets/pares/a-a.png');
    game.load.image('a-g', 'assets/pares/a-g.png');
    game.load.image('t-c', 'assets/pares/t-c.png');
    game.load.image('t-g', 'assets/pares/t-g.png');
    game.load.image('a-c', 'assets/pares/a-c.png');
    game.load.image('t-t', 'assets/pares/t-t.png');

    //plataformas
    game.load.image('centriolo', 'assets/plataformas/centriolo.png');
    game.load.image('golgi', 'assets/plataformas/golgi.png');
    game.load.image('lisossomo', 'assets/plataformas/lisossomo.png');
    game.load.spritesheet('vacuolo', 'assets/plataformas/vacuolo.png', 160, 120, 46);
    game.load.image('faixaRNA', 'assets/plataformas/faixaRNA.png');
    game.load.image('faixaDNA', 'assets/plataformas/faixaDNA.png');
    game.load.image('quadrado', 'assets/plataformas/quadrado.png');
    game.load.image('chaobg1', 'assets/plataformas/chaoRNA.png');


    //hpBars
    game.load.image('hpBarSM', 'assets/HpBars/hpBarSM.png');
    game.load.image('hpBarSMbg', 'assets/HpBars/hpBarSMbg.png');
    game.load.image('hpBarLG', 'assets/HpBars/hpBarLG.png');
    game.load.image('hpBarLGbg', 'assets/HpBars/hpBarLGbg.png');
    game.load.image('hpBarLONG', 'assets/HpBars/hpBarLONG.png');
    game.load.image('hpBarLONGbg', 'assets/HpBars/hpBarLONGbg.png');

    //caracteres   
    game.load.spritesheet('dnaPolimerase', 'assets/caracteres/dnaPolimerase.png',85,85,46);
    game.load.spritesheet('mutante1', 'assets/caracteres/mutante1.png',136,145,5);

    //backgrounds
    game.load.image('citoplasma', 'assets/backgrounds/citplasma.jpg');
    game.load.image('background2', 'assets/backgrounds/background2.png');
    game.load.image('background3', 'assets/backgrounds/background3.png');
    game.load.image('tipbg1', 'assets/backgrounds/tipbg1.png');

    //bullets
    game.load.spritesheet('mutante1Bullet', 'assets/bullets/mutante1Bullet.png',60, 45, 8);

    //audio
    game.load.audio('rightSound','assets/audios/rightSound.ogg');

    //efeitos
    game.load.spritesheet('explosion','assets/efeitos/explosion.png', 160, 160, 9);


}


function criarPreload(){
    game.state.start('startState');
}