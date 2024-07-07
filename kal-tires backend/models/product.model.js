const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        year: {
            type: String,
            required: [false],
        },

        make: {
            type: Number,
            required: [true],
        },

        model: {
            type: String,
            required: [true],
        },

        submodel: {
            type: String,
            required: [true],
        },

        tireSize: {
            type: String,
            required: [true],
        },

        wheelSize: {
            type: String,
            required: [true],
        },
    },
    {
        Timestamps: true,
    }
);

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product;
