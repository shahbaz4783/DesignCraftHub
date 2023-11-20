import express from 'express';
import homeRoute from './routes/home.js';
import adminRoute from './routes/admin.js';
import contactRoute from './routes/contact.js';
import aboutRoute from './routes/about.js';
import shopRoute from './routes/shop.js';
import { error } from './controllers/error.js'

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use('/admin', adminRoute);
app.use(homeRoute);
app.use(contactRoute);
app.use(aboutRoute);
app.use(shopRoute);
app.use(error);

// Port
const port = 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});