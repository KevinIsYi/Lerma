/*
    host + api/item + route
*/
const { Router } = require('express');
const { createItem } = require('../controllers/item');

const router = Router();

router.post('/', createItem);

module.exports = router;