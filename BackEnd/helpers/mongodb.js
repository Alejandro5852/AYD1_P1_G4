const { MongoClient } = require('mongodb');
const controller = {};
controller.connectToCluster = async (uri) => {
    let mongoClient;
    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB on Atlas...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB on Atlas!');
        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB on Atlas failed!', error);
        process.exit();
    }
}
module.exports = controller;