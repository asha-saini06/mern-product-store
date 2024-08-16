import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log("Error while fetching products: ", error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

export const createProduct = async (req, res) => {
    const product = req.body; // get the product from the request body

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    }
    catch {
        console.error("Error in creating product: ", error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params; // get the product id from the request params
    const product = req.body; // get the product from the request body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product Id" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params; // get the product id from the request params 

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product Id" });
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        console.error("Error in deleting product: ", error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}
