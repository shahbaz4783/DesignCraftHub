import Item from '../models/Items.js';

export const getAddProduct = (req, res) => {
	res.render('admin/admin.ejs', {
		pageTitle: 'Add Products - Health Harbour',
	});
};

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

export const getProducts = (req, res) => {
	Item.fetchAll(items => {
		res.render('admin/products.ejs', {
			product: items,
			pageTitle: 'Modify Products - Health Harbour',
		});
	});
};
