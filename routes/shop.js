const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

/* You have to put specific routes before dynamic routes 
* as Express parses code from top to bottom, otherwise your specific route will be treated as dynamic route.
* Dynamic routes : /products/:productId
* Specific route: /products/delete
*/
router.get('/products/:productId', shopController.getProduct)

router.post('/cart', shopController.postCart)

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
