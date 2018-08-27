var organelas = new Object();
organelas.bodys = new Array();

organelas.presets = function(){
    this.group = game.add.group();
    game.physics.arcade.enable(this.group);
    this.group.enableBody = true;
}

organelas.gen = function (x, y, organela) {

    switch(organela){
        case 1:
        this.bodys.push(this.group.create(x,y, 'vacuolo'));
        break;
        
        case 2:
        this.bodys.push(this.group.create(x,y, 'vacuolo'));
        break;

        case 3:
        this.bodys.push(this.group.create(x,y, 'vacuolo'));
        break;
        
        case 4:
        this.bodys.push(this.group.create(x,y, 'vacuolo'));
        break;

    }

    e = this.bodys[this.bodys.length -1];
    e.animations.add('effect');
    e.animations.play('effect',18, true);
    e.body.immovable = true;
    e.body.setSize(100, 40, 30, 45);
}



organelas.collide = function(){
    game.physics.arcade.collide(dnaPolimerase.element, organelas.group, function () {
    });
    
    game.physics.arcade.collide(dnaPolimerase.element, dna, function () {
    });
}