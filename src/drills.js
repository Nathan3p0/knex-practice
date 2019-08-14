require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
})

const searchByItemName = (searchTerm) => {
    knexInstance.select().from('shopping_list')
        .where('name', 'ILIKE', `%${searchTerm}%`)
        .then(result => console.log(result))
}

searchByItemName('dog')

const paginateItems = (pageNumber) => {
    const limit = 6;

    const offset = limit * (pageNumber - 1);

    knexInstance.select().from('shopping_list')
        .limit(limit).offset(offset)
        .then(result => console.log(result))
}

paginateItems(3)

const productsAddedDaysAgo = (daysAgo) => {

    knexInstance.select().from('shopping_list')
        .where('date_added', '>', knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo))
        .then(result => console.log(result))
}

productsAddedDaysAgo(2)

const categoryTotal = () => {
    knexInstance.select('category').sum('price AS total')
        .from('shopping_list')
        .groupBy('category')
        .then(result => console.log(result))
}

categoryTotal();