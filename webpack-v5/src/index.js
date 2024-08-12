import _ from 'lodash'
import './index.css'
import Icon from './img205.png'
import printMe from './print.js';



function component() {
    const element = document.createElement('div');
    const btn=document.createElement("button")

    // 执行这一行需要引入 lodash（目前通过 script 脚本引入）
    element.innerHTML = _.join(['Hello', 'webpack'," ","上穷碧落下黄泉"], ' ');

    element.classList.add('hello')
    // const myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon)

    btn.innerHTML="Click me and check the console!";
    btn.onclick=printMe;
    element.appendChild(btn)
    return element;
}

document.body.appendChild(component());