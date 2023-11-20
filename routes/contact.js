import express from 'express';
const router = express.Router();

router.get('/contact', (req, res) => {
	res.render('static/contact.ejs', {
		pageTitle: 'Customer Support - Health Harbour',
		path: '/about',
	});
});

export default router;
