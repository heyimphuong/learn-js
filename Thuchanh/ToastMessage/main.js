// Toast function
function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        //auto remove toast 
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        // remove toast when clicked
        toast.onclick = function (e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }
        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-circle',
            error: 'fa-solid fa-bomb',
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`

        toast.innerHTML = `
        <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fa-solid fa-circle-xmark"></i>
        </div>
        `;
        main.appendChild(toast);

        setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);
    }
}

// toast({
//     title: 'Error',
//     message: 'Tham gia nhóm Học lập trình tại F8 trên Facebook để cùng nhau trao đổi trong quá trình học tập ❤️',
//     type: 'warning',
//     duration: 3000
// });

function showSuccessToast() {
    toast({
        title: 'Thành Công!!!',
        message: 'Bạn đã đăng ký thành công! ',
        type: 'success',
        duration: 5000
    });
}

function showErrorToast() {
    toast({
        title: 'Thất Bại >.<',
        message: 'Có lỗi xẩy ra vui lòng đăng nhập lại! ',
        type: 'error',
        duration: 5000
    });
}