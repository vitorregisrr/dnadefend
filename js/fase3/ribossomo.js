var ribossomo = {
    gen: function(){
        this.body = game.add.sprite(10, 200, 'ribossomo');
        jogada = 0;
    },

    move: function(){
        this.body.x += 94;
    }
}