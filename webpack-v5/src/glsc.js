import _ from 'lodash'
import './css/glzy.css'
import Icon from './img205.png'
import printMe from './print.js';


function component() {
    const element = document.createElement('div');
    const btn=document.createElement("button")

    // 执行这一行需要引入 lodash（目前通过 script 脚本引入）
    element.innerHTML = _.join(['Hello', 'webpack'," ","上穷碧落下黄泉"], ' ');

    element.classList.add('hello')
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.width=100;
    myIcon.height=100;
    element.appendChild(myIcon)

    btn.innerHTML="Click me and check the console!";
    btn.onclick=printMe;
    element.appendChild(btn);
    // const h3=document.createElement('h3');
    // h3.textContent="我是管理输出";
    // document.body.insertBefore(h3,element)
    return element;
}

document.body.appendChild(component());