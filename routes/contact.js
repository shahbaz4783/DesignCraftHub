import express from 'express';
const router = express.Router();

router.get('/support', (req, res) => {
	res.render('static/contact.ejs', {
		pageTitle: 'Customer Support - Health Harbour',
		path: '/support',
	});
});

export default router;
