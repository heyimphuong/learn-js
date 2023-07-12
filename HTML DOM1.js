/*
// DOM Attribute
// Thêm thuộc tính "title" vào thẻ h1
var h1Element = document.querySelectorAll("h1")[1];
h1Element.setAttribute("title", "F8 - Học lập trình để đi làm",);

// Thêm thuộc tính "data-title" vào thẻ h1
h1Element.setAttribute("data-title", "F8 - Học lập trình để đi làm");

// Thêm thuộc tính "href" và "target" vào thẻ a
var aElement = document.querySelector("a");
aElement.setAttribute("href", "https://fullstack.edu.vn/");
aElement.setAttribute("target", "_blank");
console.log(h1Element);
console.log(aElement);

// innerText, textContent
var headingElement =
    document.querySelector(".heading");
//console.log(headingElement.innerText);  //geter                                                                  
headingElement.innerText = `

New heading`; //seter

//innerHTML, outerHTML
var boxElement = document.querySelector('.box');

boxElement.innerHTML = '<i title="Heading">New Heading</i>';
console.log(document.querySelector('i').innerText);
*/
