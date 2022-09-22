// 模块化 导出css的字符串

const string =
`

/* 新版盒子 */
/* 块级元素，其 width 属性的值会自动撑满父元素的 width 区域 heigt只会撑开父元素内容的heigth*/
/* margin: 0; padding: 0;!*指所有的标签,这里是把所有标签的内外边距设为0 */
// 避免* 影响到button的盒模型样式,
.skin *{box-sizing: border-box; margin: 0; padding: 0;} 
::after ,::before {box-sizing: border-box;}
/* 鼻子的思路：做一个三角形 */

body {
/* 背景色的第二种写法 */
    background-color: yellow;
}

.skin{
    position: relative;
    background: yellow;
    height: 100vh;
}
.nose{
    /* 将鼻子的颜色改为黑色 */
    border: 10px solid black;
    
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    /* 使鼻子图像变为三角形  方法：把底部去掉，左右颜色设为透明 宽高设为0px*/
    border-color: black transparent transparent;
    border-bottom: none;
    /* 如果元素被覆盖了则用层叠上下文把元素优先放在上面 */
    z-index: 10;



}

/* 把比卡丘鼻子设为圆弧形 */

.yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    /* border: 1px solid green; */
    /* ! 负值的意思是  在边框外部离顶部的距离,所以负值越大离基点越远,同理left是距离基点的边距*/
    /* 微调top,radius,使嘴唇接近原图 */
    top:-16px;
    left: -10px;
    /* 左右边角圆形， 下边两边设置没有颜色 */
    border-radius: 14px 14px 0 0 ; 
    /* 背景颜色红色 */
    background:black;


    

}

/* 眼睛 */
.eye {
    border: 2px solid #000;
    border-radius:50%;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    /* 负值怎么理解？ */
    margin-left: -32px;
    background: #303031;
    
}

/* 眼睛中的白色图像,使用伪元素 */

/* relative定位基点是元素本身 */
.eye::before{
    content: '';
    border:  2px solid 000;
    width: 32px;
    height: 32px;
    /* 伪元素默认为 内联元素,内联元素宽高设置无效,设置为块元素 */
    display: block;
    background: white;
    border-radius: 50%;
    position: relative;
    left: 4px;
    

}

/* 左眼 */
.eye.left {
    /* ! */ 
    transform: translateX(-100px);
}
/* 右眼 */
.eye.right {
     /* ! */
    transform: translateX(100px);
}

/* 嘴部--> 第三步绘制 的上部图案 */
.mouth {
    /* 嘴巴位置大小 */
    /* 全部完成后最后去除边框，边框的作用是对嘴唇进行修改时作为距离的参照使用，因此用完后去除 */
    /* border:1px solid red ; */
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 183px;
    /* ? */
    margin-left:-100px;
}


/* 嘴唇上半部思路:  当作一个椭圆形的四分之一 */


/* 将上嘴唇整体调整位置-->加高 */
.mouth .up {
    position: relative;
    /* 不断的微调与原型一致 */
    top: -20px;
    z-index: 1;
}





/* ! 如果遇到样式不对 一般有哪些调试方法可以快速解决问题,浏览器控制台!浏览器F12调试-->
一般样式完全没有的原因是1.html标签写错,2.css定位元素写错, */


/* 由于下嘴唇背景色覆盖了上嘴唇的区域，使用上嘴唇去除背景色，设为黄色 */
.mouth .up .lip {
    /* ？为什么说这里是透明色！ 盒子未设置背景色默认为透明色 */
    background: yellow;
}

.mouth .up  .lip.left {
    border: 5px solid black;
    /* border-bottom: 5px solid black;
    border-left: 3px solid black; */
    height: 30px;
    width: 100px;
    border-radius: 0 0 0 50px;
    
    
    /* 透明色? 为什么边框颜色是绿色的? */
    border-top-color: transparent;
    border-right-color: transparent;
    /* 使用rotate使嘴唇的位置与原图一致,不断调整倾斜角度 */

    transform: rotate(-18deg) translateX(-53px) ;
    position: absolute;
    /* 左侧距离  设置为距离基点一半 */
    left: 50%;
    /* 左侧外边距  设置为 距离基点 -50px 的长度 ? */
    margin-left: -50px;
}



/* 复制 上嘴唇左边部分复制到右边 进行修改 */


.mouth .up  .lip.right {
    border: 5px solid black;
    /* border-bottom: 5px solid black;  
    border-left: 3px solid black;  */
    
    height: 30px;
    width: 100px;
    /* 圆角与右侧微调,设左下边为圆角 */
    border-radius: 0 0 50px 0px;
    
    position: absolute;
    /* 透明色? 为什么边框颜色是绿色的? */
    border-top-color: transparent;
    border-right-color: transparent;
    /* 使用rotate使嘴唇的位置与原图一致,不断调整倾斜角度 */
    /* 与左上嘴唇相反-->进行旋转 正值,  */
    transform: rotate(18deg) translateX(53px);

    left:50%;
    /* 左侧外边距  设置为 距离基点 -50px 的长度 ? */
    margin-left: -50px;
}

/* 因为上面的 css绘制 上嘴唇的形状多了一个宽,所有使用伪元素去除 该宽线 */
.mouth .up .lip.left::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    /* border: 1px solid green; */
    /* 移动至目标边框并覆盖该边框 */
    right: -5px;
    bottom: 0px;
    /* 存在空白痕迹 */
    background:yellow ;
}


/* 右上嘴唇 与左侧一样 用伪元素 去除多余的边框，复制修改右侧的代码即可 */
.mouth .up .lip.right::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    /* border: 1px solid green; */
    /* 修改为 向左偏移 -5px覆盖原有多余边框 */
    left: -5px;
    bottom: 0px;
    /* 存在空白痕迹 */
    background:yellow ;
}



/* 下嘴唇思路： 先用radius圆角 画一个 不规则的 椭圆 取1/6，再画一扇形 取上半部分，将两个图形结合起来即可 */
/* 椭圆 */
.mouth .down {
    /* 设定下嘴唇的区域 */
    /* border:  1px solid red; */
    height:  160px;
    position: absolute;
    top: 5px;
    bottom: 0px;
    width: 100%;
    /* 隐藏元素内溢出的部分 */
    overflow: hidden;
}


/* 扇形 */
.mouth .down .sanxing {
    border:3px solid black ;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left:50% ;
    margin-left: -75px;
    /* 使用圆角绘制下嘴唇 -->遇到无法解决的问题可以百度查解决的方案，如这里如何
    使用圆角radius去绘制下嘴唇*/
    border-radius: 75px /200px;
    background:#9B000A;
    overflow: hidden;
}


/* 舌头的制作， 在扇形中  添加一个子元素，对子元素进行 样式修改 */
.mouth .down .sanxing .yuan1 {
    /* border: 1px solid green; */
    width: 200px;
    height: 300px;
    /* 初始位置在父元素1000px高度的地方，所以页面不可见 ，进行定位*/
    position: absolute;
    bottom: -179px;
    left: 50%;
    margin-left:  -100px; 
    border-radius: 100px;
    background:  #ff485f;;

}

 
.face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;


}

.face.left {
    /* position: absolute; */
    /* ?如何避免css的拼写错误，有没有插件 */
    transform:  translateX(-180px);
    background: red;
    border-radius: 50%;
}

.face.right {
    transform:  translateX(180px);
    background: red;
    border-radius: 50%;
}  


/* 鼻子晃动的效果，使用伪类建立一个样式，
再用hover -->触发 选择鼠标指针浮动在其上的元素，并设置其样式：*/

/* 
@keyframes能够创建动画。 创建动画的原理是将一套 CSS 样式逐渐变化为另一套样式。
animation属性控制动画的外观：
animation-name设置动画的名称， 也就是要绑定的选择器的@keyframes的名称。
animation-duration设置动画所花费的时间,
@keyframes+hover 可以实现点鼠demo标悬停在元素（按钮）上时，实现播放动画效果； 

 语法如下 */
@keyframes wave{
    0%{
        transform: rotate(0deg);

    }
    33%{
        transform: rotate(15deg);

    }
    66%{
        transform: rotate(-15deg);
        
    }
    100%{
        transform: rotate(0deg);
        
    }
}
.nose:hover {
    /* transform-origin */
    transform-origin: 50% 100%;
    animation: wave 1000ms infinite;
}


/* 闪电的位置样式 */
.face > img {
    /* border: 1px solid red; */
    position:  absolute;
    top: 50%;
    left: 50%;

    /* 默认看不见 */
    /* display: none; */

}

/* 对左脸闪电进行反转位置 */
.face.left > img {
    transform: rotateY(180deg); 
    transform-origin: 0 0 ;
}
`


// 导出字符串string
export default string;