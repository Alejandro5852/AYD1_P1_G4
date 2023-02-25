require('dotenv').config();
const { ObjectId } = require('mongodb');
const nodemailer = require('nodemailer');
const mongoConnection = require('../helpers/mongodb');
const newContact = require('./emailTemplates/newContact');
const editContact = require('./emailTemplates/editContac');
const addfavorite = require('./emailTemplates/addFav');
const controller = {};

controller.create = async (req, res) => {
    const uri = process.env.DB_URI;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = req.body.telefono;
    const correo = req.body.correo;
    const favorito = false;

    let mongoClient;
    try {
        mongoClient = await mongoConnection.connectToCluster(uri);
        const db = mongoClient.db('Practica1');
        const collection = db.collection('Contactos');
        console.log("aca " + nombre, apellido, telefono, correo)
        const resultado = await collection.insertOne({ nombre, apellido, telefono, correo, favorito });
        controller.sendMail(correo, 'HAS SIDO AÑADIDO A LA LISTA DE CONTACTOS DEL GRUPO 4 DE AYD', newContact.getEmailHTML(nombre, telefono));
        return res.status(200).json({ log: 'Ok', resultado: resultado });
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
        const listado = await collection.find().toArray();
        return res.status(200).json({ contactos: listado });
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
        const { _id, nombre, apellido, telefono, correo } = req.body;
        const filter = { _id: new ObjectId(_id) };
        const update = { $set: { nombre, apellido, telefono, correo } };
        const result = await collection.updateOne(filter, update);
        controller.sendMail(correo, 'TU INFORMACIÓN DE CONTACTO HA SIDO MODIFICADA EN LA LISTA DEL GRUPO 4 DE AYD', editContact.getEmailHTML(nombre, telefono));
        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ codigo: 400, resultado: err });
    } finally {
        await mongoClient.close();
    }
}

controller.delete = async (req, res) => {
    const uri = process.env.DB_URI;
    //Extraemos el id del usuario
    const _id = req.body._id;

    let mongoClient;
    try {
        mongoClient = await mongoConnection.connectToCluster(uri);
        const db = mongoClient.db('Practica1');
        const collection = db.collection('Contactos');
        const query = { _id: new ObjectId(_id) };
        const resultado = await collection.deleteOne(query);
        console.log("ID delete: " + _id);
        return res.status(200).json({ log: 'Ok', resultado: resultado });
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


controller.addfavorite = async (req, res) => {
    const uri = process.env.DB_URI;
    let mongoClient;
    try {
        mongoClient = await mongoConnection.connectToCluster(uri);
        const db = mongoClient.db('Practica1');
        const collection = db.collection('Contactos');
        const { _id, favorito } = req.body;
        const filter = { _id: new ObjectId(_id) };
        const update = { $set: { favorito } };
        const result = await collection.updateOne(filter, update);
        const resultEmail = await collection.findOne(filter);
        controller.sendMail(resultEmail.correo, 'HAS SIDO AÑADIDO A LA LISTA DE CONTACTOS FAVORITOS DEL GRUPO 4 DE AYD', addfavorite.getEmailHTML(_id));
        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ codigo: 400, resultado: err });
    } finally {
        await mongoClient.close();
    }
}


controller.deletefavorite = async (req, res) => {
    const uri = process.env.DB_URI;
    let mongoClient;
    try {
        mongoClient = await mongoConnection.connectToCluster(uri);
        const db = mongoClient.db('Practica1');
        const collection = db.collection('Contactos');
        const { _id, favorito } = req.body;
        const filter = { _id: new ObjectId(_id) };
        const update = { $set: { favorito } };
        const result = await collection.updateOne(filter, update);
        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ codigo: 400, resultado: err });
    } finally {
        await mongoClient.close();
    }
}

controller.sendMail = (email, subject, html) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'alexsosa37@gmail.com',
            pass: 'tqznrjbhkvdofelt'
        }
    });

    const mailOptions = {
        from: 'alexsosa37@gmail.com',
        to: email,
        subject: subject,
        html: html
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            // do something useful
        }
    });
}

module.exports = controller;
