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
	constructor(title, tag, price, description) {
		this.title = title;
		this.tag = tag;
		this.price = price;
		this.description = description;
	}

	save() {
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
}
