const firebase = require('../config/firebase.config');

class ProductService {
    static collection() {
        return firebase.firestore().collection('products');
    }

    static async createProduct(productData, userId) {
        const newProduct = {
            name: productData.name,
            desc: productData.desc,
            price: productData.price,
            userId: userId,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        const productRef = await this.collection().add(newProduct);
        return { id: productRef.id, ...productData };
    }

    static async getAllProduct(userId, whereOptions = {}) {
        let productCondition = this.collection()
        .where('userId', '==', userId);

        if (whereOptions.max_price) {
            productCondition = productCondition.where('price', '<=', parseFloat(whereOptions.max_price));
        }

        const products = await productCondition.get();
        const productList = products.docs.map(item => ({ 
            id: item.id,
            ...item.data(),
            createdAt: item.data().createdAt.toDate(),
            updatedAt: item.data().updatedAt.toDate()
        }));
        return productList;
    }

    static async getProductById(productId, userId) {
        const doc = await this.collection()
            .where(firebase.firestore.FieldPath.documentId(), '==', productId)
            .where('userId', '==', userId)
            .limit(1)
            .get();
        if (doc.empty) {
            throw new Error('Product not found');
        }
        const item = doc.docs[0];
        return { 
            id: item.id,
            ...item.data(),
            createdAt: item.data().createdAt.toDate(),
            updatedAt: item.data().updatedAt.toDate()
        };
    }

    static async updateProduct(productId, productData, userId) {
        const doc = await this.collection()
            .where(firebase.firestore.FieldPath.documentId(), '==', productId)
            .where('userId', '==', userId)
            .limit(1)
            .get();
        if (doc.empty) {
            throw new Error('Product not found');
        }
        
        const productRef = this.collection().doc(productId);
        const updatedData = {
            ...productData,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        await productRef.update(updatedData);
        const updatedItem = await productRef.get();
        return {
            id: updatedItem.id,
            ...updatedItem.data(),
            createdAt: updatedItem.data().createdAt.toDate(),
            updatedAt: updatedItem.data().updatedAt.toDate()
        };
    }

    static async deleteProduct(productId, userId) {
        const doc = await this.collection()
            .where(firebase.firestore.FieldPath.documentId(), '==', productId)
            .where('userId', '==', userId)
            .limit(1)
            .get();
        if (doc.empty) {
            throw new Error('Product not found');
        }
        const productRef = this.collection().doc(productId);
        await productRef.delete();
        return { message: 'Product deleted successfully' };
    }
}

module.exports = ProductService;