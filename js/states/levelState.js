var levelState = {
	create: criarLevelState,
	update: atualizarLevelState,
};

//local storage progress stars array
var starsArray;
if (!localStorage.starsArray) {
	//starsArray = [0, 4, 4];
	starsArray = [3, 3, 3];
	localStorage.setItem('starsArray', JSON.stringify(starsArray));
} else {
	//starsArray = JSON.parse(localStorage.starsArray);
	starsArray = [3, 3, 3];
}

var levels;

function criarLevelState() {

	createModals();
	//gerando o bg
	game.add.sprite(0, 0, 'bgblur');


	levels = game.add.group();
	var level = new Array();
	var pl = [ [25,110], [270,110], [520,110]]; //posicoes dos niveis
	var ps = [ [145, 520], [390,520], [645, 520]];
	//niveis com spritesheet da estrela

	for(x= 0; x < 3 ; x++){
		var a = x+1;
		level[x] =   game.add.button(pl[x][0], pl[x][1], 'level'+ a +'bg',thumbClicked, this);
		var e = level[x];
		e.levelNumber = x + 1;
		e.inputEnabled = true;
		e.stars = game.add.image(ps[x][0], ps[x][1], 'levels');
		e.stars.anchor.setTo(0.5, 0.5);

		//desbloqueia o proximo nivel caso o anterior esteja liberado
		if ( (starsArray[x-1] >= 1 && starsArray[x-1] != 4) && (starsArray[x] == 0 || starsArray[x] == 4 )) {
			
			starsArray[x] = 0;
			//é jogavel
		}

		e.stars.frame = starsArray[e.levelNumber -1];
		levels.add(e);
	}
	
	var backBtn = game.add.button(55, 60, 'btnLeft');
	backBtn.anchor.setTo(0.5, 0.5);
	backBtn.scale.setTo(0.8, 0.8);
	backBtn.inputEnabled = true;
	backBtn.events.onInputDown.add(function () {
		game.state.start('startState');
	}, this);


	var btnSettings = game.add.button(740, 60, 'btnSettings', showConfigModal, this);
	btnSettings.enableBody = true;
	btnSettings.anchor.setTo(0.5, 0.5);
	btnSettings.scale.setTo(0.8, 0.8);
	btnSettings.inputEnabled = true;
}

function atualizarLevelState() {

	levels.forEach(function (e) {
		if (e.input.pointerOver()) {
			e.frame = 1;
			game.add.tween(e.stars.scale).to({
				x: 1.2,
				y: 1.2,
			}, 100, Phaser.Easing.Linear.None, true);
		} else {
			e.frame = 0;
			game.add.tween(e.stars.scale).to({
				x: 1,
				y: 1
			}, 100, Phaser.Easing.Linear.None, true);
		}
	});


}

function thumbClicked(button) {
	// the level is playable, then play the level!!
	if (button.stars.frame < 4) {
		game.state.start('gameState' + button.levelNumber);
		
	}
	// else, let's shake the locked levels
	else {
		var buttonTween = game.add.tween(button)
		buttonTween.to({
			x: button.x +  15
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.to({
			x: button.x - 15
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.to({
			x: button.x +  15
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.to({
			x: button.x - 15
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.to({
			x: button.x
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.start();
	}
}