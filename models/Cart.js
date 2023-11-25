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
			const existingItemIndex = cart.items.findIndex((item) => (item.id === id));
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
			if (err) {
				cb([]);
			} else {
				const cart = JSON.parse(content);
				cb(cart.items || []);
			}
		});
	}
}
