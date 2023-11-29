import express from 'express';
import {
	getAddProduct,
	postProduct,
	getProducts,
    getAdminProfile,
    getOrders,
    getEditProduct,
    editProduct,
} from '../controllers/admin.js';

const router = express.Router();

router.get('/add-product', getAddProduct);

router.post('/add-product', postProduct);

router.get('/edit-product/:productID', getEditProduct);

router.post('/edit-product', editProduct);

router.get('/all-products', getProducts);

router.get('/orders', getOrders);

router.get('/', getAdminProfile)

export default router;
