const Admin = require("../models/admin.model")
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")

// Get all users
// route GET /admins
// @access private
const getAllAdmins = asyncHandler(async (req, res) => {
    const admins = await Admin.find().select('-password').lean(); // Use Admin model
    if (!admins?.length) {
        return res.status(400).json({ message: 'No admins found' });
    }
    res.json(admins);
});

// Get all users
// route POST /admins
// @access private
const createNewAdmin = asyncHandler(async (req, res) => {
    const { userName, password } = req.body;

    // Confirm data
    if (!userName || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Check for duplicate userName
    const duplicateUserName = await Admin.findOne({ userName }).lean().exec();
    if (duplicateUserName) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const adminObject = { userName, password: hashedPassword };

    // Create and store new admin
    const admin = await Admin.create(adminObject);
    if (admin) {
        res.status(201).json({ message: `New admin ${userName} has been created` });
    } else {
        res.status(400).json({ message: 'Invalid admin data was received' });
    }
});

// Get all users
// route PATCH /admins
// @access private
const updateAdmin = asyncHandler(async (req, res) => {
    const { id, userName, password } = req.body;

    // Confirm data
    if (!id || !userName ) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const admin = await Admin.findById(id).exec();
    if (!admin) {
        return res.status(400).json({ message: 'Admin not found' });
    }

    // Check for duplicates
    const duplicate = await Admin.findOne({ userName }).lean().exec();
    if (duplicate && duplicate._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate username' });
    }

    admin.userName = userName;

    if (password) {
        // Hash password again
        admin.password = await bcrypt.hash(password, 10);
    }

    const updatedAdmin = await admin.save();
    res.json({ message: `${updatedAdmin.userName} updated` });
});

// Get all users
// route DELETE /admins
// @access private
const deleteAdmin = asyncHandler(async (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ message: 'Admin ID is required' });
    }

    const admin = await Admin.findById(id).exec();
    if (!admin) {
        return res.status(400).json({ message: 'Admin not found' });
    }

    const username = admin.userName;
    const Id = admin._id;

    const result = await admin.deleteOne();
    const reply = `Username ${username} with id ${Id} was deleted`;

    res.json(reply);
});

module.exports = {
    getAllAdmins,
    createNewAdmin,
    updateAdmin,
    deleteAdmin
};
