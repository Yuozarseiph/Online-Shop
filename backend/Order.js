const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: {
        name: String,
        address: String,
        phone: String,
        paymentMethod: String,
    },
    items: [
        {
            title: String,
            price: Number,
            quantity: Number,
        }
    ],
    total: Number,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
