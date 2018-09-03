var sounds = {
    gen: function () {
        this.hurt = game.add.audio('hurt');
        this.attack = game.add.audio('attack');
        this.right = game.add.audio('right');
        this.mutScream = game.add.audio('mutScream');
        this.boxChange = game.add.audio('boxChange');
        this.boxChange.volume = 0.2;
        this.door = game.add.audio('door');
        this.catch = game.add.audio('catch');
        this.wrong = game.add.audio('wrong');
        this.wrong.volume = 0.2;

    },

    play: function (id) {
        if (config.sounds) {
            switch (id) {
                case 'change':
                    this.change.play();
                    break;

                case 'boxChange':
                    this.boxChange.play();
                    break;

                case 'fall':
                    this.fall.play();
                    break;

                case 'attack':
                    this.attack.play();
                    break;

                case 'hurt':
                    this.hurt.play();
                    break;

                case 'angry':
                    this.angry.play();
                    break;

                case 'right':
                    this.right.play();
                    break;

                case 'wrong':
                    this.wrong.play();
                    break;

                case 'mutScream':
                    this.mutScream.play();
                    break;

                case 'mutAttack':

                    break;

                case 'mutDie':

                    break;

                case 'door':
                    this.door.play();
                    break;

                case 'catch':
                    this.catch.play();
                    break;
            }
        } else {
            return false;
        }
    }
}