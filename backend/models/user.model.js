const mongoose = require('mongoose');

const MaintenanceRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    unitNumber: {
        type: String,
        required: true
    },
    serviceType: {
        type: String
    },
    summary: {
        type: String
    },
    details: {
        type: String,
        //required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model('maintenanceRequest', MaintenanceRequestSchema);

module.exports = User;