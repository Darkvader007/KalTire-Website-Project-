const { Timestamp } = require('mongodb');
const mongoose = require('mongoose')

const AdminSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            require: [true]
        },
        password: {
            type: String,
            require: [true]
        },
    },
    {
        Timestamps: true
    }
);

const Admin = mongoose.model("admin", AdminSchema)

module.exports = Admin;