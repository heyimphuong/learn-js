module.exports.checkTextMiddleware = (req, res, next) => {
  const text = req.query.text;
  if (!text) {
    res.send('Phai nhap text vao URL');
    return;
  }
  next();
}