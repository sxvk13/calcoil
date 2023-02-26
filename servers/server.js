/*
 * server 구축
 */

//server 관리모듈 'express' <npm install express>
const express =require('express');
const app = express();

//port (5000번) 할당 
const port = process.env.PORT||5000;

//server response Print

app.get('/',(req,res)=>{
    res.send('LetinAR Oil Calculator');
})

//server start   <실행 명령어 : node server.js> (server.js 파일이 있는 directory에서 실행)
app.listen(port,()=>{
    console.log(`server on : http://localhost:${port}/`);
})