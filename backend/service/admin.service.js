const Admin = require("../models/admin.model");
const User = require("../models/user.model")
const bcrypt=require("bcryptjs");
const jwtProvider = require("../config/jwtProvider");

const createAdmin= async(adminData)=>{
    try {
        let {name,email,password}=adminData;

        const isAdminExist=await Admin.findOne({email});

        if(isAdminExist) {
            throw new Error("Admin already exist with email :",email)
        }

        password = await bcrypt.hash(password,8);

        const admin = await Admin.create({name,email,password});

        return admin;

    } catch (error) {
 
        throw new Error(error.message)
    }
 
}

const findAdminById=async(adminId)=>{

    try {
        const admin = await Admin.findById(adminId)

        if(!admin) {
            throw new Error("Admin not found with id : ",adminId)
        }
        return admin;

    } catch (error) {
        throw new Error(error.message)
    }

}

const getAdminByEmail=async(email)=>{

    try {

        const admin=await Admin.findOne({email});

        if(!admin){
            throw new Error("Admin not found with email : ",email)
        }
        return admin;

    } catch (error) {
        throw new Error(error.message)
    }
    
}

const getAdminProfileByToken = async(token)=>{
    try {

        const adminId = jwtProvider.getAdminIdFromToken(token);

        const admin = await findAdminById(adminId);

        if(!admin) {
            throw new Error("Admin not found with id : ", adminId)
        }
        return admin;

    } catch (error) {
        throw new Error(error.message)
    }   
}

const getAllAdmins = async() => {
    try {
        const admins = await Admin.find();

        return admins;

    }
    catch (error) {
        throw new Error(error.message)
    }
}


async function deleteRequest(requestId) {

    try {

        await User.findByIdAndDelete(requestId);

        return true;
    } catch (error) {
        throw new Error(error.message)
    } 
}

module.exports={createAdmin,findAdminById,getAdminByEmail, getAdminProfileByToken, getAllAdmins, deleteRequest }

