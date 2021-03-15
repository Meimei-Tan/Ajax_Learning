//引入express
const express = require('express');

//创建应用对象
const app = express();

//创建路由规则
    //request是对请求报文的封装 response是对响应报文的封装
app.get('/server',(request,response)=>{


    //设置响应头 设置允许跨域
        response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
        response.send("Hello,Ajax GET!");
});

app.all('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    response.send('Hello,Ajax POST!');
})
app.all('/json-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const obj = {
        name:"孙悟空",
        height:1.80,
        gender:"male",
        age:"1000"
    }
    const obj_json = JSON.stringify(obj);
    response.send(obj_json);
})

app.all('/re-request-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    setTimeout(function () {
        response.send("Hi,Server!");
    },3000)
})


app.all('/jsonp-server',)
app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中....");
})

