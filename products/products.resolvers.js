const productModel = require('./products.model')

module.exports = {
    Query: {
        products: () => {
            console.log('getting the products');
            return productModel.getAllProducts()  // keep the func small in resolver, do the logic in model
        },
        productsByPrice: (_, args) => {
            console.log(args.min);
            return productModel.getProductsByPrice(args.min, args.max)
        },
        product: (_, args) => {
            return productModel.getProductById(args.id)
        }
    },
    Mutation: {
        addNewProduct: (_, args) => {
            return productModel.addNewProduct(args.id, args.description, args.price)
        },
        addProductReview: (_, args) => {
            return productModel.addProductReview(args.productId, args.rating, args.comment)
        }
    }
}