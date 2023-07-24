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

handleCreateForm();