import * as signalR from "@microsoft/signalr"
import defaultSettings from "@/setting";
let hub = defaultSettings.apiurl+"/messagehub"
import store from '@/store'
const connection=new signalR.HubConnectionBuilder().withUrl(hub).build()
connection.start().then(()=>{
  store.commit("user/RMESSAGE","连接成功")

})
// connection.reconnected().then(()=>{
//   console.log("重新连接成功")
// })
// connection.reconnecting().then(()=>{
//   console.log("重新连接成功")
// })
connection.on("message",msg=>{
  store.commit("user/RMESSAGE",msg)
  console.log(msg)
})

export default {
  install:function(Vue){
    Vue.prototype.signalr=connection;
  }
}

