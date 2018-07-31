var mutacoes = new Object();

mutacoes.bodys = new Array();

mutacoes.presets = function(){
    this.group = game.add.group();
    game.physics.arcade.enable(this.group);
    this.group.enableBody = true;
}

mutacoes.gen = function(x, y, maxHp, dano){

    paresReplicacao.bodys = new Array();
    paresReplicacao.gen(900, -50, 2);
    paresReplicacao.gen(500, -100, 3);
    paresReplicacao.gen(600, -120, 4);
    paresReplicacao.gen(700, -130, 5)
    paresReplicacao.gen(800, -50, 6);
    paresReplicacao.gen(900, -50, 7);

    for (x = 0; x <= paresReplicacao.bodys.length - 1; x++) {
        var e = paresReplicacao.bodys[x];
        e.body.gravity.y = 0;

        game.physics.arcade.moveToXY(e, x + 140, y + 90, 100 ,2000); 
        game.time.events.add(2000, function () {
            for (x = 0; x <= paresReplicacao.bodys.length - 1; x++) {
                var e =  paresReplicacao.bodys[x];
                e.body.velocity.x = 0;
                e.body.velocity.y = 0;
                e.kill();
            }

         }, this);
    }

    game.time.events.add(1900, function () {

        var explosion = game.add.sprite(x + 85, y , 'explosion');
        explosion.width = 200;
        explosion.height = 200;
        explosion.animations.add('explosion');
        explosion.animations.play('explosion', 10,false);
    
        this.bodys.push(this.group.create( x + 120, y + 50, 'mutante1'));
        e = this.bodys[this.bodys.length -1];
        e.body.immovable = true;
        e.animations.add('effect');
        e.animations.play('effect', 7, true);
        e.body.setSize(100, 90, 15, 10);
    
        e.maxHp = maxHp;
        e.hp = maxHp;
        e.dano = dano;
    
        e.HpBarbg = game.add.sprite(x + 122, y + 24 , 'hpBarSMbg');
        e.HpBar = game.add.sprite(x + 122 ,y + 24, 'hpBarSM');
    
        e.bulletsGroup = game.add.group();
        e.bulletsGroup.enableBody = true;
        e.bulletsGroup.createMultiple(10, 'mutante1Bullet');
        e.bulletsGroup.setAll('checkWorldBounds', true);
        e.bulletsGroup.setAll('outOfBoundsKill', true);
        game.physics.enable( e.bulletsGroup, Phaser.Physics.ARCADE);
    
        e.attackLoop = game.time.events.loop(Phaser.Timer.SECOND * 1.5, this.attack, this, e);    

    }, this);
}

mutacoes.attack = function(e){
        
    e.bullet = e.bulletsGroup.getFirstDead();
    e.bullet.body.setSize(20, 20, 3, 3);
    e.bullet.reset(e.x +120, e.y + 30, 'mutante1Bullet');
    e.bullet.body.setSize(20, 20, 20, 20);
    game.physics.arcade.moveToObject(e.bullet, dnaPolimerase.element, (game.rnd.integerInRange(150, 250)));
    e.bullet.animations.add('effect');
    e.bullet.animations.play('effect', 20, true);

}

mutacoes.hited = function(demage,e){
    if(e.hp > 0){
            e.hp -= demage;
            game.add.tween(e.HpBar.scale).to({x: e.hp/e.maxHp, y: 1}, 600, Phaser.Easing.Linear.None, true);
            e.HpBar.x += 0.4;
    }

    if(e.hp <= 0 && !e.dead ){
            e.dead = true;
            mutacoes.deads++;
            game.time.events.remove(e.attackLoop);
            e.animations.play('dead',10,false);
            game.time.events.add(700,function(){
                levelSuccess();
                    e.kill();
                    e.HpBar.kill();
                    e.HpBarbg.kill();
            });
    }
}

mutacoes.collide = function mutacoesColisao() {

    game.physics.arcade.collide(dnaPolimerase.element, mutacoes.group);

    mutacoes.group.forEachAlive(function (e) {
        e.bulletsGroup.forEachAlive(function (bullet) {
            game.physics.arcade.collide(bullet, dnaPolimerase.element, function () {
                bullet.kill();
                dnaPolimerase.hited(2);
            }, null, this);

        });
    });

    mutacoes.group.forEachAlive(function (e) {
        dnaPolimerase.element.bulletsGroup.forEachAlive(function (bullet) {
            game.physics.arcade.collide(bullet, e, function () {
                bullet.kill();
                mutacoes.hited(2,e);
            }, null, this);

        });
    });

}
