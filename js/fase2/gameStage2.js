var gameState2 = {
    create: criarState2,
    update: atualizarState2,
    render: render,
};

var rna, dna,chao;
function criarState2() {
    game.world.setBounds(0, 0, 800, 600);
    createModals();
    locucao.gen();
    sounds.gen();
    
    levelNumber = 2;
    game.physics.startSystem(Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();
    upButton = game.input.keyboard.addKey(Phaser.Keyboard.W);
    downButton = game.input.keyboard.addKey(Phaser.Keyboard.S);
    leftButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
    rightButton = game.input.keyboard.addKey(Phaser.Keyboard.D);

    //gerando o bg
    game.add.sprite(0,0,'background1');

    //cria o dna 
    dna = game.add.sprite(0, 10, 'faixaDNA');
    game.physics.arcade.enable(dna);
    dna.enableBody = true;
    dna.body.immovable = true;
    dna.body.setSize(800, 60, 0, 45);

    //chao
    chao = game.add.sprite(0,460,'chaobg1');
    game.physics.arcade.enable(chao);
    chao.enableBody = true;
    chao.body.immovable = true;
    chao.body.setSize(800,30,0,85);
    
    //cria os quadrados
    paresTranscricao.presets();
    paresTranscricao.gen();

    //mutacoes
    mutacoes.presets();
    paresReplicacao.presets();

    //cria a dna polimerase
    dnaPolimerase.gen(20, 450);    
    gameUI();

    //paresTranscricao.check();
}

function atualizarState2() {
    
    game.physics.arcade.collide(dnaPolimerase.element, chao);
    dnaPolimerase.move();
    mutacoes.collide();
    paresTranscricao.colisao();
}
function render(){
}