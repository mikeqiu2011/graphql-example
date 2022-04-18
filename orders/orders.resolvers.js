const ordersModel = require('./orders.model')

module.exports = {
    Query: {
        orders: () => {
            console.log('getting orders');
            return ordersModel.getAllOrders()
        }
    }
}