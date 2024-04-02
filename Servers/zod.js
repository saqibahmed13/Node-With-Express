const { json } = require('express');
const zod = require('zod');

function validateInput(obj){
    const schema =  zod.object({
        email:zod.string().email(),
        password:zod.string().min(7)
    })

    const response  = schema.safeParse(obj);
    console.log(response);
}

validateInput({
    email:"saqib@gmail.com",
    password:"123456"
})


// validating 
application.post('/login', function(req,res){
const response = validateInput(req.body)     // in post man will give the body for validation
if(!response.success){
    json.res({
        msg: "Invalid Credentials"
    })
    return; 
}
//else it will return success 
})
