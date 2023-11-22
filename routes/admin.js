import express from 'express';
import {
	getAddProduct,
	postProduct,
	getProducts,
    getAdminProfile,
    getOrders,
} from '../controllers/admin.js';

const router = express.Router();

router.get('/add-product', getAddProduct);

router.post('/add-product', postProduct);

router.get('/all-products', getProducts);

router.get('/orders', getOrders);

router.get('/', getAdminProfile)

export default router;
