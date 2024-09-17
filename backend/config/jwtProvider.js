const jwt=require("jsonwebtoken")


const SECRET_KEY='gdhdhdjfjdvdfyurfhjsbdjngjgdskklslkd'

const generateToken=(adminId)=>{
    const token=jwt.sign({adminId},SECRET_KEY,{expiresIn:"48h"})
    return token;
} 


const getUserIdFromToken=(token)=>{
    const decodedToken=jwt.verify(token,SECRET_KEY)
    return decodedToken.adminId;
}

module.exports= { generateToken, getUserIdFromToken }

