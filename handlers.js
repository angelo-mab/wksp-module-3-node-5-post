const items = [];

const handleHomepage = (req, res) => {
 res.render('pages/homepage', { items: items })
}

const handleForm = (req, res) => {
 const { item } = req.body;
 items.push(item);

 res.redirect('/todo');
}

module.exports = { handleHomepage, handleForm };