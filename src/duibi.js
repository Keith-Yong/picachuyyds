// 使用模块化导入css字符串
// import string from './css.js'

let n = 1

// demo2.innerText  = string.substr( 0, n)

// demo.innerHTML = string.substr( 0, n)

// setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
// 返回一个id,调用 clearInterval() 可以关闭函数。


// 快慢速思路，定义一个速度的变量time控制time的值
let time = 100


// 最后一步优化代码，思路把整个播放器作为一个对象，以对象的形式构造。

const player = {

    //  run属性，
    run: () =>{
     
        // 定义一个箭头函数
        n += 1
        if(n>string.length)
        {window.clearInterval(id)
        return
        }
        // console.log(n + ':' + string.substr(0,n))
        //  最重要的节点： 同时使用标签的innertext 和innerhtml的标签展示一个
        demo2.innerHTML = string.substr(0,n)
        demo.innerText  = string.substr( 0, n)
        // 让文本部分滚动条向下移动  为该滚动条的长度 
        demo.scrollTop = 99999
       },

    //    play函数：每隔多少事件执行run函数
    play : () => { 
        return setInterval (player.run, time) 
    },

    pause : () => {  
        return window.clearInterval(id)
     },

     slow : () =>{
        player.pause()
        
        time = 150
        id = player.play()
    },
    fast : () => {
        player.pause()
        time = 10
        // run后面不能加（），否则是返回值
        let id = player.play()
        
    }

}

 

// 把重复的代码用函数封装，播放，和暂停等
 

 

//  默认执行setInterval函数
let id = player.play()


// 暂停
$btnPause = 
btnPause.onclick = () =>{
   
    pause()
    console.log('暂停');
}
//  播放,暂停之前的播放器再次调用
btnPlay.onclick = ()=>{

    if (id) {pause()}
    
    id = play()
    
}


// 慢速 ,思路停止当前速度后，再次执行
btnslow.onclick = slow


// ,思路停止当前速度后，再次执行
// 快速 ,思路停止当前速度后，再次执行
btnfast.onclick = fast


// 代码的优化，尽量使用函数写法
// function(){
//     run() }   等同于 run
