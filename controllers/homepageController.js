function renderHomePage(req, res) {
    res.render('homePage', { user: req.user });
}

module.exports = {
    renderHomePage: renderHomePage
}