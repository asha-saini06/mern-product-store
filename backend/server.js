import express from "express";
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.post('/api/products', async (req, res) => {
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
});

app.delete("/api/products/:id", async (req, res) => {
    const { id } = req.params; // get the product id from the request params 

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        console.error("Error in deleting product: ", error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
});
