
(function(){
    var map = document.getElementById('map');
    var game = new Game(map);
    var botton1 = document.getElementById('botton1');
    var botton2 = document.getElementById('botton2'); 
    game.snake.render(this.map);
    var temp = true;

    botton1.onclick  = function(){               //开始游戏
        if(temp == true){
            game.food.render(game.map);
            game.start();
            temp = false;
        } 
    }

    botton2.onclick  = function(){               //重新开始
        location.reload(true);
    }
})();
