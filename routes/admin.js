import express from 'express';
import {
	getAddProduct,
	postProduct,
	getProducts,
    getAdminProfile,
} from '../controllers/admin.js';

const router = express.Router();

router.get('/add-product', getAddProduct);

router.post('/add-product', postProduct);

router.get('/all-products', getProducts);

router.get('/', getAdminProfile)

export default router;
