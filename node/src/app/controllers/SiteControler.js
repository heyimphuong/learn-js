const Course = require('../models/Course');

class SiteController {
  async index(req, res) {

    const courses = await Course.find({});
    console.log({ courses })

    res.render('homes');
  }
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController;