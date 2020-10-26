import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

const addOrderItems = asyncHandler(async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, totalPrice } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('سفارشی یافت نشد.');
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});
const getOrderById = asyncHandler(async (req, res) => {
  const order = await (await Order.findById(req.params.id)).populated(
    'user',
    'name email'
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('سفارشی پیدا نشد.');
  }
});

export { addOrderItems, getOrderById };