/*
function sumCb(a, b) {
    return a + b;
}
function subCb(a, b) {
    return a - b;
}
function multiCb(a, b) {
    return a * b;
}
function divCb(a, b) {
    return a / b
}

function caculate(a, b, cb) {
    return cb(a, b);
}

// Expected results
console.log(caculate(1, 2, sumCb)); // Output: 3
console.log(caculate(1, 2, subCb)); // Output: -1
console.log(caculate(1, 2, multiCb)); // Output: 2
console.log(caculate(3, 1, divCb)); // Output: 3

// Callback
Array.prototype.myMap = function(cb) {
    var result = []; // Tạo một mảng để lưu kết quả
  
    for (var i = 0; i < this.length; ++i) {
      var number = this[i];
      var index = i;
      result.push(cb(number, index)); // Thêm kết quả vào mảng result
    }
  
    return result; // Trả về mảng kết quả
  };
  
  // Kiểm tra kết quả
  const numbers = [1, 2, 3];
  
  console.log(numbers.myMap(function(number) {
    return number * 2;
  })); // Output: [2, 4, 6]
  
  console.log(numbers.myMap(function(number, index) {
    return number * index;
  })); // Output: [0, 2, 6]
  // cách 2 
Array.prototype.myMap = function(cb) {
  var output = [];
    for (var index in this) {
      if (this.hasOwnProperty(index)) {
        var result = cb(this[index], index);
        
          output.push(result);
        }
      }

    return output;
  // return output;// Trả về mảng kết quả
};
// Kiểm tra kết quả
const numbers = [1, 2, 3, ];
console.log(numbers.myMap(function(number) {
  return number * 2;
})); // Output: [2, 4, 6]

console.log(numbers.myMap(function(number, index) {
  return number * index;
})); // Output: [0, 2, 6]

  
// my ForEach()
var courses = [
    'Javacript',
    'Ruby',
    'PHP'
];
Array.prototype.forEach2 = function(cb){
      for (var index in this){
          if (this.hasOwnProperty(index)){ //kiểm tra kiểm tra có phải là con
                                             nằm trong phần tử phương thức gần nhất không?
              cb(this[index], index, this);
          };
      }
}
courses.forEach2(function(course, index, array){
  console.log(course, index, array);

});


 const sports = [
   {
       name: 'Bóng rổ',
       like: 6
   },
   {
       like: 5
  },
   {
      name: 'Bóng đá',
      like: 10
   },
 ];
Array.prototype.filter2 = function (cb) {
  var output = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = cb(this[index], index, this);
      if (result) {
        output.push(this[index]);
      }
    }
  }
  return output;
}
var filterSports = sports.filter2(function (course, index, array) {
  return course.like >= 6;
});
console.log(filterSports);

Array.prototype.myFilter = function(cb) {
      var output = [];
      for (var index in this) {
        if (this.hasOwnProperty(index)) {
          var result = cb(this[index], index, this);
          if (result) {
            output.push(this[index]);
          }
        }
      }
      return output;
    } 
//Expected results:

const numbers = [1, 2, 3, 4];

console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
}));// Output: [2, 4]

console.log(numbers.myFilter(function (number, index) {
   return index % 2 === 0;
}));// Output: [1, 3]

console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
}));// Output: [1, 2, 3, 4]
*/
