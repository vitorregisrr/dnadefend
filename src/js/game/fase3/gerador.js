var gerador = {
    gen: function () {
        this.body = game.add.sprite(750, 435, 'gerador');
        this.body.animations.add('open', [0, 1, 2, 3, 4], 9);
        this.body.animations.add('close', [4, 3, 2, 1, 0], 8);

        this.gerarBtn = game.add.button(798, 350, 'gerarBtn', gerarAmnoacido, this);

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
            onPrePrevCallback: function () {
                gerador.locucao('prev');
            },
            onAfterNextCallback: function () {
                gerador.locucao('next');
            },
            sliderBGAlpha: 0.8,
            width: 218,
            height: 50,
            x: 718,
            y: 380,
            objects: [amnoacido1, amnoacido2, amnoacido3, amnoacido4, amnoacido5, amnoacido6, amnoacido7, amnoacido8, amnoacido9]
        });
    },

    locucao: function (side) {

        var sideControl;
        switch (side) {
            case 'prev':
                sideControl = -1;
                break;

            case 'next':
                sideControl = 1;
        }

        var index = slider.getCurrentIndex() + sideControl;

        if (config.locucao) {
            gerador.locutando = true;
            game.time.events.loop(800, function () {
                gerador.locutando = false;
            });
            switch (index) {
                case 0:
                    locucao.call('metionina');
                    break;

                case 1:
                    locucao.call('triptofano');
                    break;

                case 2:
                    locucao.call('treomina');
                    break;

                case 3:
                    locucao.call('acidoglutaminico');
                    break;

                case 4:
                    locucao.call('prolina');
                    break;

                case 5:
                    locucao.call('alanina');
                    break;

                case 6:
                    locucao.call('leucina');
                    break;

                case 7:
                    locucao.call('serina');
                    break;

                case 8:
                    locucao.call('histidina');
                    break;
            }
        }
    }
}

function gerarAmnoacido() {
    if (ribossomo.generated) {
        var index = slider.getCurrentIndex();
        amnoacidos.gen(index);
    }
}