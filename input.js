var Input = {
	init: function(){

		document.addEventListener('keydown', function(e){
			switch(e.keyCode){
				case 38:
					Snake.dy = -1;
					Snake.dx = 0;
					break;

				case 40:
					Snake.dy = 1;
					Snake.dx = 0;
					break;

				case 37:
					Snake.dy = 0;
					Snake.dx = -1;
					break;

				case 39:
					Snake.dy = 0;
					Snake.dx = 1;
					break;
			}
		});
	}

};