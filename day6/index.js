// const validator = require("validator");
// // build_in module
// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const { text } = require("stream/consumers");
// const queryString = require("querystring");

// console.log(typeof http); // object (return type object)

// const filepath = path.join(__dirname, "products.json");
// if (!fs.existsSync(filepath)) {
//   fs.writeFileSync(filepath, "[]");
// }

// function loadProduct() {
//   if (fs.existsSync(filepath)) {
//     const prod = fs.readFileSync(filepath, "utf-8");
//     return JSON.parse(prod);
//   }
//   return [];
// }

// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     const html = `
//         <html>
//         <body>
//             <h2>Add Product</h2>
//             <form action="/add" method="POST">
//             <input type="text" name="product" placeholder="Product name" required />
//             <br><br>
//             <input type="number" name="price" placeholder="Price" required />
//             <br><br>
//             <button type="submit">Add Product</button>
//             </form>
//             <h1>all product</h1>
//             <ul> ${loadProduct()
//               .map((e) => {
//                 return `
//             <li> ${e.name} </li>
//             <li> ${e.price} </li>
//             `;
//               })
//               .join("")}
//         </body>
//         </html>
//             `;
//     res.end(html);
//   } else if (req.method === "POST" && req.url === "/add") {
//     let body = "";
//     req.on("data", (chunck) => (body += chunck));
//     req.on("end", () => {
//       const data = queryString.parse(body);
//       const name = data.product;
//       const price = parseFloat(data.price);
//       const products = loadProduct();
//       products.push({ name, price });
//       fs.writeFileSync(filepath, JSON.stringify(products));
//     });
//     res.writeHead(201, { "Content-Type": "text/html" });
//     res.end(`<h1>Product Added: </h1>`);
//   } else {
//     res.writeHead(404, { "content-type": "text/html" });
//     res.end("<h1> error </h1>");
//   }
// });
// server.listen(4000, () => {
//   console.log("server running on port 4000");
// });

// const server = http.createServer((req, res) => {
//   //   res.writeHead(200, "content_typeL:text/plain");
//   res.writeHead(200, "content_typeL:text/html");

//   res.end("<h1>hello from server http</h1>");
// });

// server.listen(3000, () => {
//   console.log("server is running on port 3000");
// });

// var email = "heba@best.com";
// var name = "malak";

// console.log(validator.isEmail(email));
// console.log(validator.isAlpha(name));

// console.log(...__filename);

// (function (module, require, __filename, __dirname, exports) {
//   console.log(__filename);
// })(module, require, __filename, __dirname, exports);

// npm (in device)
// npx (in server)
/////////////////////////////////////////////////////////
// express
// rustful => data returns as json , every url for a specific thing
const express = require("express");
console.log(typeof express); // function

const app = express(); // make an obj from express func
app.use(express.json());
const fs = require("fs");

app.get("/", (req, res) => {
  res.status(200).send("hello to express");
});

app.get("/user", (req, res) => {
  const user = JSON.parse(fs.readFileSync("users.json", "utf-8"));
  res.status(200).json(user);
});

app.post("/user", (req, res) => {
  const user = JSON.parse(fs.readFileSync("users.json", "utf-8"));
  const { name, age, id } = req.body;
  user.push({ id, name, age });
  fs.writeFileSync("users.json", JSON.stringify(user));
  res.status(201).send("user added");
});

app.get("/products", (req, res) => {
  const prod = JSON.parse(fs.readFileSync("products.json", "utf-8"));
  res.status(200).json(prod);
});

app.post("/products", (req, res) => {
  const prod = JSON.parse(fs.readFileSync("products.json", "utf-8"));
  const { name, price } = req.body;
  prod.push({ name, price });
  fs.writeFileSync("products.json", JSON.stringify(prod));
  res.status(201).send("product added ");
});

app.listen(3000, (err) => {
  console.log(err);
  console.log("server is running on port 3000");
});
