import asyncHandler from "express-async-handler";
import Product from "../models/product.js";

const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 9;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.send({ products, page, pages: Math.ceil(count / pageSize) });
});
export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

const createProduct = asyncHandler(async (req, res) => {
  const { name, brand, gender, category, countInStock, price, image } =
    req.body;
  const productExists = await Product.findOne({ name, brand });
  if (productExists) {
    res.status(404);
    throw new Error("Product already exist!");
  } else {
    const newProduct = new Product({
      name,
      brand,
      gender,
      category,
      countInStock,
      price,
      image,
    });
    const createdProduct = await newProduct.save();
    res.status(201).json(createdProduct);
  }
});
const removeProduct = asyncHandler(async (req, res) => {
  const productExists = await Product.findById(req.params.id);
  if (productExists) {
    const productToDelete = await Product.deleteOne({ _id: productExists._id });
    if (productToDelete) {
      res.status(201).json({
        message: "Product Deleted",
      });
    }
  } else {
    res.status(401);
    throw new Error("Invalid Product Id");
  }
});
const updateProduct = asyncHandler(async (req, res) => {
  const { name, brand, gender, category, countInStock, price } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name || product.name;
    product.brand = brand || product.brand;
    product.gender = gender || product.gender;
    product.category = category || product.category;
    product.countInStock = countInStock || product.countInStock;
    product.price = price || product.price;
    const updatedProduct = await product.save();
    res.status(201).json(updatedProduct);
  } else {
    res.status(401);
    throw new Error("Invalid Product data !");
  }
});

export {
  getProducts,
  getProductById,
  createProduct,
  removeProduct,
  updateProduct,
};
