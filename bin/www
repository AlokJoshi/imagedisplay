var express = require('express');
var fs = require('fs');
var path = require('path');

var images = require('../public/index.js').images;

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname,'../public')));
app.use(express.static(path.join(__dirname,'../Images')));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
}); 


app.get('/allimages',(req,res)=>{
    console.log(JSON.stringify({images:images}));
    res.send(JSON.stringify({images:images}));
});

app.listen(app.get('port'),function(){
    console.log('Node app is running on port',
    app.get('port'));
});
