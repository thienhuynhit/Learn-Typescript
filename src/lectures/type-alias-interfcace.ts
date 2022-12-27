// type alias that means you use another name instead of direct primitive type
type StudentName = string;

let fulName: StudentName = "Harvey";
console.log(fulName);

// practice makes better
type StudentAge = number;
let age: StudentAge = 29;
console.log(
  `Hey guy!! welcome to new world!! I am ${fulName} and I am ${age} years old`
);

type IsTopStudent = boolean;
let isTopStudent: IsTopStudent = true;

if (isTopStudent) {
  console.log("Xin chuc mung em da la tan thu khoa");
}

// object type
// type Student = {
//   readonly id: number;
//   age?: number;
//   name: string;
// };

interface Student {
  readonly id: number;
  name: string;
  age?: number;
}

const student: Student = {
  id: 1,
  name: "Harvey",
  age: 29,
};
console.log(student.name);

// we will talk about union type that means you can create a type which can accept two or more than data type
// example
type Status = "active" | "inactive";
let x: Status = "inactive";

let y: number | string = "hello";
y = 12;
console.log(y);

// intersection type

interface BusinessPartner {
  name: string;
  credit: number;
}

interface Identity {
  id: string;
  name: string;
}

interface Contact {
  email: string;
  phone: string;
}

type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

const customerA: Customer = {
  name: "Harvey",
  credit: 12345,
  email: "c@gmail.com",
  phone: "0962455547",
};

// decleration merging
interface Student1 {
  readonly id: number;
  name: string;
}
interface Student1 {
  age?: number;
}
const studentA: Student1 = {
  id: 12,
  name: "harvey",
  age: 29,
};
console.log(studentA.age);
