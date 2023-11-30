import Item from '../models/Items.js';
import Cart from '../models/Cart.js';

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
	Cart.getCartContent((cart) => {
		Item.fetchAll((items) => {
			const itemInCart = [];
			for (let item of items) {
				const cartItemData = cart.items.find((p) => p.id === item.id);
				if (cartItemData) {
					itemInCart.push({ itemData: item, qty: cartItemData.qty });
				}
			}
			res.render('shop/cart.ejs', {
				pageTitle: 'Your Cart',
				items: itemInCart,
			});
		});
	});
}

export const postCart = (req, res) => {
	const itemId = req.body.productID
	Item.findByID(itemId, (item) => {
		Cart.addItem(itemId, item.price)
	})
	res.redirect('/cart')
}

export const deleteItemFromCart = (req, res) => {
	const itemID = req.body.itemID;
	Item.findByID(itemID, (item) => {
		Cart.deleteItem(itemID, item.price);
	});
	res.redirect('/cart');
};

export const getCheckout = (req, res) => {
	res.render('shop/checkout.ejs', {
		pageTitle: 'Your Orders',
	});
};
