
posicoesEncaixe = [ 71, 167, 259, 356, 453, 549, 639 ];
var amnoacidos = {

    presets : function(){
        this.gerados = game.add.group();
        this.encaixados = game.add.group();

        this.gerados.add(this.encaixados);
    },

    gen: function (id) {
        var x = 650;
        var y = 485;
        
        if(this.last && !this.last.encaixado){
            this.last.kill();
            dnaPolimerase.grabing = false;
        }

        this.last = game.add.button(x, y, 'amnoacido'+id,  amnoacidos.grab, this);
        this.last.anchor.setTo(0.5 , 0.5);
        this.gerados.add(this.last);
        this.last.id = id;

        gerador.body.bringToTop();
        dnaPolimerase.element.bringToTop();
        gerador.body.animations.play('open');

    },

    grab: function(e){
        if (Math.abs(dnaPolimerase.element.x - e.x) < 100 && Math.abs(dnaPolimerase.element.y - e.y) < 100 && !e.encaixado) {
            e.x = 42;
            e.y = -5;
            dnaPolimerase.element.addChild(e);
            dnaPolimerase.element.frame = 3;
            dnaPolimerase.grabing = true;
            this.grabing = e;
        }
    },

    drop: function(){
        var pointer = game.input.activePointer;
        e = this.grabing;
        console.log(jogada);

        if (Math.abs(pointer.x - dnaPolimerase.element.x) < 100 && Math.abs(pointer.y - dnaPolimerase.element.y) < 100) {
            e.x = pointer.x;
            e.y = pointer.y;
            game.add.existing(e);
            dnaPolimerase.element.frame = 1;
            dnaPolimerase.grabing = false;

            var p = posicoesEncaixe[jogada -1];
            if(e.x - p < 50 && e.y - 400 < 50){ //se estiver na area do rnaT encaixavel
                this.grabing = false;
                this.encaixados.add(e);
                this.last.encaixado = true;
                e.x = p;
                e.y = 400;
                ribossomo.move();
                jogada++;
            }
        }
    }
}