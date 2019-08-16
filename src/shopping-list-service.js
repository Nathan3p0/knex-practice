const shoppingListService = {
    getAllItems(knex) {
        return knex.select('*').from('shopping_list');
    },
    getItemById(knex, id) {
        return knex.select('*').from('shopping_list').where('id', id);
    },
    deleteItem(knex, id) {
        return knex.del().from('shopping_list').where('id', id);
    },
    createItem(knex, item) {
        return knex('shopping_list').insert(item);
    },
    updateItem(knex, id, item) {
        return knex('shopping_list').where('id', id).update(item);
    }
}

module.exports = shoppingListService;