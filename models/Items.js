import fs from 'fs';
import path from 'path';

export default class Item {
	constructor(title, tag, price, description) {
		this.title = title;
		this.tag = tag;
		this.price = price;
		this.description = description;
	}

	save() {
		const pathOfData = path.join('data', 'products.json');
		fs.readFile(pathOfData, (err, content) => {
			let items = [];
			if (!err) {
				items = JSON.parse(content);
			}
			items.push(this);
			fs.writeFile(pathOfData, JSON.stringify(items), (err) => {
				console.log(err);
			});
		});
	}

	static fetchAll() {}
}
