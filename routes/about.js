import express from 'express';
const router = express.Router();

router.get('/about', (req, res) => {
	res.render('static/about.ejs', {
		pageTitle: 'About - Health Harbour',
		path: '/about',
	});
});

export default router;
