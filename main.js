
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
function Animal (name, leg, speed ){
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