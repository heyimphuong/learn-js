
var boxElement = document.getElementById('box');
var nameElement = document.getElementById('name');
var yearElement = document.getElementById('year');
var estElement = document.getElementById('est');
var yearValueElement = document.getElementById('text-year');
var textValueElement = document.getElementById('text-value');
var boxColorElement = document.getElementById('box-color-value');
var textColorElement = document.getElementById('text-color-value');
var form = document.getElementById('form');
// Gán sự kiện click cho nút "Change"
form.addEventListener('submit', function(event) {
    event.preventDefault();
    var textValue = textValueElement.value;
    var boxColor = boxColorElement.value;
    var textColor = textColorElement.value;
    var yearValue = yearValueElement.value;
    // Thay đổi màu nền của box
    boxElement.style.backgroundColor = boxColor;
  
    // Thay đổi màu chữ của text
    nameElement.style.color = textColor;
    yearElement.style.color = textColor;
    estElement.style.color = textColor;

    // Hiển thị giá trị nhập vào trong text
    nameElement.textContent = textValue;
    yearElement.textContent = yearValue;
  });