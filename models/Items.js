import fs from 'fs';
import path from 'path';
import uniqid from 'uniqid';


const pathOfData = path.join('data', 'products.json');

const getItemsFromFile = (cb) => {
	fs.readFile(pathOfData, (err, content) => {
		if (err) {
			cb([]);
		} else {
			cb(JSON.parse(content));
		}
	});
};

export default class Item {
	constructor(id, title, tag, price, image, description) {
		this.id = id;
		this.title = title;
		this.tag = tag;
		this.price = price;
		this.image = image;
		this.description = description;
	}

	save() {
		getItemsFromFile((items) => {
			if (this.id) {
				const existingItemIndex = items.findIndex(
					(item) => item.id === this.id
				);
				const updatedItems = [...items];
				updatedItems[existingItemIndex] = this;
				fs.writeFile(pathOfData, JSON.stringify(updatedItems), (err) => {
					console.log(err);
				});
			} else {
				this.id = uniqid();
				items.push(this);
				fs.writeFile(pathOfData, JSON.stringify(items), (err) => {
					console.log(err);
				});
			}
		});
	}

	static fetchAll(cb) {
		getItemsFromFile(cb);
	}

	static findByID(id, cb) {
		getItemsFromFile((products) => {
			const product = products.find((p) => p.id === id);
			cb(product);
		});
	}
}
