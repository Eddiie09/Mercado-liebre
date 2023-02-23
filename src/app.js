const express = require('express');
const app = express();
const path =require('path');

/* Recursos publicos */
app.use(express.static(path.resolve(__dirname,'../public')))


const port =process.env.PORT || 3030;
app.listen(port, ()=>
console.log('servidor corriendo en el puerto' + port));

app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
})


