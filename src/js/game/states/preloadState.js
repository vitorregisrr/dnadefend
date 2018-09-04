var preloadState = { create:criarPreload, preload: precarregarPreload}

var slider;
function precarregarPreload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    game.add.sprite(0,0,'background1');

    var logo = game.add.sprite(game.world.centerX , game.world.centerY - 120 , 'logo');
    logo.enableBody = true;
    logo.anchor.x = 0.5;
    logo.anchor.y = 0.5;
    logo.scale.setTo(0.8, 0.8);

    var preloadBarBg = game.add.sprite(game.world.centerX, game.world.centerY +60, 'preloadBarBg');
    preloadBarBg.enableBody = true;
    preloadBarBg.anchor.x = 0.5;
    preloadBarBg.anchor.y = 0.5;


    preloadBar = game.add.sprite(150, 345, 'preloadBar');
    this.load.setPreloadSprite(preloadBar);

    slider = new phaseSlider(game); 
    

    //videos
    game.load.video('libras1', 'assets/videoslibras/libras1.mp4');
    game.load.video('libras2', 'assets/videoslibras/libras2.mp4');


    //caracteres
    
    //UI elements
    game.load.image('btnPlay', 'assets/ui/btnPlay.png');
    game.load.image('btnSettings', 'assets/ui/btnSettings.png');
    game.load.image('btnFacebook', 'assets/ui/btnFacebook.png');
    game.load.image('btnPlay', 'assets/ui/btnPlay.png');
    game.load.image('btnSettings', 'assets/ui/btnSettings.png');
    game.load.image('btnFacebook', 'assets/ui/btnFacebook.png');
    game.load.image('levelFailed', 'assets/ui/levelFailed.png');
    game.load.image('levelSuccess', 'assets/ui/levelSuccess.png');
    game.load.image('btnRestart', 'assets/ui/btnRestart.png');
    game.load.image('btnLeft', 'assets/ui/btnLeft.png');
    game.load.image('btnRight', 'assets/ui/btnRight.png');
    game.load.image('btnPause', 'assets/ui/btnPause.png');
    game.load.image('btnClose', 'assets/ui/btnClose.png');
    game.load.image('btnEscutar', 'assets/ui/btnEscutar.png');
    game.load.image('topStatistics', 'assets/ui/topStatistics.png');
    game.load.image('stateProgressBar', 'assets/ui/stateProgressBar.png');
    game.load.spritesheet("levels", "assets/ui/levels.png", 100, 70);
    game.load.spritesheet("level_arrows", "assets/ui/level_arrows.png", 48, 48);
    game.load.spritesheet("starsSpritesheet", "assets/ui/starsSpritesheet.png", 183, 77);
    game.load.image("pausedModal", "assets/ui/pausedModal.png");
    game.load.image("configModal", "assets/ui/configModal.png");
    game.load.image("btnOk", "assets/ui/btnOk.png");

    game.load.image("librasBtn", "assets/ui/librasBtn.png");
    game.load.image("iBtn", "assets/ui/iBtn.png");
    game.load.image("tutorial1", "assets/ui/tutorial1.png");
    game.load.image("tutorial2", "assets/ui/tutorial2.png");
    game.load.image("tutorial3", "assets/ui/tutorial3.png");

    game.load.spritesheet("switch", "assets/ui/switch.png", 75, 34, 2);

    
    //rnaM fase 3
    game.load.image('rnaM1','assets/rnaM/rnaM1.png');
    game.load.image('rnaM2','assets/rnaM/rnaM2.png');
    game.load.image('rnaM3','assets/rnaM/rnaM3.png');

    
    //pares transcricao
    game.load.spritesheet('parT-g', 'assets/paresTranscricao/g.png', 50, 48, 3);
    game.load.spritesheet('parT-c', 'assets/paresTranscricao/c.png', 50, 48, 3);
    game.load.spritesheet('parT-t', 'assets/paresTranscricao/t.png', 50, 48, 3);
    game.load.spritesheet('parT-a', 'assets/paresTranscricao/a.png', 50, 48, 3);
    game.load.spritesheet('parT-u', 'assets/paresTranscricao/u.png', 50, 48, 3);
    
    game.load.spritesheet('parTL-g', 'assets/paresTranscricao/gl.png', 50, 48, 3);
    game.load.spritesheet('parTL-c', 'assets/paresTranscricao/cl.png', 50, 48, 3);
    game.load.spritesheet('parTL-t', 'assets/paresTranscricao/tl.png', 50, 48, 3);
    game.load.spritesheet('parTL-a', 'assets/paresTranscricao/al.png', 50, 48, 3);
    game.load.spritesheet('parTL-u', 'assets/paresTranscricao/ul.png', 50, 48, 3);

    game.load.spritesheet('parT-conector', 'assets/paresTranscricao/traco.png',6,190);
    game.load.spritesheet('corrigirBtn', 'assets/paresTranscricao/botaocorrigir.png', 100, 60, 2);
    game.load.spritesheet('btnProsseguir', 'assets/paresTranscricao/prosseguirBtn.png', 100, 60, 2);

    //pares replicacao
    game.load.spritesheet('g-c', 'assets/pares/g-c.png', 45, 40);
    game.load.spritesheet('g-g', 'assets/pares/g-g.png', 45, 40);
    game.load.spritesheet('c-g', 'assets/pares/c-g.png', 45, 40);
    game.load.spritesheet('c-c', 'assets/pares/c-c.png', 45, 40);
    game.load.spritesheet('t-a', 'assets/pares/t-a.png', 45, 40);
    game.load.spritesheet('a-t', 'assets/pares/a-t.png', 45, 40);
    game.load.spritesheet('a-a', 'assets/pares/a-a.png', 45, 40);
    game.load.spritesheet('a-g', 'assets/pares/a-g.png', 45, 40);
    game.load.spritesheet('t-c', 'assets/pares/t-c.png', 45, 40);
    game.load.spritesheet('t-g', 'assets/pares/t-g.png', 45, 40);
    game.load.spritesheet('a-c', 'assets/pares/a-c.png', 45, 40);
    game.load.spritesheet('t-t', 'assets/pares/t-t.png', 45, 40);
    

    //plataformas
    game.load.spritesheet('vacuolo', 'assets/plataformas/vacuolo.png', 160, 120, 46);
    game.load.image('faixaRNA', 'assets/plataformas/faixaRNA.png');
    game.load.image('faixaDNA', 'assets/plataformas/faixaDNA.png');
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
    game.load.spritesheet('rnaPolimerase', 'assets/caracteres/rnaPolimerase.png',85,85,46);
    game.load.spritesheet('personagemDefault', 'assets/caracteres/personagemDefault.png',85,85,46);
    game.load.spritesheet('mutante1', 'assets/caracteres/mutante1.png',136,145,5);

    //backgrounds
    game.load.image('background2', 'assets/backgrounds/background2.png');
    game.load.image('bgblur', 'assets/backgrounds/bgblur.png');
    game.load.image('background3', 'assets/backgrounds/background3.png');
    game.load.image('tipbg1', 'assets/backgrounds/tipbg1.png');
    game.load.image('chao1', 'assets/plataformas/chao1.png');
    
        //background niveis
        game.load.spritesheet('level1bg', 'assets/backgrounds/level1bg.png',265, 462, 2);
        game.load.spritesheet('level2bg', 'assets/backgrounds/level2bg.png',265, 462, 2);
        game.load.spritesheet('level3bg', 'assets/backgrounds/level3bg.png',265, 462, 2);

    //bullets
    game.load.spritesheet('mutante1Bullet', 'assets/bullets/mutante1Bullet.png',60, 45, 8);
    game.load.image('anticorpo', 'assets/bullets/anticorpo.png');

    //audio
    game.load.audio('a','assets/audios/acessibilidade/a.ogg');
    game.load.audio('t','assets/audios/acessibilidade/t.ogg');
    game.load.audio('u','assets/audios/acessibilidade/u.ogg');
    game.load.audio('g','assets/audios/acessibilidade/g.ogg');
    game.load.audio('c','assets/audios/acessibilidade/c.ogg');
    game.load.audio('par','assets/audios/acessibilidade/par.ogg');
    game.load.audio('certo','assets/audios/acessibilidade/certo.ogg');

    game.load.audio('attack','assets/audios/attack.ogg');
    game.load.audio('hurt','assets/audios/hurt.ogg');
    game.load.audio('right','assets/audios/right.ogg');
    game.load.audio('boxChange','assets/audios/boxChange.ogg');
    game.load.audio('mutScream','assets/audios/mutScream.ogg');

    game.load.audio('errado','assets/audios/acessibilidade/errado.ogg');
    game.load.audio('reparado','assets/audios/acessibilidade/reparado.ogg');
    game.load.audio('mutacao-gerada','assets/audios/acessibilidade/mutacao-gerada.ogg');
    game.load.audio('door','assets/audios/door.ogg');
    game.load.audio('catch','assets/audios/catch.ogg');
    game.load.audio('wrong','assets/audios/wrong.ogg');

    
    game.load.audio('metionina','assets/audios/acessibilidade/metionina.ogg');
    game.load.audio('triptofano','assets/audios/acessibilidade/triptofano.ogg');
    game.load.audio('treomina','assets/audios/acessibilidade/treomina.ogg');
    game.load.audio('acidoglutaminico','assets/audios/acessibilidade/acidoglutaminico.ogg');
    game.load.audio('prolina','assets/audios/acessibilidade/prolina.ogg');
    game.load.audio('alanina','assets/audios/acessibilidade/alanina.ogg');
    game.load.audio('leucina','assets/audios/acessibilidade/leucina.ogg');
    game.load.audio('serina','assets/audios/acessibilidade/serina.ogg');
    game.load.audio('histidina','assets/audios/acessibilidade/histidina.ogg');
    
    //efeitos
    game.load.spritesheet('explosion','assets/efeitos/explosion.png', 160, 160, 9);

    //gerador de amonoacidos
    game.load.spritesheet('gerador','assets/amnoacidos/gerador.png', 170, 78, 5);
    game.load.image('gerador-leftarrow', 'assets/amnoacidos/leftarrow.png');
    game.load.image('gerador-rightarrow', 'assets/amnoacidos/rightarrow.png');
    game.load.image('painelAmnoacido1', 'assets/amnoacidos/painelAmnoacido1.png');
    game.load.image('painelAmnoacido2', 'assets/amnoacidos/painelAmnoacido2.png');
    game.load.image('painelAmnoacido3', 'assets/amnoacidos/painelAmnoacido3.png');
    game.load.image('painelAmnoacido4', 'assets/amnoacidos/painelAmnoacido4.png');
    game.load.image('painelAmnoacido5', 'assets/amnoacidos/painelAmnoacido5.png');
    game.load.image('painelAmnoacido6', 'assets/amnoacidos/painelAmnoacido6.png');
    game.load.image('painelAmnoacido7', 'assets/amnoacidos/painelAmnoacido7.png');
    game.load.image('painelAmnoacido8', 'assets/amnoacidos/painelAmnoacido8.png');
    game.load.image('painelAmnoacido9', 'assets/amnoacidos/painelAmnoacido9.png');

    game.load.image('gerarBtn', 'assets/amnoacidos/gerarBtn.png');


    //amnoacidos
    game.load.spritesheet('amnoacido0','assets/amnoacidos/amnoacido0.png', 91, 30, 3);
    game.load.spritesheet('amnoacido1','assets/amnoacidos/amnoacido1.png', 91, 30, 3);
    game.load.spritesheet('amnoacido2','assets/amnoacidos/amnoacido2.png', 91, 30, 3);
    game.load.spritesheet('amnoacido3','assets/amnoacidos/amnoacido3.png', 91, 30, 3);
    game.load.spritesheet('amnoacido4','assets/amnoacidos/amnoacido4.png', 91, 30, 3);
    game.load.spritesheet('amnoacido5','assets/amnoacidos/amnoacido5.png', 91, 30, 3);
    game.load.spritesheet('amnoacido6','assets/amnoacidos/amnoacido6.png', 91, 30, 3);
    game.load.spritesheet('amnoacido7','assets/amnoacidos/amnoacido7.png', 91, 30, 3);
    game.load.spritesheet('amnoacido8','assets/amnoacidos/amnoacido8.png', 91, 30, 3);
    game.load.image('ribossomo','assets/amnoacidos/ribossomo.png', 91, 30, 3);

}


function criarPreload(){
    game.state.start('startState');
}