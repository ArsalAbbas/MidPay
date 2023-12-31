const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: true,
    },
    provider: String,
    shippingId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Shipping = mongoose.model("Shipping", schema);

module.exports = Shipping;
