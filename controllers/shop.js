import Item from '../models/Items.js';

export const getProducts = (req, res) => {
	Item.fetchAll((items) => {
		res.render('shop/products.ejs', {
			product: items,
			pageTitle: 'Products - Health Harbour',
			path: '/products',
		});
	});
};

export const getProductDetails = (req, res) => {
	const productID = req.params.productID;
	Item.findByID(productID, (product) => {
		console.log(product);
		res.render('shop/product-details.ejs', {
			pageTitle: product.title,
			info: product,
		});
	});
};

export const getStore = (req, res) => {
	Item.fetchAll((items) => {
		res.render('shop/store.ejs', {
			product: items,
			pageTitle: 'Store - Health Harbour',
			path: '/store',
		});
	});
};

export const getCart = (req, res) => {
	res.render('shop/cart.ejs', {
		pageTitle: 'Your Cart'
	})
}

export const getCheckout = (req, res) => {
	res.render('shop/checkout.ejs', {
		pageTitle: 'Your Orders',
	});
};
