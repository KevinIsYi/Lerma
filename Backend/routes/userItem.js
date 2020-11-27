/*
    host + api/cart + route
*/

const { insertInShoppingCart, getCartItems, setShoppingCartItems } = require('../controllers/usertItem');

const { Router } = require('express');

const router = Router();

router.post('/', insertInShoppingCart);
router.get('/getcart', getCartItems);
router.put('/setcart', setShoppingCartItems);

module.exports = router;