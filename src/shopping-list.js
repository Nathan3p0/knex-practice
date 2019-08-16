require('dotenv').config();
const knex = require('knex');
const ShoppingListService = require('./shopping-list-service');

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
})

// ShoppingListService.getAllItems(knexInstance)
//     .then(items => console.log(items))

ShoppingListService.getItemById(knexInstance, 6)
    .then(item => console.log(item))

// ShoppingListService.deleteItem(knexInstance, 6)
//     .then(item => console.log(item));