const seedUsers = require('./user-seeds'); 
const seedPosts = require('./post-seeds'); 
const seedComments = require('./comment-seeds'); 

const sequelize =('../config/connection'); 

const seedAll = sync() => {
        await sequelize.sync({force: true}); 
        await seedUsers();
        await seedPosts(); 
        await seedComments(); 
        process.exit(0); 
}; 

seedAll(); 