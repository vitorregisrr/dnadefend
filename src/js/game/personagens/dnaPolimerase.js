var fireRate = 650,
    nextFire = 0;
var dnaPolimerase = {

    animating: false,

    gen: function (x, y) {
        dnaPolimerase.canAttack = false;
        this.animating = false;
        this.element = game.add.sprite(x, y, 'dnaPolimerase');
        game.physics.arcade.enable(this.element);
        this.element.body.enable = true;
        this.element.body.gravity.y = 400;
        this.element.body.setSize(45, 63, 20, 15);
        this.element.hp = 15;
        this.element.body.collideWorldBounds = true;

        this.element.bulletsGroup = game.add.group();
        this.element.bulletsGroup.enableBody = true;
        this.element.bulletsGroup.createMultiple(10, 'anticorpo');
        this.element.bulletsGroup.setAll('checkWorldBounds', true);
        this.element.bulletsGroup.setAll('outOfBoundsKill', true);
        game.physics.enable(this.element.bulletsGroup, Phaser.Physics.ARCADE);


        this.element.animations.add('left', [8]);
        this.element.animations.add('right', [9]);
        this.element.animations.add('changing', [22, 23]);
        this.element.animations.add('stoped', [0]);
        this.element.animations.add('hited', [27]);
        this.element.animations.add('angry', [4]);
        this.element.animations.add('happy', [35]);
        this.element.animations.add('attack', [24]);
    },

    attack: function (e) {
        if (this.element.hp > 0 && !dnaPolimerase.grabing && dnaPolimerase.canAttack) {
            if (game.time.now > nextFire && this.element.bulletsGroup.countDead() > 0) {
                sounds.play('attack');
                dnaPolimerase.animating = true;
                this.element.animations.play('attack', 10);
                game.time.events.add(250, function () {
                    dnaPolimerase.animating = false;
                });
                nextFire = game.time.now + fireRate;
                this.element.bullet = this.element.bulletsGroup.getFirstDead();
                this.element.bullet.reset(this.element.x + 20, this.element.y - 10);
                this.element.bullet.anchor.setTo(0.5 , 0.5);
                this.element.bullet.rotation = Math.atan2(game.input.mousePointer.y - this.element.bullet.y, game.input.mousePointer.x - this.element.bullet.x);
                game.physics.arcade.moveToPointer(this.element.bullet, 400);
            }
        }
    },

    hited: function (demage) {

        sounds.play('hurt');
        if (this.element.hp > 0) {

            this.animating = true;
            this.element.animations.play('hited', 10);
            setTimeout(function () {
                dnaPolimerase.animating = false;
            }, 200);

            if ((this.element.hp - demage) < 0) {

                this.element.hp = 0;
            } else {
                this.element.hp -= demage;
            }
            textHp.setText(dnaPolimerase.element.hp);
        }

        if (this.element.hp <= 0) {

            this.element.dead = true;
            this.element.animations.play('dead', 10, false);
            game.time.events.add(1000, function () {
                dnaPolimerase.element.kill();
                gameOver();
            });
        }
    },

    move: function () {
        /*evento click */
        if (game.input.activePointer.isDown) {
            if (dnaPolimerase.grabing) {
                amnoacidos.drop();
            } else {
                dnaPolimerase.attack();
            }
        }


        this.element.body.velocity.x = 0;
        if (cursors.left.isDown || leftButton.isDown || moveLeftBtn.isDown) {
            this.element.body.velocity.x = -250;
            moveLeftBtn.frame = 1;
            if (!dnaPolimerase.animating && !dnaPolimerase.grabing) {
                this.element.animations.play('left');
            }

        } else if (cursors.right.isDown || rightButton.isDown || moveRightBtn.isDown) {
            this.element.body.velocity.x = 250;
            moveRightBtn.frame = 1;
            if (!dnaPolimerase.animating && !dnaPolimerase.grabing) {
                this.element.animations.play('right');
            }

        } else {
            moveRightBtn.frame = 0;
            moveLeftBtn.frame = 0;
            if (!dnaPolimerase.animating && !dnaPolimerase.grabing) {
                this.element.animations.play('stoped');
            }
        }

        if ((cursors.up.isDown || upButton.isDown || moveUpBtn.isDown) && (dnaPolimerase.element.body.touching.down)) {
            moveUpBtn.frame = 1;
            setTimeout(() => {
                moveUpBtn.frame = 0;
            }, 400);
            this.element.body.velocity.y = -360;

        } else if (cursors.down.isDown || downButton.isDown || moveDownBtn.isDown) {
            moveDownBtn.frame = 1;
            this.element.body.velocity.y = 450;
        }else{
            moveDownBtn.frame = 0;
        }

    }
}