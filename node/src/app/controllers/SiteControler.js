class SiteController {
  index(req, res) {
    res.render('homes');
  }
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController;