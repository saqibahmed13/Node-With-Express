const jwt = require("jsonwebtoken")


const user = {
    name:"saqib",
    password:12345
}

const token = jwt.sign(user, secret);   // means  create a token  with the data of user along with secret key for the verification

console.log(token);