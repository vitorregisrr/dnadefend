var gameState1 = {
    create: criarState1,
    update: atualizarState1,
    render: render
};

var nuvens;
var score = 0;
var paresLoop;

function criarState1() {
    game.world.setBounds(0, 0, 800, 600);
    sounds.gen();
    locucao.gen();
    createModals();
    levelNumber = 1;
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();
    upButton = game.input.keyboard.addKey(Phaser.Keyboard.W);
    downButton = game.input.keyboard.addKey(Phaser.Keyboard.S);
    leftButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
    rightButton = game.input.keyboard.addKey(Phaser.Keyboard.D);
    score = 0;

    //gerando o bg
    game.add.sprite(0,0,'background1');

    organelas.presets();
    organelas.gen(20, 300, 1);
    organelas.gen(230, 320, 2);
    organelas.gen(430, 310, 3);
    organelas.gen(640, 305, 4);
    
    //cria o dna 
    dna = game.add.sprite(0, 450, 'faixaDNA');
    game.physics.arcade.enable(dna);
    dna.enableBody = true;
    dna.body.immovable = true;
    dna.body.setSize(800, 60, 0, 45);
    

    //mutacoes
    mutacoes.presets();

    //pares gen
    paresReplicacao.presets();
    paresLoop = game.time.events.loop(Phaser.Timer.SECOND * 3, function () {
        paresReplicacao.gen(game.rnd.integerInRange(0, 700), -50, game.rnd.integerInRange(1, 11));
    }, this);

    //cria a dna polimerase
    dnaPolimerase.gen(20, 200);
    dnaPolimerase.element.loadTexture('dnaPolimerase'); 
    gameUI();
    
}

function atualizarState1() {

    mutacoes.collide();
    organelas.collide();
    paresReplicacao.colisao();
    dnaPolimerase.move();
    //levelSuccess();
}


function render() {
    
}