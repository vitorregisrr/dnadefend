var reg = {};

function createModals() {
    reg.modal.createModal({
        type: "gameOverModal",
        includeBackground: false,
        modalCloseOnInput: false,
        itemsArr: [{
                type: "image",
                content: "levelFailed",
                offsetY: -20,
                contentScale: 1
            },
            {
                type: "text",
                content: "0",
                fontSize: 25,
                fontFamily: "Komika",
                color: "0xd9d9d9",
                offsetY: -56,
                offsetX: 0,
            },
            {
                type: "text",
                content: "0",
                fontSize: 25,
                fontFamily: "Komika",
                color: "0xd9d9d9",
                offsetY: +30,
                offsetX: 0,
            },
            {
                type: "image",
                content: "btnRestart",
                offsetY: 100,
                offsetX: 40,
                callback: function () {
                    game.paused = false;
                    game.state.start("gameState"+(levelNumber));
                }
            },
            {
                type: "image",
                content: "btnLeft",
                offsetY: 95,
                offsetX: -30,
                callback: function () {
                    game.paused = false;
                    game.state.start("levelState");
                }
            },
        ]
    });

    reg.modal.createModal({
        type: "gameSucessModal",
        includeBackground: false,
        modalCloseOnInput: false,
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
                fontFamily: "Komika",
                color: "0xd9d9d9",
                offsetY: -45,
                offsetX: -60,
            },
            {
                type: "text",
                content: "0",
                fontSize: 25,
                fontFamily: "Komika",
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
                    game.state.start("gameState"+(levelNumber));
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
                    game.state.start("gameState"+(levelNumber +1));
                }
            }
        ]
    });

    reg.modal.createModal({
        type: "pausedModal",
        includeBackground: false,
        modalCloseOnInput: true,
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
                    game.state.start("gameState"+levelNumber);
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
