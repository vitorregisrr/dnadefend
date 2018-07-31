var levelState = {
	create: criarLevelState,
	update: atualizarLevelState,
};

// number of thumbnail rows
var thumbRows = 1;
// number of thumbnail cololumns
var thumbCols = 3;
// width of a thumbnail, in pixels
var thumbWidth = 64;
// height of a thumbnail, in pixels
var thumbHeight = 64;
// space among thumbnails, in pixels
var thumbSpacing = 8;

//local storage progress stars array
var starsArray;
if(!localStorage.starsArray){
	starsArray = [0, 4, 4];
	localStorage.setItem('starsArray',JSON.stringify(starsArray));
}else{
	starsArray = JSON.parse(localStorage.starsArray);
}

// how many pages are needed to show all levels?
// CAUTION!! EACH PAGE SHOULD HAVE THE SAME AMOUNT OF LEVELS, THAT IS
// THE NUMBER OF LEVELS *MUST* BE DIVISIBLE BY THUMBCOLS*THUMBROWS
var pages = starsArray.length / (thumbRows * thumbCols);
// group where to place all level thumbnails
var levelThumbs = new Object();
// current page
var currentPage = 0;
// arrows to navigate through level pages
var leftArrow;
var rightArrow;

function criarLevelState() {

	//gerando o bg
	game.add.sprite(0, 0, 'background1');

	// placing left and right arrow buttons, will call arrowClicked function when clicked
	/*leftArrow = game.add.button(50,420,"level_arrows",arrowClicked);
	leftArrow.anchor.setTo(0.5);
	leftArrow.frame = 0;
	leftArrow.alpha = 0.3;
	rightArrow = game.add.button(270,420,"level_arrows",arrowClicked);
	rightArrow.anchor.setTo(0.5);
	rightArrow.frame = 1;*/
	// creation of the thumbails group
	levelThumbs.group = game.add.group();
	levelThumbs.thumbs = new Array();
	// determining level thumbnails width and height for each page
	var levelLength = thumbWidth * thumbCols + thumbSpacing * (thumbCols - 1);
	var levelHeight = thumbWidth * thumbRows + thumbSpacing * (thumbRows - 1);

	// looping through each page
	for (var l = 0; l < pages; l++) {
		// horizontal offset to have level thumbnails horizontally centered in the page
		var offsetX = (game.width - levelLength) / 2 + game.width * l;
		// I am not interested in having level thumbnails vertically centered in the page, but
		// if you are, simple replace my "20" with
		// (game.height-levelHeight)/2
		var offsetY = 150;
		// looping through each level thumbnails
		for (var i = 0; i < thumbRows; i++) {
			for (var j = 0; j < thumbCols; j++) {
				// which level does the thumbnail refer?
				var levelNumber = i * thumbCols + j + l * (thumbRows * thumbCols);
				// adding the thumbnail, as a button which will call thumbClicked function if clicked   		
				levelThumbs.thumbs.push(game.add.button(offsetX + j * (thumbWidth + thumbSpacing), offsetY + i * (thumbHeight + thumbSpacing), "levels", thumbClicked, this));
				var e = levelThumbs.thumbs[levelThumbs.thumbs.length - 1];

				// shwoing proper frame
				if( (levelNumber != 0 && starsArray[levelNumber] == 4 ) && (starsArray[levelNumber - 1] >= 1 && starsArray[levelNumber - 1] != 4 ) ) {
					//se o nivel não for o primeiro e estiver bloqueado             //se o nivel anterior não for 0 e não for 4
					starsArray[levelNumber] = 0;
					//é jogavel
				}
				e.frame = starsArray[levelNumber];

				// custom attribute 
				e.levelNumber = levelNumber + 1;
				// adding the level thumb to the group
				levelThumbs.group.add(e);
				// if the level is playable, also write level number
				var style = {
					font: "23px Komika",
					fill: "#ffffff"
				};
				var levelText = game.add.text(e.x + 25, e.y + 10, levelNumber + 1, style);
				levelText.setShadow(2, 2, 'rgba(0,0,0,0.5)', 1);
				levelThumbs.group.add(levelText);
			}
		}
	}

	var t = game.add.text(game.world.centerX , 120, 'Sobreponha o cursor nos níveis para ler as instruções.', {font: "18px Komika",
	fill: "#fabb25"});
	t.anchor.x = 0.5;
	t.anchor.y = 0.5;
	t.setShadow(2, 2, 'rgba(0,0,0,0.3)', 1);
	//toltips que explicam os niveis

	var tipbg1 = game.add.image(0,0,'tipbg1');
	var tipbg2 = game.add.image(0,0,'tipbg1');
	var tipbg3 = game.add.image(0,0,'tipbg1');

	var tipN1 = new Phasetips(game, {
		targetObject: levelThumbs.thumbs[0],
		x: 210,
		y: 230,
		context: "Esse é um nível sobre os pares da replicação celular. Você é a DNA-Polimerase, logo deve pegar os pares com mutação para repara-los.\nAo chegar na pontuação necessária(você pode acompanhar pela barra que cresce ou diminui na área superior do jogo), você terá que enfrentar uma mutação que será forte de acordo com o numero de mutações que você deixou acontecer (atingiram a célula). Para conseguir as 3 estrelas, você deve vencer sem deixar nenhuma mutação atingir a célula.",
		customBackground: tipbg1,
		animation: "grow",
		padding: '60',
		fontStrokeThickness: '0',
		fontSize: 13,
		fontWordWrap: true,
    	fontWordWrapWidth: 330,
		});

	var tipN2 = new Phasetips(game, {
		targetObject: levelThumbs.thumbs[1],
		x: 210,
		y: 230,
		context: "Esse é um nível sobre os pares da replicação celular. Você é a DNA-Polimerase, logo deve pegar os pares com mutação para repara-los.\nAo chegar na pontuação necessária(você pode acompanhar pela barra que cresce ou diminui na área superior do jogo), você terá que enfrentar uma mutação que será forte de acordo com o numero de mutações que você deixou acontecer (atingiram a célula). Você atira com o mouse, o tiro vai para a direção do ponteiro. Para conseguir as 3 estrelas, você deve vencer sem deixar nenhuma mutação atingir a célula. ",
		customBackground: tipbg2,
		animation: "grow",
		padding: '60',
		fontStrokeThickness: '0',
		fontSize: 13,
		fontWordWrap: true,
    	fontWordWrapWidth: 330,
		});

	var tipN3 = new Phasetips(game, {
		targetObject: levelThumbs.thumbs[2],
		x: 210,
		y: 230,
		context: "Esse é um nível sobre os pares da transcrição celular. Você é a RNA-Polimerase, logo faz as reparações na fita do RNA. Você deve analisar o par de cima, que é o do DNA, e de acordo com ele, formar o seu par com os quadradinhos de baixo. Você muda as letras pulando e dando uma cabeçada nelas. Quando achar que estiver tudo correto, de uma cabeçada no quadrado de corrigir para fazer a correção. Após, você deverá combater uma mutação. Você atira com o mouse, o tiro vai para a direção do ponteiro. Para conseguir as 3 estrelas, você deve construir um par sem erros. ",
		customBackground: tipbg3,
		animation: "grow",
		padding: '60',
		fontStrokeThickness: '0',
		fontSize: 13,
		fontWordWrap: true,
    	fontWordWrapWidth: 330,
		});

}

