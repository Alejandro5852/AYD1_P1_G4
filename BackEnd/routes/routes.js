const router = require('express').Router();
const mongoDBController = require('../controllers/mongodb');

router.post('/api/contact/create', mongoDBController.create);
router.get('/api/contact/read', mongoDBController.read);
router.patch('/api/contact/update', mongoDBController.update);
router.delete('/api/contact/delete', mongoDBController.delete);
router.get('/api/contact/search/', mongoDBController.search);
router.patch('/api/contact/addfavorite', mongoDBController.addfavorite);

router.patch('/api/contact/deletefavorite', mongoDBController.deletefavorite);

module.exports = router;