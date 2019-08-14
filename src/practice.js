require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
});

const searchByProduceName = (searchTerm) => {
    knexInstance
        .select('product_id', 'name', 'price', 'category')
        .from('amazong_products')
        .where('name', 'ILIKE', `%${searchTerm}%`)
        .then(result => {
            console.log(result);
        })
}

const paginateProducts = (page) => {
    const productsPerPage = 10;
    const offset = productsPerPage * (page - 1);

    knexInstance
        .select('product_id', 'name', 'price', 'category')
        .from('amazong_products')
        .limit(productsPerPage)
        .offset(offset)
        .then(result => {
            console.log(result);
        })
}

const getProductsWithImages = () => {
    knexInstance
        .select('product_id', 'name', 'price', 'category')
        .from('amazong_products')
        .whereNotNull('image')
        .then(result => {
            console.log(result);
        })
}
// searchByProduceName('holo');
// paginateProducts(2);
getProductsWithImages();