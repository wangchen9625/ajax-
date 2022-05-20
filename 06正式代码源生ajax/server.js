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
    //接收文件头自定义属性
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
//ie缓存问题
app.get('/ie-cache',(request,response)=>{
    //设置响应头 设置跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send("HEELO IE -2");
});
//延迟响应处理 
app.get('/delay',(request,response)=>{
    //设置响应头 设置跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    setTimeout(() => {
        response.send("延迟操作");
    }, 3000);
    
});
//请求取消
app.get('/cancleop',(request,response)=>{
    //设置响应头 设置跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    setTimeout(() => {
        response.send("延迟操作");
    }, 3000);
    
});
//jquery服务
app.get('/juery-get',(request,response)=>{
    //设置响应头 设置跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send("HELLO JQuery GET");
    
});
app.all('/juery-post',(request,response)=>{
    //设置响应头 设置跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    data = {
        name:"张三",
        age:18
    }
    response.send(JSON.stringify(data));
    
});
app.all('/axios-server',(request,response)=>{
    //设置响应头 设置跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    data = {
        type:"axios",
        name:"张三",
        age:18
    }
    response.send(JSON.stringify(data));
    
});
//4监听端口
app.listen(8000,()=>{
    console.log("服务已经启动,8000端口监听中.......");
    
})
