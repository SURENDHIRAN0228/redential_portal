const userService = require("../service/user.service")

const createRequest = async(req,res) => {
    try {
        const request = await userService.maintenanceRequest(req.body);
        return res.send({status: 200, message: "Your request has posted!" });
    } catch(error) {
        return res.send({status: 500, error: error.message})
    }
}

const getAllRequests = async(req,res) => {
    try {
        const requests = await userService.getAllRequests(req.query);
        return res.send({status: 200, data: requests});
    } catch(error) {
        return res.send({status:500, error: error.message})
    }
}

module.exports = {
    createRequest, getAllRequests
}