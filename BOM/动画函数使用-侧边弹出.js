// 给缓动动画添加回调函数  动起来后改变颜色
var span = document.querySelector('span')
function animate(obj, targae, hdhs){        //第三个值是 回调函数

    clearInterval(obj.timer)

    obj.timer = setInterval(function(){       //性能优化 本来是var timer   obj.timer 不用单独开辟空间  重要
    
      
         //动画缓动效果原理  ：(目标值-所在位置) / 10      10 份数可变
        //步长值写到定时器里面
        //要把我们步长值改为整数 不要出现小数的问题
        var setp = (targae - obj.offsetLeft) / 10
        setp = setp > 0 ? Math.ceil(setp) : Math.floor(setp)     //判断是正数还是负数 

        if(obj.offsetLeft == targae){        // div  400  分别改成 形参就是封装函数 再调用
            clearInterval(obj.timer)          //性能优化  本来值是timer  obj.timer 不用单独开辟空间  重要

            //回调函数 添加到定时器结束的时候
            hdhs()

        }else{
            obj.style.left = obj.offsetLeft + setp + 'px'
        }
    
    }, 15)
}


// var btn = document.querySelector('button')

// btn.addEventListener('click', function(){
//     animate(span, 500, function(){           //回调函数 function
//         span.style.background = 'red'
//     })
// })