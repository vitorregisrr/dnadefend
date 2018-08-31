var reg = {};

function createModals() {

    reg.modal.createModal({
        type: "configModal",
        includeBackground: false,
        modalCloseOnInput: false,
        animation: 'fade',
        itemsArr: [{
                type: "image",
                content: "configModal",
                offsetY: -20,
                contentScale: 1
            },
            {
                type: "image",
                content: "btnOk",
                offsetY: 200,
                offsetX: 0,
                callback: function () {
                    reg.modal.hideModal("configModal");
                }
            },
            {
                type: "sprite",
                content: "switch",
                offsetY: -100,
                offsetX: 90,
                frame: 0,
                callback: function (e) {
                    if (config.libras) {
                        e.frame = 0;
                        config.libras = false;
                    } else {
                        e.frame = 1;
                        config.libras = true;
                    }
                }
            },
            {
                type: "sprite",
                content: "switch",
                offsetY: -35,
                offsetX: 90,
                callback: function (e) {
                    if (config.locucao) {
                        e.frame = 0;
                        config.locucao = false;
                    } else {
                        e.frame = 1;
                        config.locucao = true;
                    }
                }
            },
            {
                type: "sprite",
                content: "switch",
                offsetY: 45,
                offsetX: 90,
                callback: function (e) {
                    if (config.sounds) {
                        e.frame = 0;
                        config.sounds = false;
                    } else {
                        e.frame = 1;
                        config.sounds = true;
                    }
                }
            },
            {
                type: "sprite",
                content: "switch",
                offsetY: 120,
                offsetX: 90,
                callback: function (e) {
                    if (config.musica) {
                        e.frame = 0;
                        config.musica = false;
                    } else {
                        e.frame = 1;
                        config.musica = true;
                    }
                }
            },

        ]
    });

    reg.modal.createModal({
        type: "librasModal",
        includeBackground: false,
        modalCloseOnInput: false,
        animation: 'fade',
        itemsArr: [{
                type: "video",
                content: "libras1",
                offsetY: -20,
                contentScale: 0.5,
            },
            {
                type: "image",
                content: "btnOk",
                offsetY: 200,
                offsetX: 0,
                callback: function () {
                    reg.modal.hideModal("librasModal");
                }
            },
        ]
    });

    reg.modal.createModal({
        type: "infoModal",
        includeBackground: false,
        modalCloseOnInput: false,
        animation: 'fade',
        itemsArr: [{
                type: "image",
                content: "tutorial1",
                offsetY: -20,
                contentScale: 1,
            }, {
                type: "text",
                content: "libras1",
                offsetY: -20,
                contentScale: 0.5,
            },
            {
                type: "image",
                content: "btnOk",
                offsetY: 200,
                offsetX: 0,
                callback: function () {
                    reg.modal.hideModal("infoModal");
                }
            },
        ]
    });


    reg.modal.createModal({
        type: "gameSucessModal",
        includeBackground: false,
        modalCloseOnInput: false,
        animation: 'fade',
        itemsArr: [{
                type: "image",
                content: "levelSuccess",
                offsetY: -20,
                contentScale: 1
            },
            {
                type: "text",
                content: "0",
                fontSize: 25,
                fontFamily: "Arial Black",
                color: "0xd9d9d9",
                offsetY: -45,
                offsetX: -60,
            },
            {
                type: "text",
                content: "0",
                fontSize: 25,
                fontFamily: "Arial Black",
                color: "0xd9d9d9",
                offsetY: -45,
                offsetX: 60,
            },
            {
                type: "image",
                content: "btnRestart",
                offsetY: 100,
                offsetX: 0,
                callback: function () {
                    game.paused = false;
                    game.state.start("gameState" + (levelNumber));
                }
            },
            {
                type: "image",
                content: "btnLeft",
                offsetY: 85,
                offsetX: -80,
                callback: function () {
                    game.paused = false;
                    game.state.start("levelState");
                }
            },
            {
                type: "sprite",
                content: "starsSpritesheet",
                frame: 2,
                offsetY: 15,
                offsetX: 0,
            },
            {
                type: "image",
                content: "btnRight",
                offsetY: 85,
                offsetX: 80,
                callback: function () {
                    game.paused = false;
                    game.state.start("gameState" + (levelNumber + 1));
                }
            }
        ]
    });

    reg.modal.createModal({
        type: "pausedModal",
        includeBackground: false,
        modalCloseOnInput: true,
        animation: 'fade',
        itemsArr: [{
                type: "image",
                content: "pausedModal",
                offsetY: -20,
                contentScale: 1
            },
            {
                type: "text",
                content: "VOLTAR",
                fontSize: 19,
                fontFamily: "Arial Black",
                color: "0xd9d9d9",
                strokeThickness: 1,
                offsetY: -55,
                offsetX: 0,
                callback: function () {
                    game.paused = false;
                    reg.modal.hideModal("pausedModal");
                }
            },
            {
                type: "text",
                content: "REINICIAR",
                fontSize: 19,
                fontFamily: "Arial Black",
                color: "0xd9d9d9",
                strokeThickness: 1,
                offsetY: 8,
                offsetX: 0,
                callback: function () {
                    game.paused = false;
                    game.state.start("gameState" + levelNumber);
                }
            },
            {
                type: "text",
                content: "VOLTAR PARA NIVÉIS",
                offsetY: 100,
                fontSize: 13,
                fontFamily: "Arial Black",
                color: "0xd9d9d9",
                strokeThickness: 1,
                offsetX: 5,
                offsetY: 75,
                callback: function () {
                    game.paused = false;
                    game.state.start("levelState");
                }
            },
            {
                type: "image",
                content: "btnClose",
                offsetY: -155,
                offsetX: 130,
                callback: function () {
                    game.paused = false;
                    reg.modal.hideModal("pausedModal");
                }
            }
        ]
    });
}


function showGameOverModal() {
    reg.modal.showModal("gameOverModal");
}


function showGameSucessModal() {
    reg.modal.showModal("gameSucessModal");
}

function showLibrasModal() {
    reg.modal.showModal("librasModal");
}

function showInfoModal() {
    reg.modal.showModal("infoModal");
}

function showConfigModal() {
    reg.modal.showModal("configModal");

    //setando o valor dos switchs

    //libras
    var f;
    if (config.libras) {
        f = 1;
    } else {
        f = 0;
    }
    reg.modal.updateModalValue(f, 'configModal', 2);

    //locucao
    if (config.locucao) {
        f = 1;
    } else {
        f = 0;
    }
    reg.modal.updateModalValue(f, 'configModal', 3);

    //efeitos sonoros
    if (config.sounds) {
        f = 1;
    } else {
        f = 0;
    }
    reg.modal.updateModalValue(f, 'configModal', 4);

    //efeitos musica
    if (config.musica) {
        f = 1;
    } else {
        f = 0;
    }
    reg.modal.updateModalValue(f, 'configModal', 5);
}

function showPausedModal() {
    game.paused = true;
    reg.modal.showModal("pausedModal");
}

function countDown(fn, endFn) {
    var endFn = endFn || function () {};

    var _timer = game.time.create(false);
    _timer.start();
    _timer.onComplete.add(endFn);
    _timer.repeat(Phaser.Timer.SECOND, 5, fn, this);
    window.console.log("adding timer", game);
}

function updateCountdown() {
    var item = reg.modal.getModalItem("modal6", 3);
    var index = Number(item.text);

    window.console.log("index: ", index, item);

    item.setText(String(index - 1));
    item.update();
    item.x = game.width / 2 - (item.width / 2);
    item.y = game.height / 2 - (item.height / 2);
}