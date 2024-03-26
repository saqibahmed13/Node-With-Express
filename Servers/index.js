const express = require('express')

const app = express();

function sum(n){
    let ans  = 0;
    for (let i = 1; i<=n; i++){
        ans = ans + i;
    }
    return ans; 
}

app.get('/code', function(req,res){
    const m = req.query.n;     // this is a query parameter where user can write the input after route localhost:3000/code/?n=3&n=10
    const ans  =  sum(m);
    res.send("Hi your sum is " + ans);
})
app.listen(3000);