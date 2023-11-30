import fs from 'fs';
import path from 'path';

const pathOfCart = path.join('data', 'cart.json');

export default class Cart {
	static addItem(id, price) {
		fs.readFile(pathOfCart, (err, content) => {
			let cart = { items: [], totalPrice: 0 };
			if (!err) {
				cart = JSON.parse(content);
			}
			const existingItemIndex = cart.items.findIndex((item) => item.id === id);
			const existingItem = cart.items[existingItemIndex];
			let updatedItem;

			if (existingItem) {
				updatedItem = { ...existingItem };
				updatedItem.qty = updatedItem.qty + 1;
				cart.items = [...cart.items];
				cart.items[existingItemIndex] = updatedItem;
			} else {
				updatedItem = { id: id, qty: 1 };
				cart.items = [...cart.items, updatedItem];
			}
			cart.totalPrice = cart.totalPrice + +price;
			fs.writeFile(pathOfCart, JSON.stringify(cart), (err) => console.log(err));
		});
	}

	static getCartContent(cb) {
		fs.readFile(pathOfCart, (err, content) => {
			const cart = JSON.parse(content);
			if (err) {
				cb([]);
			} else {
				cb(cart);
			}
		});
	}

	static deleteItem(id, itemPrice) {
		fs.readFile(pathOfCart, (err, content) => {
			if (err) {
				return;
			}
			const updatedCart = { ...JSON.parse(content) };
			const item = updatedCart.items.find((p) => p.id === id);
			if (!item) {
				return;
			}

			const itemQty = item.qty;
			updatedCart.items = updatedCart.items.filter((p) => p.id !== id);
			updatedCart.totalPrice = updatedCart.totalPrice - itemPrice * itemQty;

			fs.writeFile(pathOfCart, JSON.stringify(updatedCart), (err) =>
				console.log(err)
			);
		});
	}
}
