var ribossomo = {
    gen: function () {
        this.element = game.add.sprite(10, 200, 'ribossomo');
        game.physics.arcade.enable(this.element);
        this.element.body.enable = true;
        this.element.alpha = 1;
        jogada = 0;
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
                this.element.kill();
            },2000);
        }
    }
}