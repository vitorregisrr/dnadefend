var locucao = {
    gen: function () {

        this.a = game.add.audio('a');
        this.t = game.add.audio('t');
        this.u = game.add.audio('u');
        this.g = game.add.audio('g');
        this.c = game.add.audio('c');
        this.par = game.add.audio('par');
        this.errado = game.add.audio('errado');
        this.reparado = game.add.audio('reparado');
        this.mutacaogerada = game.add.audio('mutacao-gerada');
        this.certo = game.add.audio('certo');

        this.metionina = game.add.audio('metionina');
        this.triptofano = game.add.audio('triptofano');
        this.treomina = game.add.audio('treomina');
        this.acidoglutaminico = game.add.audio('acidoglutaminico');
        this.prolina = game.add.audio('prolina');
        this.alanina = game.add.audio('alanina');
        this.leucina = game.add.audio('leucina');
        this.serina = game.add.audio('serina');
        this.histidina = game.add.audio('histidina');

    },

    call: function (id1, id2, par) {
        if (config.locucao) {
            if (!par) {
                this.play(id1);

            } else if (par) {
                this.play('par');
                setTimeout(function () {
                    locucao.play(id1);
                }, 600);
                setTimeout(function () {
                    locucao.play(id2);
                }, 1000);
            }

        }
    },

    play: function (id) {

        switch (id) {

            case 'a':
                this.a.play();
                break;

            case 't':
                this.t.play();
                break;

            case 'u':
                this.u.play();
                break;

            case 'c':
                this.c.play();
                break;

            case 'g':
                this.g.play();
                break;

            case 'par':
                this.par.play();
                break;

            case 'reparado':
                this.reparado.play();
                break;

            case 'errado':
                this.errado.play();
                break;

            case 'mutacao-gerada':
                this.mutacaogerada.play();
                break;

            case 'certo':
                this.certo.play();
                break;

            case 'metionina':
                this.metionina.play();
                break;
                
            case 'triptofano':
                this.triptofano.play();
                break;

            case 'treomina':
                this.treomina.play();
                break;
            
            case 'acidoglutaminico':
                this.acidoglutaminico.play();
                break;

            case 'prolina':
                this.prolina.play();
                break;

            case 'leucina':
                this.leucina.play();
                break;

            case 'serina':
                this.serina.play();
                break;

            case 'histidina':
                this.histidina.play();
                break;

            case 'alanina':
                this.alanina.play();
                break;
        }
    }
}