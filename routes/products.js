import express from 'express';
import { products } from '../controllers/product.js';

const router = express.Router();

router.get('/products', (req, res) => {
	res.render('products.ejs', {
		pageTitle: 'Shop - Health Harbour',
		product: products,
	});
});

export default router;
