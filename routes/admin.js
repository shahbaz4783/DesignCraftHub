import express from 'express';
const router = express.Router();

router.get('/admin', (req, res) => {
    res.render('admin.ejs')
})

export default router;
