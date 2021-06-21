let {User} = require('../models/user')

const repositoryUser = async (nickname) =>{

    let result = await new User().where({nickname: nickname}).fetch();
    return result.serialize();
    
}

module.exports = {
    repositoryUser
};