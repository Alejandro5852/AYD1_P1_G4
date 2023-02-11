require('dotenv').config();
const mongoConnection = require('../helpers/mongodb');
const controller = {};
controller.create = async (req, res) => {
    const uri = process.env.DB_URI;
    let mongoClient;
    try {
        mongoClient = await mongoConnection.connectToCluster(uri);
        const db = mongoClient.db('Practica1');
        const collection = db.collection('Contactos');
        return res.status(200).json({ log: 'Ok' });
    } catch (err) {
        return res.status(400).json({ codigo: 400, resultado: err });
    } finally {
        await mongoClient.close();
    }
}
controller.read = async (req, res) => {
    const uri = process.env.DB_URI;
    let mongoClient;
    try {
        mongoClient = await mongoConnection.connectToCluster(uri);
        const db = mongoClient.db('Practica1');
        const collection = db.collection('Contactos');
        return res.status(200).json({ log: 'Ok' });
    } catch (err) {
        return res.status(400).json({ codigo: 400, resultado: err });
    } finally {
        await mongoClient.close();
    }
}
controller.update = async (req, res) => {
    const uri = process.env.DB_URI;
    let mongoClient;
    try {
        mongoClient = await mongoConnection.connectToCluster(uri);
        const db = mongoClient.db('Practica1');
        const collection = db.collection('Contactos');
        return res.status(200).json({ log: 'Ok' });
    } catch (err) {
        return res.status(400).json({ codigo: 400, resultado: err });
    } finally {
        await mongoClient.close();
    }
}
controller.delete = async (req, res) => {
    const uri = process.env.DB_URI;
    let mongoClient;
    try {
        mongoClient = await mongoConnection.connectToCluster(uri);
        const db = mongoClient.db('Practica1');
        const collection = db.collection('Contactos');
        return res.status(200).json({ log: 'Ok' });
    } catch (err) {
        return res.status(400).json({ codigo: 400, resultado: err });
    } finally {
        await mongoClient.close();
    }
}
controller.search = async (req, res) => {
    const uri = process.env.DB_URI;
    let mongoClient;
    try {
        mongoClient = await mongoConnection.connectToCluster(uri);
        const db = mongoClient.db('Practica1');
        const collection = db.collection('Contactos');
        return res.status(200).json({ log: 'Ok' });
    } catch (err) {
        return res.status(400).json({ codigo: 400, resultado: err });
    } finally {
        await mongoClient.close();
    }
}
module.exports = controller;
