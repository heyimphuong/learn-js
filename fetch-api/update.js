// Dưới đây là logic update course
function handleUpdateCourse(id) {
    callAPI('/' + id) // Lấy thông tin của course từ JSON server
        .then(function (data) {
            document.querySelector('.update-form input[name="id"]').value = data.id;
            document.querySelector('.update-form input[name="name"]').value = data.name;
            document.querySelector('.update-form input[name="total"]').value = data.total;

            document.querySelector('.update-form').style.display = "block";
        })
        .catch(function () {
            alert('Lỗi mạng rùi')
        })
}


function handleUpdateForm() {
    var updateButton = document.querySelector('#update');
    updateButton.onclick = function () {
        // 1. Lấy dữ liệu được người dùng thay đổi
        var id = document.querySelector('.update-form input[name="id"]').value;
        var name = document.querySelector('.update-form input[name="name"]').value;
        var total = document.querySelector('.update-form input[name="total"]').value;

        // 2. Update dữ liệu được người dùng thay đổi lên JSON server
        callAPI('/' + id, {
            method: 'PUT',
            body: JSON.stringify({ name: name, total: total })
        })
            
            .then(function () {
                // 3. Render lại các courses
                getCourses(renderCourses);
                
            });
           
    }

}

// Các bước thực hiện
// 1. Lấy dự liệu của người dùng thay đổi từ form: update-form
// 2. PUT dự liệu lên JSON server
// 3. Render lại các courses

handleUpdateForm();

const closeUpdateFormBtn = document.querySelector('#close');
closeUpdateFormBtn.addEventListener('click', function() {
    document.querySelector('.update-form').style.display = "none";
});
// document.querySelector('#close').addEventListener('click', function () {
//     document.querySelector('.update-form').style.display = "none";
// });
