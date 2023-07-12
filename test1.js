/*
function render(html) {
    var Element = document.querySelector("ul");
    Element.innerHTML = html;
    return render;
}
 render(`
    <li>Khóa học HTML</li>
    <li>Khóa học JS</li>
    <li>Khóa học PHP</li>
 `);
 */
 var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']
 
function render(courses) {
    // Lấy thẻ ul từ DOM
  var ulElement = document.querySelector('ul');

  // Tạo chuỗi HTML từ mảng courses
  var html = courses.map(function(course) {
    return '<li>' + course + '</li>';
  }).join('');

  // Gán chuỗi HTML vào thuộc tính innerHTML của thẻ ul
  ulElement.innerHTML = html;
}
render(courses)
var boxElement = document.querySelector('.courses-list')
   

// boxElement.style.width = '100px';
// boxElement.style.height = '200px';
// boxElement.style.backgroundColor = 'blue';

Object.assign(boxElement.style, {
  width: '200px',
  height: '500px',
  backgroundColor: 'green',
});
