import express from 'express';
import homeRoute from './routes/home.js';
import adminRoute from './routes/admin.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(homeRoute);
app.use(adminRoute);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.ejs'));
})

app.listen(port, () => {
	console.log(`Server is running at port ${port}`);
});
