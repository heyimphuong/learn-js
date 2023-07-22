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
// JSON
//var json = '["javascript","PHP"]';
// var json = '{"name":"ho phuong","age":20}';
// var a = 'false';
// console.log(typeof JSON.parse(a));

//Promise
// var promise = new Promise(
//   // Executor
//   function(resolve, reject){
//     //  logic
//     //  thành công: resolve()
//     //  thất bại: reject()

//    reject();
//   }
// );
// promise
//      .then(function(){
//         console.log('Successully!');      
//      })
//      .catch(function(){
//         console.log('Failure!');
//      })
//      .finally(function(){
//         console.log('Done!');
//      });
// function hell(value, cb) {
//   cb(value);
// }

// // Không sử dụng Promise dẫn đến tạo ra callback hell 
// hell(1, function (valueFromA) {
//   hell(valueFromA + 1, function (valueFromB) {
//       hell(valueFromB + 1, function (valueFromC) {
//           hell(valueFromC + 1, function (valueFromD) {
//               console.log(valueFromD + 1);
//           });
//       });
//   });
// });

// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
// function notHell(value) {
//   return new Promise(function (resolve) {
//       resolve(value);
//   });
// }

// notHell(1)
//   .then(function (value) {
//     return  value + 1;
//   })
//   .then(function (value) {
//       return  value + 1;
//   })
//   .then(function (value) {
//       return value + 1;
//   })
//   .then(function (value) {
//       console.log(value + 1);
//   });

var users = [
  {
    id: 1,
    name: 'ho phuong',
  },
  {
    id: 2,
    name: 'pham tuan',
  },
  {
    id: 3,
    name: 'vu khai',
  },
  {
    id: 4,
    name: 'tran hoang',
  },
  //..
]

var comments = [
  {
    id: 1,
    users_id: 2,
    content: 'có định đi cinema k anh em?'
  },
  {
    id: 2,
    users_id: 3,
    content: 'phim ngày trở lại!'
  },
  {
    id: 3,
    users_id: 1,
    content: 'phim ngày trở lại!'
  }

];
//1. lấy comments
//2.từ comments lấy ra user_id,
//từ user_id lấy ra user tương ứng

// fake API

function getComments() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(comments)
      // reject(comments)
    }, 1000);
  })
}
function getUserByIds(userIds) {
  return new Promise(function (resolve, reject) {
    var result = users.filter(function (user) {
      return userIds.includes(user.id);
    });
    setTimeout(function () {
      // reject();
      resolve(result);
    }, 1000);
  });
}
var commentBlock = document.getElementById('comment-block');
var loadingBlock = document.getElementById('loading');

commentBlock.innerHTML = "Loading ...";

getComments()
  .then(function (comments) {
    var usersIds = comments.map(function (comment) {
      return comment.users_id;
    });
    return getUserByIds(usersIds)
      .then(function (users) {
        return {
          users: users,
          comments: comments,
        };
      });
  })
  .then(function (data) {
    var html = '';

    // data.comments = [
    //   {
    //     id: 1,
    //     users_id: 2,
    //     content: 'có định đi cinema k anh em?'
    //   },
    //   {
    //     id: 2,
    //     users_id: 3,
    //     content: 'phim ngày trở lại!'
    //   }
    // ];

    data.comments.forEach(function (comment) {
      var user = data.users.find(function (user) {
        return user.id === comment.users_id;
      });
      html += `<li>${user.name}: ${comment.content}</li>`;
    });
    commentBlock.innerHTML = html;
  })
  .catch(() => {
    commentBlock.innerHTML = "Internal error";
  })
  .finally(() => {
    loadingBlock.innerHTML = "";
  })
*/
// FETCH
var PostApi = 'https://jsonplaceholder.typicode.com/posts';
fetch(PostApi)
    .then(function(response){
      return response.json();
    })
    .then(function(posts){ 
      var htmls = posts.map(function(post){
        return  `<li>
             <h2>${post.title}</h2>
             <p>${post.body}</p>  
        </li>`;
      });
      document.getElementById('post-block').innerHTML = htmls;
    });

