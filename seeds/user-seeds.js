const { User } = require('../models');

const userData = [{
        username: 'John',
        password: 'john'

    },
    {
        username: 'Bob',
        password: 'bob'
    },
    {
        username: 'Joe',
        password: 'joe'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;