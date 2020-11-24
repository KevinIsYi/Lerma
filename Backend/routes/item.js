/*
    host + api/item + route
*/
const { Router } = require('express');
const { createItem, getAllItems } = require('../controllers/item');

const router = Router();

router.post('/', createItem);

router.get('/all', getAllItems);

module.exports = router;