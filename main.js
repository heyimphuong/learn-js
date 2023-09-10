/*
// đề bài viết hàm tìm phần tử đầu tiên trong mảng//
// Viết hàm tại đây
function getLastElement(array){
    return array[0];
}
// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant','a ','b ','c '];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']


//tạo 1 biến  và gán cho nó 1 object gồm 3 key
var student = {
    name: 'Phuong',
    age: 20,
    address:'Thai Binh',
};
student.datebirth = 31122003;// thêm key datebirth
console.log( student);

//tạo Object constructor 
function Animal (name, leg, speed){
    this.name = name;
    this.leg = leg;
    this.speed = speed;
    this.getname = function(){
         return `${this.name} ${this.leg}`;// chỉ gọi ra name và leg
    }
};
Animal.prototype.gioitinh = 'duc';
Animal.prototype.getgioitinh = function() {
    return this.gioitinh;
}
var parrot = new Animal('con vet', 2, 30);
console.log(parrot.getgioitinh());

// trả về tên đầu đủ
function Student (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    Student.prototype.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
}
//Student.prototype.getFullName = function() {
//    return `${this.firstName} ${this.lastName}`;
}
// Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');

console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student.getFullName());  // 'Long Bui'

// tinh nam tiep theo
function getNextYear(){
    var date = new Date();
    var nextYear = date.getFullYear() + 1;
    return nextYear;
}
var nextYear = getNextYear();
console.log(nextYear);

//Hãy tạo hàm getRandomItem, hàm này nhận 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng.
function getRandomItem(array) {
    var random = Math.floor(Math.random() * array.length);
    return array[random];
  }
  var myArray = ['a', 'b', 'c', 'd'];
  var randomIndex = getRandomItem(myArray);
  console.log(randomIndex);
 
// Để vượt qua thử thách này, hãy hoàn thành hàm cho trước để đáp ứng các yêu cầu sau:
//Khi a chia hết cho 3 thì return về 1
//Khi a chia hết cho 5 thì return về 2
//Khi a chia hết cho 15 thì return về 3
  function run(a) {
    if (a % 15 === 0) {
      return 3;
    } else if (a % 5 === 0) {
      return 2;
    } else if (a % 3 === 0) {
      return 1;
    } 
  else {
      return 0;
    }
  }
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3
console.log(run(13))// 0

// Dùng switch case
function run(fruits) {
    var result;
  switch (fruits) {
  case "Banana":
        result = "This is a Banana";
        break;
  case "Apple":
        result = "This is an Apple";
        break;
  default: 
        result = "Unknown fruit";
    }
  
    return result;
  }
console.log(run("Banana")); // Output: This is a Banana
console.log(run("Apple")); // Output: This is an Apple
console.log(run("Orange")); // Output: Unknown fruit
 
// toán tử 3 ngôi
function getCanVoteMessage(age){
    var result = age >= 18 ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu';
    return result;
}
// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15))// 'Bạn chưa được bỏ phiếu'

// random số ngẫu nhiên trong mảng
function getRandNumbers(min, max, length) {
    var result = [];
    for (var i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random() * (max - min) + min);
        result.push(randomNumber);
    }
    return result;
}

var randomNumbers = getRandNumbers(1, 10, 5);
console.log(randomNumbers);

// tính tổng các phần tử trong mảng
function getTotal(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
       sum = sum + arr[i];
    }
    return sum;
}
console.log(getTotal([1, 2, 3]));
console.log(getTotal([4, 5, -3]));
console.log(getTotal([4, 5, 3, 5]));

// tính tổng đơn hàng trong object
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
function getTotal (arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i].price;
    }
    return sum;
}
// Expected results:
console.log(getTotal(orders)); // Output: 8700000
*/

