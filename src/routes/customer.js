const express = require('express');
const customersController = require('../controllers/customerController')

const router = express.Router();

router.get('/',customersController.list);
router.post('/add',customersController.save)
router.get('/delete/:id',customersController.delete)
router.get('/update/:id', customersController.edit)
router.post('/update/:id', customersController.update)

module.exports = router;