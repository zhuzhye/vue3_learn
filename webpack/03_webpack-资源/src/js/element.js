// import "css-loader!../css/style.css"
import "../css/style.css"
import "../css/title.less"
import "../css/image.css"
import zzhnimag from "../img/zznh.png"
const divEl = document.createElement("div")
divEl.className = "title"
divEl.innerHTML = "你好啊"

const bgDivEl = document.createElement('div');
bgDivEl.className = "image-bg";

const imgEl = document.createElement('img')
imgEl.src = zzhnimag

document.body.appendChild(divEl)
document.body.appendChild(bgDivEl)
document.body.appendChild(imgEl)