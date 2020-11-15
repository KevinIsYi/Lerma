/*
    host + api/auth + route
*/
const { Router } = require('express');
const { createUser, loginUser } = require('../controllers/auth');

const router = Router();

router.post('/', createUser);

router.post('/login', loginUser);

module.exports = router;