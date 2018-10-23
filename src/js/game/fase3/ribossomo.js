var ribossomo = {
    gen: function () {
        ribossomo.generated = true;
        this.element = game.add.sprite(10, 215, 'ribossomo');
        game.physics.arcade.enable(this.element);
        this.element.body.enable = true;
        this.element.alpha = 1;
        jogada = 0;
        this.prosseguido = false;
        game.add.tween(textoAmnoacidos).to({
            alpha: 1
        }, 1000, Phaser.Easing.Linear.None, true, 0);
        textoAmnoacidos.bringToTop();
    },

    move: function () {
        game.physics.arcade.moveToXY(this.element, this.element.x + 96, this.element.y, 300, 3000);
        this.moving = true;
        setTimeout(function () {
            ribossomo.element.body.velocity.x = 0;
            ribossomo.moving = false;
        }, 3000);

        if(jogada > 6){
            game.add.tween(ribossomo.element).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true, 0);
            setTimeout(function(){
                ribossomo.element.destroy();
                ribossomo.moving = false;
            },2000);

            amnoacidos.check();
            setTimeout(function(){
                ribossomo.prosseguir();
            },2000);

            /*rnaT.checkButton.visible = true;
            rnaT.checkButton.loadTexture('btnProsseguir');*/

        }
    },
    prosseguir: function () {
        if (!this.prosseguido) {
            this.prosseguido = true;
            //tira tudo do cenario
            game.add.tween(rnaM.conectores).to({
                alpha: 0
            }, 2000, Phaser.Easing.Linear.None, true, 0);

            game.add.tween(amnoacidos.conectores).to({
                alpha: 0
            }, 2000, Phaser.Easing.Linear.None, true, 0);

            game.add.tween(rnaT.group).to({
                alpha: 0
            }, 2000, Phaser.Easing.Linear.None, true, 0);

            game.add.tween(rnaM.fita).to({
                alpha: 0
            }, 2000, Phaser.Easing.Linear.None, true, 0);

            game.add.tween(gerador.gerarBtn).to({
                alpha: 0
            }, 2000, Phaser.Easing.Linear.None, true, 0);

            game.add.tween(amnoacidos.encaixados).to({
                alpha: 0
            }, 2000, Phaser.Easing.Linear.None, true, 0);

            game.add.tween(textoAmnoacidos).to({
                alpha: 0
            }, 2000, Phaser.Easing.Linear.None, true, 0);

            game.add.tween(textoRnat).to({
                alpha: 0
            }, 2000, Phaser.Easing.Linear.None, true, 0);

            game.add.tween(textoCodon).to({
                alpha: 0
            }, 2000, Phaser.Easing.Linear.None, true, 0);

            game.add.tween(textoRnam).to({
                alpha: 0
            }, 2000, Phaser.Easing.Linear.None, true, 0);
            
            if(rnaT.escutarBtn){
                game.add.tween(rnaT.escutarBtn).to({
                    alpha: 0
                }, 2000, Phaser.Easing.Linear.None, true, 0);
            }
            
            
            setTimeout(function () {
                rnaM.conectores.destroy();
                rnaT.group.destroy();
                
                if(rnaT.escutarBtn){
                    rnaT.escutarBtn.destroy();
                }
                rnaM.fita.destroy();
                gerador.gerarBtn.destroy();
                amnoacidos.encaixados.destroy();
                mutacoes.gen(530, 155, 40, 1);
            }, 2000);
        }
    }
}