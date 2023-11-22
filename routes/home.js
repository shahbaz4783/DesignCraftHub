import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home/index.ejs', { pageTitle: 'Home - Health Harbour' });
})


export default router;