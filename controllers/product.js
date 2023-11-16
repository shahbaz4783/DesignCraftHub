const products = [];

export const getAddProduct = (req, res) => {
	res.render('admin.ejs', {
		product: products,
		pageTitle: 'Add Products - Health Harbour',
	});

};

export const postProduct = (req, res) => {
    products.push({ title: req.body.title, tag: req.body.tag, price: req.body.price, description: req.body.description });
	console.log(products);
	res.redirect('/products');
};
