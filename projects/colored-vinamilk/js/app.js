// element.addEventListener("click", myFunction);

// function myFunction() {
//     document.getElementById("change-button").value;
// }


// var textValueEl = document.getElementById('box-color-value');

// console.log(textValueEl.value);
var boxElement = document.getElementById('box');
var textElement = document.getElementById('text');
var textValueElement = document.getElementById('text-value');
var boxColorElement = document.getElementById('box-color-value');
var textColorElement = document.getElementById('text-color-value');
var changeButton = document.getElementById('change-button');
// Gán sự kiện click cho nút "Change"
changeButton.addEventListener('click', function() {
    var textValue = textValueElement.value;
    var boxColor = boxColorElement.value;
    var textColor = textColorElement.value;
  
    // Thay đổi màu nền của box
    boxElement.style.backgroundColor = boxColor;
  
    // Thay đổi màu chữ của text
    textElement.style.color = textColor;
  
    // Hiển thị giá trị nhập vào trong text
    textElement.textContent = textValue;
  });