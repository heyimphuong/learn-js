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
    }
}

// toast({
//     title: 'Error',
//     message: 'Tham gia nhóm Học lập trình tại F8 trên Facebook để cùng nhau trao đổi trong quá trình học tập ❤️',
//     type: 'warning',
//     duration: 3000
// });

function showSuccessToast(){
    toast({
        title: 'Thành Công!!!',
        message: 'Bạn đã đăng ký thành công! ',
        type: 'success',
        duration: 3000
    });
}

function showErrorToast() {
    toast({
        title: 'Thất Bại >.<',
        message: 'Có lỗi xẩy ra vui lòng đăng nhập lại! ',
        type: 'error',
        duration: 3000
    });
}