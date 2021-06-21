const db_bookshelf = require('../src/utils/db')

const User = db_bookshelf.model('User', {
    tableName: 'users'
  })

module.exports = {
    User
};

