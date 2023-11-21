import Item from '../models/Items.js';

export const postProduct = (req, res) => {
	const item = new Item(
		req.body.title,
		req.body.tag,
		req.body.price,
		req.body.description
	);
	item.save();
	console.log(item);
	res.redirect('/products');
};

export const getAdminProfile = (req, res) => {
	Item.fetchAll((items) => {
		res.render('admin/admin.ejs', {
			product: items,
			pageTitle: 'Modify Products - Health Harbour',
			path: '/',
		});
	});
};

export const getAddProduct = (req, res) => {
	res.render('admin/admin.ejs', {
		pageTitle: 'Add Products - Health Harbour',
		path: '/add-product',
	});
};

export const getProducts = (req, res) => {
	Item.fetchAll(items => {
		res.render('admin/admin.ejs', {
			product: items,
			pageTitle: 'Modify Products - Health Harbour',
			path: '/all-product',
		});
	});
};

