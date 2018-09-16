var Food = {

	color: 'red',
	init: function(){
		Food.addFood();
		Food.addFood();
		Food.addFood();
	},
	squares: [

	],
	addFood: function(){
		var x = Math.round(Math.random() * Game.w);
		var y = Math.round(Math.random() * Game.h);
		Food.squares.push({x: x, y: y});
	},
	draw: function(){
		ctx.save();
		ctx.fillStyle = Food.color;
		for(var i = 0; i < Food.squares.length; i++){
			var p = Food.squares[i];
			ctx.fillRect(p.x, p.y, 1, 1);

		}

		ctx.restore();
	},





}