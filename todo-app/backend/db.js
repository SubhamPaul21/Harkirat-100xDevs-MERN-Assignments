const mongoose = require('mongoose');
require('dotenv').config();

async function connectToMongoDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        return true;
    } catch (err) {
        return err;
    }
}

module.exports = {
    connectToMongoDatabase
};