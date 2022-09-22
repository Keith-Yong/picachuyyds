// 使用模块化导入css字符串
import string from './css.js'

//  通过dom拿到标签元素

const demo = document.querySelector("#demo")

const demo2 = document.querySelector("#demo2")

// demo2.innerText  = string.substr( 0, n)

// demo.innerHTML = string.substr( 0, n)

// setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
// 返回一个id,调用 clearInterval() 可以关闭函数。


// 快慢速思路，定义一个速度的变量time控制time的值
let time = 100
let n = 1
let id

// 最后一步优化代码，思路把整个播放器作为一个对象，以对象的形式构造。

const player = {
    events : {
        '#btnPause': 'pause',
        '#btnPlay' :'play',
        '#btnslow' : 'slow',
        '#btnfast' :'fast',
    },

    init: () => {
        demo2.innerHTML = string.substr(0, n)
        demo.innerText = string.substr(0, n)
        player.bindEvents()
        player.play()
       


    },
    

    bindEvents: () => {
        // 这里出现了一个低级失误,少写了符号#导致执行失败
       for (let key in  player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                console.log(value)
                document.querySelector(key).onclick = player[value]
            }
    }



    },

    //  run函数：把css的样式 输出到页面中

    run: () => {

        // 定义一个箭头函数
        n += 1
        if (n > string.length) {
            window.clearInterval(id)
            return
        }
        // console.log(n + ':' + string.substr(0,n))
        //  最重要的节点： 同时使用标签的innertext 和innerhtml的标签展示一个

        // 让文本部分滚动条向下移动  为该滚动条的长度 
        demo2.innerHTML = string.substr(0, n)
        demo.innerText = string.substr(0, n)

        demo.scrollTop = 99999
    },

     //    play函数：按指定时间间隔（）执行run函数
    play: () => {
        if (id){
            player.pause()
        }

        
        id = setInterval(player.run, time)
        return id
    },
    // pause函数：暂停执行play

    pause: () => {
        return window.clearInterval(id)
    },

   // slow函数：慢速执行play函数，修改time的值达到慢速的效果
    slow: () => {
        // console.log('慢速');
        player.pause()

        time = 150
        id = player.play()
        console.log('慢速');
    },


    // fast函数：慢速执行play函数，修改time的值达到快速的效果
    
    fast: () => {
        console.log('快速');
        player.pause()
        time = 10
        // run后面不能加（），否则是返回值,
        // 出现的bug，这里使用let或var id导致id的值成为函数局部变量无法被外部访问，而再次触发暂停和其他事件时，无法拿到当前快速函数的id值，因为其他事件引用的全局变量的id值

        player.play()
        console.log('快速');

    }

}



// 把重复的代码用函数封装，播放，和暂停等
 player.init()



//  默认执行setInterval函数



// 暂停
// $btnPause =





