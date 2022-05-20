## nodemon
依托于nodejs 需要先按照好nodejs

命令
```
npm install -g nodemon
```
![](2022-05-20-14-44-01.png)
![](2022-05-20-14-44-33.png)

不在使用node 启动
改用nodemon 来启动
```
nodemon server.js
```

在vscode 上面报错 是因为禁止启用脚本
可以通过以下命令
```
npx nodemon server.js
```
![](2022-05-20-14-50-51.png)