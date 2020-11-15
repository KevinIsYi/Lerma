/*
    host + api/cart + route
*/

const { insertInShoppingCart, getCartItems } = require('../controllers/usertItem');

const { Router } = require('express');

const router = Router();

router.post('/', insertInShoppingCart);
router.get('/getcart', getCartItems);

module.exports = router;