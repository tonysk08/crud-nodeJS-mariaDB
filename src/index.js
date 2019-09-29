const express=require('express');
const path=require('path');
const morgan =require('morgan');
const mysql =require('mysql');
const myConnection =require('express-myconnection');

const colors= require('colors');

const app=express();

//setings
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//middlewares
 app.use(morgan('dev'));
 app.use(myConnection(mysql,{
     host:'localhost',
     user:'root',
     password:'',
     port:3306,
     database:'crudNodeJS'
 },'single'));

app.listen(app.get('port'), function()
{
    console.log('server runing on port 3000'.blue);
    
})
