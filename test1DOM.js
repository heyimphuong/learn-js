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

var boxElement = document.querySelector('.red')
Object.assign(boxElement.style, {
  backgroundColor: '#f00',
});
var textColor = document.querySelector('p')
Object.assign(textColor.style, {
  color: '#f05123',
});
// ClassList
var boxElement = 
    document.querySelector('.box');

// boxElement.classList.add('green');
// chữ nhấp nháy
setInterval(() => {
    boxElement.classList.toggle('green');
}, 1000);
// thêm class vào thẻ h1 và thay class sub-title bằng thẻ content
var boxElement = 
    document.querySelector('h1');
    boxElement.classList.add('title')
console.log(boxElement.classList);
var Element =
    document.querySelector('p');
    Element.classList.add('content')
    Element.classList.toggle('sub-title');
console.log(Element.classList);
// gọi ra tất  cả thẻ div thêm class box vào từng thẻ div
var divElements = 
    document.querySelectorAll('div');

 divElements.forEach((divElement) => {
    divElement.classList.add('box');
    });
   
//DOM events
// var h1Element = 
//     document.querySelectorAll('h1');

// //  h1Element.onclick = function(e){
// //       console.log(e.Math.floor(Math.random()*10));
// //  }
// for(var i = 0; i < h1Element.length; ++i) {
//   h1Element[i].onclick = function(e) {
//     console.log(e.target);
//   }
// }
//gọi ra thẻ button 
var buttonElement = 
        document.querySelector('button');
//đổi màu chữ sau khi onclick
buttonElement.onclick = function(){
  buttonElement.style.color = '#fff';
};

// var inputElement =
//     document.querySelector('input[type="text"]');

// inputElement.onchange = function(e) {
//   console.log(e.target.value) // lấy ra value
// }

// var inputElement =
//     document.querySelector('select');

// inputElement.onchange = function(e) {
//   console.log(e.target.value) // lấy ra value
// }

// var inputElement =
//     document.querySelector('input[type="text"]');
// inputElement.onkeydown = function(e) {
//     console.log(e.which); // lấy ra value só bàn phím
//  }

// var ulElement = document.querySelector('ul');
// ulElement.onmousedown = function(e) {
//     e.preventDefault();
// }
// ulElement.onclick = function(e) {
//   console.log(e.target);
// }




// document.querySelector('div').onclick = 
//     function (){
//       console.log('DIV')
//     }
// document.querySelector('button').onclick = 
//     function (e){
//       e.stopPropagation();
//       console.log('Click me!')
//     }
*/


