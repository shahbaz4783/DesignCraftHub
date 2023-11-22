import fs from 'fs';
import path from 'path';

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
	constructor(title, tag, price, image, description) {
		this.title = title;
		this.tag = tag;
		this.price = price;
		this.image = image;
		this.description = description;
	}

	save() {
		this.id = Math.random().toString();
		getItemsFromFile((items) => {
			items.push(this);
			fs.writeFile(pathOfData, JSON.stringify(items), (err) => {
				console.log(err);
			});
		});
	}

	static fetchAll(cb) {
		getItemsFromFile(cb);
	}

	static findByID(id, cb) {
		getItemsFromFile(products => {
			const product = products.find(p => p.id === id)
			cb(product)
		})
	}
}
