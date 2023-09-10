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

var courses = [
  { 
      id: 1,
      name: 'Javacript',
      coin: 100
  },
  {
    id: 2,
    name: 'Javacript',
    coin: 200
  },
  {
    id: 3,
    name: 'Javacript',
    coin: 300
  },
  {
    id: 4,
    name: 'Javacript',
    coin: 400
  },
  {
    id: 5,
    name: 'Javacript',
    coin: 500
  },
];
var i = 0;
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
      i++;
      var total =  accumulator + currentValue.coin;
      console.table({
      'Lượt chạy: ': i,
      'biến lưu trữ: ': accumulator,
      'giá khóa học: ':currentValue.coin,
      'tích trữ được: ': total
    });
    return  total;
}

var totalCoin = courses.reduce(coinHandler, 0);
console.log(totalCoin)


// cách 1 làm với for 
var sports = [
  {
      name: 'Bơi lội',
      gold: 11
  },
  {
      name: 'Boxing',
      gold: 3
  },
  {
      name: 'Đạp xe',
      gold: 4
  },
  {
      name: 'Đấu kiếm',
      gold: 5
  },
];
function getTotalGold(Array){ 
  var total = 0;
  for (var Arrays of Array){
  total += Arrays.gold;
}
return `tổng số huy chương: ${total} gold`;
}
// Expected results:
console.log(getTotalGold(sports)) // Output: 23

// cách 2 dùng Array reduce()

var sports = [
  {
      name: 'Bơi lội',
      gold: 11
  },
  {
      name: 'Boxing',
      gold: 3
  },
  {
      name: 'Đạp xe',
      gold: 4
  },
  {
      name: 'Đấu kiếm',
      gold: 5
  },
];
function getTotalGold(array) {
  var total = array.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.gold;
  }, 0);
  
  return total;
}

// Kết quả mong đợi:
console.log(getTotalGold(sports)); // Output: 23
*/
    