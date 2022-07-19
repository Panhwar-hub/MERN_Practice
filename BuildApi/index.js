const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors= require('cors')
const app  = express();

const Api = require('./models/Api')
const ApiContoller = require('./controller/ApiController')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/taskApi",{useNewUrlParser:true},()=>{
    console.log("connected to mongoDB")
});

app.get('/',(req,res)=>{
    res.send("Welcome We Are On Homepage")
})
app.get('/posts',ApiContoller.getData)
app.post('/posts', ApiContoller.sendData)
app.get('/posts/:pid',ApiContoller.specificPost);
app.patch('/posts/:pid', ApiContoller.updateData)
app.delete('/posts/:pid', ApiContoller.deleteData)

app.listen(3080,function(){
    console.log("server listening on port 3080");
})