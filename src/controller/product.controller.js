const ProductService = require('../service/product.service');

exports.ProductController =  class ProductController {
    static async createProduct(req, res) {
        try {
        const product = await ProductService.createProduct(req.body, req.user.uid);
        res.status(200).json({ productList: product });
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    }
    
    static async getAllProducts(req, res) {
        try {
        const products = await ProductService.getAllProduct(req.user.uid);
        res.status(200).json({ data: products });
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    }

    static async getProductById(req, res) {
        try {
            const productId = req.params.id;
            const product = await ProductService.getProductById(productId, req.user.uid);
            res.status(200).json({ data: product });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateProduct(req, res) {
        try {
            const productId = req.params.id;
            const updatedProduct = await ProductService.updateProduct(productId, req.body, req.user.uid);
            res.status(200).json({ data: updatedProduct });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteProduct(req, res) {
        try {
            const productId = req.params.id;
            await ProductService.deleteProduct(productId, req.user.uid);
            res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}