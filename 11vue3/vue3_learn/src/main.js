import { createApp } from 'vue'
// import App from './01_组件的拆分和嵌套/App.vue'
import App from "./13_引用元素和组件/App.vue"
// import 函数导入的模块，后续webpack对其进行打包的时候会对其进行分包
// import ("./12_异步组件的使用/utils/Math").then(res=>{
  
//   res.sum(20+20)
// })
createApp(App).mount('#app')
