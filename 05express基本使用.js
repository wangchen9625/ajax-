//1引入express对象
const express = require('express');
//2创建实例对象
const app = express();

//3创建路由规则
app.get('/',(request,response)=>{
    //设置简单的相应
    response.send("HEELO EXPRESS");
});

//4监听端口
app.listen(8000,()=>{
    console.log("服务已经启动,8000端口监听中.......");
})