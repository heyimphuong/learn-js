/*
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  function calculateRating(array){
        var course = array.filter(function(course){
        return course.Director === "Christopher Nolan";
        });
      //return coure
        var total = course.reduce(function(accumulator, course) {
          return accumulator + parseFloat(course.imdbRating);
        }, 0);
      //return total;
      var trungbinh = total / course.length;
  
      return trungbinh;
  }
  
  
  // Expected results
  console.log(calculateRating(watchList)); // Output: 8.675

// Expected results:
var arr = [
  ['name', 'Sơn Đặng'],
  ['age', 18],
];
function arrToObj(array) {
var result = array.reduce(function(obj, item) {
  obj[item[0]] = item[1];
  return obj;
},{});

return result;
}

// Kết quả mong đợi:
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
  */
// function sumCb(a, b) {
//   var a = 1 ;
//       b = 2
//   return a + b;
// }
// console.log
/*function subCb(a, b) {
  return a - b;
}

function multiCb(a, b) {
  return a * b;
}

function divCb(a, b) {
  return a / b;
}

function caculate(a, b, cb) {
  return cb(a, b);
}

function caculate(a, b, cb) {
    return cb(a, b);
}
*/
// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3


// Start of Reduce to calculate
// var listOfItems = [null, '1', 2, 3, {}, undefined, 5];

// var total = listOfItems.reduce(function (acc, curr) {
//   if (Number.isInteger(curr)) {
//     acc = acc + curr;
//     return acc;
//   }
//   return acc;
// }, 0);

// // Expected results
// console.log(total === 10);
// End of Reduce to calculate

// Pratice 1. Đếm số lần có mặt của 1 item trong array
//const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'banana', 'apple'];

// Use for
// 1. Khởi tạo 1 biến countOccurrences = {}
// 2. Lặp qua các phần tử
// 3. heck xem trong countOccurrences đã tồn tại phẩn tử đó hay chưa?
// 4. Nếu mà chưa có phần tử đó, thì mình set countOccurrences[phần từ] = 1;
// 5. Nếu có rồi thì. countOccurrences[phần từ] = countOccurrences[phần từ] + 1;
// countOccurrences['apple'] = 0;
// countOccurrences['banana'] = 0;

// Implement
// var countOccurrences = {};
// for (var i = 0; i < fruits.length; i++) {
//   var fruit = fruits[i];
//   if (!!countOccurrences[fruit]) {
//     countOccurrences[fruit] = countOccurrences[fruit] + 1;
//   } else {
//     countOccurrences[fruit] = 1;
//   }
// }
// End of use for


// var countOccurrencesValue = fruits.reduce(function (countOccurrences, fruit) {
//   if (!!countOccurrences[fruit]) {
//     countOccurrences[fruit] = countOccurrences[fruit] + 1;
//   } else {
//     countOccurrences[fruit] = 1;
//   }
//   return countOccurrences;
// }, {});

// // Expected results:
// console.log(countOccurrencesValue = { apple: 3, banana: 2, orange: 1, grape: 1 });
/*
// Pratice 2. Nhóm người theo độ tuổi
const people = [
  {
    name: 'John', age: 25
  },
  {
    name: 'Jane', age: 30
  },
  {
    name: 'Mike', age: 25
  },
  {
    name: 'Sarah', age: 30
  }
];

const ageGroup = people.reduce(function (group, person) {
  if (!!group[person.age]) {
    group[person.age].push(person)
  } else {
    group[person.age] = [person];
  }
  return group;
}, {});

// Expected results
console.log(JSON.stringify(ageGroup) == JSON.stringify({
  25: [{ name: 'John', age: 25 }, { name: 'Mike', age: 25 }],
  30: [{ name: 'Jane', age: 30 }, { name: 'Sarah', age: 30 }]
}));
*/