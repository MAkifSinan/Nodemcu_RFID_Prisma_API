const express =require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const fs = require('fs');
const app =express();
var location=" ";
var cardId=" ";
var cardId_2=" ";
var devices_count="";
var info="";
const regex=/_/g;

app.get('/logging',(req,res)=>{
    res.status(200).json({
        message :`get calisti`

      });    
    console.log("kullanıcıdan "+req.query.s+" ve "+req.query.id+"  bu mesaj geldi");
    location=req.query.s;
    cardId=req.query.id;
    devices_count=req.query.c;
    info=req.query.inf;
    cardId_2=cardId.replace(regex,' ');
    createUser(cardId_2,location,devices_count,info);
    console.log("data location : "+location + " data id : "+ cardId_2);
    
});

app.post('/logging',(req,res)=>{
    res.status(200).json({
        message :`user ${req.params.userIds} tarafından "post" verildi`
    });    

    console.log("kullanıcıdan "+req.query.s+" ve "+req.query.id+"  bu mesaj geldi");
    location=req.query.s;
    cardId=req.query.id;
    devices_count=req.query.c;
    info=req.query.inf;
    cardId_2=cardId.replace(regex,' ');
    createUser(cardId_2,location,devices_count,info);
    console.log("data location : "+location + " data id : "+ cardId_2);

});


async function createUser(x,y,t,q) {
    const date= new Date();
    user = await prisma.user.create({
     data: {
       cart_id: x,
       location: y,
       time: date,
       device_count:t,
       extra_info: q
     }
   });
 
   console.log(user);
 }


module.exports =app;
