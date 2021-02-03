const express = require('express');
const router = express.Router();

const platilloController = require('../controllers/platilloController');

router.get('/', platilloController.list);
router.post('/add', platilloController.save);
router.get('/delete/:id', platilloController.delete);

router.get('/update/:id', platilloController.edit);
router.post('/update/:id', platilloController.update);

module.exports = router;