const jwt=require('jsonwebtoken')
const {secret,expiresIn}=require('../config/jwt.config')
const generateToken=(payload)=>{
    return  jwt.sign(payload,secret,{expiresIn});
}

const verify=(token)=>{
    return jwt.verify(token,secret);
}

module.exports={generateToken,verify}