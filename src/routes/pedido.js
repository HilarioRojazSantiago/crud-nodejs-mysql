const express = require('express');
const router = express.Router();

const pedidoController = require('../controllers/pedidoController');

router.get('/', pedidoController.list);
router.post('/add', pedidoController.save);
router.get('/delete/:id', pedidoController.delete);

router.get('/update/:id', pedidoController.edit);
router.post('/update/:id', pedidoController.update);

module.exports = router;