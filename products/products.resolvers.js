const productModel = require('./products.model')

module.exports = {
    Query: {
        products: () => {
            console.log('getting the products');
            return productModel.getAllProducts()  // keep the func small in resolver, do the logic in model
        },
    }
}