function atualizarLevelState() {

}

function arrowClicked(button) {
	// touching right arrow and still not reached last page
	if (button.frame == 1 && currentPage < pages - 1) {
		leftArrow.alpha = 1;
		currentPage++;
		// fade out the button if we reached last page
		if (currentPage == pages - 1) {
			button.alpha = 0.3;
		}
		// scrolling level pages
		var buttonsTween = game.add.tween(levelThumbsGroup);
		buttonsTween.to({
			x: currentPage * game.width * -1
		}, 500, Phaser.Easing.Cubic.None);
		buttonsTween.start();
	}
	// touching left arrow and still not reached first page
	if (button.frame == 0 && currentPage > 0) {
		rightArrow.alpha = 1;
		currentPage--;
		// fade out the button if we reached first page
		if (currentPage == 0) {
			button.alpha = 0.3;
		}
		// scrolling level pages
		var buttonsTween = game.add.tween(levelThumbsGroup);
		buttonsTween.to({
			x: currentPage * game.width * -1
		}, 400, Phaser.Easing.Cubic.None);
		buttonsTween.start();
	}
}

function thumbClicked(button) {
	// the level is playable, then play the level!!
	if (button.frame < 4) {
		game.state.start('gameState' + button.levelNumber);
	}
	// else, let's shake the locked levels
	else {
		var buttonTween = game.add.tween(button)
		buttonTween.to({
			x: button.x + thumbWidth / 15
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.to({
			x: button.x - thumbWidth / 15
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.to({
			x: button.x + thumbWidth / 15
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.to({
			x: button.x - thumbWidth / 15
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.to({
			x: button.x
		}, 20, Phaser.Easing.Cubic.None);
		buttonTween.start();
	}
}