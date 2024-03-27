const express = require('express');

const app = express();

var user = [{
    name:"john",
    kidneys:[{
        healthy:false
    }]
}]

app.get('/', function(req,res){
    const johnKidneys = user[0].kidneys;
    const numberOfKid = johnKidneys.length;
    const numberOfHealthyKid = 0;
    for(let i=0; i<numberOfKid; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKid = numberOfHealthyKid+1
        }
    }
    const numberOfUnHealthyKid = numberOfKid - numberOfHealthyKid;
    res.json({
        numberOfKid,
        numberOfHealthyKid,
        numberOfUnHealthyKid
    })
})

app.listen(3000);