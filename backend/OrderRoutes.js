const express = require("express");
const router = express.Router();

// مدل سفارش
const Order = require("../models/Order");

// ایجاد سفارش
router.post("/", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// گرفتن تمام سفارش‌ها
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
