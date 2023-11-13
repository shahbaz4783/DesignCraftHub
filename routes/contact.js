import express from 'express';

const router = express.Router();

router.get('/contact', (req, res) => {
	res.render('contact.ejs');
});

export default router;
