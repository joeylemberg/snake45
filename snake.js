var Snake = {

	color: 'blue',
	squares: [{ // Head is the last, tail is the first item
		x: 20, y:20
	},{
		x: 21, y:20
	},{
		x: 22, y:20
	},{
		x: 23, y:20
	},],

	eating: 0,

	dx: 1,
	dy: 0,

	draw: function(){
		ctx.save();
		ctx.fillStyle = Snake.color;
		for(var i = 0; i < Snake.squares.length; i++){
			var p = Snake.squares[i];
			ctx.fillRect(p.x, p.y, 1, 1);
		}
		ctx.restore();

	},

	move: function(){
		var head = Snake.squares[Snake.squares.length-1];
		var p = {
			x: (head.x + Snake.dx + Game.w) % Game.w,
			y: (head.y + Snake.dy + Game.h) % Game.h,
		};

		var eating = false;

		for(var i = 0; i < Snake.squares.length; i++){
			var z = Snake.squares[i];
			if(p.x == z.x && p.y == z.y){
				Game.endGame();
				return;
			}
		}

		Snake.eating--;


		Snake.squares.push(p);

		for(var i = 0; i < Food.squares.length; i++){
			var q = Food.squares[i];
			if(p.x == q.x && p.y == q.y){
				Snake.eating = 5;
				Game.score++;
				Food.squares.splice(i, 1);
				Food.addFood();
			}
		}

		if(Snake.eating <= 0){
			Snake.squares.shift();
		}
		
	},




};