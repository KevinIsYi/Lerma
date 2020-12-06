/*
    host + api/graph + route
*/

const { Router } = require('express');
const { getGraph } = require('../controllers/graph');

const router = Router();

router.post('/getgraph', getGraph);

module.exports = router;