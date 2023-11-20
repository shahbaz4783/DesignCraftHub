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
