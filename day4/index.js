console.log("hello node js");

var x = 2,
  y = 5;
setTimeout(() => {
  console.log(x * y);
}, 1000);
setTimeout(() => {
  console.log(x + y);
}, 2000);
setTimeout(() => {
  console.log(y - x);
}, 3000);
setTimeout(() => {
  console.log(y / x);
}, 4000);
