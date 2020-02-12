(function(){
    var elements = [];

    function Food(options){                                     //构造函数
        options = options || {};
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.score = options.score || 0;
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.color = options.color || 'green';
    }
    
    var Tools = {getRandom:function(min,max){                   //生成随机数
        return Math.floor(Math.random()*(max - min +1))+min;
    }}
    
    Food.prototype.render = function(map){                      //原型
        
        remove();


        this.x = Tools.getRandom(8,map.offsetWidth/this.width+7)*this.width;            
        this.y = Tools.getRandom(0,map.offsetHeight/this.height-1)*this.height;    
        var div = document.createElement('div');
        map.appendChild(div);
        elements.push(div);                                     //将元素放入数组中
    
        div.style.position = 'absolute';
        div.style.left = this.x +'px';
        div.style.top = this.y +'px';
        div.style.width = this.width +'px';
        div.style.height = this.height +'px'; 
        div.style.backgroundColor = this.color;
    }
    
    function remove(){
        for(var i = elements.length-1 ; i>=0 ;i--){
            elements[i].parentNode.removeChild(elements[i]);     //删除div
            elements.splice(i,1);                                  //删除数组元素
        }
    }
    window.Food = Food;
})();


