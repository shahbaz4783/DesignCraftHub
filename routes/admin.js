import express from 'express';
import { getAddProduct, postProduct } from '../controllers/product.js';

const router = express.Router();

router.get('/add-product', getAddProduct);

router.post('/add-product', postProduct);

export default router;
