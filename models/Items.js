const items = [];

export default class Item {
	constructor(t) {
		this.title = t;
	}

	save() {
		items.push(this);
	}

	fetchAll() {
		return this.items;
	}
}
