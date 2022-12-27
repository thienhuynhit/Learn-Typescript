//we will review the typescript

// interface customer {
//   name: string;
//   age?: number;
//   email: string;
//   sayHello: () => void;
// }

// const customerB: customer = {
//   name: "Harvey",
//   email: "hello",
//   sayHello() {
//     console.log("hello xin chao cac ban");
//   },
// };

// console.log(customerB.sayHello());

// type alias
type isStudent = boolean;
let isHero: isStudent = true;
console.log(isHero ? "This is my hero!!" : "It's just a funny moment!!");

isHero = false;
console.log(isHero ? "This is my hero!!" : "It's just a funny moment!!");

type student = {
  id: number;
  name: string;
  averageScore: number;
  isHero?: boolean;
  sayHello?: () => void;
};

//  union type
type active = "inactive" | "active" | "unknow";
let action: active = "unknow";

type passcode = string | number;
let passWord: passcode = "thisispass";

// intersection type

interface contact {
  name: string;
  age: number;
  address: string;
  phoneNumber: number;
}
interface contact {
  shippingCode: string;
}
interface salary {
  monthySalary: number;
  tax: number;
}

type customer = contact & salary;
const customerB: customer = {
  name: "Harvey",
  age: 20,
  address: "Binh Tho ward",
  phoneNumber: 123,
  monthySalary: 2000,
  tax: 12,
  shippingCode: "70000",
};

console.log(`xin chao cac ban minh ten la ${customerB.name}`);

// enum
enum status3 {
  PENDING,
  IN_PROGRESS,
  CANCELLED,
  DONE,
}

// this support reverse maping
console.log(status3[2]);
console.log(status3.PENDING);

// enum string do not support reverse maping
enum status4 {
  JSON = "application/json",
  XML = "application/xml",
}

console.log(status4.JSON);

// function
function sumTwoNumber(a: number, b: number): number {
  return a + b;
}

console.log(sumTwoNumber(12, 23));

// optional parameters
function getLengthv3(numberList?: number[]): number {
  if (!Array.isArray(numberList)) return -1;
  return numberList.length;
}
console.log(getLengthv3());

// default parameters
function findMax(numberList: number[] = []): number | "unknow" {
  if (!Array.isArray(numberList) || numberList.length === 0) return "unknow";
  let max = numberList[0];
  for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] > max) max = numberList[i];
  }
  return max;
}

console.log(findMax([1, 2, 4, 12]));

// destucturing parameters
interface citizen {
  name: string;
  age: number;
  salary: number;
}

function defineCitizen({ name, age, salary }: citizen) {
  console.log(
    `My name is ${name}. I am ${age} years old. My monthy salary is ${salary}`
  );
}

const citizenA: citizen = {
  name: "Harvey",
  age: 29,
  salary: 2000,
};
defineCitizen(citizenA);

defineCitizen({ name: "Thien", age: 29, salary: 2000 } as citizen);

//  generic
const citizenList: citizen[] = [
  { name: "Hien", age: 23, salary: 2000 },
  { name: "Hao", age: 25, salary: 1500 },
];
console.log(citizenList.length);

type metropeliton = keyof citizen;
let meaning: metropeliton = "name";
