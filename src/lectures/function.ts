//  return type void
function sayHello() {
  console.log("Hello");
}
sayHello();

// return type number
function sum(a: number, b: number): number {
  return a + b;
}
sum(1, 2);

// optional parameters
function getLength(numberList?: number[]) {
  return Array.isArray(numberList) ? numberList.length : 0;
}
console.log(getLength([1, 2]));

// default parameters
function getLengthV1(numberList: number[] = []) {
  return numberList.length;
}
console.log(getLengthV1());

// destructuring parameter
interface Student2 {
  name: string;
  id: number;
  age: number;
}
function createStudent({ id, name, age }: Student2) {
  console.log(id, name, age);
}

createStudent({ id: 1, name: "Harvey", age: 29 } as Student2);
