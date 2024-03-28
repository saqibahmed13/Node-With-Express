const express = require("express");
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

const newNumber = users[0].kidneys.push({
    healthy:false
});

console.log("newba", users[0].kidneys.length);



app.use(express.json());     // this is a middle ware where express.json means it takes a function and adds in app.post as a middleware
                            // what ever comes below it will add middleware there in body

// In simpler terms, app.use(express.json()) ensures that your Express application can handle JSON data 
// sent in the request body of incoming HTTP requests. 
// It's a common practice when building APIs where data is often sent and received in JSON format.

app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys;      // false
    const numberOfKidneys = johnKidneys.length;  // 1
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i<johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {    // true
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function(req, res) {
    
    const isHealthy = req.body.isHealthy;      // body represents the body of HTTP request and isHealthy is the property value 
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Healthy Kidney Added!"
    })
})

// 411
app.put("/", function(req, res) {
    if(isThereAtleastOneUnhealthyKidney()) {
        for (let i = 0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({msg:"replaced unhealthy with the healthy"});}
    else{
        res.status(411).json({
            msg:"there are no unhealthy kidneys left"
        })
    }
    
})

// removing all the unhealhty kidneys

app.delete("/", function(req, res) {
    if(isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = [];
        for (let i = 0; i<users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "done"})   
    } else {
        res.status(411).json({
            msg: "You have no bad kidneys"
        });
    }
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i<users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney
}
app.listen(3000);


