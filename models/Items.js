const items = [];

export default class Item {
	constructor(title, tag, price, description) {
		this.title = title;
		this.tag = tag;
		this.price = price;
		this.description = description;
	}

	save() {
		items.push(this);
	}

	static fetchAll() {
		return items;
	}
}
