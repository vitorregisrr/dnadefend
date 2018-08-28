var jogada,
    rnaTxo = 8,
    contTrinca = 0,
    i = 0;
var rnaT = {
    presets: function () {
        if (config.libras) {
            l = "L";
        } else {
            l = "";
        }

        jogada = 0;
        mutacoesCriadas = 0;
        mutacoesReparadas = 0;
        this.group = game.add.group();
        game.physics.arcade.enable(this.group);
        this.group.enableBody = true;
        mutacoesReparadas = 0;
        mutacoesCriadas = 0;

        //loop de timeout para colisao dos quadrados
        game.time.events.loop(800, function () {
            if (rnaT.colidindo) {
                rnaT.colidindo = false;
            }
        });

        //loop de timeout para colisao do botao
        game.time.events.loop(4500, function () {
            if (rnaT.colidindoBtn) {
                rnaT.colidindoBtn = false;
            }
        });
    },

    gen: function () {
        if (contTrinca != 6) {
            //regera o botão
            this.checked = false;
            this.checkButton = game.add.sprite(400, 346, 'corrigirBtn');
            game.physics.arcade.enable(this.checkButton);
            this.checkButton.animations.add('press');
            this.checkButton.enableBody = true;
            this.checkButton.body.immovable = true;
            this.checkButton.alpha = 0;
            //fadeIn de entrada do botao
            game.add.tween(this.checkButton).to({
                alpha: 1
            }, 1500, Phaser.Easing.Linear.None, true, 0);

            //para gerar as letras aleatoriamente
            var possibilidadesRNAt = ['a', 'u', 'g', 'c'];

            xo = 100;

            //gera a trinca
            for (var x = 0; x <= 2; x++) {
                var r = game.rnd.pick(possibilidadesRNAt);
                var e = this.group.create(xo, 290, 'parT' + l + '-' + r);
                e.body.immovable = true;
                e.letra = r;
                e.alpha = 0;
                e.body.setSize(62, 55, 0, 0);
                xo += e.width + 30;

                //fade in da trinca
                game.add.tween(e).to({
                    alpha: 1
                }, 1500, Phaser.Easing.Linear.None, true, 0);
            }
            // traz todos para cima
            game.world.bringToTop(this.group);
            //aumenta o tamanho
            this.group.scale.set(1.2, 1.2);
        } else {
           ribossomo.gen();
        }
    },

    check: function () {

        if (this.checkButton) {
            this.checkButton.kill();
        }

        // ***** OS FORS ABAIXO É UMA GAMBIARRA MONSTRUOSA E NÃO PODE SER VISTO POR NINGUÉM *******//
        var fix = [
            [0, 2],
            [3, 5],
            [6, 8],
            [9, 11],
            [12, 14],
            [15, 17],
            [18, 20],
            [21, 23],
            [24, 26]
        ];
        var y = 0;

        //animacao do botao
        this.checked = true;
        this.checkButton.frame = 1;
        setTimeout(function () {
            rnaT.checkButton.frame = 0;
        }, 150);

        //variavel respostas guarda true ou false, a trinca guarda as letras enviadas(trinca)
        var respostas = new Array();
        var trinca = new Array();

        rnaTxo += 14;
        //percorre a trinca atual
        for (var x = fix[jogada][0]; x <= fix[jogada][1]; x++) {

            //guarda a letra no array trinca
            trinca.push(this.group.getAt(x).letra);
            //setta o checked para não ser mais alteravel
            this.group.getAt(x).checked = true;

            if (trinca[y] == rnaM.rnaT[jogada][y]) {
                respostas.push(true);
                mutacoesReparadas++;
                textMutacoesReparadas.setText(mutacoesReparadas);
                this.group.getAt(x).frame = 1;
            } else {
                respostas.push(false);
                mutacoesCriadas++;
                textMutacoesCriadas.setText(mutacoesCriadas);
                this.group.getAt(x).frame = 2;
            }

            //animação para ir para posição de envio e ir diminuindo de tamanho
            game.add.tween(this.group.getAt(x)).to({
                x: rnaTxo,
                y: 200,
            }, 1500, Phaser.Easing.Linear.None, true, 0);

            game.add.tween(this.group.getAt(x).scale).to({
                x: 0.5,
                y: 0.5
            }, 1500, Phaser.Easing.Linear.None, true);

            rnaTxo += 22;

            //incrementa o y que na verdade é gambariarra do for
            y++
        }
        rnaT.gen();
        jogada += 1;
        contTrinca++;
    },

    change: function (e) {
        if (!this.checked) {
            sounds.play('boxChange');
            var possibilidadesRNAt = ['a', 't', 'u', 'c', 'g'];
            e.loadTexture('parT' + l + '-' + possibilidadesRNAt[i]);
            e.letra = possibilidadesRNAt[i];
            i++;
            locucao.call(e.letra);
            if (i == 5) {
                i = 0;
            }
        }
    },

    colisao: function () {
        this.group.forEachAlive(function (quadrado) {
            game.physics.arcade.collide(quadrado, dnaPolimerase.element, function () {
                if (!rnaT.colidindo && !quadrado.checked) {
                    rnaT.colidindo = true;
                    rnaT.change(quadrado);
                }

            }, null, this);
        });

        game.physics.arcade.collide(rnaT.checkButton, dnaPolimerase.element, function () {
            if (!rnaT.colidindoBtn) {
                rnaT.colidindoBtn = true;
                if (!rnaT.checked) {
                    sounds.play('boxChange');
                    rnaT.check();
                }
            }
        }, null, this);
    }
}