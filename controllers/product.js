const products = [];

export const getAddProduct = (req, res) => {
	res.render('admin.ejs');
};

export const postProduct = (req, res) => {
    products.push({ title: req.body.title, tag: req.body.tag, price: req.body.price, description: req.body.description });
	console.log(products);
	res.redirect('/');
};
