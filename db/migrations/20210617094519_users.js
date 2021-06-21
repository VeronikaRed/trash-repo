exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id');
        table.string('nickname');
        table.string('password');
        table.boolean('is_admin');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
