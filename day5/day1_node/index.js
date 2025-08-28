// setTimeout(() => {
//   console.log("hello node js");
// }, 1000);

// // modules
// // custom module
// const sum = require("./module.js");
// console.log(sum(1, 2));

// // built in module
const fs = require("fs");
const { json } = require("stream/consumers");
// // make code wait until read file
// var data = fs.readFileSync("file.txt", "utf-8");
// // for async use
// fs.readFile("file.txt", "utf-8", (er, data) => {
//   if (er) console.log("file not found");
//   else {
//     console.log(data);
//   }
// });

// console.log(data);

// var mes = "hello from malak";

// // fs.writeFileSync("file.txt", mes);

// fs.appendFileSync("file.txt", "\n" + mes);

// arguments

console.log(process.argv);
const [...command] = process.argv;

console.log(command);

const title = command[3];
switch (command[2]) {
  case "write":
    const todos = JSON.parse(fs.readFileSync("todos.json", "utf-8"));
    todos.push({ id: todos.length + 1, title });
    fs.writeFileSync("todos.json", JSON.stringify(todos));
    break;
  case "read":
    var read_id = 2;
    var arr = JSON.parse(fs.readFileSync("todos.json", "utf-8"));
    var index = arr.findIndex((e) => e.id === read_id);
    console.log(arr[index]);
    break;
  case "update":
    var updated_id = 2;
    var arr = JSON.parse(fs.readFileSync("todos.json", "utf-8"));
    var index = arr.findIndex((e) => e.id === updated_id);
    arr[index].title = title;
    fs.writeFileSync("todos.json", JSON.stringify(arr));
    break;
  case "delete":
    var deleted_id = 4;
    var todo = JSON.parse(fs.readFileSync("todos.json", "utf-8"));
    var index = todo.findIndex((e) => e.id === deleted_id);
    todo.splice(index, 1);
    fs.writeFileSync("todos.json", JSON.stringify(todo));
    break;
  default:
    console.log("invalid command");
    break;
}
