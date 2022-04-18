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

module.exports = {
    getAllProducts
}