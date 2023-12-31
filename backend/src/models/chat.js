const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seller",
    required: true,
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const Chat = mongoose.model("Chat", schema);

module.exports = Chat;
