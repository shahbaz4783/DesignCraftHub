import express from 'express';
import {
	getStore,
	getProducts,
	getCart,
	getCheckout,
    getProductDetails,
    postCart,
} from '../controllers/shop.js';

const router = express.Router();

router.get('/store', getStore);
router.get('/products', getProducts);
router.get('/products/:productID', getProductDetails);
router.get('/cart', getCart);
router.post('/cart', postCart);
router.get('/checkout', getCheckout);

export default router;
