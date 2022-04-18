const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 42.5
    },
    {
        id: 'bluejean',
        description: 'Blue Jeans',
        price: 55
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

module.exports = {
    getAllProducts,
    getProductsByPrice
}