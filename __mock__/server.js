const data = require('./data')

const getFeaturedProducts = () => {
    const middleIndex = Math.floor(data.length / 2);
    const productsGroup1 = data.slice(0, middleIndex)
    const productsGroup2 = data.slice(middleIndex)
    return [
        productsGroup1[Math.floor(Math.random() * productsGroup1.length)],
        productsGroup2[Math.floor(Math.random() * productsGroup2.length)]
    ]
}

module.exports = () => ({
    products: data,
    categories: [...new Set(data.map(product => product.categoryName))],
    featuredProducts: getFeaturedProducts(),
})