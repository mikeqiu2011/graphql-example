const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 42.5,
        reviews: []
    },
    {
        id: 'bluejean',
        description: 'Blue Jeans',
        price: 55,
        reviews: []
    },
]

function getAllProducts() {
    return products
}

function getProductsByPrice(min, max) {
    return products.filter(product => {
        return product.price >= min && product.price <= max
    })
}

function getProductById(id) {
    return products.find(product => {
        return product.id == id
    })
}

function addNewProduct(id, description, price) {
    const product = {
        id, description, price,
        reviews: []
    }
    products.push(product)

    return product
}

function addProductReview(productId, rating, comment) {
    const product = getProductById(productId)
    if (!product) {
        return null
    }

    const review = {
        rating,
        comment
    }
    product.reviews.push(review)

    return product
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addProductReview
}