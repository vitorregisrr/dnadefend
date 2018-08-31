
var posicoesEncaixe = [ 71, 167, 259, 356, 453, 549, 639 ];
var amnoacidos = {

    presets : function(){
        this.gerados = null;
        this.encaixados = null;
        this.last = null;
        this.gerados = game.add.group();
        this.encaixados = game.add.group();
        this.gerados.add(this.encaixados);
    },

    gen: function (id) {
        var x = 850;
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

        if (Math.abs( (pointer.x + game.camera.x) - dnaPolimerase.element.x) < 100 && Math.abs(pointer.y - dnaPolimerase.element.y) < 100) {
            e.x = pointer.x + game.camera.x;
            e.y = pointer.y + game.camera.y;
            game.add.existing(e);
            dnaPolimerase.element.frame = 1;
            dnaPolimerase.grabing = false;

            var p = posicoesEncaixe[jogada -1];
            if(e.x - p < 50 && e.y - 400 < 50 && !ribossomo.moving){ //se estiver na area do rnaT encaixavel
                console.log(e.id);
                this.grabing = false;
                this.encaixados.add(e);
                this.last.encaixado = true;
                e.x = p;
                e.y = 400;
                ribossomo.move();
                game.add.tween(rnaM.conectores.getAt(jogada -1)).to({
                    alpha: 1
                }, 700, Phaser.Easing.Linear.None, true, 0);

                jogada++;
            }
        }
    },

    check : function(){
        
        for(x = 0; x <= this.encaixados.length ; x++){

            if(this.encaixados.getAt(x).id == rnaM.aminoacidos[x]){
                this.encaixados.getAt(x).frame = 1;
                rnaM.conectores.getAt(x).frame = 1;
                mutacoesReparadas++;
                textMutacoesReparadas.setText(mutacoesReparadas);
                
            }else{
                this.encaixados.getAt(x).frame = 2;
                rnaM.conectores.getAt(x).frame = 2;
                mutacoesCriadas++;
                textMutacoesCriadas.setText(mutacoesCriadas);
            }

            console.log('id'+this.encaixados.getAt(x).id+ ' certo:'+rnaM.aminoacidos[x]);
        }
    }
}