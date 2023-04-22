var express = require('express');
var app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'))

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})