(function(){
    var that ;
    function Game(map){
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that =this;
    }
    
    Game.prototype.start =function(){
        this.food.render(this.map);
        this.snake.render(this.map);
        //1.让蛇动起来
        runSnake();
        //2.控制蛇的移动方向
        bindKey();
        //3.遇到食物做出反应
        //4.遇到边界游戏结束
    }

    function bindKey(){
        document.onkeydown = function(e){
            e = e || window.e;
            //37:left   38:top  39:right    40:bottom
            switch(e.keyCode){
                case 37:that.snake.direction = 'left';break;
                case 38:that.snake.direction = 'top';break;
                case 39:that.snake.direction = 'right';break;
                case 40:that.snake.direction = 'bottom';break;
            }
        };
    }

    function runSnake(){
        var timeID = setInterval(function(){
            that.snake.move(that.food,that.map);
            that.snake.render(that.map);
            var maxX = that.map.offsetWidth /that.snake.width+8;
            var maxY = that.map.offsetHeight /that.snake.height;
            var headX = that.snake.body[0].x;
            var headY = that.snake.body[0].y;
            if(headX<8 || headX >= maxX){
                alert('游戏结束');   
                alert("共吃了"+that.food.score+"个食物")
                clearInterval(timeID);
            }
            if(headY <0 || headY >= maxY){
                alert("游戏结束!!!");
                alert("共吃了"+that.food.score+"个食物")
                clearInterval(timeID);
            }
            for(var i=that.snake.body.length-1;i>=1;i--){               //身体接触
                if(that.snake.body[0].x == that.snake.body[i].x && that.snake.body[0].y == that.snake.body[i].y){
                    alert('游戏结束');   
                    alert("共吃了"+that.food.score+"个食物")
                    clearInterval(timeID);
                }
            }
        },150);
        
    }

    window.Game = Game;
})();

