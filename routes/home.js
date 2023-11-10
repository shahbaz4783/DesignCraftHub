import express from "express";
import path from "path";
import rootDir from '../utils/rootPath.js'

const router = express.Router();


router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
})


export default router;