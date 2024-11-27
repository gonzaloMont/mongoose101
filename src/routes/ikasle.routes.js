const express = require('express');
const router = express.Router();
const ikasleController = require('../controllers/ikasle.controller');

router.get('/', ikasleController.getIkasleak);
router.post('/', ikasleController.createIkasle);
router.get('/:id', ikasleController.getIkasleById);
router.delete('/:id', ikasleController.deleteIkasle);
router.put('/:id', ikasleController.editIkasle);
// Gehitu beste routes-ak...


module.exports = router;