/*
// lấy object
var infor = {
    name: 'phuong',
    age: 20,
    address: 'thai binh city'
};
for(var i in infor){
    console.log(infor[i]);
}
// lấy string
var language = 'Ho Quoc Phuong'
for(var i in language){
    console.log(language[i]);

// sử dụng hàm for ..in
function run(object) {
    var result = [];
    for (var i in object) {
      result.push(`Thuộc tính ${i} có giá trị ${object[i]}`);
    }
    return result;
  }
  
  console.log(run({ name: 'Nguyen Van A', age: 16 }));
 
//in ra số lẻ
  for(var i = 0; i < 10; i++){
    
    if (i %2 == 1){
      console.log(i);
      continue;
    }
    
  } 

//for lồng nhau
var myArray = [
  [1, 2],
  [3, 4],
  [7, 8, 9, 10]
] ;
for (var i = 0; i < myArray.length; i++){
    for (var j = 0; j < myArray[i].length; j++){
    console.log(myArray[i][j]);
    }
}

//giảm dần điều kiện lớn hơn hoặc bằng 50
for (var i = 100; i > 0; i--)
  if(i >= 50){
    console.log(i);
  continue;
  }
// giảm dần từ 100 về 1 5 lần
for (var i = 100; i > 0; i -= 5){
  console.log(i)
}

//trả về các môn thể thao có điểm số yêu thích lớn hơn 5.
const sports = [
  {
      name: 'Bóng rổ',
      like: 6
  },
  {
      name: 'Bơi lội',
      like: 5
  },
  {
      name: 'Bóng đá',
      like: 10
  },
]
function getMostFavoriteSport(array){
         var course = array.filter(function(course, index){
         return course.like > 5;
         });
  return course;     
}
// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]
*/
 // array map() method
var infor = [
  {
    id: 1,
    name: 'Ho Quoc Phuong',
    address: 'Thai Binh'
  },
  {
    id: 2,
    name: 'Pham Anh Tuan',
    address: 'Hai Phong'
  },
  {
    id: 3,
    name: 'Vu Anh Khai',
    address: 'Ninh Binh'
  },
  {
    id: 4,
    name: 'Tran Minh Hoang',
    address: 'Nam Dinh'
  },
];
function inforUser (infor){
    //  return `<h2> ${infor.name} <h2>`; tên 
    return {
        id: infor.id,
        name: `User ${infor.name}`,
        address: infor.address,
        class: 'TH26.05'
      };
      

    }

var newInfor = infor.map(inforUser);
console.log(newInfor);
//console.log(newInfor.join(' ')); //chuyển về kiểu string




  
    