var Game = {
	init: function() {

		var canvas = document.getElementById("game");
		canvas.width = Game.w;
		canvas.height = Game.h;
		ctx = canvas.getContext("2d");

		Input.init();
		Food.init();

		Game.interval = setInterval(Game.loop, 25);
	},

	gameOver: false,

	score: 0,
	w: 60,
	h: 60,

	loop: function() {

		Snake.move();

		ctx.clearRect(0,0,Game.w,Game.h);
		Snake.draw();
		Food.draw();

		document.getElementById('score').innerText = Game.score;

		if(Game.gameOver){
			ctx.fillStyle = "rgba(255,0,0,0.5)";
			ctx.fillRect(0,0,Game.w, Game.h);

			ctx.scale(1.1, 1.1);
			ctx.strokeText("Game Over", 1,30);
		}


	},

	endGame: function(){
		clearInterval(Game.interval);
		Game.gameOver = true;

	},
};