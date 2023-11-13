import express from 'express';
const router = express.Router();

router.get('/admin', (req, res) => {
    res.send('Working admin page too')
})

export default router;
