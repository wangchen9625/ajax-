//每次更改都要重启
//1引入express对象
const express = require('express');
//2创建实例对象
const app = express();

//3创建路由规则
app.get('/server',(request,response)=>{
    //设置响应头 设置跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send("HEELO Ajax");
});
//可以接受任何请求
app.all('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    response.send("post hello Ajax");
})

app.all('/json-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    data = {
        name :"zhangsan",
        age :18
    };
    response.send(JSON.stringify(data));//send 只能接收buffer 和字符串
})


//4监听端口
app.listen(8000,()=>{
    console.log("服务已经启动,8000端口监听中.......");
})
