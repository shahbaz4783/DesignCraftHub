import express from 'express';
import {
	getAddProduct,
	postProduct,
	getProducts,
} from '../controllers/admin.js';

const router = express.Router();

router.get('/add-product', getAddProduct);

router.post('/add-product', postProduct);

router.get('/products', getProducts);

export default router;
