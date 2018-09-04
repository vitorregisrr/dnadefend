var gameState3 = {
    create: criarState3,
    update: atualizarState3,
    render: render,
};

var rna, dna,chao;
function criarState3() {
    sounds.gen();
    createModals();
    locucao.gen();

    levelNumber = 3;
    game.physics.startSystem(Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();
    upButton = game.input.keyboard.addKey(Phaser.Keyboard.W);
    downButton = game.input.keyboard.addKey(Phaser.Keyboard.S);
    leftButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
    rightButton = game.input.keyboard.addKey(Phaser.Keyboard.D);

    //gerando o bg
    game.add.sprite(0,0,'background1');

    //chao
    chao = game.add.sprite(0,420,'chao1');
    game.physics.arcade.enable(chao);
    chao.enableBody = true;
    chao.body.immovable = true;
    chao.body.setSize(1000,30,0,95);
    

    //criacao rnaM
    rnaM.gen( game.rnd.integerInRange(1, 3) );

    //gera a primeira trinca
    rnaT.presets(); 
    rnaT.gen(0);
    
    //mutacoes
    mutacoes.presets();

    //cria a dna polimerase
    dnaPolimerase.gen(20, 410);   
    dnaPolimerase.element.loadTexture('personagemDefault'); 
    gameUI();

    //pares replicacao
    paresReplicacao.presets();

    //cria o gerador
    gerador.gen();

    //amnoacidos
    amnoacidos.presets();

    //camera
    game.world.setBounds(0, 0, 1000, 600);
    game.camera.follow(dnaPolimerase.element);
}

function atualizarState3() {

    game.physics.arcade.collide(dnaPolimerase.element, chao);
    rnaT.colisao();
    dnaPolimerase.move();
    mutacoes.collide();
}
function render(){
}