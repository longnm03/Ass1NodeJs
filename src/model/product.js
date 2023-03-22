import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  status: Boolean,
  desc: String,
  quantity: Number,
});

export default mongoose.model("Product", productSchema);
