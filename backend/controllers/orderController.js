import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'
import TelegramApi from "node-telegram-bot-api"
// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const token = '5789548198:AAHfgKwdZYdUp9D7UgwVBsV-LbJfF5IE30s'
const bot = new TelegramApi(token, {polling: true})

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body
  console.log(shippingAddress)
  console.log(orderItems)
  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
    return
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })


    const createdOrder = await order.save()
    let message = `🤟🏿🤟🏿🤟🏿Новый заказ!🤟🏿🤟🏿🤟🏿\n👤ID Пользователя: ${req.user._id}\n👟Заказ: ${orderItems.map(item => item.name)}\n💸Сумма заказа: ${totalPrice}\n📱Номер телефона: ${shippingAddress.phone}\n📫Email: ${shippingAddress.email}\n👩‍🦰Имя: ${shippingAddress.name}\n👩‍🦰Фамилия: ${shippingAddress.surname}\n🌃Область: ${shippingAddress.region}\n🏘Город: ${shippingAddress.city}\n🏡Улица: ${shippingAddress.street}\n🏠Дом: ${shippingAddress.house}\n💌Комментарий к заказу: ${shippingAddress.comment ? shippingAddress.comment : "Нету комментария нахуй"}`
    await bot.sendMessage('-1001947162570', message)



    res.status(201).json(createdOrder)
  }
})

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  )

  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    }

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isDelivered = true
    order.deliveredAt = Date.now()

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
  res.json(orders)
})

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name')
  res.json(orders)
})

export {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
}
