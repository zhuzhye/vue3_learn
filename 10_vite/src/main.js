import { sum } from "./js/main.js"
import { createApp } from "vue"
import App from "./vue/App.vue"
import _ from "../node_modules/lodash-es/lodash.default.js"
import "./css/style.css"
import "./css/title.less"
import mul from "./ts/mul"
console.log("Hello word");
console.log(sum(10, 20));
console.log(_.join(["abc", "cba"], "-"));
console.log(mul(20, 50), "ts");
const titleEl = document.createElement("div")
titleEl.className = "title"
titleEl.innerHTML = "Hello Vite"
document.body.appendChild(titleEl)
createApp(App).mount("#app")
