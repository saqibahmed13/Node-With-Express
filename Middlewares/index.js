const express = require( 'express' );
const app = express()

app.get('/checkup', function(req,res){
    const username = req.header.username;
    const password = req.header.password;
    const kidneyID = req.query.kidneyID;
})




app.listen(3001);