import express from 'express';

const router = express.Router();

router.get('/products', (req, res) => {
	res.render('products.ejs', { pageTitle: 'Shop - Health Harbour' });
});

export default router;
