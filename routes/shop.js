import express from 'express';
import {
	getStore,
	getProducts,
	getCart,
	getCheckout,
    getProductDetails,
} from '../controllers/shop.js';

const router = express.Router();

router.get('/store', getStore);
router.get('/products', getProducts);
router.get('/products/:productID', getProductDetails);
router.get('/cart', getCart);
router.get('/checkout', getCheckout);

export default router;
