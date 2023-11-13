import express from 'express';
import homeRoute from './routes/home.js';
import path from 'path'
import adminRoute from './routes/admin.js';
import rootDir from './utils/rootPath.js'
import contactRoute from './routes/contact.js';

const app = express();
const port = 3000;

app.use(homeRoute);
app.use(adminRoute);
app.use(contactRoute);
app.use(express.static(path.join(rootDir, 'public')))

app.use((req, res) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

app.listen(port, () => {
	console.log(`Server is running at port ${port}`);
});
