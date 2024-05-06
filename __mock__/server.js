const { products, featuredProducts } = require('./data')
module.exports = () => ({
    products,
    categories: [...new Set(products.map(product => product.categoryName))],
    featuredProducts,
    newestProducts: products.slice(products.length - 5, products.length - 1),
})