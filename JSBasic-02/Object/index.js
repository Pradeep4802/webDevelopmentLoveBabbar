console.log("Welcome to real world");

// object create
// let rectangle = {
//   length: 1,
//   breadth: 2,

//   draw: function () {
//     console.log("Drawing Rectangle");
//   },
// };

// rectangle.draw();

// factory function

function createRectangle(len, bre) {
  return (rectangle = {
    length: len,
    breadth: bre,

    draw: function () {
      console.log("Drawing Rectangle");
    },
  });
}

// let rectangleObj1 = createRectangle(2,5);
// let rectangleObj2 = createRectangle(2,3);
// let rectangleObj3 = createRectangle(2,6);
// console.log(rectangleObj1);
// console.log(rectangleObj2);
// console.log(rectangleObj3);

// constructor function -> pascal Notation -> first letter of every word is capital -> NumberOfS
// constructor function -> prop/methods -> initialise/Define
function Rectangle() {
  this.length = 1;
  this.breadth = 2;
  this.draw = function () {
    console.log("drawing");
  };
}

// object creation using constructor function
let rectangleObject = new Rectangle();
// console.log(rectangleObject);

rectangleObject.color = "Yellow";
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);

let rectangle = new Function(
    'length', 
`this.length = len;
this.breadth = bre;
this.draw = function () {
  console.log("drawing");
}`);

// object 
// let rect = new rectangle(2,3);

// console.log(rect);

// let a = {value: 10};
// let b = a;
// a.value++;
// console.log(a.value);
// console.log(b.value);

// let a = {value:10};

// function inc()

let square = {
    length: 2,
    breadth: 4
};

// for-in loop

for(let key in square) {
    //keys are reflected through key variable
    //values are 
    // console.log(key,square[key]);
}

// for(let key of Object.entries(square)) {
//     console.log(key);
// }

// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {};
// for(let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);

let src = {
    a:10,
    b:20,
    c:30,
    
};

// let src2 = {value:25};
let dest = {...src};
// let dest = Object.assign({},src,src2);

// let dest = Object.assign({}, src);

console.log(dest);

src.a++;

console.log(dest);

