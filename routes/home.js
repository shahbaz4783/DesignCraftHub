import express from "express";
import rootDir from '../utils/rootPath.js'

const router = express.Router();


router.get('/', (req, res) => {
    res.render(rootDir + '/views/index.ejs');
})


export default router;