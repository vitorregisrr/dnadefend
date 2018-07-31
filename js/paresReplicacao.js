var paresReplicacao = new Object();
paresReplicacao.bodys = new Array();
var mutacoesCriadas = 0;
var mutacoesReparadas = 0;

paresReplicacao.presets = function () {
    this.group = game.add.group();
    this.group.enableBody = true;
    game.physics.arcade.enable(this.group);
    mutacoesReparadas = 0;
    mutacoesCriadas = 0;
}

paresReplicacao.possets = function () {}

paresReplicacao.gen = function (x, y, par) {
    switch (par) {

        case 1:
            this.bodys.push(this.group.create(x, y, 'g-c'));
            this.bodys[this.bodys.length - 1].mutacao = false;
            this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(60, 90);

            break;

        case 2:
            this.bodys.push(this.group.create(x, y, 'g-g'));
            this.bodys[this.bodys.length - 1].mutacao = true;
            this.bodys[this.bodys.length - 1].pair = 'g-c';
            this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(60, 90);
            break;

        case 3:
            this.bodys.push(this.group.create(x, y, 'a-a'));
            this.bodys[this.bodys.length - 1].mutacao = true;
            this.bodys[this.bodys.length - 1].pair = 'a-t';
            this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(60, 90);
            break;

        case 4:
            this.bodys.push(this.group.create(x, y, 'a-c'));
            this.bodys[this.bodys.length - 1].mutacao = true;
            this.bodys[this.bodys.length - 1].pair = 'a-t';
            this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(60, 90);
            break;

        case 5:
            this.bodys.push(this.group.create(x, y, 't-t'));
            this.bodys[this.bodys.length - 1].mutacao = true;
            this.bodys[this.bodys.length - 1].pair = 't-a';
            this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(60, 90);
            break;

        case 6:
            this.bodys.push(this.group.create(x, y, 't-g'));
            this.bodys[this.bodys.length - 1].mutacao = true;
            this.bodys[this.bodys.length - 1].pair = 't-a';
            this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(60, 90);
            break;

        case 7:
            this.bodys.push(this.group.create(x, y, 't-c'));
            this.bodys[this.bodys.length - 1].mutacao = true;
            this.bodys[this.bodys.length - 1].pair = 't-a';
            this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(60, 90);
            break;

        case 8:
            this.bodys.push(this.group.create(x, y, 't-a'));
            this.bodys[this.bodys.length - 1].mutacao = false;
            this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(60, 90);

            break;


        case 9:
            this.bodys.push(this.group.create(x, y, 'c-g'));
            this.bodys[this.bodys.length - 1].mutacao = false;
            this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(60, 90);

            break;

        case 10:
            this.bodys.push(this.group.create(x, y, 'a-t'));
            this.bodys[this.bodys.length - 1].mutacao = false;
            this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(60, 90);

            break;

        case 11:
            this.bodys.push(this.group.create(x, y, 'a-g'));
            this.bodys[this.bodys.length - 1].mutacao = true;
            this.bodys[this.bodys.length - 1].pair = 'a-t';
            this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(60, 90);

            break;

        case 11:
            this.bodys.push(this.group.create(x, y, 'c-c'));
            this.bodys[this.bodys.length - 1].mutacao = true;
            this.bodys[this.bodys.length - 1].pair = 'c-g';
            this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(60, 90);
            break;

    }

    this.bodys[this.bodys.length - 1].cont = false;
}

paresReplicacao.colisao = function () {

    this.group.forEachAlive(function (quadrado) {
        var e = quadrado;
        game.physics.arcade.overlap(dna, e, function () {
            if (e.mutacao) {
                mutacoesCriadas++;
                textMutacoesCriadas.setText(mutacoesCriadas);
                if (score > 0) {
                    score--;
                    game.add.tween(stateProgressBar.scale).to({
                        x: score / 20,
                        y: 1
                    }, 600, Phaser.Easing.Linear.None, true);
                }
            }
            e.destroy();
        }, null, this);
    });

    this.group.forEachAlive(function (quadrado) {
        var e = quadrado;
        game.physics.arcade.overlap(dnaPolimerase.element, e, function () {
            if (!e.cont) {
                e.cont = true;
                dnaPolimerase.animating = true;
                dnaPolimerase.element.animations.play('changing');
                game.time.events.add(400, function () {
                    dnaPolimerase.animating = false;
                });

                if (e.mutacao) {
                    score++;
                    e.loadTexture(e.pair);
                    e.mutacao = false;
                    mutacoesReparadas++;
                    textMutacoesReparadas.setText(mutacoesReparadas);
                    game.add.tween(stateProgressBar.scale).to({
                        x: score / 20,
                        y: 1
                    }, 600, Phaser.Easing.Linear.None, true);
                    if (score == 20) {
                        game.time.events.remove(paresLoop);
                        mutacoes.gen(70, 85, 40, 1);
                    }

                } else if (!e.mutacao && score > 0) {
                    score--;
                    game.add.tween(stateProgressBar.scale).to({
                        x: score / 20,
                        y: 1
                    }, 600, Phaser.Easing.Linear.None, true);
                }
            }

        }, null, this);
    });
}