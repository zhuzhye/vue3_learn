import { sum } from "./js/math.js"
import "./js/element.js"
import {createApp} from "vue"
import App from "./vue/App.vue"
const { priceFormat } = require("./js/format")
console.log(sum(20, 30));

const names = ["abc", "cba", "nba"]
names.forEach(item => console.log(item))
console.log(priceFormat());
const app=createApp(App).mount("#app")