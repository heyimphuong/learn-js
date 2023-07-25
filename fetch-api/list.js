var coureseApi = 'http://localhost:3000/courses';

function callAPI(path, option) {
    return fetch(coureseApi + path, Object.assign({
        headers: {
            'content-type': 'application/json'
        }
    }, option))
        .then(function (response) {
            return response.json();
        })
}

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

getCourses(renderCourses);
