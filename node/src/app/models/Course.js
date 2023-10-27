const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  //LƯU THỜI GIAN BẢN GHI NÀY ĐƯỢC TẠO
  createdAt: { type: Date, default: Date.now },
  //LƯU THỜI GIAN BẢN GHI ĐƯỢC CẬP NHẬT
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
