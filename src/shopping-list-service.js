const shoppingListService = {
    getAllItems(knex) {
        return knex.select('*').from('shopping_list');
    },
    getItemById(knex, id) {
        return knex.select('*').from('shopping_list').where('id', id);
    },
    deleteItem(knex, id) {
        return knex.del().from('shopping_list').where('id', id);
    }
}


module.exports = shoppingListService;