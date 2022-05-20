### 在终端打开

### 初始化命令
```
npm init --yes //初始化
```
![](2022-05-19-15-51-20.png)
### 安装
```
npm i express
```
![](2022-05-19-15-51-34.png)

## 创建express 对象实例

```
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
```
## 启动服务端口
1.在当前文件用终端打开 ,运行文件
```
node [filename] 
```

## 关闭终端
命令行中敲
```
ctrl + c
```