const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

// Place an Order
router.post("/", async (req, res) => {
    try {
        const { user, items, total } = req.body;
        if (!user || !items || items.length === 0) {
            return res.status(400).json({ message: "Invalid order data" });
        }

        const newOrder = new Order({ user, items, total });
        await newOrder.save();
        res.status(201).json({ message: "✅ Order placed successfully!", order: newOrder });
    } catch (error) {
        res.status(500).json({ message: "❌ Server error", error });
    }
});

// Get all orders
router.get("/", async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "❌ Server error", error });
    }
});

module.exports = router;
