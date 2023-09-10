// Dưới đây là logic xóa course
function handleDeleteCourse(id) {
  var choice = confirm("Mời bạn xác nhận!");
  console.log({ choice })
  if (!choice) {
    return;
  } else {
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
}
