//esse valor será usado na hora de chamar as texturas
var l;


var paresTranscricao = new Object();

paresTranscricao.presets = function () {

    if(config.libras){
        l = "L";
    }else{
        l ="";
    }

    mutacoesCriadas = 0;
    mutacoesReparadas = 0;
    this.group = game.add.group();
    game.physics.arcade.enable(this.group);
    this.group.enableBody = true;
    mutacoesReparadas = 0;
    mutacoesCriadas = 0;


    game.time.events.loop(800, function () {
        if (paresTranscricao.colidindo) {
            paresTranscricao.colidindo = false;
        }
    });
}

paresTranscricao.gen = function () {

    this.checkButton = game.add.sprite(680,370,'corrigirBtn');
    game.physics.arcade.enable(this.checkButton);
    this.checkButton.animations.add('press');
    this.checkButton.enableBody = true;
    this.checkButton.body.immovable = true;

    this.conectores = new Array();

    this.checked = false;
    var xo = 40;
    this.quadradosDNA = new Array();
    this.quadradosRNA = new Array();
    
    var quadradosDNA = ['a', 't', 'g', 'c'];
    var quadradosRNA = ['a', 'u', 'g', 'c'];

    var locInterv = 800;
    for (var x = 0; x <= 7; x++) {
        var r = game.rnd.pick(quadradosDNA);
        
        /*
        setTimeout(function(r){
            locucao.call(r);
            console.log(r);
        },locInterv);
        */
        
        this.quadradosDNA.push(this.group.create(xo, 180, 'parT' +l+ '-' + r));

        var e = this.quadradosDNA[this.quadradosDNA.length - 1];
        e.body.immovable = true;
        e.letra = r;
        e.par = this.returnPar(r);
        e.alpha = 1;
        xo += e.width + 30;
        this.conectores.push(game.add.sprite(e.x + 20.5, e.y + 38, 'parT-conector'));

        locInterv += 800;
    }

    xo = 40;
    for (var x = 0; x <= 7; x++) {
        var r = game.rnd.pick(quadradosRNA);
        this.quadradosRNA.push(this.group.create(xo, 380, 'parT' +l+ '-' + r));

        var e = this.quadradosRNA[this.quadradosRNA.length - 1];
        e.body.immovable = true;
        e.letra = r;
        e.alpha = 1;
        xo += e.width + 30;
    }
    game.world.bringToTop(this.group);
}

paresTranscricao.check = function () {
    this.checkButton.frame = 1;
    setTimeout(function(){
        paresTranscricao.checkButton.frame = 0;
    }, 150);
    this.checked = true;
    var respostas = new Array();

    for (var x = 0; x <= 7; x++) {
        if (this.quadradosRNA[x].letra == this.quadradosDNA[x].par) {
            respostas.push(true);
            mutacoesReparadas++;
            textMutacoesReparadas.setText(mutacoesReparadas);
        } else {
            respostas.push(false);
            mutacoesCriadas++;
            textMutacoesCriadas.setText(mutacoesCriadas);
        }
    }
    
    var timeout = 200;
    for (x = 0; x <= this.quadradosRNA.length -1; x++) {

        if (respostas[x]) {
            this.conectores[x].frame = 1;
            this.quadradosDNA[x].frame = 1;
            this.quadradosRNA[x].frame = 1;
        } else {
            this.conectores[x].frame = 2;
            this.quadradosDNA[x].frame = 2;
            this.quadradosRNA[x].frame = 2;
        }

        timeout += 500;

    }

    //saida do cenário
    game.time.events.add(Phaser.Timer.SECOND * 4, function(){
        for(x=0; x<=paresTranscricao.quadradosRNA.length -1; x++){

            game.add.tween(paresTranscricao.quadradosDNA[x]).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true, 0);
            game.add.tween(paresTranscricao.quadradosRNA[x]).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true, 0);

            game.time.events.add(Phaser.Timer.SECOND * 3, function(x){
                paresTranscricao.quadradosRNA[x].destroy();
                paresTranscricao.quadradosDNA[x].destroy();
            }, this, x);
        }

        for(x=0; x<=paresTranscricao.conectores.length -1; x++){

            game.add.tween(paresTranscricao.conectores[x]).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true, 0);
            game.time.events.add(Phaser.Timer.SECOND * 3, function(x){
                paresTranscricao.conectores[x].destroy();
            }, this, x);
        }

        game.add.tween(paresTranscricao.checkButton).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true, 0);
        game.time.events.add(Phaser.Timer.SECOND * 3, function(x){
            paresTranscricao.checkButton.destroy();
            mutacoes.gen(50, 155, 40, 1);
        }, this, null);

    }, this);

}

paresTranscricao.returnPar = function (r) {
    switch (r) {
        case 'a':
            return 'u';
            break;

        case 't':
            return 'a';
            break;

        case 'g':
            return 'c';
            break;

        case 'c':
            return 'g';
            break;
    }

}

var i = 0;
paresTranscricao.change = function (e) {
    if(!this.checked){
        var possibilidadesRNA = ['a', 't', 'u', 'c', 'g'];
        e.loadTexture('parT' +l+ '-' + possibilidadesRNA[i]);
        e.letra = possibilidadesRNA[i];
        locucao.call(e.letra);
        i++;
        if (i == 5) {
            i = 0;
        }
    }
}

paresTranscricao.colisao = function () {
    this.group.forEachAlive(function (quadrado) {
        game.physics.arcade.collide(quadrado, dnaPolimerase.element, function () {
            if (!paresTranscricao.colidindo) {
                paresTranscricao.colidindo = true;
                paresTranscricao.change(quadrado);
            }

        }, null, this);
    });

    game.physics.arcade.collide(paresTranscricao.checkButton, dnaPolimerase.element, function () {
        if (!paresTranscricao.colidindo) {
            paresTranscricao.colidindo = true;
            if(!paresTranscricao.checked){
                paresTranscricao.check();
            }
        }

    }, null, this);


}