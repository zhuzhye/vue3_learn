import { sum } from "./js/math.js"
import "@/js/element.js"
import {createApp} from "vue"
import App from "./vue/App"
const { priceFormat } = require("./js/format")
console.log(sum(20, 30));

const names = ["abc", "cba", "nba"]
names.forEach(item => console.log(item))
console.log(priceFormat());
const app=createApp(App).mount("#app")
console.log("123");
console.log('object');
// if (module.hot) {
//   // 一旦 module.hot 为true，说明开启了HMR功能。 --> 让HMR功能代码生效
//   module.hot.accept('./js/element.js', function() {
//     // 方法会监听 print.js 文件的变化，一旦发生变化，其他模块不会重新打包构建。
//     // 会执行后面的回调函数
//     console.log('Accepting the updated print module!');
//   });
// }
