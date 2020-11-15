/*
    host + api/auth + route
*/
const { Router } = require('express');
const { createUser, loginUser } = require('../controllers/auth');

const router = Router();


router.get('/', createUser);

router.get('/login', loginUser);

module.exports = router;