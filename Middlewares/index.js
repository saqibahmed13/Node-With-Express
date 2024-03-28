const express = require( 'express' );
const app = express()

app.get('/checkup', function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyID = req.query.kidneyID;

    if(username!= "Saqib" || password!= "pass"){
        res.status(400).json("Invalid Credentials")
       
    }

    if(kidneyID!=1 && kidneyID!=2){
        res.status(400).json("Invalid Kidney ID");
        
    }

    res.json("you are all set");
    
});



app.listen(3001);