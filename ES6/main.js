// const logger = function(log) {
//     console.log(log);
// }
// logger('Message...');
//Arrow function
// const logger = (log) => {
//     console.log(log);
// }
// logger('Message...');
// Tạo hàm SUM bằng Arrow function
// const sum = (a,b) => a + b
// console.log(`Kết quả trả về: ${sum(3,4)}`);
//Default parameters values
// function logger(log) {
//     if (typeof log === 'undefined') {
//         log = 'gia tri mac dinh!';
//     }
//     console.log(log);
// }

// logger();

// function logger(log, type = 'log') {
//     console[type](log);
// }

// logger(31122003, alert('Chưa Nhập mật khẩu'), console.warn('Warning'));
// Enhanced object literals

// Định nghĩa KEY: value cho object
// var name = 'Javascript';
// var price = 2000;

// var course = {
//     name,
//     price,
//     // Định nghĩa method cho object
//     getName() {
//         return name;
//     }
// };
//  console.log(course.getName());

// Định nghĩa KEY cho object dưới dạng biến
// var fieldName = 'name';
// var fieldPrice = 'price';
// var i = 0;
// const course = {
//     [fieldName + ++i]: 'Ruby',
//     [fieldPrice + ++i]: 3000,
//     [fieldName + ++i]: 'Javacript',
//     [fieldPrice + ++i]: 2000,
//     [fieldName + ++i]: 'PHP',
//     [fieldPrice + ++i]: 1000 
// };

// console.log(`TÊN MÔN HỌC: ${course.name1}, GIÁ: ${course.price2}`);
// console.log(`TÊN MÔN HỌC: ${course.name3}, GIÁ: ${course.price4}`);
// console.log(`TÊN MÔN HỌC: ${course.name5}, GIÁ: ${course.price6}`);

// Destructuring
// var array = ['Javascript', 'PHP', 'Ruby'];

// var [a,...rest] = array;

// console.log(a); //Javascript
// console.log(rest); // ['PHP', 'Ruby']

// const res = {blog: 'anonystick.com', type: 'javascript'}
// const {blog: nameBlog, type: newType} = res;
// console.log(nameBlog, newType); //anonystick.com, javascript

// function logger(a,b,...params) {
//      console.log(params);
//  }

// logger(1,2,3,4,5,6,7,8);

// function logger({name, price, ...rest}) {
//     console.log(name);
//     console.log(price);
//     console.log( 'Lấy ra phần còn lại của object:',rest); //Lấy ra phần còn lại của object
// }

// logger({
//     name: 'javascript',
//     price: 1000,
//     description: 'Description content'
// });

// function logger([a, b, ...rest]) {
//     console.log(a);
//     console.log(b);
//     console.log( 'Lấy ra phần còn lại của Array:',rest); //Lấy ra phần còn lại của Array
// // }
// }

// logger([2, 6, 4, 8, 9, 10]);

// var array1 = ['Javascript', 'PHP', 'Ruby'];
// var array2 = ['ReactJS', 'Dart'];
// var array3 = [...array1, ...array2];

// console.log(array3);
