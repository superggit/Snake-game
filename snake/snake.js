(function(){
    var elements =[];
    var a1 = document.getElementById('map') ;
    function Snake(options){
        options = options || {};
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.direction = options.direction || 'right';
        this.body = [ 
            {x:11 ,y:2 ,color:"red"},
            {x:10 ,y:2 ,color:"blue" },
            {x:9 ,y:2 ,color:"blue" }
        ];
    }
    Snake.prototype.render = function(map){

        remove();

        for(var i=0 ,len = this.body.length; i<len;i++){
            var object = this.body[i];

            var div = document.createElement("div");
            map.appendChild(div);
            elements.push(div);

            div.style.position = 'absolute';
            div.style.left = object.x*this.width +'px';
            div.style.top = object.y*this.height +'px';
            div.style.width = this.width +'px';
            div.style.height = this.height +'px';
            if(i==0){
                div.style.backgroundColor = 'red'; 
            }else{
                div.style.backgroundColor = 'blue'; 
            }
            
        }
    }
    
    function remove(){
        for(var i = elements.length-1 ; i>=0 ;i--){
            elements[i].parentNode.removeChild(elements[i]);        //删除div
            elements.splice(i,1);                                   //删除数组元素
        }
    }

    Snake.prototype.move = function(food,map){
        for(var i = this.body.length-1;i>0;i--){
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }
        var head = this.body[0];
        switch(this.direction){
            case 'right': head.x += 1;break;
            case 'left':  head.x -= 1;break;
            case 'top':   head.y -= 1;break;   
            case 'bottom':head.y += 1;break;
        }
        var headX = head.x * this.width;
        var headY = head.y * this.height;
        if(headX === food.x && headY === food.y){
            food.render(map);
            food.score++;
            var last = this.body[this.body.length-1];
            this.body.push({x:last.x , y:last.y , color:last.color});          //原始
            // for(var j=0;j<10;j++){                                           //吃一个加长10
            //     switch(this.direction){
            //         case 'right': this.body.push({x:last.x-j , y:last.y , color:last.color}); break;
            //         case 'left':  this.body.push({x:last.x+j , y:last.y , color:last.color}); break;
            //         case 'top':   this.body.push({x:last.x , y:last.y+j , color:last.color}); break;   
            //         case 'bottom':this.body.push({x:last.x, y:last.y-j , color:last.color}); break;
            //     }
            // }
               
        }

    }
    window.Snake = Snake;
})();
