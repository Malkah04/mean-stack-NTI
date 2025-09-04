import Shape from "./module/shape";

var x = 10;
console.log(x);

// types (we cannot change the type of variable)
var n = "malak";
n = "";

var w: string | number;
w = 19;
w = " .";

var nam: string = "malak";

// datatype
// permitive (string number boolean)
// nonpermitive (array _ linkedlist _ enum)

let arr = ["malak", "sobhy"];
arr[2] = "walaa";
console.log(arr);

var ar: number[] = [10, 10];

// union type
var arr2: (string | number)[];
arr2 = ["ma", 1];

var z: any;
let names: [string, number, string];
names = [" a", 10, " a"];

var obj = { id: 1, name: "ali", age: 25 };
obj.age = 10;

var user: object = { id: 10, name: "doaa", age: 21 };

function sum(a: number, b: number, c?: number) {
  console.log(a + b);
}
sum(10, 10);

// Polymorphism

// signature

function s(a: number, b: number): void;
function s(a: string, b: string, c: string): string;
function s(a: number, b: number, c: number, d: number): number;

// implement

function s(
  a: number | string,
  b: number | string,
  c?: string | number,
  d?: number
): void | string | number {
  if (
    typeof a === "number" &&
    typeof b === "number" &&
    typeof c === "undefined" &&
    typeof d === undefined
  ) {
    console.log(a + b);
  } else if (
    typeof a === "string" &&
    typeof b === "string" &&
    typeof c === "string" &&
    typeof d === undefined
  ) {
    return a + b + c;
  } else if (
    typeof a === "number" &&
    typeof b === "number" &&
    typeof c === "number" &&
    typeof d === "number"
  ) {
    return a + b + c + d;
  } else {
    return 0;
  }
}

function ch(c: boolean, c2: boolean): boolean; // and
function ch(c: boolean, c2: boolean, c3: boolean): boolean; // c&c2 || c3
function ch(c: boolean, c2: boolean, c3: boolean, c4: boolean): boolean; // c&c2 || c3&c4

function ch(c: boolean, c2: boolean, c3?: boolean, c4?: boolean): boolean {
  if (typeof c3 === "undefined" && typeof c4 === "undefined") {
    return c && c2;
  } else if (typeof c3 === "boolean" && typeof c4 === "undefined") {
    return (c && c2) || c3;
  } else if (typeof c3 === "boolean" && typeof c4 === "boolean") {
    return (c && c2) || (c3 && c4);
  } else return false;
}

type objType = {
  id: number;
  name: string;
};

// function display(obj: objType, num: number) {
//   console.log(obj);
// }

// generics
function send<T>(a: T) {
  console.log(a);
}
send("malak");
send(1);

function display<T, S>(a: T, b: S) {
  console.log(a, b);
}
display("malak", 20);

// this in js

// class Invoce{
//     name:"malak"
//     age:25
//     constructor (name ,age){
//         this.age =age
//         this.name =name
//     }
// }
// var t =new Invoce("m" ,1)

// ts

class Invoce<T> {
  constructor(
    public name: string,
    readonly age: number,
    private amount: number
  ) {}
}
let t = new Invoce("esraa", 21, 300);
t.name = "hassan";
// error bec age is readonly
// t.age =40

var inv: Invoce<string>[] = [t];
console.log(inv);

interface shape {
  dim: number;
  calcArea(): number;
  calcPriemter(): number;
}

class rectangle implements shape {
  dim: number;
  calcArea(): number {
    return 0.5 * this.dim * this.dim;
  }
  calcPriemter(): number {
    return this.dim * 4;
  }
}
