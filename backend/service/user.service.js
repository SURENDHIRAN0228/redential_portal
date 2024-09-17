const User = require("../models/user.model")

async function maintenanceRequest(reqData) {

    const user = new User({
        name: reqData.name,
        email: reqData.email,
        unitNumber: reqData.unitNumber,
        serviceType: reqData.serviceType,
        summary: reqData.summary,
        details:reqData.details
    })

    const savedRequest = await user.save();

    return savedRequest
}

const getAllRequests = async() => {
    try {
        const requests = await User.find();

        return requests;

    }
    catch (error) {
        throw new Error(error.message)
    }
}

module.exports= {
    maintenanceRequest, getAllRequests
}