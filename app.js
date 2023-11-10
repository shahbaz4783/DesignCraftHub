import express from 'express';
import homeRoute from './routes/home.js';
import adminRoute from './routes/admin.js';

const app = express();
const port = 3000;

app.use(homeRoute);
app.use(adminRoute);

app.listen(port, () => {
	console.log(`Server is running at port ${port}`);
});
