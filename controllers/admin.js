import Item from '../models/Items.js';

export const postProduct = (req, res) => {
	const item = new Item(
		null,
		req.body.title,
		req.body.tag,
		req.body.price,
		req.body.image,
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
		editing: false,
	});
};

export const getEditProduct = (req, res) => {
	const editMode = req.query.edit;
	if (!editMode) {
		res.redirect('/');
	}
	const productID = req.params.productID
	Item.findByID(productID, (product) => {
		res.render('admin/admin.ejs', {
			pageTitle: 'Edit Products - Health Harbour',
			path: '/add-product',
			editing: editMode,
			item: product
		});
	});
};

export const editProduct = (req, res) => {
	const updatedItem = new Item(
		req.body.itemID,
		req.body.title,
		req.body.tag,
		req.body.price,
		req.body.image,
		req.body.description
	);
	updatedItem.save()
	res.redirect('/products')
}

export const deleteProduct = (req, res) => {
	const itemID = req.body.itemID;
	Item.deleteByID(itemID)
	res.redirect('/admin/all-products')
}

export const getProducts = (req, res) => {
	Item.fetchAll(items => {
		res.render('admin/admin.ejs', {
			product: items,
			pageTitle: 'Modify Products - Health Harbour',
			path: '/all-product',
		});
	});
};

export const getOrders = (req, res) => {
	Item.fetchAll(items => {
		res.render('admin/admin.ejs', {
			product: items,
			pageTitle: 'Your Orders - Health Harbour',
			path: '/orders',
		});
	})
};
