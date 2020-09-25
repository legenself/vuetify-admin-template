import * as signalR from "@microsoft/signalr"
import defaultSettings from "@/setting";
let hub = defaultSettings.apiurl+"/messagehub"

const connection=new signalR.HubConnectionBuilder().withUrl(hub).build()
connection.start().then(()=>{
  console.log("已连接")
})
connection.reconnected().then(()=>{
  console.log("重新连接成功")
})
connection.reconnecting().then(()=>{
  console.log("重新连接成功")
})
connection.on("message",msg=>{
  console.log(msg)
})

