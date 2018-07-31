var dnaPolimerase = new Object();

dnaPolimerase.animating = false;
dnaPolimerase.gen = function (x, y) {
    
    this.element = game.add.sprite(x, y, 'dnaPolimerase');
    game.physics.arcade.enable(this.element);
    this.element.body.enable = true;
    this.element.body.gravity.y = 400;
    this.element.body.setSize(45, 63, 20, 15);
    this.element.hp = 15;
    this.element.body.collideWorldBounds = true;

    this.element.bulletsGroup = game.add.group();
    this.element.bulletsGroup.enableBody = true;
    this.element.bulletsGroup.createMultiple(10, 'mutante1Bullet');
    this.element.bulletsGroup.setAll('checkWorldBounds', true);
    this.element.bulletsGroup.setAll('outOfBoundsKill', true);
    game.physics.enable(this.element.bulletsGroup, Phaser.Physics.ARCADE);


    this.element.animations.add('left',[8]);
    this.element.animations.add('right',[7]);
    this.element.animations.add('changing',[21, 22, 23]);
    this.element.animations.add('stoped',[0]);
}

var fireRate = 650;
var nextFire = 0;
dnaPolimerase.attack = function(e){
        
    if (this.element.hp > 0) {
        if (game.time.now > nextFire &&  this.element.bulletsGroup.countDead() > 0) {
            this.element.animations.play('atack', 10);
            nextFire = game.time.now + fireRate;
            this.element.bullet =  this.element.bulletsGroup.getFirstDead();
            this.element.bullet.reset(this.element.x + 5, this.element.y + 12);
            this.element.bullet.rotation = Math.atan2(game.input.mousePointer.y - this.element.bullet.y, game.input.mousePointer.x - this.element.bullet.x);
            game.physics.arcade.moveToPointer(this.element.bullet, 400);
        }
    }

}


dnaPolimerase.hited = function(demage){
    if(this.element.hp > 0){

        if( (this.element.hp - demage) < 0){
            this.element.hp = 0;
        }else{
            this.element.hp -= demage;
        }
        textHp.setText(dnaPolimerase.element.hp);
    }

    if(this.element.hp <= 0  ){

            this.element.dead = true;
            this.element.animations.play('dead',10,false);
            game.time.events.add(1000,function(){
                dnaPolimerase.element.kill();
                gameOver();
            });
    }
}



dnaPolimerase.move = function () {

    this.element.body.velocity.x = 0;
    if (cursors.left.isDown || leftButton.isDown) {
        this.element.body.velocity.x = -250;
        if(!dnaPolimerase.animating){
            this.element.animations.play('left');
        }

    } else if (cursors.right.isDown || rightButton.isDown) {
        this.element.body.velocity.x = 250;
        if(!dnaPolimerase.animating){
            this.element.animations.play('right');
        }

    } else {
        if(!dnaPolimerase.animating){
            this.element.animations.play('stoped');
        }
    }

    if ( (cursors.up.isDown || upButton.isDown ) ) {

        this.element.body.velocity.y = -210;

    } else if (cursors.down.isDown || downButton.isDown) {

        this.element.body.velocity.y = 450;
    }

    /*if (!game.physics.arcade.collide(this.element, plataformas)) {
        setTimeout(400, function () {
            this.element.frame = 18;
        })*/
}