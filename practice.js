var coureseApi = 'http://localhost:3000/courses';

// Khởi tạo các hàm cần thiết
getCourses(renderCourses);
handleCreateForm();
handleUpdateForm();

// Dưới đây là logic liệt kê các course
function getCourses(callback) {
  fetch(coureseApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}
function renderCourses(courses) {
  var listCoursesBlock = document.querySelector('#list-courses');
  var htmls = courses.map(function (course) {
    return `
        <li class="course-item-${course.id}">
          <h4>Tên môn học: ${course.name}</h4>
          Tổng điểm: ${course.total}
          <button onclick="handleDeleteCourse(${course.id})">Delete</button>
          <button onclick="handleUpdateCourse(${course.id})">Update</button>
        </li>
        `
  });
  listCoursesBlock.innerHTML = htmls.join('');
}

// Dưới đây là logic tạo course mới
function createCourse(data, callback) {
  var options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    },
  };
  fetch(coureseApi, options)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}
function handleCreateForm() {
  var createBtn = document.querySelector('#create');
  createBtn.onclick = function () {
    var name = document.querySelector('input[name="name"]').value;
    var total = document.querySelector('input[name="total"]').value;

    var formData = {
      name: name,
      total: total
    };
    createCourse(formData, function () {
      getCourses(renderCourses);
    });

  }

}

// Dưới đây là logic xóa course
function handleDeleteCourse(id) {
  var options = {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    },
  };
  fetch(coureseApi + '/' + id, options)
    .then(function (response) {
      return response.json();
    })
    .then(function () {
      var courseitem = document.querySelector('.course-item-' + id);
      if (courseitem) {
        courseitem.remove()
      }

    });
}

// Dưới đây là logic update course
function updateCourse(id, data, callback) {
  var options = {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    },
  };
  fetch(coureseApi + '/' + id, options)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}

function handleUpdateCourse(id) {
  //console.log('We are updating: ', id)

  fetch(coureseApi + '/' + id)
    .then(function (response) {
      return response.json();
    })
    .then(function(data)  {
      document.querySelector('.update-form input[name="id"]').value = data.id;
      document.querySelector('.update-form input[name="name"]').value = data.name;
      document.querySelector('.update-form input[name="total"]').value = data.total;
    });

}

function handleUpdateForm() {
  var createBtn = document.querySelector('#update');
  createBtn.onclick = function () {
    // Lấy dữ liệu được người dùng thay đổi
    var id = document.querySelector('.update-form input[name="id"]').value;
    var name = document.querySelector('.update-form input[name="name"]').value;
    var total = document.querySelector('.update-form input[name="total"]').value;

    var formData = {
      name: name,
      total: total
    };

    // Update dữ liệu được người dùng thay đổi lên JSON server
    updateCourse(id, formData, function () {
      getCourses(renderCourses);
    });
  }

}

