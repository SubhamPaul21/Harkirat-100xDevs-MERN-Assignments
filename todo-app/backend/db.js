const mongoose = require('mongoose');

async function connectToMongoDatabase() {
    try {
        await mongoose.connect('mongodb+srv://singletoncoder:A1IEUefmLZ62LhV1@subhamdb.lqpczmr.mongodb.net/todo-app');
        return true;
    } catch (err) {
        return err;
    }
}

module.exports = {
    connectToMongoDatabase
};