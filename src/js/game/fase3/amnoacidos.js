var posicoesEncaixe = [71, 167, 259, 356, 453, 549, 639];
var amnoacidos = {

    presets: function () {
        this.gerados = null;
        this.encaixados = null;
        this.last = null;
        this.gerados = game.add.group();
        this.encaixados = game.add.group();
        this.gerados.add(this.encaixados);

        //gera os conectores
        this.conectores = game.add.group();
        var pConectores = [65, 162, 256, 354, 448, 544, 639];
        for (x = 0; x <= 6; x++) {
            this.conectores.create(pConectores[x], 250, 'parT-conector');
            this.conectores.getAt(x).height = 140;
            this.conectores.getAt(x).width = 8;
            this.conectores.getAt(x).alpha = 0;
        }

    },

    gen: function (id) {
        var x = 823;
        var y = 498;

        if (this.last && !this.last.encaixado) {
            this.last.kill();
            dnaPolimerase.grabing = false;
        }

        this.last = game.add.button(x, y, 'amnoacido' + id, amnoacidos.grab, this);
        this.last.anchor.setTo(0.5, 0.5);
        this.gerados.add(this.last);
        this.last.id = id;
        this.last.bringToTop();
        gerador.body.bringToTop();
        dnaPolimerase.element.bringToTop();
        gerador.body.animations.play('open');
        sounds.play('door');
        joystick.bringToTop();
    },

    grab: function (e) {
        if (Math.abs(dnaPolimerase.element.x - e.x) < 100 && Math.abs(dnaPolimerase.element.y - e.y) < 100 && !e.encaixado) {
            e.x = 42;
            e.y = -5;
            dnaPolimerase.element.addChild(e);
            dnaPolimerase.element.frame = 3;
            dnaPolimerase.grabing = true;
            this.grabing = e;
            sounds.play('catch');
        }
    },

    drop: function () {
        var pointer = game.input.activePointer;
        e = this.grabing;
        if (Math.abs((pointer.x + game.camera.x) - dnaPolimerase.element.x) < 100 && Math.abs(pointer.y - dnaPolimerase.element.y) < 100) {

            e.x = pointer.x + game.camera.x;
            e.y = pointer.y + game.camera.y;
            game.add.existing(e);
            dnaPolimerase.element.frame = 1;
            dnaPolimerase.grabing = false;
            sounds.play('catch');

            var p = posicoesEncaixe[jogada - 1];
            if (e.x - p < 50 && e.y - 400 < 50 && !ribossomo.moving) { //se estiver na area do rnaT encaixavel

                score++;
                game.add.tween(stateProgressBar.scale).to({
                    x: score / 14,
                    y: 1
                }, 600, Phaser.Easing.Linear.None, true);

                this.grabing = false;
                this.encaixados.add(e);
                this.last.encaixado = true;
                e.x = p;
                e.y = 400;
                ribossomo.move();
                game.add.tween(this.conectores.getAt(jogada - 1)).to({
                    alpha: 1
                }, 700, Phaser.Easing.Linear.None, true, 0);

                jogada++;
            }
        }
    },

    check: function () {

        for (x = 0; x <= this.encaixados.length; x++) {

            if (this.encaixados.getAt(x).id == rnaM.aminoacidos[x]) {
                this.encaixados.getAt(x).frame = 1;
                this.conectores.getAt(x).frame = 1;
                mutacoesReparadas++;
                textMutacoesReparadas.setText(mutacoesReparadas);

            } else {
                this.encaixados.getAt(x).frame = 2;
                this.conectores.getAt(x).frame = 2;
                mutacoesCriadas++;
                textMutacoesCriadas.setText(mutacoesCriadas);
            }

            console.log('id' + this.encaixados.getAt(x).id + ' certo:' + rnaM.aminoacidos[x]);
        }
    }
}