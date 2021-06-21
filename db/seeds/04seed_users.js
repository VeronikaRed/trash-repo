exports.seed = function(knex) {

  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {nickname: 'John', password: 'qwerty'},
        {nickname: 'Kity', password: 'helloWorld'},
        {nickname: 'George', password: 'zxcvb'},
      ]);
    });
};
