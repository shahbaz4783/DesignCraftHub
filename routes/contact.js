import express from 'express';
const router = express.Router();

router.get('/contact', (req, res) => {
	res.render('contact.ejs', { pageTitle: 'Customer Support - Health Harbour' });
});

export default router;
