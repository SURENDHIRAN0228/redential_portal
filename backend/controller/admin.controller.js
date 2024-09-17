const adminService = require('../service/admin.service.js')
const jwtProvider = require("../config/jwtProvider.js")
const bcrypt = require('bcryptjs');


const register = async(req,res) => {

    try {
        const admin = await adminService.createAdmin(req.body);
        const jwt = jwtProvider.generateToken(admin._id)

        return res.send({status: 200, jwt,message:"Register success"})

    } catch(error) {
        return res.send({status: 400, error: error.message});
    }

}

const login = async(req,res) => {
    const { password, email } = req.body;

    try {
         const admin = await adminService.getAdminByEmail(email);

         if(!admin) {
            return res.send({ status: 404, message: 'Admin not found with email : ',email })
         }
         const isPasswordValid = await bcrypt.compare(password, admin.password);

         if(!isPasswordValid) {
            return res.send({status: 401, message: "Invalid Password..."})
         }
        const jwt = jwtProvider.generateToken(admin._id);
        return res.send({ status: 200, token: jwt, message:"login success"});
    }
    catch(error) {
        return res.send({ status: 500, error: error.message});

    }
}


const deleteRequest = async(req,res) => {
    const requestId = req.params.id;
    try {
        const request = await adminService.deleteRequest(requestId);
        return res.send({status:201, message: "Request Deleted"});
    } catch(error) {
        return res.send({status: 500, error: error.message})
    }
}

module.exports = { register, login, deleteRequest }