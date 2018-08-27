var mutacoesCriadas = 0,
    mutacoesReparadas = 0;

var paresReplicacao = {
    bodys: new Array(),

    presets: function () {
        this.group = game.add.group();
        this.group.enableBody = true;
        game.physics.arcade.enable(this.group);
        mutacoesReparadas = 0;
        mutacoesCriadas = 0;
    },

    gen: function (x, y, par) {
        switch (par) {

            case 1:
                this.bodys.push(this.group.create(x, y, 'g-c'));
                this.bodys[this.bodys.length - 1].mutacao = false;
                this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(20, 40);
                locucao.call('g', 'c', true);

                break;

            case 2:
                this.bodys.push(this.group.create(x, y, 'g-g'));
                this.bodys[this.bodys.length - 1].mutacao = true;
                this.bodys[this.bodys.length - 1].pair = 'g-c';
                this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(20, 40);
                locucao.call('g', 'g', true);
                break;

            case 3:
                this.bodys.push(this.group.create(x, y, 'a-a'));
                this.bodys[this.bodys.length - 1].mutacao = true;
                this.bodys[this.bodys.length - 1].pair = 'a-t';
                this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(20, 40);
                locucao.call('a', 'a', true);
                break;

            case 4:
                this.bodys.push(this.group.create(x, y, 'a-c'));
                this.bodys[this.bodys.length - 1].mutacao = true;
                this.bodys[this.bodys.length - 1].pair = 'a-t';
                this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(20, 40);
                locucao.call('a', 'c', true);
                break;

            case 5:
                this.bodys.push(this.group.create(x, y, 't-t'));
                this.bodys[this.bodys.length - 1].mutacao = true;
                this.bodys[this.bodys.length - 1].pair = 't-a';
                this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(60, 90);
                locucao.call('t', 't', true);
                break;

            case 6:
                this.bodys.push(this.group.create(x, y, 't-g'));
                this.bodys[this.bodys.length - 1].mutacao = true;
                this.bodys[this.bodys.length - 1].pair = 't-a';
                this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(60, 90);
                locucao.call('t', 'g', true);
                break;

            case 7:
                this.bodys.push(this.group.create(x, y, 't-c'));
                this.bodys[this.bodys.length - 1].mutacao = true;
                this.bodys[this.bodys.length - 1].pair = 't-a';
                this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(60, 90);
                locucao.call('t', 'c', true);

                break;

            case 8:
                this.bodys.push(this.group.create(x, y, 't-a'));
                this.bodys[this.bodys.length - 1].mutacao = false;
                this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(60, 90);
                locucao.call('t', 'a', true);

                break;


            case 9:
                this.bodys.push(this.group.create(x, y, 'c-g'));
                this.bodys[this.bodys.length - 1].mutacao = false;
                this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(60, 90);
                locucao.call('c', 'g', true);

                break;

            case 10:
                this.bodys.push(this.group.create(x, y, 'a-t'));
                this.bodys[this.bodys.length - 1].mutacao = false;
                this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(60, 90);
                locucao.call('a', 't', true);

                break;

            case 11:
                this.bodys.push(this.group.create(x, y, 'a-g'));
                this.bodys[this.bodys.length - 1].mutacao = true;
                this.bodys[this.bodys.length - 1].pair = 'a-t';
                this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(60, 90);
                locucao.call('a', 'g', true);

                break;

            case 11:
                this.bodys.push(this.group.create(x, y, 'c-c'));
                this.bodys[this.bodys.length - 1].mutacao = true;
                this.bodys[this.bodys.length - 1].pair = 'c-g';
                this.bodys[this.bodys.length - 1].body.gravity.y = game.rnd.integerInRange(60, 90);
                locucao.call('c', 'g', true);
                break;

        }

        this.bodys[this.bodys.length - 1].cont = false;
    },

    colisao: function () {
        this.group.forEachAlive(function (quadrado) {
            var e = quadrado;
            game.physics.arcade.overlap(dna, e, function () {

                if (e.mutacao) { //se for mutaçao
                    mutacoesCriadas++;
                    e.frame = 2;
                    textMutacoesCriadas.setText(mutacoesCriadas);

                    dnaPolimerase.animating = true;
                    dnaPolimerase.element.animations.play('angry', 10);
                    setTimeout(function () {
                        dnaPolimerase.animating = false;
                    }, 300);

                    if (score > 0) { //se der pra tirar o score
                        score--;
                        e.frame = 1;
                        game.add.tween(stateProgressBar.scale).to({
                            x: score / 20,
                            y: 1
                        }, 600, Phaser.Easing.Linear.None, true);
                    }
                }
                e.destroy();
            }, null, this);
        });

        this.group.forEachAlive(function (e) {
            game.physics.arcade.overlap(dnaPolimerase.element, e, function () {
                if (!e.cont) { //contador para nao mudar +1x
                    e.cont = true;

                    if (e.mutacao) { //se for mutação
                        locucao.call('reparado');
                        dnaPolimerase.animating = true;
                        dnaPolimerase.element.animations.play('changing');
                        game.time.events.add(400, function () {
                            dnaPolimerase.animating = false;
                        });

                        score++;
                        e.loadTexture(e.pair);
                        e.frame = 1;
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

                    } else if (!e.mutacao) { // se não for mutacao
                        locucao.call('errado');
                        e.frame = 2;
                        dnaPolimerase.animating = true;
                        dnaPolimerase.element.animations.play('angry', 10);
                        setTimeout(function () {
                            dnaPolimerase.animating = false;
                        }, 300);

                        if (score > 0) {
                            score--;
                            game.add.tween(stateProgressBar.scale).to({
                                x: score / 20,
                                y: 1
                            }, 600, Phaser.Easing.Linear.None, true);
                        }
                    }
                }

            }, null, this);
        });
    }
}