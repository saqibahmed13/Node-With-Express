const express = require( 'express' );
const app = express()
  
// app.get('/checkup', function(req,res){
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyID = req.query.kidneyID;

//     if(username!= "Saqib" || password!= "pass"){
//         res.status(400).json("Invalid Credentials")
       
//     }

//     if(kidneyID!=1 && kidneyID!=2){
//         res.status(400).json("Invalid Kidney ID");
        
//     }

//     res.json("you are all set");
    
// });



// app.listen(3001);




// Middlewares a route handler can have more then one callback function 
// next : we will use next it will take us to the next request

function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    
    if(username!="saqib" || password!="pass"){
        res.status(400).json("Invalid Credentials");
    }
    else{
        next()
    }
}


function idMiddleware(req,res, next){
    const kidneyID = req.query.kidneyID;

    if(kidneyID!=1 && kidneyID!=2){
        res.status(400).json( "Invalid Password");
    }
    else{
        next()
    }
}


app.get('/midd' , userMiddleware , idMiddleware, function(req,res){
   
res.json("you are all set!")
});

app.listen(3002);


