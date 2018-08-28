var gerador = {
    gen: function () {
        this.body = game.add.sprite(580, 395, 'gerador');
        this.body.animations.add('open', [0, 1, 2, 3, 4], 9);
        this.body.animations.add('close', [4, 3, 2, 1, 0], 8);

        this.gerarBtn = game.add.button(628, 310, 'gerarBtn', gerarAmnoacido, this);

        var amnoacido1 = game.add.image(0, 0, 'painelAmnoacido1');
        var amnoacido2 = game.add.image(0, 0, 'painelAmnoacido2');
        var amnoacido3 = game.add.image(0, 0, 'painelAmnoacido3');
        var amnoacido4 = game.add.image(0, 0, 'painelAmnoacido4');
        var amnoacido5 = game.add.image(0, 0, 'painelAmnoacido5');
        var amnoacido6 = game.add.image(0, 0, 'painelAmnoacido6');
        var amnoacido7 = game.add.image(0, 0, 'painelAmnoacido7');
        var amnoacido8 = game.add.image(0, 0, 'painelAmnoacido8');
        var amnoacido9 = game.add.image(0, 0, 'painelAmnoacido9');


        slider.createSlider({
            customSliderBG: false,
            mode: "horizontal",
            customHandleNext: "gerador-rightarrow",
            customHandlePrev: "gerador-leftarrow",
            sliderBGAlpha: 0.8,
            width: 218,
            height: 50,
            x: 548,
            y: 340,
            objects: [amnoacido1, amnoacido2, amnoacido3, amnoacido4, amnoacido5, amnoacido6, amnoacido7, amnoacido8, amnoacido9]
        });


    }
}

function gerarAmnoacido() {
    if(ribossomo.element){
        var index = slider.getCurrentIndex();
        amnoacidos.gen(index);
    }
}