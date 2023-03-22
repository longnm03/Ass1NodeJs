import Product from "../model/product";
import mongoose from "mongoose";
import Joi from "joi";
const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  desc: Joi.string().required(),
  status: Joi.boolean().required(),
  quantity: Joi.number().required(),
});
export const getAll = async (req, res) => {
  try {
    const data = await Product.find();
    return res.json({
      data,
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
export const create = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      const errors = error.details.map((errorItem) => errorItem.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const data = await Product.create(req.body);
    res.json({
      message: "Them thanh cong",
      data,
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
export const getOne = async (req, res) => {
  try {
    const data = await Product.findById(req.params.id);
    if (!data) {
      return res.status(400).json({
        message: "Không tìm thấy",
        data,
      });
    }
    return res.status(200).json({
      data,
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
export const update = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      const errors = error.details.map((errorItem) => errorItem.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const data = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json({
      message: "Update thanh cong",
      data,
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
export const remove = async (req, res) => {
  try {
    const data = await Product.findByIdAndDelete(req.params.id);
    return res.json({
      message: "Delete thanh cong",
      data,
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
