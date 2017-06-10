var express = require('express');
var fs = require('fs');
var path = require('path');

var images = require('./public/index.js').images;

var app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'Images')));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
}); 


app.get('/allimages',(req,res)=>{
    console.log(JSON.stringify({images:images}));
    res.send(JSON.stringify({images:images}));
});

console.log('Listening on 3000');
app.listen(3000);
